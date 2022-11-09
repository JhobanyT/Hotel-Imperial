const express = require("express");
const reservaRoutes = require('./routes/reserva.routes') 

const app = express();


app.get("/", (req, res) => {
    res.send('microservicio Reserva')
});

app.use('/api/auth/reserva', reservaRoutes);

module.exports = app;
