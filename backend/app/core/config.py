from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_env: str = "development"
    app_name: str = "SEAM"
    log_level: str = "INFO"
    database_url: str = "postgresql+psycopg://seam:seam@db:5432/seam"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
