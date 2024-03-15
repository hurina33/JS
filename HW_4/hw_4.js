
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sqm(a,b){
    return a*b;
}
let sum = sqm(5,5);
console.log(sum);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleSqm(r){
    return Math.PI*Math.pow(r,2);
}
let S= circleSqm(5);
console.log(S);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderSqm(r,h){
    return 2*Math.PI*r*h;
}
let cS= cylinderSqm(7,10);
console.log(cS);

//- створити функцію яка приймає масив та виводить кожен його елемент

function arrayLong(){
    document.write("<ul>");
    for (const argument of arguments) {
        document.write(`<li>${argument}</li>`);
    }
        document.write("</ul>");
}
arrayLong(11,33,77,66,55,99);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraf(p){
    return document.write(`<p>${p}</p>`);
}
paragraf('hi lylylyly');

///створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createLi (a){
    document.write('<ul>');
    for( let i=0; i<3; i++){
       document.write(`<li>${a}</li>`);
    }
    document.write('</ul>');
}
createLi('sobaka');

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createLiCount (a,count){
    document.write('<ul>');
    for( let i=0; i<count; i++){
        document.write(`<li>${a}</li>`);
    }
    document.write('</ul>');
}
createLiCount('sobaka2',4);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createArray(){
    for (const item of arguments) {
        document.write(`<li>${item}</li>`);
    }
}
createArray(33,88,true,'hhhh')

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users= [
    {id:101, name:'kolya', age:20},
    {id:102, name:'lilya', age:22},
    {id:103, name:'filya', age:11}
];

console.log(users);

function createBlock(id,name,age){
    document.write(`
        <div>
            <h3>
            id- ${id},
            name-${name},
            age -${age}
            </h3>
        </div>`)
}

for (const user of users) {
    createBlock(user.id,user.name,user.age)
}

// створити функцію яка повертає найменьше число з масиву

function minOfArray(){
    let min= arguments[0];
    for (const item of arguments) {
        if(item<min){
            min=item;
        }
    }
    console.log(min);
}
minOfArray(11,22,7,44,55,66,6,88,99);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


function sumOfArray(){
    let sum=0;
    for (const item of arguments) {
        sum += item;
    }
    console.log(sum);
}
sumOfArray(1,2,10,45)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями знаaення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arguments,index1,index2){
    let a = arguments[index1];
    arguments[index1]=arguments[index2];
    arguments[index2] = a;
    console.log(arguments);
}
let ind= swap((11,22,33,44),3,2);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const currencyValuesElements of currencyValues) {
        if (exchangeCurrency === currencyValuesElements.currency) {
            return sumUAH/currencyValuesElements.value +' '+`${currencyValuesElements.currency}`;
        }
    }
}
let a=[
    {currency:'USD', value:40},
    {currency:'EUR', value:50},
    {currency:'SSS', value: 100},
];
let summa= exchange(10000, a,  'EUR');
console.log(summa);









