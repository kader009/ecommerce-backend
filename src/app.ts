import express from 'express'
const app = express()
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hellow world')
})

app.listen(port, () =>{
  console.log(`Ecommerce app is listening on port ${port}`)
})