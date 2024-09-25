const url = 'https://jsonplaceholder.typicode.com/posts';

function fetchPosts(apiUrl) {
    fetch(apiUrl)
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

function displayError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;

    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    postsDiv.appendChild(errorDiv);
}

function displayPosts(posts) {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = ''; 

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h2>${post.title || post.name}</h2>
            <p>${post.body || post.body}</p>
        `;
        postsDiv.appendChild(postDiv);
    });
}

function displayComments(comments) {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = ''; 

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <h2>${comment.name}</h2>
            <p>${comment.body}</p>
        `;
        postsDiv.appendChild(commentDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    fetchPosts('https://jsonplaceholder.typicode.com/posts');

    //  link handling
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const apiUrl = event.target.getAttribute('data-url');
            fetchPosts(apiUrl);
        });
    });
});
