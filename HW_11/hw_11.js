//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) => {

        for (const cart of carts) {

            let ul= document.createElement('ul');
            document.body.appendChild(ul)
            ul.innerText = `id: ${cart.id} userId: ${cart.userId}`;

            for (const product of cart.products) {
                let li = document.createElement('li');
                let pr= product;
                li.innerText =`product.id: ${pr.id} title: ${pr.title} price: ${pr.price} quantity: ${pr.quantity} total: ${pr.total}`;
                ul.appendChild(li);
            }
        }
       });


// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({recipes})=>{

        for (let recipe of recipes){
            let h2 = document.createElement('h2');
            h2.innerText = recipe.name;
            document.body.appendChild(h2);

            let ul= document.createElement('ul');
            document.body.appendChild(ul)

            for (let ingredient of recipe.ingredients){
                let li = document.createElement('li');
                li.innerText = ingredient;
                ul.appendChild(li);
            }
        }
    });

