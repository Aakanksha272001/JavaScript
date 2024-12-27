//Singleton object
//like: object.create



// object literals

let sym = Symbol("key1");   // for symbol wrapper object as property key

const obj = {
    name: "Anki",
    age:23,
    [sym] : 1,  //symbol wrapper object as property key
    location: "India",
    email:"aakankshakhanna09@gmail.com",
    isloggedIn : false,
    lastLoginDays: ["monday","Tuesday"],
   
    
}

// console.log(obj.email);
// console.log(obj["email"]);
// console.log(obj["age"]);
// console.log(obj[sym]);

// obj.name = "Aakanksha";//can change value of any object key
// console.log(obj);

// Object.freeze(obj); // after this we can not  change value of object keys
// obj.age ="34"; // value not changed
// console.log(obj);

// delete obj.name;   // to delete any key from an object
// console.log(obj);

// delete obj[sym];
//console.log(obj);



// obj.greeting = function(){

//     console.log("Hello JS user");
// }

// obj.greetingTwo = function(){

//     console.log(`Hello JS user ${this.name}`);
// }
// console.log(obj.greeting());
// console.log(obj.greetingTwo());



let appUser = {};

appUser.id =  23;
appUser.name = "Robort";
appUser.email = "rotort@gmail.com";

console.log(appUser);

// console.log(Object.keys(appUser)); // return array of keys
// console.log(Object.values(appUser));// return array of values of object
// console.log(Object.entries(appUser));// return array of array of key-value pair


// object nesting

let regularUser = {

    email: "lisom@gmail.com",
    fullName : {

        UserFullName: {
            firstName: "lisom",
            lastName:"Bort"
        }
    },

    address: ["India","Indore","Indrapuricolony", "girlsHostel"] 

}

// console.log(regularUser.fullName.UserFullName.firstName);
// console.log(regularUser.fullrName.UserFullName);
// console.log(regularUser.fullName);
//console.log(regularUser.address[1]);

let User = [  // array of oibject
    {
        id: 1,
        name:"Rina"
    },

    {
        id: 2,
        name:"Dina"
    },

    {
        id: 3,
        name:"Gita"
    }
]

//console.log(User[1].id);

//combining object

let obj1 = {1:"a",2:"b"};
let obj2 = {3:"c",4:"d"};



//1.// let obj4 = {obj1,obj2};
// console.log(obj4);  //OUTUT : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//2.// let obj4 = Object.assign({},obj1,obj2); // const valName = Object.assign(targetobj,sourceobj);
// console.log(obj4);
// console.log(obj1);


// 3.spread operator

let obj4 = {...obj1, ...obj2};
//console.log(obj4);


//object destructure

//console.log({ object key name}); means destructuring

let laptop = {
    name : "Lenovo",
    processor: "i3",
    cost: 40000
}

let {processor} = laptop;
console.log(processor);  // by object destructure we can dispaly object property directly by name
console.log({cost});



// In pure JSON both  key and value are in treated as String type

// {
//     "name": "Anki",
//     "age": 23,
//     "Education":"MCA"

// }

