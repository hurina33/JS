//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr;
arr= [1,2,3,4,5,6,7,8,9,10]

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1= {
    tittle: 'Book one',
    pageCount: 111,
    genre:'genre1',
}

let book2= {
    tittle: 'Book two',
    pageCount: 222,
    genre:'genre2',
}
let book3 = {
    tittle: 'Book three',
    pageCount: 333,
    genre:'genre3',
}
console.log(book1);
console.log(book2);
console.log(book3);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4= {
    tittle: 'Book four',
    pageCount: 111,
    genre:'genre1',
    authors: ['Petya', 44]
}

let book5= {
    tittle: 'Book five',
    pageCount: 222,
    genre:'genre2',
    authors: ['Olya', 55]
}
let book6 = {
    tittle: 'Book sex',
    pageCount: 333,
    genre:'genre3',
    authors: ['Vasya', 66]
    }

console.log(book4);
console.log(book5);
console.log(book6);

//- Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {id: 'user1', name:'user1', username: 'user_1', password: 11},
    {id: 'user2', name:'user2', username: 'user_2', password: 22},
    {id: 'user3', name:'user3', username: 'user_3', password: 33},
    {id: 'user4', name:'user4', username: 'user_4', password: 44},
    {id: 'user5', name:'user5', username: 'user_5', password: 55},
    {id: 'user6', name:'user6', username: 'user_6', password: 66},
    {id: 'user7', name:'user7', username: 'user_7', password: 77},
    {id: 'user8', name:'user8', username: 'user_8', password: 88},
    {id: 'user9', name:'user9', username: 'user_9', password: 99},
    {id: 'user10', name:'user10', username: 'user_10', password: 100},
    ];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//Логічні розгалуження:
//- Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x=1;
if (x !== 0) {
    document.write(' <p>Вірно</p>');
}else{
    document.write(' <p>Невірно</p>');
}
x=0;
if (x !== 0) {
    document.write(' <p>Вірно</p>');
}else{
    document.write(' <p>Невірно</p>');
}

x=-3;
if (x !== 0) {
    document.write(' <p>Вірно</p>');
}else{
    document.write(' <p>Невірно</p>');
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time=59;

if ( time>0 && time<=15){
    time='quater1';
    console.log(time);
}else
    if (time>15 && time<=30){
        time='quater2';
        console.log(time);
    }else
        if (time>30 && time<=45){
            time='quater3';
            console.log(time);
        } else
            if (time>45 && time<60) {
                time = 'quater4';
                console.log(time);
            }

//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=11;
if (day>=0 && day<=10){
    day='firstDecadeOfMonth';
    console.log(day);
}else
    if (day>10 && day<=20){
        day= 'secondDecadeOfMonth';
        console.log(day);
    }else
        if (day>20 && day<=31){
            day='thirdDecadeOfMonth';
            console.log(day);
        }
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).

let dayWeek= +prompt('Введіть номер тижня');

switch (dayWeek){
    case 1:
        document.write('Monday');
        break;
    case 2:
        document.write('Tuesday');
        break;
    case 3:
        document.write('Wednesday');
        break;
    case 4:
        document.write('Thursday');
        break;
    case 5:
        document.write('Friday');
        break;
    case 6:
        document.write('Saturday');
        break;
    case 7:
        document.write('Sunday');
        break;
}

//Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .Також потрібно врахувати коли введені рівні числa.

let c=+prompt('Введіть довільне число 1'),
    y=+prompt('Введіть довільне число 2');

if (c>=y) {
    document.write(`<h2> ${c}</h2>`); //  konketenaciya
}else {
    if (c < y) {
    document.write(`<h2> ${y} </h2>`);
    }
}

//змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)



//з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
//У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration>5){
    console.log('SUPER')
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log('SUPER')
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log('SUPER')
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log('SUPER')
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log('SUPER')
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log('SUPER')
}