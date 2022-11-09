const express = require("express");
const comentarioRoutes = require('./routes/comentario.routes') 

const app = express();


app.get("/", (req, res) => {
    res.send('microservicio comentario')
});

app.use('/api/auth/comentario', comentarioRoutes);

module.exports = app;
