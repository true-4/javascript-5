'use strict'

// 1
// Function Declaration
function sey(name) {
  return 'Hello ' + name
}
console.log(sey('Vlad'))

function fullName(firstName, lastName) {
  console.log(`Имя: ${firstName}, Отчество: ${lastName}.`)
}
fullName('Владислав', 'Дмитриевич')

function hi(name) {
  console.log(`Привет, ${name}!`)
}
hi('Алёна')

function hi1(name) {
  console.log('Hi ' + name + '!')
}
hi1('Виктор')

function hi2(name) {
  console.log(`Привет ${name}`)
}
hi2('Alex')

function hi3(name) {
  console.log(`Hi ${name}`)
}
hi3('Veoleta')

function sum(a, b) {
  console.log(a + b)
}
sum(35, 11)

function sum1(a, b) {
  console.log(a - b)
}
sum1(10, 6)

function sum2(a, b, c) {
  console.log(a - b / c)
}
sum2(10, 24, 6)

function sum3(a, b) {
  console.log(a ** 2 + b)
}
sum3(4, 4)

// Function Expression
const sayHi = function say(name) {
  console.log('Привет ' + name)
}
sayHi('Елизовета')

const sumNum = function sum(a, b) {
  console.log(a + b)
}
sumNum(4, 4)

const sayHi1 = function say1(name, surname) {
  console.log(`Здравствуйте ${surname} ${name}!`)
}
sayHi1('Екатерина', 'Петрова')

const sayHi2 = function say2(name) {
  console.log(name)
}
sayHi2('Денис')

const sayHi3 = function say(name) {
  console.log(name)
}
sayHi3('Лёха')

const sumNum1 = function sum1(a, b) {
  console.log(a + b)
}
sumNum1(13, 3)

const sumNum2 = function sum2(a, b, c) {
  console.log(a - b * c)
}
sumNum2(30, 5, 5)

const sayHi4 = function say4(name) {
  console.log(name)
}
sayHi('Кирилл')

const sumNum3 = function sum3(a, b) {
  console.log(a - b)
}
sumNum3(60, 14)

const sumNum4 = function sum4(a, b) {
  console.log(a / b)
}
sumNum4(49, 7)

// Arrow Function
const sumArr = (a, b) => a + b
console.log(sumArr(7, 7))

const seyArr = (name) => console.log(`Привет ${name}!`)
seyArr('Яна')

const sayArr1 = (name) => console.log('Привет ' + name)
sayArr1('Алина')

const sayArr2 = (name, surname) => console.log(`Здравствуйте ${surname} ${name}!`)
sayArr2('Каролина', 'Ким')

const sayArr3 = (name) => console.log(`Доброе утро ${name}!`)
sayArr3('Илья')

const sayArr4 = (name) => console.log('Привет ' + name + '!')
sayArr4('Сергей')

const sumArr1 = (a, b) => console.log(a - b)
sumArr1(9, 3)

const sumArr2 = (a, b) => console.log(a % b)
sumArr2(10, 4)

const sumArr3 = (a, b) => console.log(a * b)
sumArr3(2, 5)

const sumArr4 = (a) => console.log(a ** 2)
sumArr4(5)

// Анонимная функция (внутри setTimeout, forEach, map, и т.п.)
setTimeout(function() {
  console.log('Через 5 сек');
}, 5000)

setTimeout(function() {
  console.log('Через 4 сек')
}, 4000)

setTimeout(function() {
  console.log('Через 3 сек')
}, 3000)

setTimeout(function() {
  console.log('Через 2 сек')
}, 2000)

setTimeout(function() {
  console.log('Через 1 сек')
}, 1000)

const array = [1, 2, 3];
array.forEach(function(item) {
  console.log('Число: ' + item)
})

const array1 = [3, 2, 1]
array1.forEach(function(item) {
  console.log(item)
})

const array2 = ['top', 'right', 'bottom', 'left']
array2.forEach(function(item) {
  console.log(item)
})

const array3 = [30, 46, 60]
array3.forEach(function(item) {
  console.log(item)
})

const array4 = ['M3', 'M5', 'M8']
array4.forEach(function(item) {
  console.log(item)
})

const num = [2, 3, 4]
const square = num.map(function(n) {
  return n * n
})
console.log(square)

const num1 = [3, 9]
const square1 = num1.map(n => n * n) 
console.log(square1)

const name = ['Игорь', 'Слава']
const users = name.map(function(name) {
  return name
})
console.log(name)

const user1 = name.map(name => name)
console.log(user1)

const stickersNum = [9919, 1999, 9199, 9991]
const stickers = stickersNum.map(function(sticker) {
  return '№ Стикера: ' + sticker
})
console.log(stickers)

const stickers1 = stickersNum.map(sticker => sticker)
console.log(stickers1)

const sumIn = function(a, b) {
  return a + b
}
console.log(sumIn(4, 8))

const sumIn1 = (a, b) => {return a * b}
console.log(sumIn1(4, 11))

const greet = function(name) {
  return 'Приветствую ' + name + '!'
}
console.log(greet('Ольга'))

const greet1 = (name) => {return `Здравствуйте ${name}!`};
console.log(greet1('Олег'));

// Немедленно вызываемая функция (IIFE)
(function() {
  const text = 'Немедленно вызываемая функция (IIFE)'
  console.log(text)
})();

(function(name) {
  console.log(`Привет ${name}!`)
})('Оксана');

(() => {
  console.log('IIFE функция')
})();

((name) => {
  console.log('Доброе утро ' + name + '!')
})('Евстигней');

