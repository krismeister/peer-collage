(function () {
	"use strict";
	function start(webroot,port){
		
		var paperboy = require('paperboy'),
		    http = require('http'),
		    path = require('path');

		webroot = path.join(__dirname, '../../'+webroot);

		http.createServer(function(req, res) {
		  var ip = req.connection.remoteAddress;
		  paperboy
		    .deliver(webroot, req, res)
		    .addHeader('X-Powered-By', 'Atari')
		    .before(function() {
		      console.log('Request received for ' + req.url);
		    })
		    .after(function(statusCode) {
		      console.log(statusCode + ' - ' + req.url + ' ' + ip);
		    })
		    .error(function(statusCode, msg) {
		      console.log([statusCode, msg, req.url, ip].join(' '));
		      res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
		      res.end('Error [' + statusCode + ']');
		    })
		    .otherwise(function(err) {
		      console.log([404, err, req.url, ip].join(' '));
		      res.writeHead(404, { 'Content-Type': 'text/plain' });
		      res.end('Error 404: File not found');
		    });
		}).listen(port);

		console.log('paperboy on his round at http://localhost:' + port);
	}
	
	function startPeerJs(){
		var PeerServer = require('peer').PeerServer;
		var server = new PeerServer({ 
				port: 9000 ,
				debug: true
			});	
			
		// var sys = require('sys');
		// var spawn = require('child_process').spawn;
		// var spawnedChild = spawn("node peerjs", ['--port 9000', '--debug true']);
		// 
		// spawnedChild.stdout.on('data', function (data) {
		// 	console.log('stdout: ' + data);
		// });
		// spawnedChild.stdout.on('error', function (data) {
		// 	console.log('stdout: ' + data);
		// });
	}

	module.exports = {
		start:start,
		startPeerJs:startPeerJs
	};
}());