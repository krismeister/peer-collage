require.config({
  paths: {
    jquery: 'libs/jquery-2.0.3',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    text: 'libs/text',
    peer: 'libs/peer_12-5-13_3d57a27746d3e1c7f2f3376b875258fdf3e4ca7b'
  },
	shim: {
    peer: {
      exports: 'Peer'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    }
  }
});

require([
  'app',
], function(App){
  
  "use strict";
  
  // The "app" dependency is passed in as "App"
  console.log('found app');
  App.initialize();
});