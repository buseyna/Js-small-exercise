//alert('Hello World');
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

//let,const

let age0 = 30;
console.log(age0);

let age1 = 40;
age1 = 41;
console.log(age1);




// with const it will be an error it cant be directly reassigned
/*const age = 30;
age= 31;
console.log(age);*/

const score = 10;
console.log(score);

//strings, numbers, boolean, null, undefined

const name = 'Buseyna';
const age = 30;
const rating = 4.5
const isCool = true;
const x1 = null;
const y = undefined;
let z;

console.log(typeof name );
console.log(typeof age );
console.log(typeof rating );
console.log(typeof isCool );
console.log(typeof x1 );
console.log(typeof y );
console.log(typeof z );

// Concatenation
console.log('My name is' + " " +  name  + " " + 'and I am age' + " " + age);
// Template String 
const hello = `My name is ${name} and I am age ${age}`
console.log(hello);

const s = 'Hello World';
console.log(s.length);

const sl = 'Hello World!';
console.log(sl.length);

const slm = 'Hello World!';
console.log(slm.toUpperCase());

const sm = 'Hello World!';
console.log(sm.toLowerCase());

const lm = 'Hello World!';
console.log(lm.substring(0, 5));

const cm = 'Hello World!';
console.log(cm.substring(0, 5).toUpperCase());

const ms = 'Hello World!';
console.log(ms.split(''));

const m0 = 'technology, computer, it, code';
console.log(m0.split(', '));

//Arays - variable that hold multiple values ... /* multy line comments  */

const fruits = ['apples', 'orange', 'pears'];
// to add another fruite and this way isn't profesional that's why we use push methods 
fruits [3] = 'grapes';
fruits.push('mangos'); // to add to the aray
fruits.unshift('strawberries'); // this will add the beggining of the aray
fruits.pop(); // this is pop the last one in aray
console.log(Array.isArray(fruits)); // it gives us true
console.log(Array.isArray('hello')); // it gives us fales
console.log(fruits.indexOf('oranges')); // 2 is the indexof the value
console.log(fruits[1]);
console.log(fruits);


const numbers = new Array(1,2,3,4,5);
console.log(numbers);

//Object letters
const person = {
    firstName: 'Buseyna',
    lastName: 'Mugles',
    age: 32,
    hobbies: ['music', 'movies', 'sports' ],
    address:{
        street: '50 main st',
        city: 'Istanbul',
        state: 'Istanbul'
    }
}
console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person);
console.log(person.hobbies[1]); // to get the movies
console.log(person.address.city); //to get the city

//using ديستراكشيرينج  another way to pull out info 
//const {firstName, lastName} = person;
//console.log(firstName);

const {firstName, lastName, address: {city}} = person;
console.log(city);

// add property
person.email = 'something@something.com';
console.log(person);

//Array's of object
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true

    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true

    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false

    },
];
console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos); // to convert to JSON language
console.log(todoJSON);

// simple for loop
for(let i = 0; i <10; i++){
    console.log(i);
    console.log(`For Loop Number: ${i}`);
}
// while loop
let i = 0;
while( i < 10 ){
    console.log(`While Loop Number: ${i}`);
i++;
}
// Loop through arrays

for(let i = 0; i <todos.length; i++){
    console.log(todos[i].text); // this is not the best way just for explanation

}

for(let b of todos) {
    console.log(b.text);
    console.log(b.id);
}

// forEach, map, filter
todos.forEach(function(b)//the variable that we need to use as each item
{
    console.log(b.text);
});

//map
const bText = todos.map(function(b)//the variable that we need to use as each item
{
    return b.text;
});
console.log(bText);

//filter
const bCompleted = todos.filter(function(b)//the variable that we need to use as each item
{
    return b.isCompleted === true;
});
console.log(bCompleted);

//filter and map together in on 
const bCompletedText = todos.filter(function(b)//the variable that we need to use as each item
{
    return b.isCompleted === true;
}).map(function(b){
    return b.text;
})
console.log(bCompletedText);

//Condetionals 
const x = 10;
if(x == 10) //if we use double == it will not match the data just the value
{
    console.log('x is 10');
}

// triple equal matches the data better to use always ===
const x3 = 20;
if(x3 === 20){
    console.log('x3 is 20');
} else{
    console.log('x3 is Not 20');
};
// another else if 
const x4 = 30;
if(x4 === 30){
    console.log('x4 is 30');
} else if (x4 > 30){
console.log('x is greater than 30');
} 
else{
    console.log('x4 is less than 30');
};

