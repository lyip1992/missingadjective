//this module is needed for matchmaker.js


var Defaults = require('./defaults.js');


//function to initialize the room
module.exports.initRoom = function(roomId, roomProperties) {

  //make a new room object for the roomId
  roomProperties[roomId] = {};

  //make an object that will store the player ids of the players in the room
  roomProperties[roomId].players = {};

  //initialize the number of players in the room to zero
  roomProperties[roomId].numPlayers = 0;

  //the team number that the next joining player will join
  roomProperties[roomId].teamToJoin = 0;

  //an object that will keep track of the scores for the different teams
  //the key is the team number
  roomProperties[roomId].teamScore = {};

  //initialize scores for each team to zero
  for(var i = 0; i < Defaults.NUM_TEAMS; ++i) {
    roomProperties[roomId].teamScore[i] = 0;
  }

  //put the flag in the default starting position
  roomProperties[roomId].flag = {position : Defaults.OBJECT_DEFAULT_COORDINATES['FLAG'], radius : Defaults.FLAG_RADIUS};

  //put the flag in the default starting position
  roomProperties[roomId].base0 = {position : Defaults.OBJECT_DEFAULT_COORDINATES['BASE0'], radius : Defaults.BASE_RADIUS};

    //put the flag in the default starting position
  roomProperties[roomId].base1 = {position : Defaults.OBJECT_DEFAULT_COORDINATES['BASE1'], radius : Defaults.BASE_RADIUS};

  //the team that has the flag; -1 means that no team has the flag
  roomProperties[roomId].teamWithFlag = -1;

};


//function to reset the room
module.exports.resetRoom = function(roomId, roomProperties) {

  //reset the team scores
  roomProperties[roomId].teamScore = {};
  for(var i = 0; i < Defaults.NUM_TEAMS; ++i) {
    roomProperties[roomId].teamScore[i] = 0;
  }

  //reset flag position
  roomProperties[roomId].flag.position = Defaults.OBJECT_DEFAULT_COORDINATES['FLAG'];

  //reset team with flag; -1 means that no team has the flag
  roomProperties[roomId].teamWithFlag = -1;

  //reset player positions
  //reset players to not have the flag
  var player;
  for(var playerId in roomProperties[roomId].players) {
    player = roomProperties[roomId].players[playerId];
    player.position = Defaults.PLAYER_DEFAULT_COORDINATES[player.team];
    player.hasFlag = false;
  }

};
