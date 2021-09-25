const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rwitesh:findmealrwitesh@contact.nssqw.mongodb.net/findmeal?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // usefindAndModify: false
}).then(() => {
    console.log("Connected to MonogDB.");
}).catch(err => {
    console.log("Failed to connect with MongoDB.");
});
