// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/connection',
  'text!templates/master/main.html',
  'views/tilePhotos',
  'views/collagedPhotos'
], function($, _, Backbone,connection, viewHtml, TilePhotosView, CollagedPhotosView){
  
  "use strict";
  var view,
    photosView,
    connectionInstance,
    connectionId,
    context2d;
    
  var MasterView = Backbone.View.extend({
      el: $("body"),
      render: function(){
          this.$el.html( viewHtml );
      }
  });
  
  function initilize(id){
    connectionId = id;
    view = new MasterView();
    connectionInstance = connection.getInstance();
    connectionInstance.on("change:open", onConnectionOpen);
    connectionInstance.openConnection('master-'+connectionId);
  }
  
  function onConnectionOpen(){
    connectionInstance.on("change:ready", onConnectionReady);
  }
  
  function onConnectionReady(){
    view.render();
    photosView = new TilePhotosView();
//    photosView = new CollagedPhotosView();
  }
  
  return {
    initilize:initilize
  };
  
});