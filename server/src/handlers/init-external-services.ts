import { testDbConnection } from "./db-connection-test";

async function initExternalServices(): Promise<void> {
  await testDbConnection();
}

export { initExternalServices };
