const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')

const app = express()

app.set('port',3000)
app.use(express.static(__dirname + '/../public'))
app.use('/crypto', router)


app.listen(app.get('port'),()=>{console.log(`listening on port ${app.get('port')}`)})