window.onload = function() {
  var canvas = document.getElementById("spawner");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  image.onload = function() {
     ctx.drawImage(image, 0, 0, image.width/3, image.height/3);
  };
  image.src = "https://treemastersllc.com/files/2019/03/_4.png";
};
