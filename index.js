const url = 'https://jsonplaceholder.typicode.com/posts';

function fetchPosts() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            return response.json();
        })
        .then(posts => {
            console.log(posts); 
            displayPosts(posts);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayPosts(posts) {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = ''; 

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsDiv.appendChild(postDiv);
    });
}

document.addEventListener('DOMContentLoaded', fetchPosts);
