
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let S =(a,b)=> a*b;
console.log(S(3,4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let sCircle= r=> Math.PI*r*r;
console.log(sCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderSqm=(r,h) => 2*Math.PI*r*h;
console.log(cylinderSqm(2,5));

//створити функцію яка приймає масив та виводить кожен його елемент
let c=[11,33,44,66,77];
let arr= c =>{
    for (const cElement of c) {
        document.write(`<p>${cElement}</p>`)
    }
};
arr(c);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let text= 'kokokoko';
let paragraf = text =>{
    document.write(text)
};
paragraf(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ulCreate = (li) => {
    document.write('<ul>');
    for (let i=0; i<3; i++) {
            document.write(`<li>${li}</li>`);
        }
        document.write('</ul>');
    }
ulCreate('sobaka');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulCreateAmount = (li,amount) => {
    document.write('<ul>');
    for (let f=0; f<amount; f++) {
        document.write(`<li>${li}</li>`);
    }
    document.write('</ul>');
}
ulCreateAmount('sobaka',6);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array= [33,88,true,'hhhh']
let createArray=(array)=>{
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
}
createArray(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let array2= [
    {id:101, name:'kolya', age:20},
    {id:102, name:'lilya', age:22},
    {id:103, name:'filya', age:11}
]
let otbor=((id,name,age)=>{
    document.write(`
            <div>
                <h2> 
                    id- ${id};
                    name-${name};
                    age-${age};
                </h2>
            </div>`)
})

let createBlock=arr=> {
        for (const arrElement of arr) {
            otbor(arrElement.id, arrElement.name, arrElement.age)
        }
    };
createBlock(array2);

// - створити функцію яка повертає найменьше число з масиву

let arrmin=[11,44,33,47,66]
let minArray= (arrmin)=>{
    let min=arrmin[0];
    for (const arrMinElement of arrmin) {
        if (arrMinElement<min){
            min=arrMinElement
        }
    }
    return console.log(min);
}
minArray(arrmin);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let array3=[1,33,22]
let sumArray= (arr)=>{
    let sum=0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    console.log(sum);
};
sumArray(array3);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arr4=[1,3,10,8];
let swap= ((arr,index1,index2)=>{
    let a= arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=a;
    return console.log(arr)
});
swap(arr4,1,2);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange=((sumUAH,currencyValues,exchangeCurrency)=>{
    for (const currencyValue of currencyValues) {
        if (exchangeCurrency===currencyValue.currency){
           return sumUAH/currencyValue.value +' '+`${currencyValue.currency}`}
            }
        }
    );
//vopros sdec??? pochemy return v if ???

let groshi= [
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
]
console.log(exchange(20000,groshi,'USD'))
