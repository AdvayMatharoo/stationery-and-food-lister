import * as SQLite from "expo-sqlite";

let initialized = false;

export const initializeDatabase = async (): Promise<void> => {
  if (initialized) {
    return;
  }

  const db = await SQLite.openDatabaseAsync("stationery-food-lister.db");

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS items (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      status TEXT NOT NULL,
      createdAt TEXT NOT NULL
    );
  `);

  initialized = true;
};
