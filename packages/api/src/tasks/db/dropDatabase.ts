require('dotenv').config();
import minimist from 'minimist';
import { createConnection } from 'typeorm';
import configs from '../../config/db/database';

const args = minimist(process.argv);
const dbName: string = args.n;

async function main() {
  const connection = await createConnection(configs.master as any);
  await connection.query(`DROP DATABASE ${dbName};`);
  await connection.close();
}

main().catch(console.error);
