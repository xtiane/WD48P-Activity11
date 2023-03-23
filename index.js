const express = require('express')
const app = express()

const task = require('./routes/taskroutes')

// static assets
app.use(express.static('./public'))
// parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())


//routes
app.use('/task',task)

app.listen(3000,() => {
    console.log('Server is listening on port 3000....')
})