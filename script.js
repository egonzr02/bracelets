$(document).ready(function () {
  var html = "";
  for (i = 0 ; i < 26 ; i++)
      var value = i + 9;
      var letter = (value).toString(36).toUpperCase();
      html += "<label>" + letter +"</label>";
      html += "<input placeholder=" + "'Enter the number of " + letter + " you have'/>";
  $("#container").html(html);
  });