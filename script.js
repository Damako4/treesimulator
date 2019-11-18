window.onload = function() {
  var canvas = document.getElementById("spawner");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  image.width = image.width/3;
  image.height = image.height/3;
  image.onload = function() {
     ctx.drawImage(image, 0, 0);
  };
  image.src = "http://apextreeandearth.com/files/2014/04/tree1.png";
};
