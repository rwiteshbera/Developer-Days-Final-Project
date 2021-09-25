const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
require("./database/connect"); // Connect with MongoDB
const register = require("./database/userSchema");

const staticPath = __dirname + "/public";
const htmlPath = __dirname + "/public/html";

app.use(express.static(staticPath));
app.use(express.static(htmlPath));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/success", (req, res) => {
    res.sendFile(__dirname + "/public/html/success.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/html/contact.html");
});


app.post("/contact", async (req, res) => {
    try {
        const contactData = new register({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        const data = await contactData.save();
        res.redirect("/contact");
    }
    catch (err) {
        res.send(err);
    }
})


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});