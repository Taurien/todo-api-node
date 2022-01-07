const dotenv = require('dotenv')

// Utils
const { db } = require('./utils/database')

// Express app
const { app } = require('./app')

dotenv.config({ path: './config.env' })

// Promise
db.sync()
    .then(() => {
        console.log('database connected')
    })
    .catch(err => console.log(err))


app.listen(process.env.PORT || 4000, () => {
    console.log('To Do API running!')
})