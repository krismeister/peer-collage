define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Photo = Backbone.Model.extend({
    // Default attributes for the CollageImage
    defaults: function() {
      return {
  		  src : "http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/100px-Smiley.svg.png"
      };
    }
  });
  // Return the model for the module
  return Photo;
});