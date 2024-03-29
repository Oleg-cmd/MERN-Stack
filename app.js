const express = require('express')
const config = require('config')

const mongoose = require('mongoose')

const PORT = config.get('port') || 5000

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./rotes/auth.routes'))

app.use('/api/link', require('./rotes/link.routes'))

app.use('/t', require('./rotes/redirect.routes'))

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT} ...`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}


start()