window.onload = function() {
  var canvas = document.getElementById("spawner");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  var map = new Image();
  map.onload = function() {
    ctx.drawImage(map, 0, 0);
    ctx.drawImage(image, 0, 0, image.width/6, image.height/6);
  }
  image.src = "https://treemastersllc.com/files/2019/03/_4.png";
  map.src = "http://pluspng.com/img-png/png-usa-outline-us-map-outline-png-87-detailed-with-us-map-outline-png-2400.png";
};
