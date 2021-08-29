const loadMeal = () => {
  const searchField = document.getElementById('input');
  const searchValue = searchField.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(response => response.json())
    .then(data => showMeals(data.meals));
  // console.log(searchValue);
  searchField.value = '';
}
const showMeals = (foods) => {
  const get = document.getElementById('main');
  // console.log(foods);

  foods.forEach(food => {
    const creat = document.createElement('div');
    creat.innerHTML = `  <div id ="alldiv" class="col">
        <div class="card">
          <img src="${food.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>`
    get.appendChild(creat);
  })
}
loadMeal();
const result = () => {
  const get = document.getElementById('main');
  get.textContent = '';
  const searchField = document.getElementById('input');
  const searchValue = searchField.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(respons => respons.json())
    .then(data => showResult(data.meals[0]));

  searchField.value = '';
};
const showResult = (food) => {
  const get = document.getElementById('main')


  const creat = document.createElement('div');
  creat.innerHTML = `  <div id ="alldiv" class="col">
            <div class="card">
              <img src="${food.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>`
  get.appendChild(creat);
}