// multiple condetions it's isn't practical just an example
const x5 = 4;
const y2 = 11;
if(x5 > 5 || y2 > 10){
    console.log('x5 is more than 5 or is more than 10');
}

// turnery operator
const x6 = 10;

const color = x6 > 10 ? 'red' : 'blue';

console.log(color);
// it must be greader than 10 in an order to be red just we will change the x7 to 11
const x7 = 11;

const color2 = x7 > 10 ? 'red' : 'blue';
//const color2 = 'green'; if we activate this it will show color isn't red or blue

//console.log(color2);
//or we make swich...
switch(color2){
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
            console.log('color is blue');
            break;
            default:
                console.log('color isn\'t red or blue');
}

//functions we not going to use console.log we will 
/*function addNums(num1, num2){
    console.log(num1 + num2); // this will not work unless we call the function and this is how we do it 
}
addNums(5, 5); // this is how to call the function

function addNums(num3=1, num4=1){
    console.log(num3 + num4); // this will not work unless we call the function and this is how we do it 
}
addNums();*/

// to turn to arrow function 
/*const addNums = (num5 = 1, num6 = 1) => num5 + num6;
console.log(addNums(5,5));*/
//another way...
/*const addNums = (num5 = 1, num6 = 1) => {
    return num5 + num6;
}
console.log(addNums(5,5));*/
//another way
const addNums = num7 => num7 + 7;
console.log(addNums(8));


//from this line until ... are together:
// Constructor function
function Person(firstName, lastName, dob){
this.firstName = firstName;// property of the object
this.lastName = lastName;
//this.dob = dob;
this.dob = new Date(dob);

//adding methods by function and return it 
this.getBirthYear = function(){
    return this.dob.getFullYear();
}
this.getFullName = function() {
return `${this.firstName} ${this.lastName}`;
}
// this is the best way to do it  for the lines 289 - 290
Person.prototype.getFullName = function() {
    return this.dob.getFullYear();
}
// this is the best way to do it  for the lines 292 - 293
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
}
*/
//Instantiate object
/*const person1 = new Person('Buseyna', 'Mugles', '9-7-1989');
const person2 = new Person('Ruvayda', 'Mugles', '9-8-1998');
console.log(person1);
console.log(person2);
console.log(person2.dob);
console.log(person1.dob.getFullYear());
console.log(person2.getBirthYear());
console.log(person1.getFullName());

console.log(person2.getFullName()); //this is for the line 296
//console.log(person1); //this is for the line 300
*/



//Class doing the same as Constructor function only doing in a diferent way and it's common
class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);

    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${firstName} ${lastName}`;
    }
}

    //Instantiate object
const person1 = new Person('Bilal', 'Mugles', '25-8-1991');
const person2 = new Person('Omar', 'Mugles', '13-7-1997');

console.log(person2.getFullName());
console.log(person1);


// DOM 

//console.log(window);// the window of the browser
//alert(1);

//single element selector
console.log(document.getElementById('my-form'));
const form = document.getElementById('my-form')
console.log(form);
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//multiple element selector
console.log(document.querySelectorAll('.item')); // this one is recommended
console.log(document.getElementsByClassName('item')); // this one is older and it gets html collection
console.log(document.getElementsByClassName('li'));// this one also is older and it gets html collection

const items = document.querySelectorAll('.item'); // we looping through and grapping each elemts
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove(); //also it removes the last one
/*ul.firstElementChild.textContent = 'Hello'; 
ul.children[1].innerText = 'Bubu';
ul.lastElementChild.innerHTML= '<h1>Hi</h1>';*/


// lets change some style using js
/*const btn = document.querySelector('.btn');
btn.style.background = 'red';*/

/*const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    document.querySelector('#my-form')
    .style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
  .lastElementChild.innerHTML='<h1>Welcome</h1>';
})*/

/*const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    console.log('click');
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    document.querySelector('#my-form')
    .style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
  .lastElementChild.innerHTML='<h1>Welcome</h1>';
})*/

/*const btn = document.querySelector('.btn');
btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    console.log('click');
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    document.querySelector('#my-form')
    .style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Welcome</h1>';
})*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg =  document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
 //   console.log(nameInput);
  //  console.log(nameInput.value);

    if (nameInput.value === '' || emailInput.value === ''){
        //alert('Please enter fields'); // it's ugly using and not using these days 
        msg.classList.add('error');
        msg.innerHTML = 'Please enter fields';
        setTimeout(() => msg.remove(),3000)
    } else {
        const li = document.createElement('li'); 
        // creating new element out of nowhere
        
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
userList.appendChild(li);
//clear fields
nameInput.value = '';
emailInput.value = '';


       // console.log('success');
    }
}



