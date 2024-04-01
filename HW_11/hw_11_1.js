
// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users)=>{

        let ul = document.createElement('ul');
        document.body.appendChild(ul);

        for (const user of users) {

            let li = document.createElement('li');
            li.innerText = `name: ${user.name}, id: ${user.id}`;
            ul.appendChild(li);

            let a= document.createElement('a');
            a.href = 'users.html?id='+user.id;
            a.innerText= 'link';
            ul.appendChild(a);
        }
    });