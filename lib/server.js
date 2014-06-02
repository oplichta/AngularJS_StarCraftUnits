var socketio = require('socket.io');
var fs = require('fs');
var path = require('path');

exports.listen = function( server, User, Manager ) {
  var io = socketio.listen(server);

  var unitsFilePath = path.join(__dirname + '/../app/units/units.json');
  var zergFilePath = path.join(__dirname + '/../app/units/units-zerg.json');
  var terranFilePath = path.join(__dirname + '/../app/units/units-terran.json');
  var protossFilePath = path.join(__dirname + '/../app/units/units-protoss.json');

  var units = [];
  var zergUnits=[];
  var terranUnits=[];
  var protossUnits=[];

  fs.readFile(unitsFilePath, {encoding: 'utf-8'}, function(err, dataUnits){
    if (!err){
      // console.log(data);
      units = JSON.parse( dataUnits );
      // console.log(units);
    }
    else {
      console.log(err);
    }
  });
  fs.readFile(zergFilePath, {encoding: 'utf-8'}, function(err, dataZerg){
    if (!err){
      // console.log(data);
      zergUnits = JSON.parse(dataZerg);
      // console.log(units);
    }
    else {
      console.log(err);
    }
  });

  fs.readFile(terranFilePath, {encoding: 'utf-8'}, function(err, dataTerran){
    if (!err){
      // console.log(data);
      terranUnits = JSON.parse(dataTerran);
      // console.log(units);
    }
    else {
      console.log(err);
    }
  });

  fs.readFile(protossFilePath, {encoding: 'utf-8'}, function(err, dataProtoss){
    if (!err){
      // console.log(data);
      protossUnits = JSON.parse(dataProtoss);
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
    client.on('initz', function () {
      client.emit('initz', zergUnits);
    });
    client.on('initt', function () {
      client.emit('initt', terranUnits);
    });
    client.on('initp', function () {
    client.emit('initp', protossUnits);
    });

  });

};
