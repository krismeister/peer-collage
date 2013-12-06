// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/connection',
  'text!templates/master/main.html'
], function($, _, Backbone,connection, viewHtml){
  
  var view,
    connectionInstance,
    connectionId,
    context2d;
    
  MasterView = Backbone.View.extend({
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
    connectionInstance.on("change:recievedData", onDataRecieved);
  }
  
  function onDataRecieved(){
    var data = connectionInstance.get('recievedData');
    var img = "<img src='"+ data +"' + />";
    $('#imgContainer').append(img);
  }
  
  return {
    initilize:initilize
  };
  
});