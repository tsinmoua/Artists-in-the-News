var url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-10-05&' +
          'sortBy=popularity&' +
          'apiKey=bf1bd4be6a164b938ed4be2bc43d5d0a';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })