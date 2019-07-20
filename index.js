players = ["Player1", "Player2"];
colors = ["Red", "Blue"];

document.querySelector('#apt').onkeydown = function (e) {
    if (e.keyCode === 13) {
        addPlayer();
    }
};

addPlayer = function () {
    playerName = document.querySelector('#apt').value;
    if (playerName !== "") {
        if (players.indexOf(playerName) == -1) {
            players.push(playerName);
        }
    }
    document.querySelector('#apt').value = "";
    document.querySelector('#apt').focus();
    genPL();
};

delPlayer = function (playerName) {
    index = players.indexOf(playerName);
    players.splice(index, 1);
    colors.splice(index, 1);
    genPL();
};

clrPlayers = function () {
    players = [];
    colors = [];
    genPL();
};

emailTeams = function () {
    function teams() {
        redTeam = "";
        blueTeam = "";

        for (i = 0; i < players.length; i++) {
            if (colors[i] === "red") {
                redTeam += players[i] + ", ";
            } else if (colors[i] === "blue") {
                blueTeam += players[i] + ", ";
            }
        }

        redTeam += ",";
        blueTeam += ",";

        redTeam = redTeam.split(", ,")[0];
        blueTeam = blueTeam.split(", ,")[0];

        return "Red Team: " + redTeam + "<br> Blue Team: " + blueTeam;
    }

    if (players.length > 1) {
        if (colors.length = players.length) {
            document.querySelector("#mail").innerHTML = '<a id="mailto" href="mailto:?Subject=Team%20Generator&Body=' + teams() + '">Email Teams</a>';
        } else {
            document.querySelector("#mail").innerHTML = '<a id="mailto">No Teams to Email</a>';
        }
    } else {
        document.querySelector("#mail").innerHTML = '<a id="mailto">No Teams to Email</a>';
    }
};

genPL = function () {
    document.querySelector("#pl").innerHTML = " ";
    document.querySelector("#red").innerHTML = " ";
    document.querySelector("#blue").innerHTML = " ";
    if (players.length > 0) {
        pl = "Player List: ";
        for (i = 0; i < players.length; i++) {
            ne = document.createElement("div");
            ne.id = players[i];
            ne.className = "pli " + colors[i];
            ne.innerHTML = players[i] + '<input type="button" id="dp" onClick="delPlayer(' + "'" + players[i] + "'" + ')" value="Delete" />';
            if (colors[i] === "red" || colors[i] === "blue") {
                document.querySelector("#" + colors[i]).appendChild(ne);
            }
            pl += players[i] + ", ";
        }
    }
    if (colors.length < 1) {
        ne = document.createElement("div");
        ne.className = "pli";
        if (players.length > 0) {
            ne.innerHTML = 'No teams yet!';
        } else {
            ne.innerHTML = 'No players yet!';
        }
        document.querySelector("#red").appendChild(ne);

        ne = document.createElement("div");
        ne.className = "pli";
        if (players.length > 0) {
            ne.innerHTML = 'Click "Generate Teams"!';
        } else {
            ne.innerHTML = 'Add Some Players!';
        }
        document.querySelector("#blue").appendChild(ne);
    }
    if (players.length > 0) {
        pl += ",";
    } else {
        pl = "No players in the player list!\nType a name in the text box below and hit enter to add some!";
    }
    document.querySelector("#pl").innerHTML = pl.split(", ,")[0];
    emailTeams();
};

genPL();

genTeams = function () {
    colors = [];

    function colorGen() {
        rand = Math.floor(Math.random() * 2);

        if (rand > 0 && red > 0) {
            red--;
            return "red";
        } else if (blue > 0) {
            blue--;
            return "blue";
        } else {
            return "red";
        }
    }

    red = Math.round(players.length / 2);
    blue = red;

    for (i = 0; i < players.length; i++) {
        colors.push(colorGen());
    }

    genPL();
};

genTeams();

document.title = "Team Generator";