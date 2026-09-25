export interface ServiceHealthStatus {
  name: "search" | "catalog" | "recommendations";
  status: "ready";
  mode: "local-mock";
}

export interface ApplicationHealth {
  status: "ok";
  deterministicCoreEnabled: true;
  aiFeaturesOptional: true;
  services: ServiceHealthStatus[];
}

export const getApplicationHealth = (): ApplicationHealth => ({
  status: "ok",
  deterministicCoreEnabled: true,
  aiFeaturesOptional: true,
  services: [
    { name: "search", status: "ready", mode: "local-mock" },
    { name: "catalog", status: "ready", mode: "local-mock" },
    { name: "recommendations", status: "ready", mode: "local-mock" },
  ],
});
