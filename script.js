
/*let a=6;
let b=a;
a=4;
console.log(b);  --> 6*/

/*let object1 = {age:33};
let object2 = object1;
object1.age=22;
console.log(object2.age);--> 22
*/

/*let a = true;
let b = false;
if(a||b){
    console.log("executed");
}*/

//console.log(9<<2) -->36
//console.log(9|5); --> 13
//console.log(9^5); --> 12

/*function sum(a,b){
    return a+b;
}
console.log(sum(11,11));*/

/*function sum(a,b){
    console.log(a+b);
}
sum(11,10);*/

/*const sum=(a,b,c)=>{
    console.log(a+b+c);
}
sum(11,2,3);*/

/*function double(num){
    return num*2;
}

let arr = [2,3,4,5,6,7]
let doubledArr=arr.map(double)
console.log(doubledArr);
const tripleArr = arr.map((num)=>num*3);
console.log(tripleArr);

/*function isOdd(num){
     return num%2!=0 ;
}*/
/*
let oddNumbers = arr.filter((num)=>num%2!=0);
console.log(oddNumbers);

let array = [13,15,20,35,27]
let mulOfFive = array.filter((n)=>n%5==0)
console.log(mulOfFive);

let array1 = [1,2,3,4,5,6];
let sum = array1.reduce((product,current)=>{
    return product*current;
},1);
console.log(sum);*/

/*let tripleOfArray = array1.map((n1)=>n1*3)
console.log(tripleOfArray);
let evenNumbers = tripleOfArray.filter((n1)=>n1%2==0);
console.log(evenNumbers);
let sumOfEven = evenNumbers.reduce((add,current1)=>{
    return add+current1;
},0);
console.log(sumOfEven);*/

/*let a = [1,2,3,4,5,6];
let result = a.map((n1)=>n1*3)
             .filter((n1)=>n1%2==0)
             .reduce((add,curr)=>{
                return add+curr;
             },0)
console.log(result);*/

/*
// Destructuring   rest operator => ... it assign all values in one variable
let b = [1,2,3,4,5]
const [one,...two] = b;
console.log(two);*/

//it will spread already created array
//let num= [0,...b,6,7]

/*
//console.log(num);
const obj1 = {x:3,y:5}
const obj2 = {y:5,z:7}
const spread = {...obj1,...obj2}
console.log(spread);*/

/*
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
             resolve("Resolved successfully")
        } else{
            reject("rejected")
        }
    },1000)
})
console.log("Before promise execution");
promise.then((result)=>console.log(result))
        .catch(err=>console.log(err))
        .finally(()=>console.log("Process completed"))

        //console.log("After Promise execution");
        let object3 = {name:"virat",age:38,country:"India"}
        console.log(object3.country);

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {return response.json()})
      .then((data) => data.map((user)=>{console.log(user.name)}))
      .catch((err)=>console.log(err));
      fetch('https://jsonplaceholder.typicode.com/todos') // notice /todos (array)
  .then(response => response.json())
  .then((data) => data.map((todo) => {
      console.log(todo.title); // access property inside each object
  }))
  .catch((err) => console.log(err));*/


/*async function fetchApi(){
    try {
        const response = await fetch(
         'https://jsonplaceholder.typicode.com/todos/1'
        )
        const data = await response.json();
        data.map((user)=>{
            console.log(user.name)
        })
    } catch (error) {
        console.log(error);
    }
}*/
//fetchApi();

/*
//String literals
let name = 'prabha'
let age = 24
console.log(`I am ${name} and my age is ${age} `);*/

/*const mul = (a,b)=>{
    return a*b;
}
const square=(n)=>{
    return mul(n,n);
}
const print=(n)=>{
    let s = square(n);
    console.log(s);
}
print(4);
//promise --> microTask  , microtask directly go to output, macrotask got to web api it will goes to queue , in queue order output will execute
console.log('first');
Promise.resolve().then(console.log('From promises'))
setTimeout(()=>{
    console.log('Inside Timeout');
},2000)
console.log('last');*/

const fetchApi=async()=>{
    try {
        const response = await fetch(
         'http://localhost:4000/task/getTask'
        )
        const data = await response.json();
        data.map((user)=>{
            console.log(user)
        })
    } catch (error) {
        console.log(error);
    }
}
fetchApi();
