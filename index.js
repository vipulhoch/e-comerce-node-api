const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
require('dotenv/config')
require('./src/db/mongoose.db')
const cors = require('cors')

app.use(cors())
app.options('*', cors())
const port = process.env.PORT || 3000

//middleware
app.use(bodyParser.json())
app.use(express.json())
app.use(morgan('tiny'))

//Routes
const categoriesRoutes = require('./src/routers/categories.routers')
const productsRoutes = require('./src/routers/products.routers')
const userRouter = require('./src/routers/user.routers')
const taskRouter = require('./src/routers/task.routers')
const fileUploadRouter = require('./src/routers/fileUploads.routers')
const api = process.env.API_URL

app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productsRoutes)
app.use(`${api}/users`, userRouter)
app.use(`${api}/tasks`, taskRouter)
app.use(`${api}/users`, fileUploadRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
