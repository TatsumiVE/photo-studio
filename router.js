const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {});

app.listen(8000, () => {
    console.log("Server is running");
});
