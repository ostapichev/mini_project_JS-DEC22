const url = new URL(location.href);
const post = JSON.parse(url.searchParams.get('data'));
const divComments = document.getElementsByClassName('comments')[0];
const divPost = document.getElementsByClassName('content')[0];

window.addEventListener('load', function () {
    for (let data in post) {
        const p = document.createElement('p');
        p.innerText = `${data}: ${post[data]}`;
        divPost.appendChild(p);
    }

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(users => {
            for (let user of users) {
                form.setAttribute(
                    'action',
                    `user-details.html?data= ${JSON.stringify(user)}`);
            }
        })

    fetch(`https://jsonplaceholder.typicode.com/posts/${post['id']}/comments`)
        .then(resp => resp.json())
        .then(comments => {
            for (let comment of comments) {
                const divComment = document.createElement('div');
                for (let data in comment) {
                    const p = document.createElement('p');
                    p.innerText = `${data}: ${comment[data]}`;
                    divComment.appendChild(p);
                }
                divComments.appendChild(divComment);
            }
        })
})