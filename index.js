const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const crypto = require("crypto");

const id = crypto.randomBytes(16).toString("hex");
app.get('/', (req, res) => {
  var txt = fs.readFileSync("./private_ip_mongo.txt");
  res.send(`Hola mundo!. Soy Roque Rojo Bacete y he desarrollado esto para el master DevOps de UNIR\nSoy la instancia: ${id}\nEl connection string de mongo es: mongodb://${txt}:27017/`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})