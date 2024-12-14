// const score = 400;

// const num = new Number(100);

// console.log(num);
// console.log(num.toString());// we can convert number to string
// console.log(num.toString().length);  // after converting into string we can apply all string method 

// console.log(num.toFixed(2));

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));  // toPrecision() give precise value

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-In'));


//++++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math); 
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.pow(2,5));
// console.log(Math.sqrt(25));
// console.log(Math.min(1,3,5,6,2));


// console.log(Math.random()); // Always give random value from 0 to 1
//console.log((Math.random()*10)+1); //It will give random value from 1 to onwards
//console.log(Math.floor((Math.random()*10)+1)); //It will give always floor value

let min = 20;
let max = 50;


//console.log(Math.floor((Math.random()* (max-min)+1)) + min);  // This formula is used to generate rondom number between a range
for(let i=0;i<10;i++)
{
 
 console.log(Math.floor(Math.random() * (max-min + 1)) + min);

}
