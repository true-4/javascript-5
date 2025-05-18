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