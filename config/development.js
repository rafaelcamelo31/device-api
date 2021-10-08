/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');
const fs = require('fs');

// Inside a docker container src/ does not exist so use 'dist' in that case:
const srcRootRelative = fs.existsSync(join(process.cwd(), 'src/'))
  ? 'src'
  : 'dist';

const db = {
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'devices',
  type: 'mysql',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  // relative path
  cli: { migrationsDir: `${srcRootRelative}/db-migrations` },
};

module.exports = {
  db,
};
