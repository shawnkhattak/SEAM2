import { API_BASE_URL } from "./client";

const HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE =
  "Could not reach the backend health endpoint. Check that the Docker Compose stack is running.";

export async function getHealth(): Promise<unknown> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);

    if (!response.ok) {
      throw new Error(HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE);
    }

    return await response.json();
  } catch (error) {
    throw new Error(HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE, { cause: error });
  }
}

export { HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE };
