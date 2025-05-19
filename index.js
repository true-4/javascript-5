'use strict'

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

const greet1 = (name) => {return `Здравствуйте ${name}!`}
console.log(greet1('Олег'))