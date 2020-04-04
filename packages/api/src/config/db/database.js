const SnakeNaming = require('./SnakeNaming');
const defaultSettings = {
  type: 'postgres',
  port: 5432,
  synchronize: false,
  logging: true,
  schema: 'public',
  namingStrategy: new SnakeNaming(),
  migrations: ['src/db/migrations/**/*.ts'],
  entities: [],
  cli: {
    migrationsDir: './src/db/migrations',
  },
  host: process.env['DATABASE_HOST'] || 'db',
  username: process.env['DATABASE_USERNAME'] || 'postgres',
  password: process.env['DATABASE_PASSWORD'] || '',
  database: process.env['DATABASE_NAME'] || 'open_party_development',
};

const master = {
  ...defaultSettings,
  entities: [],
  host: 'db',
  username: 'postgres',
  password: '',
  database: 'postgres',
};

const development = {
  ...defaultSettings,
  host: 'db',
  username: 'postgres',
  password: '',
  database: 'open_party_development',
};

const production = {
  ...defaultSettings,
  logging: false,
};

const staging = {
  ...defaultSettings,
};

const test = {
  ...defaultSettings,
  host: 'db',
  username: 'postgres',
  password: '',
  database: 'open_party_test',
};

const seed = {
  ...defaultSettings,
  name: 'seed',
  migrationsTableName: 'seeds',
  migrations: ['src/db/seeds/**/*.ts'],
  cli: {
    migrationsDir: 'src/db/seeds',
  },
};

delete seed.host;
delete seed.username;
delete seed.password;
delete seed.database;

module.exports = {
  test,
  master,
  development,
  seed,
  production,
  staging,
};
