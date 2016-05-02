var socketio = require('socket.io');
var fs = require('fs');
var path = require('path');

exports.listen = function( server, User, Manager ) {
  var io = socketio.listen(server);

  var unitsFilePath = path.join(__dirname + '/../app/units/units.json');

  var units = [];

  fs.readFile(unitsFilePath, {encoding: 'utf-8'}, function(err, dataUnits){
    if (!err){
      // console.log(data);
      units = JSON.parse( dataUnits );
      //console.log(units);
    }
    else {
      console.log(err);
    }
  });

  io.sockets.on('connection', function ( client ) {
    'use strict';
    console.log('socket.io connected');
    console.log(client.id);

    //init
    client.on('init', function () {
      client.emit('init', units);
    });
  });

};
