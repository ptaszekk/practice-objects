// // // // function createCircle(radius){
// // // // return {
// // // //         radius,
// // // //         draw: function(){
// // // //             console.log('draw');
// // // //         },
// // // // }
// // // // }

// // // // const circle = createCircle();

// // // // circle.location = {x: 1,}

// // // // circle.draw();


// // // //
// // // function Circle(radiuss){
// // //     this.radiuss = radiuss,

// // //     this.draw = function(){
// // //         console.log(`hello i am circle! and my radius is ${this.radiuss}`);
// // //     };

// // //     let defaultLocation = {x: 0,y:0,};

// // // Object.defineProperty(this, 'defaultLocation',{
// // //     get: function(){
// // //         return defaultLocation;
// // //     },
// // //     set: function(value){
// // //         if(!value.x || !value.y)
// // //         throw new Error('missing y or x');
// // //         defaultLocation.value;
// // //     }
// // // })
// // // }



// // // const circle = new Circle(6);
// // // circle.draw();
// // // console.log(circle.radius);
// // // console.log(circle.defaultLocation)

// // // for (let key in circle){
// // //     if(typeof circle[key]!== 'function')
// // //     console.log(circle[key]);
// // // }

// // // if('draw'&&'radius' in circle){
// // //     console.log('yes');
// // // }else{
// // //     console.log('no')
// // // }

// // let person = { fname: 'Kuba'};
// // let objectBase = Object.getPrototypeOf(person);
// // //console.log(objectBase)

// // Object.defineProperty(person, 'toString',{
// //     enumerable: true,
// // })

// // for(let key in person){
// //     console.log(key);
// // }


// // let describtor = Object.getOwnPropertyDescriptor(objectBase, 'constructor');
// // //console.log(describtor);

// // //console.log(typeof Object);

// // //console.log(Object.getPrototypeOf(person));
// // //person.toString;

// // console.log(Object.getPrototypeOf(person));

// // let obj1 = {};
// // let obj2 = {};
// // console.log(obj1.__proto__);

// // let arr1 = [1,4,5,6];
// // let arr2 = ['maciek','jasiek'];

// // if(obj1.__proto__ == obj1.prototype){
// //     console.log('yea');
// // }else{
// //     console.log(false);
// // }

// // console.log(obj1.__proto__);
// // console.log(Object.prototype);



// // let person = {};
// // let array = [];
// // console.log(Object.prototype.toString(array));
// // console.log(Array.isArray(array));

// // if(Object.prototype.toString.call(array) === "[object Array]"){
// //     console.log('true');
// // }

// // if(Array.isArray(array) === true){
// //     alert('pelna profeska');
// // }

// // if((person.toString()) === '[object Object]'){
// //     console.log('true');
// // }
// // console.log(person.toString());

// function Circle(radius){
//     this.radius = radius;
//     this.move = function(){
//         console.log('move');
//     }
// }

// // const c1 = new Circle(1);


// // Circle.prototype.draw = function(){
// //     console.log('draw');
// // }

// // c1.draw();

// // // instance members
// // console.log(Object.keys(c1));


// // for(let key in c1){
// //     console.log(key);
// // }

// // console.log(c1.hasOwnProperty('radius'));
// // console.log(c1.hasOwnProperty('draw'));


// //super constructor
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// function Shape(color){
//     this.color = color;
// }

// Shape.prototype.duplicate = function(){
//     console.log('duplicate');
// }


// function Square(size,angles,color){
//     Shape.call(this, color)
//     this.angles = angles;
//     this.size = size;
// }
// extend(Square, Shape);


// function Circle(radius, color){
//     Shape.call(this, color); 
//     this.radius = radius;
// }
// Circle.prototype.draw = function(){
//     console.log('draw');
// }
// extend(Circle, Shape);



// const s = new Shape();
// const c = new Circle(1, 'red');
// const sq = new Square(4,90, 'blue');


function Shape() {

}

function Circle() {

}

function Square() {

}

function duplicateCaller(shape) {
    shape.prototype.duplicate = function () {
        let type = shape.name.toLowerCase();
        console.log(`duplicate ${type}`);
    }
}

extend(Circle, Shape);
extend(Square, Shape);


duplicateCaller(Shape);
duplicateCaller(Circle)
duplicateCaller(Square);

const shapes = [
    new Circle(),
    new Square(),
    new Shape(),
]

// for (let shape of shapes){
//     shape.duplicate();
// }
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        console.log('eating');
    }
}

const canSwim = {
    swim: function () {
        console.log('i can swim')
    }
}


const canWalk = {
    walk: function () {
        console.log('i am walking');
    }
};

const canKnit = {
    knit: function () {
        console.log('human can knit');
    }
}

const canDriveCar= {
    canDriveCar: function(){
        console.log('i can drive a car, bitch')
    }
}

function Person() {}

function Fish() {}

mixin(Person.prototype, canEat, canWalk, canKnit, canSwim);
mixin(Fish.prototype, canEat, canSwim, canDriveCar);

const person = new Person();
const fish = new Fish();


for(let method in fish){
    let m = fish.hasOwnProperty(method);
    if(m !== undefined || null){
        console.log((fish[method])());
    }   
    }

const arr = [1,23,4];

arr.push(33);
console.log(arr);

function remover(arr, val){
   let arrNum = arr.splice(arr.indexOf(val), 1);
    return arr.pop(arrNum);
}

arr.forEach(n=> console.log(n));

const arr2 = [...arr];