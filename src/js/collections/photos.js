define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/photo'
], function(_, Backbone, Photo){
  var Photos = Backbone.Collection.extend({
    model: Photo
  });
  
  var instance;
  
  function getInstance(){
    if(!instance){
      instance = new Photos();
    }
    return instance;
  }
  // You don't usually return a collection instantiated
  return {getInstance:getInstance};
});