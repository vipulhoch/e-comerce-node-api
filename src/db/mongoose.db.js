const mongoose = require('mongoose')
mongoose
    .connect('mongodb://localhost/e-comers-api', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('DataBase Connection is ready ....')
    })
    .catch((err) => {
        console.log(err)
    })
