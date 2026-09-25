export interface HealthIntegrationStatus {
  provider: "apple_health" | "health_connect";
  connected: boolean;
}

export const getHealthIntegrationStatus = async (): Promise<HealthIntegrationStatus[]> =>
  [
    { provider: "apple_health", connected: false },
    { provider: "health_connect", connected: false },
  ];
