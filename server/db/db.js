const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name

const db =
  process.env.NODE_ENV === 'production'
    ? new Sequelize(
        `da41fdbgi1s055`,
        'kbpeuptwajzxll',
        '8313e3e5ca674bca61a74956aa185ccde9f07ecb9ab17892edffc13006f48593',
        {
          dialect: 'postgres',
          protocol: 'postgres',
          port: 5432,
          host: 'ec2-34-192-72-159.compute-1.amazonaws.com',
          logging: false,
          dialectOptions: {ssl: {rejectUnauthorized: false}}
        }
      )
    : new Sequelize(`postgres://localhost:5432/${databaseName}`, {
        logging: false
      })
module.exports = db
