const express = require('express')
//create web server
const app = express();

const PORT = 8080;
app.listen(PORT, () => {
  console.log('server is running on http://localhost:8080')
});