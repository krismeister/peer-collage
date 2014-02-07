// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/connection',
  'collections/photos',
  'text!templates/client/main.html',
  'views/tilePhotos'
], function($, _, Backbone,connection, photos, viewHtml,TilePhotosView){
  
  "use strict";
  var view,
    connectionInstance,
    connectionId,
    context2d;
    
  var ClientView = Backbone.View.extend({
      el: $("body"),
      render: function(){
          this.$el.html( viewHtml );
          var tiledPhotos = new TilePhotosView();
          startVideo();
      },
      events: {
          "click #snap": "sendPhoto",
          "click #photo-shoot": "photoShoot"
      },
      photoShoot: function(e){
        _.delay(this.sendPhoto, 500);
        _.delay(this.sendPhoto, 2500);
        _.delay(this.sendPhoto, 4500);
        _.delay(this.sendPhoto, 6500);
      },
      sendPhoto: function( event ){
         context2d.drawImage(video, 0, 0, 320, 240);
         //		var imageData = context.getImageData( 0, 0, 640, 480);
         var imageUrl = canvas.toDataURL();
         connectionInstance.send(imageUrl);
         photos.getInstance().add({ src: imageUrl});
         document.getElementById('shutter-sound').play();
      }
  });
  
  function initilize(id){
    connectionId = id;
    view = new ClientView();
    connectionInstance = connection.getInstance();
    connectionInstance.on("change:open", onConnectionOpen);
    connectionInstance.openConnection();
  }
  
  function onConnectionOpen(){
    console.log('connection is open');
    connectionInstance.on("change:ready", onConnectedToPeer);
    connectionInstance.connectToPeer('master-'+connectionId);
  }
  
  function onConnectedToPeer(){
    console.log('connection is open');
    view.render();
  }
  
  
  function startVideo(){
    
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
    
  }
  
  
  function captureError(error){
    console.log("Video capture error: ", error.code); 
  }
  
  return {
    initilize:initilize
  };
  
});
