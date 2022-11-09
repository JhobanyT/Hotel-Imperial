const express = require("express");
const sucursalRoutes = require('./routes/sucursales.routes') 

const app = express();


app.get("/", (req, res) => {
    res.send('microservicio Sucursal')
});

app.use('/api/auth/sucursal', sucursalRoutes);

module.exports = app;
