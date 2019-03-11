const express = require('express');
const axios = require('axios');

const clientID = '<>';
const clientSecret = '<>';
const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('Server started listening on port ', port);
});

app.get('/oauth/redirect', (req, res) => {
  const requestToken = req.query.code;
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  })
  .then((response) => {
    const accessToken = response.data.access_token;
    res.redirect(`/welcome?access_token=${accessToken}`)
  });
  
  app.listen(PORT);

});