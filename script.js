// Json loader
var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};


// get data from HUE Api
var hue = (function() {
  var apiurl = 'http://mediaserve.boxtools.pw:5500/api',
      apikey = 'SOX1dFLtPEJJstJtLeDppZit4JEA43FIu8mieKZv';

  getJSON(apiurl+'/'+apikey+'/lights').then(function(data) {
    $('.hue div').html(data.result);
}, function(status) { //error detection....
  alert('Something went wrong.');
});
})();
