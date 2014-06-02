var socketio = require('socket.io');
var fs = require('fs');
var path = require('path');

exports.listen = function( server, User, Manager ) {
  var io = socketio.listen(server);

  var filePath = path.join(__dirname + '/../app/units/units.json');

  var units = [];
  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err){
      // console.log(data);
      units = JSON.parse( data );
      // console.log(units);
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
