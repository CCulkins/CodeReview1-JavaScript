var apiKey = require('./../.env').apiKey;
exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

$(document).ready(function() {
  $('#submitButton').click(function() {
    var userRepo = $('#repoInput').val();
    $('#repoInput').val("");
    $.get('https://api.github.com/users/' + userRepo + '?access_token=' + apiKey, function(response) {
      console.log(response);
    });
    console.log("Notice: The GET request has been made.");
  });
});
