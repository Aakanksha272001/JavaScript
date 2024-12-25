//array is an object it resizable in JS
//array are mutable in JS

// const myarr = [1,2,3,4,5];
// const arr2 = ['helo','gita','sita'];

//const arr3 = new Array(9,8,7,6);
//console.log(arr3);


//array method
// arr3.push(4);
// console.log(arr3);
// arr3.pop();
// console.log(arr3);
// arr3.shift();
// console.log(arr3);
// arr3.unshift(99);// add element at starting
// console.log(arr3);

// console.log(arr3.includes(2));
// console.log(arr3.indexOf(8));

// const newarr  = arr3.join();

// console.log(newarr);
// console.log(typeof( newarr));

//slice and splice

// console.log("A original array",arr3);
// console.log(arr3.slice(1,3));
// console.log("B after slice",arr3);
// console.log(arr3.splice(1,3));
// console.log("C after splice ",arr3); //original array get changed after splice




const girlsName = ['rani','gita','rita'];

const boysName = ['ram','mohan','shyam'];

//girlsName.push(boysName);  //push method can also put an array as an single element in an array

//console.log(girlsName);



// let newarr = girlsName.concat(boysName); //concat combine two array into one new array
// console.log(newarr);



//spread operator

// const allNewArr = [...boysName,...girlsName];
// console.log(allNewArr);


// const another_array =  [1,2,3,[4,5],[6,7,3,[8,9]]];
// const usable_array = another_array.flat(3); // flat() convert multi dimention array into single one
// console.log(usable_array);


//from,of
console.log(Array.isArray("Hello"));

console.log(Array.from("Ankita"));// convert String into array
console.log(Array.from({name:"Ankita"}));//interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


