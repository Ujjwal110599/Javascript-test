class User{

  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }
  register(){
    console.log(this.username + ' user registered');
  }
}


let yatin = new User('jat bhai','jatboi@gmail.com','8512883081');
yatin.register();

// Implementing maps

let myMap = new Map();

//Adding new elements in map

myMap.set('101','UK');
myMap.set('102','Nishant');
myMap.set('103','Yatin');

console.log(myMap);

// delete elements in map

myMap.delete('101');
console.log(myMap);

console.log(myMap.get('102'));

//forEach

myMap.set(104,'Vignesh');
console.log(myMap);
myMap.delete(104);
console.log(myMap);


myMap.set('104','Vignesh');
myMap.set('105','Virat');
myMap.set('106','Rohit');
myMap.set('107','Iyer');

myMap.forEach((item, i) => {
  console.log(myMap.get(i));
});

console.log("without using foreach function");

for(let i of myMap.keys()){
  console.log(myMap.get(i));
}

// using filters
function canVote(x){
  return x>=18;
}

let age = [11,18,19,25,46,20,1];
let elligible = age.filter(canVote);
console.log(elligible);


function filterDemo(age){
  for(let i of age){
    if(i>=18){
      console.log(i);
    }
  }
}

function display(age, myCallBack){
  console.log("calling the filterDemo fucntion");
  myCallBack(age);
}

display(age, filterDemo);

// reduce fucntion
function addition(sum, num){
  return num + sum;
}

let arr = [11,18,19,25,46,20,1];


let a = arr.reduce(addition);

console.log(a);
