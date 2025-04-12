const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const name = "PrabhaTest";

app.get("/", (req,res) => {
    const message = `Welcome to Buylio from ${name}!`
    res.send(message);
})

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

module.exports = {app, server, name}