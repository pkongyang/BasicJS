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
/*
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
Circle.apply({},[1,2,3])
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
*/
/*
let x = {value: 10};
let y = x;

x.value = 20;

console.log(x)
console.log(y)

let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);

console.log(obj)
*/

// Add and removed properties

function Circle(radius){

    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    this.getDefaultLocation = function(){
        return defaultLocation;
    }


    this.draw = function() {

        //computeOptimumLocation(0.1);
        

        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        }
        }
    )
}
const circle = new Circle(10);
circle.draw();

/*
circle.location = {x: 1};

const propertyName = 'location';
circle[propertyName] =  {x: 1};
delete circle.location;
*/
/*
//Enumerating Properties
for ( let key in circle ) {
    if ( typeof circle[key] !== 'function')
        console.log (key, circle[key]);
}
const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
    console.log('Circle has a radius')

*/

