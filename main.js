var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");

var car1_width=100;
var car1_height=100;
car1_img="car1.png";
car1_x=10;
car1_y=80;

var car2_width=100;
var car2_height=100;
car2_img="car2.png";
car2_x=10;
car2_y=200;

background_img="track.jpg";



function add(){

    background_img1= new Image();
    background_img1.onload=bg_add_image;
    background_img1.src=background_img;

    car1_img1= new Image();
    car1_img1.onload=car1_add_image;
    car1_img1.src=car1_img;

    car2_img1= new Image();
    car2_img1.onload=car2_add_image;
    car2_img1.src=car2_img;


    

}

function bg_add_image(){
  ctx.drawImage(background_img1,0,0,canvas.width,canvas.height);

}

function car1_add_image(){
    ctx.drawImage(car1_img1,car1_x,car1_y,car1_width,car1_height);
  
  }
  function car2_add_image(){
    ctx.drawImage(car2_img1,car2_x,car2_y,car2_width,car2_height);
  
  }

  window.addEventListener("keydown",Key_click);

  function Key_click(e){
         var click=e.keyCode;
         console.log(click);

         if(click==38){
             car1_Up();
             console.log("up arrow key");
         }
          
         if(click==39){
                car1_right();
                console.log("Right arrow key");
         }

         if(click==40){
            car1_down();
            console.log("down arrow key");

         }
         if(click==37){
            car1_Left();
            console.log("Left arrow key");}

            
         if(click==87){
          car2_Up();
          console.log("W key");}
         
         
         if(click==83){
          car2_down();
          console.log("S key");}

          
         if(click==65){
          car2_Left();
          console.log("A key");}

          
         if(click==68){
          car2_right();
          console.log("D key");}
        }

        