window.onload = function() {
  var canvas = document.getElementById("spawner");
  var ctx = canvas.getContext("2d");
  var myCanvas = document.getElementById('my_canvas_id');
  var image = new Image();
  image.onload = function() {
     context.drawImage(image, 0, 0);
  };
  image.src = "http://apextreeandearth.com/files/2014/04/tree1.png";
};
