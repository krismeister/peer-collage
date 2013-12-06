define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(){
    
    "use strict";
    //getting it will start it if needed.
    Router.getRouter();
  };
  return {
    initialize: initialize
  };
});