const loadResturantInformationByName = () => {
    const inputField = document.getElementById('inpuMeal');
    if (inputField == null) {
        console.log('nothing');
    }

    if (inputField.value == undefined) {
        return 0;
    }

    const inputFieldValue = inputField.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`)
        .then(response => response.json())
        .then(data => showFoods(data.meals));
}
const showFoods = (foods) => {
    console.log(foods);
    for (const food of foods) {
        const creatDiv = document.createElement('section');
        creatDiv.innerHTML = `
           <div onclick="loadNew()">
           <h1>${food.strMeal}</h1>
           <div><img src="${food.strMealThumb}"></div>
           <div>${food.strInstructions}</div></div>
          `;
        console.log(creatDiv);
        const appnDiv = document.getElementById('main');
        const specials = creatDiv.classList.add('special');
        appnDiv.appendChild(creatDiv);
        const show = document.getElementById('show');
        show.textContent = '';
    }
}
const loadNew = () => {
    const show = document.getElementById('show');
    show.textContent = '';
    const neww = document.createElement('div');
    neww.innerHTML = `<div>
    hi i am sharif please nk me;
    </div>`
    neww.classList.add('back');
    show.appendChild(neww);

    // console.log(neww);
}
    // const specials = creatDiv.classList.add('special');
    ;
// loadResturantInformationByName();