//Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.forms['form1'];
form1.onsubmit = function (e) {
    e.preventDefault();
    let user = {
        name: this.name.value,
        surname: this.surname.value,
        age: this.age.value
    }
    divUser.innerText = `${user.name}, ${user.surname}, ${user.age}`;
};

let divUser = document.createElement('div');
document.body.appendChild(divUser);




// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1

let divNumber = document.createElement('div');
divNumber.classList.add('number');
document.body.appendChild(divNumber);

let a = localStorage.getItem('number');
a = a ? a : 0;

let h1 = document.createElement('h1');
h1.innerText = a;
divNumber.appendChild(h1);

window.onload = function () {
    localStorage.setItem('number', ++a);
}


let hr1 = document.createElement('hr');
hr1.classList.add('hr');
document.body.appendChild(hr1);




// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховuще, в масив sessions зберігається інформація
// про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

function saveVisit(){
    let arrayAllSessions = JSON.parse(localStorage.getItem('sessions')) || [] ;
    let date= new Date();
    arrayAllSessions.push({
        month: date.getMonth(),
        date: date.getDay(),
        hours: date.getHours(),
        minutes: date.getMinutes()
    })
    localStorage.setItem('sessions',JSON.stringify(arrayAllSessions));
}
saveVisit();

function readSessions(){
    let sessions= JSON.parse(localStorage.getItem('sessions'))
    let ul=document.createElement('ul');
    document.body.appendChild(ul);
    for (const session of sessions) {
        let li=document.createElement('li')
        ul.appendChild(li);
        li.innerText=`month:${session.month}, date:${session.date}, hours:${session.hours}, minutes:${session.minutes}`;
    }
    }
readSessions();


// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let array=[];
for (let i=1; i<100; i++){
    array.push(i);
}

let next=document.createElement('button');
next.innerText='next';

let prev=document.createElement('button');
prev.innerText='prev';

document.body.append(next,prev);

let ulForArray=document.createElement('ul');
document.body.appendChild(ulForArray);

const count= 10;
let step = 0;

function printNumbers(){
    let start=step*count;
    let end= start+count;

    let newArray = array.slice(start,end);

    for (let i=0; i<newArray.length; i++) {
        let liForArray = document.createElement('li');
        ulForArray.appendChild(liForArray);
        liForArray.innerText = newArray[i];
    }
}

printNumbers();

next.onclick = function (){
    step= Math.min(++step, array.length/count);
    printNumbers();
}
prev.onclick = function (){
    step=Math.max(0, --step);
    printNumbers();
}


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".

let h2 = document.createElement('h2');
h2.setAttribute('id', 'text');
h2.innerText = 'Guten Morgen!';
document.body.appendChild(h2);

let button = document.createElement('button');
button.innerText = 'text delete';
document.body.appendChild(button);

button.onclick = function () {
    let textEl = document.getElementById('text');
    document.body.removeChild(textEl);
}

let hr = document.createElement('hr');
hr.classList.add('hr');
document.body.appendChild(hr);



// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let inputAge = document.createElement('input');
inputAge.classList.add('age');
document.body.appendChild(inputAge);

let buttonForAge = document.createElement('button');
buttonForAge.innerText = 'Перевірка віку';
document.body.appendChild(buttonForAge);

let p = document.createElement('p');
document.body.appendChild(p);

buttonForAge.onclick = function () {
    let age = inputAge.value;
    let ageNumber= +age;

    if (age === ageNumber+"") {
        if (age > 18) {
            p.innerText = 'Вам білше 18 років';
        }else {
            p.innerText = 'Вам ше немае 18 років'
        }
    }else{
       p.innerText = 'Введіт числове значення';
    }
}


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let form2 = document.forms.form2;
let inputLine = form2.line;
let inputCell = form2.cell;
let inputZmist = form2.zmist;

form2.onsubmit =  function createTabel(e){
    e.preventDefault();

    let tabel=document.createElement('table');
    document.body.appendChild(tabel);

    for (let i=0; i<inputLine.value; i++){
        let tr=document.createElement('tr');
        tr.classList.add('tabel')
        tabel.appendChild(tr);
        for (let i=0; i<inputCell.value; i++){
            let td=document.createElement('td');
            td.classList.add('tabel')
            td.innerText = inputZmist.value;
            tabel.appendChild(td);
        }

    }
}


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


function saveVisit2() {

    let divUah = document.createElement('div');
    document.body.appendChild(divUah);

    let arrayAllSess = JSON.parse(localStorage.getItem('sess')) || [];

    let date = new Date();
    let price = 100;
    console.log(price);

    divUah.innerText = price;

    let now = date.getTime();
    let lastSess = arrayAllSess[arrayAllSess.length - 1]?.milis;

    if (now - lastSess > 1000 * 10 || arrayAllSess.length === 0) {
        price = price + 10;
        arrayAllSess.push({
            price:price,
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            milis: date.getTime(),
        })
    }
    localStorage.setItem('sess', JSON.stringify(arrayAllSess));
}

saveVisit2();