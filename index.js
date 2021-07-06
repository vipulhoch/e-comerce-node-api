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
app.use(morgan('tiny'))

//Routes
const categoriesRoutes = require('./src/routers/categories.routers')
const productsRoutes = require('./src/routers/products.routers');
const api = process.env.API_URL

app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productsRoutes);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
