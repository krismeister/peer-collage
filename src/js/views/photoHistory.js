// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/photos',
  'text!templates/photo/show.html'
], function($, _, Backbone,Photos, viewHtml){

  "use strict";
  
  var photoHistory = Backbone.View.extend({
      el: $("#last-photos"),
      renderOne: function(){
        var compiledTemplate = _.template( viewHtml, { photo: this.collection.at(this.collection.length -1) } );
        this.$el.prepend(compiledTemplate);
        var $firstImg = this.$el.find('img').first();
        _.delay(function(){
          $firstImg.removeClass('in-fx');
        }, 20);
      },
      initialize: function(){
        _.bindAll(this, "renderOne");
        this.collection = Photos.getInstance();
        this.collection.bind('add', this.renderOne);
      }
  });
  
  return photoHistory;
});