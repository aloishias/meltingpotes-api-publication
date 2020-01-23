const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3100
const cors = require('cors')

const publicationroutes = require('./src/routes/Publication.js')
const feedbackroutes = require('./src/routes/Feedback.js')
const likeroutes = require('./src/routes/Like.js') 

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

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
