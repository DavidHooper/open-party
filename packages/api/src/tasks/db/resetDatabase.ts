require('dotenv').config();
import { createConnection, getConnectionOptions } from 'typeorm';
import configs from '../../config/db/database';

async function main() {
  const connection = await createConnection(configs.master as any);
  const env = process.env.NODE_ENV || 'development';
  if (env === 'production') {
    throw new Error('cannot reset production db');
  }
  const config = configs[env];
  try {
    await connection.query(`DROP DATABASE ${config.database};`);
  } catch (e) {}

  await connection.query(`CREATE DATABASE ${config.database};`);

  const newCon = await createConnection({
    ...(config as any),
    name: 'migrations',
  });
  await newCon.runMigrations();

  const seedConnection = await createConnection({ ...config, ...configs.seed });
  await seedConnection.runMigrations();

  await seedConnection.close();
  await newCon.close();
  await connection.close();
}

main().catch(console.error);
