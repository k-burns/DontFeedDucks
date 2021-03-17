const path = require('path')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
// const db = require('./server/db')
// const sessionStore = new SequelizeStore({db})
const PORT = process.env.PORT || 8080
const app = express()
const socketio = require('socket.io')
module.exports = app


const createApp = () => {
  app.use(morgan('dev'))

  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  app.use(compression())

  app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

  // app.use('/api', require('./server/api'))

  // app.use(express.static(path.join(__dirname, '..', 'public')))

  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // app.use('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  // })


  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {

  const server = app.listen(PORT, () =>
    console.log(`Quackin' it up on port ${PORT}`)
  )

  const io = socketio(server)
  require('./socket')(io)
}

// const syncDb = () => db.sync()

async function bootApp() {
  await sessionStore.sync()
  // await syncDb()
  await createApp()
  await startListening()
}

if (require.main === module) {
  bootApp()
} else {
  createApp()
}
