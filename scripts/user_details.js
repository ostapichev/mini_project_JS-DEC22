const url = new URL(location.href);
const user = JSON.parse(url.searchParams.get('data'));
const divData = document.getElementsByClassName('data')[0];
const titlePosts = document.getElementsByClassName('hide-posts')[0];
const returnToUsers = document.getElementById('returnToUsers');
const showPost = document.getElementById('show-post');

window.addEventListener('load', function () {
    titlePosts.classList.toggle('posts');

    for (let data in user) {
        const p = document.createElement('p');
        p.innerText = `${data} - ${JSON.stringify(user[data])}`
            .replace(/[{}"']/g, ' ');
        divData.appendChild(p);
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${user['id']}/posts`)
        .then(resp => resp.json())
        .then(posts => {
            for (let post of posts) {
                const postBlock = document.createElement('div');
                const title = document.createElement('p');
                const formPost = document.createElement('form');
                const button = document.createElement('button');

                postBlock.classList.add('post');
                title.innerText = `${post['title']}`;
                button.innerText = 'More about the post';
                button.classList.add('about-post');
                formPost.appendChild(button)
                formPost.setAttribute('method', 'post');
                formPost.setAttribute(
                    'action',
                    `post-details.html?data= ${JSON.stringify(post)}`
                );
                formPost.appendChild(button);
                postBlock.append(title, formPost);
                titlePosts.appendChild(postBlock);
            }
        });
})

showPost.addEventListener('click', function () {
    titlePosts.classList.toggle('hide-posts');
    titlePosts.classList.toggle('posts');
})