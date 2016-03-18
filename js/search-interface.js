var getRepos = require('./../js/search.js').getRepos;
var getUser= require('./../js/search.js').getUser;

$(document).ready(function() {

  $('#submitButton').click(function() {
    var userRepo = $('#repoInput').val();
    $('#repoInput').val("");
    getRepos();
    $('.showResult').text("");
  });
});
