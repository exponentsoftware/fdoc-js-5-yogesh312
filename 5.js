const https = require('https')
const url = "https://restcountries.com/v2/all";
https.get(url, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    var size = Object.keys(data).length;
    console.log(size);
  })
}).on('error', err => {
  console.log(err.message);
})