// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email,phone) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email= email;
    this.phone=phone
}
let users=[]
for (let i=0; i<10; i++){
    users.push(new User(i+1,`Name${i+1}`,`Surname${i+1}`,`surname${i+1}@g.mail.com`,`1000000${i+1}`))
};
console.log(users);

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filetrId= users.filter(value => value.id%2===0 );
console.log(filetrId);

//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortId= users.sort((user1,user2)=> {
    return user1.id - user2.id
    }
)
console.log(sortId);

//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, age,surname , email, phone, orders){
        this.id=id;
        this.name=name;
        this.age=age;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.orders=orders;
    };

    amountOfOrder(){
        let sum=0;
        for (const order of this.orders) {
            sum+= order.count;
        }
        return sum;
    };
}

let clients= [];
for (let i=0; i<10; i++) {
    clients.push( new Client(i+1, `name${i+1}`, i+20,`surname${i+1}`,`surname${i+1}@gmail.com`,`111222${i}`, [{count:i+1, name: 'sofa'},{count: (i+5)*5, name: 'tisch'}]))
}
console.log(clients);

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort=clients.sort((client1,client2)=>{
    return client1.amountOfOrder()-client2.amountOfOrder();
});
console.log(sort);

//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна.

function Cars(model,producer,year,maxspeed,engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine;

    //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    this.drive=function (){
        console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
    }

    //-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    this.info= function () {
        for (const key in this){
            if (typeof this[key] === 'function') continue;
            console.log(key.toUpperCase(),':', this[key])
        }
    }

    //-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    this.increaseMaxSpeed= function (newSpeed){
        if (newSpeed>this.maxspeed){
            this.maxspeed=newSpeed;
            console.log('*******');
            console.log('new maxSpeed');
            console.log('*******');
        }
    }

    //-- changeYear (newValue) - змінює рік випуску на значення newValue

    this.changeYear= function (newValue){
        this.year=newValue;
        console.log('*******');
        console.log('Smineno year');
        console.log('*******');
    }
}

//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

Cars.prototype.addDriver= function (driver){
    this.driver= driver;
}

let auto1= new Cars('m6', 'bmw', '2020', '250', '3.5')
console.log(auto1);
auto1.info();
auto1.drive();
auto1.increaseMaxSpeed(300);
auto1.info();
auto1.changeYear(2025);
auto1.info();
auto1.addDriver('Vasya');
auto1.info()


//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Clients{
    constructor(model,producer,year,maxspeed,engine){
        this.model=model;
        this.producer=producer;
        this.year=year;
        this.maxspeed=maxspeed;
        this.engine=engine;
    }

    //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    drive(){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }
    //-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    info(){
        for (const key in this) {
            console.log(key.toUpperCase(),':', this[key])
        }
    }

    //-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed){
        if (newSpeed>this.maxspeed){
            this.maxspeed=newSpeed;
        }
    }

    //-- changeYear (newValue) - змінює рік випуску на значення newValue

    chaneYear(newValue){
        this.year=newValue;
    }
}
    //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class ClientAndDriver extends Client{
    constructor(model,producer,year,maxspeed,engine,driver) {
        super(model,producer,year,maxspeed,engine);
        this.driver=driver;
    }

}


let client= new Clients('micro', 'nissan', 2020, 150, 1.5);
console.log(client);
console.log('-------------------')
client.drive();
console.log('-------------------')
client.info();
console.log('-------------------')
client.increaseMaxSpeed(200);
console.log('-------------------')
client.info()
console.log('-------------------')
client.chaneYear(2022);
console.log('-------------------')
client.info()
console.log('-------------------')
client.add

//створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelyushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let popelyushku=[];

for (let i=0; i<10; i++){
    popelyushku.push(new Popelyushka(`name${i}`, 20+i, 30+i))
}
console.log(popelyushku);

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prinz {
    constructor(name,age,sizeFind) {
       this.name=name;
       this.age=age;
       this.sizeFind=sizeFind;
    }
}
let prinz1= new Prinz('filip',30, 35);

console.log(prinz1);
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.

function snaytuPopelyshku(){
    for (const popelyushka of popelyushku) {
        if (popelyushka.size===prinz1.sizeFind){
            console.log(popelyushka);
        }
    }
}
snaytuPopelyshku();


//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findPopelyushka= popelyushku.find(value => value.size===prinz1.sizeFind);
console.log(findPopelyushka)