window.onload = function() {
  var canvas = document.getElementById("spawner");
  var ctx = canvas.getContext("2d");
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  const imageURL = ["https://treemastersllc.com/files/2019/03/_4.png","http://pluspng.com/img-png/png-usa-outline-us-map-outline-png-87-detailed-with-us-map-outline-png-2400.png"]; // list of image URLs
  const images = [];
  var imageCount = 0;
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  function allLoaded(){
      ctx.drawImage(images[1],0,0,images[1].width/2.5,images[1].height/2.5);
  }
  function drawTree(x,y){
      ctx.drawImage(images[0],x,y,images[0].width/8,images[0].height/8);
  }
  imageURL.forEach(src => {
       const image = new Image();
       image.src = src;
       image.onload = ()=>{ 
           imageCount += 1;
           if(imageCount === imageURL.length){
               allLoaded();
           }
       }
       images.push(image);

  });
  function draw(evt) {
      var pos = getMousePos(canvas, evt);
  }
  canvas.addEventListener("mousedown", function(evt) {
    var mousePos = getMousePos(canvas, evt);
    drawTree(mousePos.x-15, mousePos.y-15)
  }, false);
};
