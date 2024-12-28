// addition of two number

function addTwoSum(num1,num2)
{
   return num1+num2;
}

//console.log(addTwoSum(10,20));


function userloggedIn(user)
{
    if(!user)
    {
        console.log("Enter a valid name");
        return;
    }
    console.log(`${user} just logged in`);
}

// userloggedIn('Aakanksha');
// userloggedIn('');
// userloggedIn();


function isnum(num)
{
    if(!num)
    {
        console.log(` is not a number`);
        return ;
    }
    console.log(`given number is ${num}`);
}

// isnum(10);
// isnum("anki");
// isnum("")

function calculateCartPrice(sum,...num)// here ... is rest opertor
{

    for(let i=0;i<num.length;i++)
    {
        sum = sum+num[i];
    }
     
    //console.log(num);
    
    return sum;
}

let sum = calculateCartPrice(0,200,300,4000);
//console.log(sum);

let user = {
    userName :"Sunny",
    id: 123
}

function DisplayObject(UserData)
{
    console.log(`user name is ${UserData.userName} and id is ${UserData.id}`);
    
}

// DisplayObject(user);
// DisplayObject(
//     {
//         userName:"Rits",
//                id : 456
//     }
// );

function DisplayArray(myarray)
{
    console.log(`Array second element is ${myarray[1]}`);
    
}

let arr = [100,200,300,400];

DisplayArray(arr);