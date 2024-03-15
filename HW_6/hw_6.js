//- Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
let string1= 'hello world';
let string2='lorem ipsum';
let string3='javascript is cool';

//Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'

let stringBig1= string1.toUpperCase();
let stringBig2= string2.toUpperCase();
let stringBig3= string3.toUpperCase();
console.log(stringBig1);
console.log(stringBig2);
console.log(stringBig3);

//- Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let stringLittle1= stringBig1.toLowerCase();
let stringLittle2= stringBig1.toLowerCase();
let stringLittle3=stringBig3.toLowerCase();
console.log(stringLittle1);
console.log(stringLittle2);
console.log(stringLittle3);

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str1 = ' dirty string   '
let subsString= str1.substring(str1.indexOf('d'),str1.lastIndexOf('g')+1);
console.log(subsString);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні';
let strSplit=str2.split(' ');
console.log(strSplit);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let array2=[10,8,-7,55,987,-1011,0,1050,0];
let mapedArray2= array2.map(value => value+'');
console.log(mapedArray2);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// ; sortNums(nums,'ascending') // [3,11,21] sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let  sortNumsAsc= (arr,direction)=>{
    if(direction==='ascending'){
        return arr.sort((a,b) =>a-b)
    }
    if (direction==='descending'){
        return arr.sort((a,b) =>b-a)
}}
console.log(sortNumsAsc(nums,'descending'));

//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortCoursesAndDurationArray= coursesAndDurationArray.sort((a,b)=> {
    return b.monthDuration-a.monthDuration});
console.log(sortCoursesAndDurationArray);

let filterCoursesAndDurationArray = coursesAndDurationArray.filter((course)=>course.monthDuration>5);
console.log(filterCoursesAndDurationArray);

let mapCoursesAndDurationArray= coursesAndDurationArray.map((value,index)=>({id:index+1,title:value.title, monthDuration: value.monthDuration}));
console.log(mapCoursesAndDurationArray);

// описати колоду карт (від 6 до туза без джокерів)

let cardSuits= ['spade', 'diamond','heart', 'clubs'];
let cardValues= [6,7,8,9,10, 'ace','jack','queen','king'];

let cards=()=>{
    let all=[];
    for (const cardSuit of cardSuits) {
        for (const cardValue of cardValues) {
            all.push({cardSuit: cardSuit, value:cardValue})
        }
    }
    all.map(value => value.cardSuit==='diamond' || value.cardSuit==='heart'? value.color='red' : value.color='black');
    return all;
};

let all=cards()
console.log(all);

//  - знайти піковий туз
let tyz= all.find (item=> item.value=== 'king'&& item.cardSuit==='spade');
console.log(tyz);

//  - всі шістки

let shistku= all.filter( item=> item.value===6);
console.log(shistku);

//  - всі червоні карти

let chervoni= all.filter( item=> item.color==='red');
console.log(chervoni);

//  - всі буби

let byba= all.filter(item=>item.cardSuit==='diamond');
console.log(byba);

//  - всі трефи від 9 та більше

let trefa= all.filter(item=> item.cardSuit==='clubs'&& item.value>= 9 || typeof item.value === 'string' && item.cardSuit==='clubs');
console.log(trefa);


//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {spades:[],diamonds:[],hearts:[],clubs:[]}

let koloda= all.reduce((accumulator, card)=>{
    if (card.cardSuit === 'spade'){
        accumulator.spades.push(card);
    }
    if (card.cardSuit === 'diamond'){
        accumulator.diamonds.push(card)
    }
    if (card.cardSuit === 'heart'){
        accumulator.hearts.push(card)
    }
    if (card.cardSuit === 'clubs'){
        accumulator.clubs.push(card)
    }
    return accumulator;
},
    {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(koloda)

//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sass= coursesArray.filter(item=> item.modules.includes('sass'));
console.log(sass);
let docker= coursesArray.filter(item=> item.modules.includes('docker'));
console.log(docker);