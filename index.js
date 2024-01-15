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


const background = 'yellow';
const color = 'blue';

const button = document.createElement('button');
button.innerText = 'click me';
// button.style = 'background: red; color: white;'
button.style = `background: ${background}; color: ${color}`

const isAuthorized = false;
button.addEventListener('click' , () => {
    if(isAuthorized) {
        return alert('autorizado')
    } 
        alert('no está autorizado')
    
})

document.body.append(button)