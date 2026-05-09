from app.api import health as health_module
from app.main import app


class FakeConnection:
    def __init__(self) -> None:
        self.executed_statements: list[str] = []

    def __enter__(self) -> "FakeConnection":
        return self

    def __exit__(self, exc_type: object, exc_value: object, traceback: object) -> None:
        return None

    def execute(self, statement: object) -> None:
        self.executed_statements.append(str(statement))


class FakeEngine:
    def __init__(self) -> None:
        self.connection = FakeConnection()

    def connect(self) -> FakeConnection:
        return self.connection


def test_health_route_is_registered() -> None:
    route_paths = {route.path for route in app.routes}

    assert "/api/health" in route_paths


def test_health_checks_database_and_returns_status(monkeypatch) -> None:
    fake_engine = FakeEngine()
    monkeypatch.setattr(health_module, "engine", fake_engine)

    response = health_module.health()

    assert response == {
        "status": "ok",
        "service": "SEAM",
        "environment": "development",
        "database": "ok",
    }
    assert fake_engine.connection.executed_statements == ["SELECT 1"]
