var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs  = require('fs');

//AWS.config.loadFromPath('./accessKeys.json');
AWS.config.update({region: 'us-east-2'});

var params = {
 Bucket: "zashi",
 Key: "test.jpg"
};
var v = fs.readFileSync("/Users/systems/Desktop/kawaii.jpg");
params.Body = v;
s3.putObject(params, function(err, data) {
  console.log('ここまで来ているよ！！');
  if (err) console.log(err, err.stack);
  else     console.log(data);
})
