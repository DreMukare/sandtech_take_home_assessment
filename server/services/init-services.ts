import { testDbConnection } from "./db-connection-test";

async function initServices(): Promise<void> {
  await testDbConnection();
}

export { initServices };
