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
