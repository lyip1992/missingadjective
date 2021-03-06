/*
 * The Team class is for everyone other player in the game outside of the user
 * Inherits functions and properties of Player superclass
 * Username, position, player, team ID, flag status, and radius are defined server side and passed to players upon joining the game.
 * Team Id is either 0 or 1
 * Position is an Object with x and y values eg: {x: 50, y:230}
 * canvasContext refers to global canvas node
 */
 
var Team = function(username, id, position, canvasContext, teamId, radius) {
  Player.apply(this, arguments);
  this.team = teamId;
  if(this.team === 0) { // designates color based of being a teammate or enemy
    this.color = "rgb(0,0,200)";
  }
  else {
    this.color = "rgb(255,0,0)";
  }
};

Team.prototype = Object.create(Player.prototype);
Team.prototype.constructor = Team;
