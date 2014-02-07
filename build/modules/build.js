(function () {
	"use strict";
	function bin(onComplete){

		var sys = require('sys');
		var spawn = require('child_process').spawn;
		var spawnedChild = spawn("grunt", ['deploy']);

		spawnedChild.stdout.on('data', function (data) {
			console.log('stdout: ' + data);
		});

		spawnedChild.on('close', function (code,signal) {
			console.log('Grunt completed code = ' + code );
			if(code === 0){
				console.log('Grunt Completed');	
				onComplete();
			}
		});
	}

	module.exports = {
		bin:bin
	};
}());