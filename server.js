const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
require("./database/connect"); // Connect with MongoDB

const staticPath = __dirname + "/public";
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/success", (req, res) => {
    res.sendFile(__dirname + "/public/html/home.html");
});



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});