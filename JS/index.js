//normal function (function inside a object) - returns value only 
// let circle={
//     radius:1,
//     location:{
//         x:1,
//         y:1  
//     },
//     draw: function(){
//         console.log("draw")
//     }
// };

//factory function (function that returns object)
// function circle(radius){
//     return{
//     radius,
//     hi : function(){
//         console.log("this is test");
//     }
// };
// }

// const a = circle(7);
// console.log(a)

// constructor function (function that is used to create object using 'new' keyword)
function Circle(radius){
    this.radius=radius; 
    this.draw=function(){
        console.log("draw from constructor function");
    }
}           
const b = new Circle(9);
console.log(b); 