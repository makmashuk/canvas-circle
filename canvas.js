// console.log("loaded");
let canvas = document.querySelector('canvas');

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

var c = canvas.getContext("2d");
var mouse={
    x:undefined,
    y:undefined
}
window.addEventListener('mousemove', function(event){
    mouse.x=event.x;
    mouse.y=event.y;
});
window.addEventListener('resize', function(){
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    init();
});

var maxRadius=50;
// var minRadius=10;
var colorArray=[
    '#FF5733',
    '#45D317',
    '#1D4283',
    '#5C0C64',
    '#CF184A',
];


function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.color=colorArray[Math.floor(Math.random() * colorArray.length)];
    this.minRadius=radius;
    // console.log(this.col)
    this.draw=function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        // c.strokeStyle=this.color;
        c.stroke();
        c.fillStyle=this.color;
        c.fill();
    }
    this.update=function(){
 
        if(this.x+this.radius>innerWidth || this.x-this.radius <0 ){
            this.dx=-this.dx;
        }
        if(this.y+this.radius>innerHeight || this.y-this.radius <0 ){
            this.dy=-this.dy;
        }

        /*Mouse Interactivity*/

       
     
        
        if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50){
           
            if(this.radius<maxRadius){
                this.radius+=1;
            }
        }
        else if (this.radius>this.minRadius){
            this.radius-=1;
        }
        // console.log(mouse);
        
        this.x+=this.dx;
        this.y+=this.dy;

        this.draw();
        
    }

}

// var circle1 = new Circle(200,300,5,8,30);
// var circle2 = new Circle(100,300,5,10,40);
var circleArray=[];
function init(){
    circleArray=[];
    for (let i =0;i<1000;i++){
        var radius = Math.random() * 9 + 1;
        var x = Math.random() * (window.innerWidth-radius*2)+radius;
        var y = Math.random() * (window.innerHeight-radius*2) + radius;
        var dx = (Math.random() -0.5)*2;
        var dy = (Math.random() -0.5)*2;
        
        circleArray.push(new Circle(x,y,dx,dy,radius));
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (let i =0;i<circleArray.length;i++){
        circleArray[i].update();
    }
}
init(); 
animate();

console.log(circleArray);





// c.beginPath();
// c.arc(100, 500, 50, 0, 2 * Math.PI, false);
// c.strokeStyle='blue';
// c.stroke();

// var x =200;
// var dx=10;
// var y =300;
// var dy=10;
// var radius=50;
// animate();
// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);
//     c.beginPath();
//     c.arc(x, y, radius, 0, 2 * Math.PI, false);
//     c.strokeStyle='blue';
//     c.stroke();
   

//     x+=dx;
//     y+=dy;
// }

// for(var i=0;i<4;i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     c.beginPath();
//     c.arc(x, y, 50, 0, 2 * Math.PI, false);
//     c.strokeStyle='blue';
//     c.stroke();
   
// }