window.onload = function() {
  var canvas = document.getElementById("spawner");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("tree");
  ctx.drawImage(img, 10, 10);
};
