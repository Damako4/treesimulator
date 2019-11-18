window.onload = function() {
  var canvas = document.getElementById("spawner");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("tree_icon.png");
  ctx.drawImage(img, 10, 10);
};
