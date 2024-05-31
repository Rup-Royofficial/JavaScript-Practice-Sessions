const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const one = {
    name: 'ginger',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Problem faced");
    }
}

console.log(Object.getOwnPropertyDescriptor(one, "name"));
/*
value: 'ginger',
configurable: true,
enumerable: true,
writable: true
*/



Object.defineProperty(one, 'name', {
    //writable: false,
    enumerable: true, // if false, then as shown in the above comment, the enumerable property will change to false
    // if turned to false then the below enumerable property(for loop) will not work out for the name key 
    
})

console.log(Object.getOwnPropertyDescriptor(one, "name"));

for (let [key, value] of Object.entries(one)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}