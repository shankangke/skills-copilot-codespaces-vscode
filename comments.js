// Create web server
// 1. Create a new Express app
// 2. Create a new route to handle incoming requests
// 3. Send back the comments data as JSON
const express = require('express');
const app = express();
const comments = require('./comments');
app.get('/comments', (req, res) => {
  res.json(comments);
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});