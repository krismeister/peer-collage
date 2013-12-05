(function () {
	"use strict";
	var Server = require('./modules/Server');
	var Build = require('./modules/Build');

	var args = [],
		command;

	function init(){
		console.log('Initing Peer To Peer Collage');
	
		//grab command line vars.
		command = process.argv[2];
		args = process.argv.slice(3);
	
		//is this a valid command?
		var validCommand = false;
		for(var key in module.exports){
			if(key === command){
				module.exports[key]();
				validCommand = true;
				break;
			}
		}
	
		if(!validCommand){
			//not a valid command
			console.log('Valid command not found');
			console.log('You must use one of the following commands :');
			for(var commandKey in module.exports){
				console.log('  ' + commandKey);
			}
			console.log('EXITING');
		}
	}

	function start(){
		Build.bin(function(){
			console.log('build complete, starting server');
		});
	}

	function testArgs(){
		console.log('testArgs command was given with args : ');
		console.info(args);
	}

	module.exports = {
		start : start
	};

	init();
}());
