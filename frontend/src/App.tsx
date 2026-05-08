import { useEffect, useState } from "react";
import { getHealth, HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE } from "./api/health";

type BackendStatus = "checking" | "healthy" | "unavailable";

function App() {
  const [backendStatus, setBackendStatus] = useState<BackendStatus>("checking");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isCurrent = true;

    async function checkBackendHealth() {
      try {
        await getHealth();

        if (isCurrent) {
          setBackendStatus("healthy");
          setErrorMessage("");
        }
      } catch (error) {
        if (isCurrent) {
          setBackendStatus("unavailable");
          setErrorMessage(
            error instanceof Error
              ? error.message
              : HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE,
          );
        }
      }
    }

    void checkBackendHealth();

    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <main>
      <h1>SEAM</h1>
      {backendStatus === "checking" ? (
        <p>Checking backend health...</p>
      ) : (
        <p>Backend: {backendStatus}</p>
      )}
      {backendStatus === "unavailable" ? <p>{errorMessage}</p> : null}
    </main>
  );
}

export default App;
