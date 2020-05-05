// Object Literal Syntax is not good for to dupe if method is inside
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     }
//     draw: function() {
//         console.log('draw');
//     }
// }
// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);


// //Constructor Function
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    this.getDefaultLocation = function() {
        return defaultLocation;
    };
    //let computeOptimumLocation = function() {
        //...
    }

    Object.defineProperty(this, 'defaultLocation', 
        get: function() {
            return defaultLocation;
        }
        set: function(value) {
            
        }
    )

    circle.getDefaultLocation();

    this.draw = function() {
        
      //  computeOptimumLocation(0.1);
        console.log('draw');
    }
}

// const Circle1 = new Function('radius', `
// this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }`);

const circle = new Circle1(1);

// for (let key in circle) {
//     if(typeof circle[key] !== 'function')
//     console.log(key, circle[key]);//get type that is not a function

    //console.log(key);//get the key
    //console.log(key, circle[key]);//get value


}
//const keys = Object.keys(circle);//return all the key in a array

//if ('radius' in circle)// check if radius is in the circle object

// circle.location = {x: 1}; // adding property
// circle['location'] = {x: 1 }; // adding property with Braccet

// delete circle.location; // deleting property

// Circle.call({}, 1)// Same as the new method
// const another = new Circle(1);
// Circle.apply({}, [1, 2, 3]);// For array

// let x = {};
// let x = new Object();

// new String(); is equal to '', "", ``


