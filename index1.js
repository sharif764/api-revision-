const post = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => showPost(data));

};
const showPost = (posts) => {
    const getDiv = document.getElementById('divmain');
    posts.map(post => {
        const postId = post.id;
        const newDiv = document.createElement('p');
        newDiv.innerHTML = `<h2 onclick="gotopage(${postId})">${post.id}</h2><h3>${post.title}</h3>
        <div>${post.body}</div>`;
        // console.log(post);
        getDiv.appendChild(newDiv);
        // console.log(post.id);
    })
}
const gotopage = (post) => {

    const url = `https://jsonplaceholder.typicode.com/posts/${post}`;
    // https://jsonplaceholder.typicode.com/posts/1....https://jsonplaceholder.typicode.com/posts/${post}
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(`shairf${post}`));
}
post();