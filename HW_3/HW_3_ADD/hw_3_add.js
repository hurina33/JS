
let arr= [2,17,13,6,22,31,45,66,100,-18]

// 1. перебрати його циклом while

let i= 0;
while (i < arr.length){
    document.write(`<h2>${arr[i]}</h2>`);
    i++;
}

// 2. перебрати його циклом for

for (const number of arr) {
    document.write(`<h2>${number}</h2>`);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let a= 0;
while (a < arr.length){
    if ( arr[a]%2 !==0){
        document.write(`<h2>${arr[a]}</h2>`);
    }
    a++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (const number of arr) {
    if(number %2 !==0){
        document.write(`<h2>${number}</h2>`);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let b=0;
while (b<arr.length){
    if ( arr[b] %2 ===0){
        document.write(`<h2>${arr[b]}</h2>`);
    }
    b++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (const number of arr) {
    if (number %2 ===0){
        document.write(`<h2>${number}</h2>`)
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i=0; i<arr.length; i++) {
    if (arr[i] %3 ===0){
        arr[i]='okten';
        document.write(`<h2>${arr[i]}</h2>`)
    }
}

// 8. вивести масив в зворотньому порядку.

let arr1= [2,17,13,6,22,31,45,66,100,-18]

for (let d=arr1.length-1; d>=0; d--){
    document.write(`<h2>${arr1[d]}</h2>`)
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

