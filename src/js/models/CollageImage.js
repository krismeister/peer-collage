var CollageImage = Backbone.Model.extend({

  // Default attributes for the CollageImage
  defaults: function() {
    return {
		imageSrcUrl : "http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/100px-Smiley.svg.png",
		sent : false,
		
    };
  }

});