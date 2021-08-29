const randomUser = () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => showData(data));
};
const showData = (data) => {
    const show = data;
    const main = document.getElementById('main');
    const creatDiv = document.createElement('section');
    creatDiv.innerHTML = `
        <div>
        <h1>${data.results[0].name.title} ${data.results[0].name.first}</h1>
        <p>${data.results[0].phone}\n${data.results[0].email}</p>
        <div>
         <p>${data.results[0].phone}\n<img style="width:500px" src="${data.results[0].picture.thumbnail}"></img></p>
        </div>
        </div>
        `;
    main.appendChild(creatDiv);

}
randomUser();