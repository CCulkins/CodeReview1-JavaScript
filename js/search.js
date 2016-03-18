var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var userRepo = $('#repoInput').val();
  $('#repoInput').val("");
  $.get('https://api.github.com' + userRepo + 'repos/?access_token=' + apiKey).then(function(response){
    console.log(response);

  $("#showResult").append("<p>" + repo.name + "</p>");
  $("#showResult").append("<p>" + repo.description + "</p>");

  }).fail(function(error){
      console.log(error.responseJSON.message);
  });
}
