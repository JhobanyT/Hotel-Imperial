const express = require("express");
const eventosRoutes = require('./routes/eventos.routes') 

const app = express();


app.get("/", (req, res) => {
    res.send('microservicio eventos')
});

app.use('/api/auth/evento', eventosRoutes);

module.exports = app;
