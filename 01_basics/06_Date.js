// let myDate = new Date();  //  Some Basic method with Date object are follows 

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());



//creating date 

// let myCreateDate = new Date(2023,0,23);  //yy-mm-dd mm: start with 0 because it takes data as an array elements
//let myCreateDate = new Date(2023,0,23,5,3); //It will give time also
// let myCreateDate = new Date("2023-01-14");//yy-mm-dd in string formate
//let myCreateDate = new Date("01-14-2023");//mm-dd-yy in string formate ,In India we mostly use this format
//console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now();

//console.log(myTimeStamp);
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);


console.log(`date is ${newDate.getDate()} and month is ${newDate.getMonth()+1}`);
console.log(newDate.toLocaleString('default', //IMP
    {weekday: "long",}
)
)






