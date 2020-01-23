const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const port = 3100
const Keycloak = require('keycloak-connect')
const cors = require('cors')

const publicationroutes = require('./src/routes/Publication.js')
const feedbackroutes = require('./src/routes/Feedback.js')
const likeroutes = require('./src/routes/Like.js') 


const memoryStore = new session.MemoryStore()

const keycloak = new Keycloak({
  store: memoryStore
}, {
  clientId: process.env.CLIENTID_KC,
  bearerOnly: true,
  serverUrl: process.env.SERVERURL_KC,
  realm: process.env.REALM_KC
})


app.use(session({
  secret: process.env.SECRET_KC,
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}))

app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/'
}))


app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/', publicationroutes)
app.use('/', feedbackroutes)
app.use('/', likeroutes)

app.use('/', keycloak.protect('realm:master'), publicationroutes)
app.use('/', keycloak.protect('realm:master'), feedbackroutes)
app.use('/', keycloak.protect('realm:master'), likeroutes)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
