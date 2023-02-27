function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
let object = gameObject();
let home = gameObject().home;
let away = gameObject().away;
let players = { ...home.players, ...away.players };

function homeTeamName() {
    return object['home']['teamName'];
}
function numPointsScored(name) {
    for (p in players)
        if (p === name)
            return players[name].points;
}
function shoeSize(name) {
    for (p in players)
        if (p === name)
            return players[name].shoe;
}
function teamColors(teamName) {
    let values = Object.values(object);
    values.forEach(teams => {
        // console.log(teams.teamName);
        if (teams.teamName === teamName) {
            console.log(teams.colors);
            // return teams.colors;
        }
    });
}
function teamNames() { return [object.home.teamName, object.away.teamName]; }
function playerNumbers(teamName) {
    let values = Object.values(object);
    values.forEach(teams => {
        if (teams.teamName === teamName) {
            let teamNames = Object.keys(teams.players);
            teamNames.forEach(playerName => { console.log(teams.players[playerName].number) })
        }
    });
}
function playerStats(name) { return players[name]; }
function bigShoeRebounds() {
    let values = Object.values(players);
    let maxShoe = 0;
    values.forEach(stats => {
        if (maxShoe < stats.shoe) { maxShoe = stats.shoe; }
    });
    values.forEach(stats => {
        if (maxShoe === stats.shoe) { console.log(stats.rebounds); }
    });
}

console.log(gameObject());
console.log(homeTeamName());
console.log(numPointsScored("Ben Gordon"));
console.log(shoeSize("Jason Terry"));
teamColors("Charlotte Hornets");
console.log(teamNames());
playerNumbers("Charlotte Hornets");
console.log(playerStats("Jason Terry"));
bigShoeRebounds();