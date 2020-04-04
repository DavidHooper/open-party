require('dotenv').config();
import { createConnection, getConnectionOptions } from 'typeorm';
import configs from '../../config/db/database';

async function main() {
  const connection = await createConnection(configs.master as any);
  const env = process.env.NODE_ENV || 'development';
  const config = configs[env];
  try {
    await connection.query(`CREATE DATABASE ${config.database};`);
  } catch (e) {}

  const dbConnection = await createConnection({
    ...(config as any),
    name: 'migrations',
  });
  await dbConnection.runMigrations();

  const seedConnection = await createConnection({ ...config, ...configs.seed });
  await seedConnection.runMigrations();

  await seedConnection.close();
  await dbConnection.close();
  await connection.close();
}

main().catch(console.error);
