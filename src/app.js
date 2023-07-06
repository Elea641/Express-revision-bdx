const express = require('express');
const cors = require('cors')

require('dotenv').config();

const app = express()
const port = process.env.APP_PORT || 6000;

const AppRouter = require('./router')

app.use(cors())

app.use("/api", AppRouter)



app.listen(port, (err) => {

    if(err) console.error(`Server launch failed`)

    console.log(`Server is running on port ${port} 🚀` )
})