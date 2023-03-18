window.addEventListener('load', function (eo) {
    eo.preventDefault();
    const container = document.getElementById('container');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(users => {
            for (let user of users) {
                const userBlock = document.createElement('div');
                const userid = document.createElement('p');
                const username = document.createElement('p');
                const form = document.createElement('form');
                const button = document.createElement('button');

                userBlock.classList.add('user');
                userid.classList.add('id');
                username.classList.add('name');
                button.classList.add('button');
                userid.innerText = `${Object.keys(user)[0]}: ${user['id']}`;
                username.innerText = `${Object.keys(user)[1]}: ${user['name']}`;
                button.innerText = 'More detail';

                form.appendChild(button);
                form.setAttribute('method', 'post');
                form.setAttribute(
                    'action',
                    `user-details.html?data= ${JSON.stringify(user)}`
                );

                userBlock.append(userid, username, form);
                container.appendChild(userBlock);
            }
        })
})