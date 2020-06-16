const request = require('node-superfetch');

const url = ['url1', 'url2'];

for (let i = 0; i < url.length; i++) {
  request.get(url[i]).then(result => {
   console.log(`[${result.ok}] Request result for ${url[i]}`);
  }
}
