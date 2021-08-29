const loadTeam = () => {
    const inputField = document.getElementById('input-team');
    const inputFieldValue = inputField.value;
    const resultSection = document.getElementById('result-section');
    resultSection.textContent = '';
    const pat = document.getElementById('pat');
    pat.textContent = '';
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputFieldValue}`)
        .then(response => response.json())
        .then(objectTeams => showTeam(objectTeams));
    inputField.value = '';
}
const showTeam = (objectTeams) => {
    // const resultSection = document.getElementById('team-sec');
    // const result = document.getElementsByClassName('result');
    const teams = objectTeams.teams;
    for (const team of teams) {
        console.log(team);
        const div = document.createElement('section');
        div.innerHTML = `
         <div class="result">
               <h1>${team.strTeam}</h1>
               <img class="w-50" src="${team.strTeamBadge}">
         </div>
        `;
        console.log(div);
        // div.classList.add('result');
        const resultSection = document.getElementById('result-section');
        console.log(resultSection);
        resultSection.appendChild(div);
        // console.log(div);
        // console.log(team);
    }
}
const loadPlayer = () => {
    const inputField = document.getElementById('input-player');
    const inputFieldValue = inputField.value;
    const pat = document.getElementById('pat');
    const allSection = document.getElementById('all-section');
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${inputFieldValue}`)
        .then(response => response.json())
        .then(data => showPlayer(data));
    // pat.textContent = '';
    allSection.textContent = '';
}
const showPlayer = (objectPlayer) => {
    const allSection = document.getElementById('all-section');
    const player = objectPlayer.player[0];
    // console.log(player);
    const creatDiv = document.createElement('section');
    creatDiv.innerHTML = `
         <div>
             <h1>${player.strPlayer}</h1>
             <img class="d-flex justify-content-center
            <img" src="${player.strFanart1}">
             <p>${player.strDescriptionEN.slice(0, 200)}</p>
         </div>
    `;
    allSection.appendChild(creatDiv);
    // console.log(creatDiv);
    // console.log(objectPlayer.player[0].strPlayer);
}
const loadLeaguages = () => {
    const inputField = document.getElementById('input-league');
    const inputFieldValue = inputField.value;
    const url = ` https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${inputFieldValue}%20League`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => showLeagues(data));
    const allSection = document.getElementById('all-section');
    allSection.textContent = '';
};
const showLeagues = (objectLeagues) => {
    // console.log(objectLeagues);
    const leagues = objectLeagues.teams;
    console.log(leagues);
    const allSection = document.getElementById('all-section');
    for (const team of leagues) {
        console.log(leagues);
        const creaDiv = document.createElement('div');
        creaDiv.innerHTML =
            `<div>
             <h1>${team.strAlternate}</h1>       
             <p><img src="${team.strTeamBadge}"></p>
             <p><img src="${team.strTeamBanner}"></p>
             <h1>Stadium:<img src="${team.strStadiumThumb}"></h1>
             <p>${team.strStadiumDescription}</p>
        </div>`;
        allSection.appendChild(creaDiv);
        console.log(creaDiv);
    }
    console.log(leagues);
}
// loadLeaguages();