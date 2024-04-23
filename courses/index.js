const express = require('express')
process.loadEnvFile('.env')

const app = express()

const port = process.env.PORT || 3002;

app.listen(port, ()=>{
    console.log('listening on port '+port)
})