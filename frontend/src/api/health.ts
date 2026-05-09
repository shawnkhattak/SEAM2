import { API_BASE_URL } from "./client";

const HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE =
  "Could not reach the backend health endpoint. Check that the Docker Compose stack is running.";

export type HealthPayload = {
  status?: string;
  service?: string;
  environment?: string;
  database?: string;
};

export async function getHealth(): Promise<HealthPayload> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);

    if (!response.ok) {
      throw new Error(HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE);
    }

    return (await response.json()) as HealthPayload;
  } catch {
    throw new Error(HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE);
  }
}

export { HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE };
