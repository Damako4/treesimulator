window.onload = function() {
  var canvas = document.getElementById("spawner");
  var ctx = canvas.getContext("2d");
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  const imageURL = ["https://treemastersllc.com/files/2019/03/_4.png","http://pluspng.com/img-png/png-usa-outline-us-map-outline-png-87-detailed-with-us-map-outline-png-2400.png"]; // list of image URLs
  const images = [];
  var imageCount = 0;
  function allLoaded(){
      ctx.drawImage(images[1],0,0);
      ctx.drawImage(images[0],0,0,images[0].width/8,images[0].height/8);
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
};
