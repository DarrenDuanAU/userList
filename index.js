const express = require('express');
const router = require('./router');
//create web server
const app = express();

app.use(router)
const PORT = 8080;
app.listen(PORT, () => {
  console.log('server is running on http://localhost:8080')
});