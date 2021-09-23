const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blogs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MonogDB.");
    }).catch(err => {
        console.log("Failed to connect with MongoDB.");
});