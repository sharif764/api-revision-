const mainResult = {
    teams: [
        { idTeam: "137970", idSoccerXML: null, idAPIfootball: "272", intLoved: null, strTeam: "KA", },
        { idTeam: "137971", idSoccerXML: null, idAPIfootball: "2113", intLoved: null, strTeam: "HK", },
        { idTeam: "141037", idSoccerXML: null, idAPIfootball: "4382", intLoved: null, strTeam: "Ba", },
        { idTeam: "141152", idSoccerXML: null, idAPIfootball: "9175", intLoved: null, strTeam: "MP", },
        { idTeam: "141291", idSoccerXML: null, idAPIfootball: "13465", intLoved: null, strTeam: "MB", },
        { idTeam: "133605", idSoccerXML: "10", idAPIfootball: "72", intLoved: null, strTeam: "QPR", },
        { idTeam: "133743", idSoccerXML: "159", idAPIfootball: "1124", intLoved: null, strTeam: "OFI", },
        { idTeam: "133753", idSoccerXML: "169", idAPIfootball: "575", intLoved: null, strTeam: "AEK", },
        { idTeam: "133894", idSoccerXML: "310", idAPIfootball: "402", intLoved: null, strTeam: "AaB", },
        { idTeam: "134011", idSoccerXML: "431", idAPIfootball: "377", intLoved: "1", strTeam: "AIK" }]
}
const forOtherTeam = mainResult.teams;
for (const team of forOtherTeam) {
    console.log(team.idTeam);
}


