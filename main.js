var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(img){
      birthImg=img;
      birthImg.scaleToWidth(700);
      birthImg.scaleToHeight(510);
      birthImg.set({
        top:0,
        left:0
      });
      canvas.add(birthImg);
    });
	
}

function playSound(){
	x.play();
}
