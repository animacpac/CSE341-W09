var express = require('express');
var app = express();
var url = require('url');


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('public/postageDisplay');
  });


app.get('/postageDisplay', function(request, response) {

    var requestUrl = url.parse(request.url, true);
  
    console.log("Query parameters: " + JSON.stringify(requestUrl.query));
  
    var postageType = requestUrl.query.postageType;         
    var weight      = Number(requestUrl.query.weight);   
  
  
    var result;
  
    if(postageType == "lettersS") {
      result = lettersSCalc(weight);
    }
    else if (postageType == "lettersM") {
      result = lettersMCalc(weight);
    }
    else if (postageType == "envelopes") {
      result = envelopesCalc(weight);
    }
    else if (postageType == "parcels") {
      result = parcelsCalc(weight);
    }
  
    
    var params = {postageType: postageType, weight: weight, result: result};
  
    response.render('pages/postageDisplay', params);
  }
  );
  
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });