const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola mundo!. Soy Roque Rojo Bacete y he desarrollado esto para el master DevOps de UNIR')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})