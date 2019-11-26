const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (request, response) => {
  response.send("Hello from the server");
})

app.listen(port, function(){
  console.log('listening on port:' + port)
})
