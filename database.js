const mongoose = require('mongoose');
const connection = "mongodb+srv://Speed:Speed@cluster0.7n5n3.mongodb.net/SPEED?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));