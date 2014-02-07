(function () {
	"use strict";
	
	var peerToPeerCollage = require('./build/app');

	function init(){
		peerToPeerCollage.init();
	}

	module.exports = {
	  init: init
	};
}());