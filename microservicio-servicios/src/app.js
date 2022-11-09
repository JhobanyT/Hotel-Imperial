const express = require("express");
const servicioRoutes = require('./routes/servicios.routes') 

const app = express();


app.get("/", (req, res) => {
    res.send('microservicio Servicios')
});

app.use('/api/auth/servicio', servicioRoutes);

module.exports = app;
