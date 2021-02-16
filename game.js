<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>The Team Stats</title>

  </head>

  <p id="sample"></p>
    <p id="demo"></p>

  <body>

    <script>

      //Question no 1
    const team = {
    //Question no 2
    _players: [
    //Question no 3
      {firstName: 'Daniel',
      lastName: 'Olajubu',
      age: 16},
      {firstName: 'Phebe',
      lastName: 'Ese',
      age: 14},
      {firstName: 'Desire',
      lastName: 'Adura',
      age: 12},
    ],
    //Question no 4
    _games: [
      {opponent: 'Nottingham',
      teamPoints: 50,
      opponentPoints: 35},
      {opponent: 'Derby',
      teamPoints: 40,
      opponentPoints: 29},
      {opponent: 'Manchester',
      teamPoints: 20,
      opponentPoints: 10},
    ],

    //Question no 5
    get players() {
      return this._players;
    },
    get games() {
       return this._games;
    },
    //Question no 6
    addPlayer(firstName, lastName, age) {
       const newPlayer = {
          firstName: firstName,
          lastName: lastName,
          age: age
       };
       this._players.push(newPlayer);
    },
    //Question no 8
    addGame(opponentName, teamPoints, opponentPoints) {
    const newGame = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(newGame);
    },
    };
    //Question no 7
    team.addPlayer('Stood', 'Orlando', 28);
    team.addPlayer('Larry', 'Mephis', 44);
    team.addPlayer('Barry', 'Blake', 76);

    team.addGame('Debeham', 61, 50);
    team.addGame('Eham', 35, 60);
    team.addGame('Dakka', 10, 40);

    onsole.log(team.players);
    console.log();
    console.log(team.game);

    //document.getElementById('sample').innerHTML = team.players;
    //document.getElementById('demo').innerHTML = team.game;

    </script>

  </body>
</html>
