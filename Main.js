(function () {
	"use strict";
	
	var peerToPeerCollage = require('./server/PeerToPeerCollage');

	function init(){
		peerToPeerCollage.init();
	}

	module.exports = {
	  init: init
	};
}());