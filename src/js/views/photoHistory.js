// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/photos',
  'text!templates/photo/list.html'
], function($, _, Backbone,Photos, viewHtml){

    
  photoHistory = Backbone.View.extend({
      el: $("#last-photos"),
      render: function(){
        // Compile the template using Underscores micro-templating
        var compiledTemplate = _.template( viewHtml, { photos: this.collection.models } );
        this.$el.html(compiledTemplate);
      },
      initialize: function(){
        _.bindAll(this, "render");
        this.collection = Photos.getInstance();
        this.collection.bind('add', this.render);
      }
  });
  
  return photoHistory;
});