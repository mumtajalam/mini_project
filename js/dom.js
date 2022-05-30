// Boolean
// String
// Number

// Array
// Object
// Map, Set, WeakMap, WeakSet


// var sttr = '<div class="header"><div class="logo newclass">Logo</div><div>Search</div><div>Button</div><div>More Options</div><div>Cart</div></div>';

// var arr = ['<div class="header">', [div, h1, span, div, [div, div, [div, div]]]];


// var obj = {
//     header: {
//         div: {
//             h1: 'liauwegf',
//             h2: 'uigf'
//         },
//         div: {
//             p: 'para',
//         }
//     },
//     main: {
//         div: {
//             h1: 'liauwegf',
//             h2: 'uigf'
//         },
//         div: {
//             p: 'para',
//         }
//     },
//     footer: {
//         div: {
//             h1: 'liauwegf',
//             h2: 'uigf'
//         }
//     }
// }


// window.document


// window - Browser
// document - Current HTML Page


// window.document
// document
// DOM - Document Object Model

// BOM - Browser Object Model
// window.history - to store tab history

// window.location - details of current page URL
// reload, page change

// window.console.log('mumtaj');
// window.alert('my name is mumtaj');

// var ret = window.confirm('Are you Single');
// console.log(ret);

// if(ret){
//     console.log('you can visit this page');
// }else{
//     console.log('you can visit this page');
// }

// var ret2 = prompt('Enter your name...');
// console.log(ret2);

// localStorage and sessionStorage - temp storage of data in browser

// innerHeight and innerWidth
// window.screen

// window.navigator - browser technical detail

let movie_name = document.getElementById('movie_name').innerHTML;
console.log(movie_name);

document.getElementById('movie_name').innerHTML = 'Badshah';

// window.onload(
    
// )

let cast = document.getElementsByClassName('cast');
let paras = document.getElementById('movie_name');

// console.log(cast);
console.log(paras.innerText);

console.log(cast[0].innerHTML);
console.log(cast[1].innerHTML);

// console.log(paras[0].innerHTML);
// console.log(paras[1].innerHTML);

// var movies_names = document.querySelector('.movie #movie_name');

// var movies_cast = document.querySelectorAll('.movie span');
// console.log(movies_names);
// console.log(movies_cast);

// document.querySelector('.movie span')[0].innerHTML = 'janvikapoor';

// innerHTML/innerText/textContent - Access/Write content inside any element
{/* <div>My name</div> */}

// let temp_div = document.createElement('div');
// console.log(temp_div);


