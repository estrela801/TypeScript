"use strict";
const express = require('express');
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, '../dist/public')));
function Root(page) {
    return path.join(__dirname, `../dist/public/${page}`);
}
app.get('/', (req, res) => {
    res.sendFile(Root('index.html'));
});
app.get('/teste', (req, res) => {
    res.sendFile(Root('teste.html'));
});
const PORT = process.env.PORT || 3022;
app.listen(PORT);
