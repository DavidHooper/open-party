require('dotenv').config();
import minimist from 'minimist';
import { createConnection } from 'typeorm';
import configs from '../../config/db/database';

const args = minimist(process.argv);
const dbName: string = args.n;

async function createDatabase() {
  const connection = await createConnection(configs.master as any);
  await connection.query(`CREATE DATABASE ${dbName};`);
  await connection.close();
}

createDatabase().catch(console.error);
