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
const sayHi = function(name) {
  console.log('Привет ' + name)
}
sayHi('Елизовета')

const sumNum = function(a, b) {
  console.log(a + b)
}
sumNum(4, 4)

const sayHi1 = function(name, surname) {
  console.log(`Здравствуйте ${surname} ${name}!`)
}
sayHi1('Екатерина', 'Петрова')

const sayHi2 = function(name) {
  console.log(name)
}
sayHi2('Денис')

const sayHi3 = function(name) {
  console.log(name)
}
sayHi3('Лёха')

const sumNum1 = function(a, b) {
  console.log(a + b)
}
sumNum1(13, 3)

const sumNum2 = function(a, b, c) {
  console.log(a - b * c)
}
sumNum2(30, 5, 5)

const sayHi4 = function(name) {
  console.log(name)
}
sayHi('Кирилл')

const sumNum3 = function(a, b) {
  console.log(a - b)
}
sumNum3(60, 14)

const sumNum4 = function(a, b) {
  console.log(a / b)
}
sumNum4(49, 7)