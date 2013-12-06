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
    connectionInstance.on('open',onConnectionOpen);
    connectionInstance.listenTo(connectionInstance, 'opened', onConnectionOpen);
    connectionInstance.openConnection('master-'+connectionId);
  }
  
  function onConnectionOpen(){
    console.log('connection is open');
    view.render();
    connectionInstance.listenTo(connectionInstance, 'dataRecieved', onDataRecieved);
  }
  
  function onDataRecieved(data){
    console.log('connection is open');
    var img = "<img src='"+ data +"' + />";
    $('#imgContainer').append(img);
    
  }
  
  return {
    initilize:initilize
  };
  
});