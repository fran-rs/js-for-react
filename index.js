// FUNCIONES Y FUNCIONES QUE RETORNAN FUNCIONES
// function hello() {
//  console.log('Hola Mundo');
//  console.log('trabajando con js')  
// }
// hello()


// function hello() {
//     return 'Hola mundo'
// }

// //const result = hello()
// console.log(hello());


// function hello() {
//     return function () {
//         return 'hola mundo'
//     }
// }
// console.log(hello()())

// function hello (name) {
//     return 'Hola ' + name;
// }

// console.log(hello('Josefina'))

// function add (x , y = 0) {

//     return x + y;
// }
// console.log(add(10 , 30));

// OBJETOS

// const user = {
//     name:  'ryan',
//     lastname: 'perez',
//     age: 30,
//     address: {
//         country: 'colombio',
//         city: 'bogota',
//         street: 'main street 123'
//     },
//     friends: ['brandon', 'elena'],
//     active: true,
//     sendMail: function() {
//         return 'sending mail...'
//     }
// }
// console.log(user.name)
// console.log(user.address.city)
// console.log(user.sendMail())

// *******

// const name = 'laptop'
// const price = 3000

// const newProduct = {
//     name,
//     price
// }
// console.log(newProduct)

// DOM

// const title = document.createElement('h1');

// title.innerText = 'hola mundo desde js';

// const button = document.createElement('button');
// button.innerText = 'click';

// button.addEventListener('click', function() {
//     title.innerText = 'texto actualizado con JS'
//     alert('se realizo un click')
// })

// document.body.append(title);
// document.body.append(button)

// DESTRUCTURACION

// const user = {
//     name: 'joe',
//     age: 30,
// }

// function printInfo(user) {
//     return '<h1>Hola ' + user.name  + '</h1>';
// }
// console.log(printInfo(user))
// document.body.innerHTML = printInfo(user)

// FUNCIONES ANONIMAS

// function add ( x , y ) {
//     return x + y;
// }

// const add = () => {
//     return x + y;
// }


// const showText = () => 'hola mundo';
// const showNumber = () => 23;
// const showBoolean = () => true;
// const showArray = () => [1, 2, 3];
// const showObject = () => ({name: 'ryan'})

// console.log(showText());
// console.log(showNumber())
// console.log(showBoolean())
// console.log(showArray());
// console.log(showObject())

// const button = document.createElement('button');
// button.innerText = 'click me';
// button.addEventListener('click', () => {
//     alert('clicked');
// });

// document.body.append(button)


// const background = 'yellow';
// const color = 'white';
// const isAuthorized = false;



// const button = document.createElement('button');
// button.innerText = 'click me';
//  button.style = 'background: red; color: white;'
// button.style = `background: ${isAuthorized ? 'blue' : 'red'}; color: ${color}`


// button.addEventListener('click' , () => {
//     if(isAuthorized) {
//         return alert('autorizado')
//     } 
//         alert('no está autorizado')
    
// })

// document.body.append(button)


// ARRAY METHOD

// const names = ['ryan', 'joe', 'maria'];

// for (let i = 0 ; i < names.length; i++) {
//     const element = names[i];
//     console.log(element)
// }

// MAP
// const newNames = names.map(function(name) {
//     return `hola ${name}`
// })
// console.log(newNames)
// console.log(names)

// FIND

// const nameFound = names.find(function(name) {
//     if (name === 'joe')
//     return name
// })
// console.log(nameFound)

// FILTER

// const newNames= names.filter(function(name) {
//     if (name !== 'joe') {
//       return name  
//     }
    
// })
// console.log(newNames)
// console.log(names)

// const names = ['ryan', 'joe', 'maria'];
// const newNames = ['marcos', 'mario', 'john'];

// console.log(names.concat(newNames))
// console.log(names)
// console.log(newNames)

// CONCATENAR SIN CONCAT

// console.log([...names, ...newNames])

// const user = {
//     name: 'ryan',
//     lastname: 'ray'
// };

// const address = {
//     street: 'main street 123',
//     city: 'bogota'
// }

// const userInfo = {
//     ...user,
//     ...address
// }
// console.log(userInfo)
//     console.log(user)
//     console.log(address)


// ECMASCRIPT MODULES

// import {add , multiply, points, title, active} from './add.js'

// console.log(add(10, 20))
// console.log(multiply(10, 20))
// console.log(active, points, title)

// import addModule from './add.js'
// console.log(addModule)
// OPTIONAL CHAINING

// const person = {
//     name: 'ryan',
//     address: {
//         city: 'london'
//     }, 
//     location: {}
// }
// if (person.location) {
//     console.log(person.location?.city)
// }



// ASYNC AWAIT

// let data = fetch('https://jsonplaceholder.typicode.com/posts')

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( function () {
//         console.log('finalizó la carga')
//     })
// console.log('linea 2')


const ul = document.createElement('ul');


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( function (response) {
//        return response.json()       
//     }) .then(function(data) {
//         console.log(data)
//         // data.forEach( function(post){ 
//         //     const li = document.createElement('li');
//         //     li.innerText = post.title;
//         //     ul.append(li);  
//         // });
//         // document.body.append(ul)
//     });

async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();
    console.log(data)
    data.forEach( function(post){ 
            const li = document.createElement('li');
            li.innerText = post.title;
            ul.append(li);  
        });
        document.body.append(ul)
}
 loadData()
console.log('linea 2')

