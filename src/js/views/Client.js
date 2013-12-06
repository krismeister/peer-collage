// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/connection',
  'text!templates/clientView.html'
], function($, _, Backbone,connection, clientViewHtml){
  
  var view,
    connectionInstance,
    connectionId,
    context2d;
    
  ClientView = Backbone.View.extend({
      el: $("body"),
      render: function(){
        //clientViewHtml
          this.$el.html( clientViewHtml );

          var canvas = document.getElementById("canvas"),
        	  video = document.getElementById("video"),
        	  videoObj = { "video": true };
          context2d = canvas.getContext("2d");

          // Put video listeners into place
          if(navigator.getUserMedia) { // Standard
            navigator.getUserMedia(videoObj, function(stream) {
              video.src = stream;
              video.play();
              $('body').addClass('camera-view');
            }, captureError);
          } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
            navigator.webkitGetUserMedia(videoObj, function(stream){
              video.src = window.webkitURL.createObjectURL(stream);
              video.play();
              $('body').addClass('camera-view');
            }, captureError);
          }
      },
      events: {
          "click #snap": "sendPhoto"
      },
      sendPhoto: function( event ){
         context2d.drawImage(video, 0, 0, 640, 480);
         //		var imageData = context.getImageData( 0, 0, 640, 480);
         var imageData = canvas.toDataURL();
         connectionInstance.send(imageData);
      }
  });
  
  function initilize(id){
    connectionId = id;
    view = new ClientView();
    connectionInstance = connection.getInstance();
    connectionInstance.on('open',onConnectionOpen);
    connectionInstance.listenTo(connectionInstance, 'opened', onConnectionOpen);
    connectionInstance.openConnection();
  }
  
  function onConnectionOpen(){
    console.log('connection is open');
    connectionInstance.listenTo(connectionInstance, 'connected', onConnectedToPeer);
    connectionInstance.connectToPeer('master-'+connectionId);
  }
  
  function onConnectedToPeer(){
    console.log('connection is open');
    view.render();
  }
  
  function captureError(error){
    console.log("Video capture error: ", error.code); 
  }
  
  return {
    initilize:initilize
  };
  
});