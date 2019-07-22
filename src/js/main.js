"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

// User welcome 
const welcome = (name, age) => {
  console.log(`Witaj ${name}, masz ${age}`)
}

// welcome('Pav', 37 )

const myName = 'Pav';
const myAge = 37;

welcome(myName, myAge);
welcome('Pav', 37);

const button = document.querySelector('.header_button--js');
console.log(button);

function handleClick(e) {
  console.log(e);
  console.log('halo')
}
//metoda 1
//button.addEventListener('click', handleClick);

//metoda 2
button.addEventListener('click', (e) => {
  console.log(e.target);
  console.log('hello arrow');
  const header = document.querySelector('.header__title--js');
  header.innerHTML = 'klik klik';
  header.classList.toggle('header__title--red');
  if (header.classList.contains('header__title--red')) {
    console.log('jest klasa');
  } else {
    console.log('nie ma klasy');
  }
  //alert('hello');
});

const navigationSwitcher = document.querySelector('.navigation__switcher--js')

navigationSwitcher.addEventListener('click', (e) => {
  const navigationList = document.querySelector('.navigation__list--js');
  navigationList.classList.toggle('navigation__list--visable');
});


