//console.log('Hello')

// let - const - var
/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};

circle.draw();
*/

//Factory Function
function crateCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    };
}

const circle = crateCircle(1);
circle.draw();

//Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw2')
    }
}
const Circle1 = new Function('radius',`
    this.radius = radius;
    this.draw2 = function(){
    console.log('draw2')
    }
`)

Circle.call({}, 1)

const circle2 = new Circle1(1);
const another =  new Circle(1);
another.draw();


//Constructor Property
let x = {};
//let x = new Object();
new String();      // ' ' ," "
new Boolean();  // true, false
new Number();  // 1, 2, 3, ...


//Functions are Objects
