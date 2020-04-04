const configs = require('./src/config/db/database');
const env = process.env.NODE_ENV || 'development';
const config = configs[env];
module.exports = [config, { ...config, ...configs.seed }];
