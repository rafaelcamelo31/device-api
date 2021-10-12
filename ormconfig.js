module.exports = {
  host: `${process.env.MYSQL_HOST}`,
  port: 3306,
  username: `${process.env.MYSQL_USERNAME}`,
  password: `${process.env.MYSQL_PASSWORD}`,
  database: `${process.env.MYSQL_DATABASE}`,
  type: 'mysql',
  entities: ['dist/**/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/migrations/*.js'],
  cli: { migrationsDir: 'migrations' },
  url: `${process.env.MYSQL_URL}`,
  ssl: { rejectUnauthorized: false },
};
