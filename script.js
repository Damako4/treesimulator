window.onload = function() {
  var canvas = document.getElementById("spawner");
  var ctx = canvas.getContext("2d");
  var myCanvas = document.getElementById('my_canvas_id');
  var ctx = myCanvas.getContext('2d');
  var img = new Image;
  img.onload = function(){
    ctx.drawImage(img,0,0); // Or at whatever offset you like
  };
  img.src = "http://apextreeandearth.com/files/2014/04/tree1.png";
};