(function(a, b) {
  console.log(a + b)
})(8, 3);

((a, b) => {
  console.log(a - b)
})(11, 6);

(function(name, surname) {
  return 'Здравствуйте ' + name + ' ' + surname + '!'
})(console.log('Егор', 'Мэтура'));

((a, b) => {
  console.log(a / b)
})(4999, 20);

(function(brand) {
  console.log(brand)
})('BMW');

((brand, modal) => {
  console.log(`Вы выбрали ${brand} ${modal}`)
})('BMW', 'M3');

// 2
// 2.1
const hello = (name) => {console.log(`Привет ${name}!`)}
hello('Евгений')

// 2.2
function sumNumber(a, b) {
  return a + b
}
console.log(sumNumber(11.3, 22))

// 2.3
function discountParity(n) {
  return n % 2 == 0
}
console.log(discountParity(8))

// 2.4
const arr = [2, 3, 4]
const arrNew = arr.map(n => n ** 2) 
console.log(arrNew)

// 2.5
function str (n) {
  return n.toUpperCase()
}
console.log(str('hello'))

// 2.6
const arrArr = [1, 3, 4, 8]
const arrFunc = (n) => { return arrArr.includes(n) }
console.log(arrFunc(2))

// 2.7
function table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(i * n)
  }
}
table(3)

// 2.8
function isPol(str) {
  const normalizedStr = str.toLowerCase() // Приводим к нижнему регистру
  const cleanedStr = normalizedStr.replace(/[^a-z0-9]/g, '') // Удаляем все ненужные символы
  const reversedStr = cleanedStr.split('').reverse().join('') // Разворачиваем строку
  return cleanedStr === reversedStr
}
console.log(isPol('abcba'))

// 2.9
setTimeout(function() {
  console.log('Анонимная функция внутри setTimeout, которая выводит сообщение через 2 секунды')
}, 2000);

// 2.10
((text) => { console.log(text)})('Скрипт запущен');

// 4
// 4.1
function sayHello() {
  return 'Hello '
}

function userHello(name) {
  const say = sayHello()
  return say + name
}
console.log(userHello('Vlad'))

// 4.2
function valueDdefault(name = 'Jec', age = 27) {
  return `Меня зовут ${name}, мне ${age}!`
}
console.log(valueDdefault())

// 4.3
function block(name) {
  function inner() {
    return name
  }
  return inner
}
console.log(block('Egor')())

// 4.4
function factorial(n) {
  if(n === 1) return 1
  return n * factorial(n - 1)
}
console.log(factorial(4))

// 4.5
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d
      }
    }
  }
}
console.log(sum(1)(2)(3)(4))

// 4.6
function average(...numbers) {
  const sum = numbers.reduce((n, num) => n + num, 0);
  return sum / numbers.length;
}
console.log(average(4, 8, 9))

// 4.7
function counter() {
  let count = 0
  function strainer() {
    count++
    return count
  }
  return strainer
}
const muCounter = counter()
console.log(muCounter())
console.log(muCounter())
console.log(muCounter())

// 4.8
function argSum() {
  const args = Array.from(arguments)
  return args.reduce((n, num) => n + num, 0);
}
console.log(argSum(1, 2, 3, 4, 5, 6, 7))
console.log(argSum(3, 5, 7))
console.log(argSum(1, 3, 4, 7))

// 4.9
const arrOrig = ['hi', 'hello', 'ola']
const arrClone = arrOrig.map(el => el)
console.log(arrClone)

// 4.10
function delayLog(callback, delay) {
  setTimeout(callback, delay);
}

delayLog(function() {
  console.log('Привет через 2 секунды');
}, 2000);

// 5
// 5.1
// function sayHi11() { // объявляем function declaration 
//   console.log("Hi!"); // выводит в консоль Hi! РЕЗУЛЬТАТ Hi!
// }
// const result = sayHi11(); // объявляем переменную и присваиваем ей функцию
// console.log(result); // выводим переменную которая вызывает функцию. РЕЗУЛЬТАТ undefined


// 5.2
// function getUser(name = "Гость") { // объявляем function declaration с параметрами и его значением по умолчанию(при вызове функции можно передать имя и оно заменит его)
//   return "Привет, " + name; // возвращаем строку Привет сложенную с параметром. РЕЗУЛЬТАТ Привет, Гость
// }

// 5.3
// const f = function () { // объявление Function Expression анонимная версия
//   return "Hello"; // возвращает hello
// };
// console.log(f()); // выводим функцию в сонсоль и вызываем её. Выведет Hello

// 5.4
// const multiply = (a, b) => a * b; // объявляем стрелочную функцию с параметрами и использовали их
// console.log(multiply(3, 4)); // выводим в консоль функцию и вызываем её передавая парамтры. Выведет 12

// 5.5
// (function () { // объявление IIFE немедленный вызов
//   console.log("IIFE работает");  // вывод в консоль IIFE работает
// })(); // вызов функции. РЕЗУЛЬТАТ IIFE работает


// 6
// 6.1
function power(n, exp) {
  return n ** exp
}
console.log(power(5, 2))

// 6.2
function max(a, b, c)  {
  return Math.max(a, b, c)
}
console.log(max(2, 9, 4))

// 6.3
const arrayNum = [1, 2, 3, 4, 5]
function sortArr() {
  return arrayNum.sort((a, b) => b - a)
}
console.log(sortArr())

// 6.4
const strOrig = 'далВ'
function strRev() {
  return strOrig.split('').reverse().join('')
}
console.log(strRev())

// 6.5
function isPrime(num) {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
console.log(isPrime(89))