// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/photos',
  'text!templates/photo/list.html',
  'text!templates/photo/show.html'
], function($, _, Backbone,Photos, listViewHtml, viewHtml){

  "use strict";
  
  var TiledPhotos = Backbone.View.extend({
      render: function(){
        var compiledTemplate = _.template( listViewHtml, { photos: this.collection.models } );
        this.$el.prepend(compiledTemplate);
      },
      renderOne: function(){
        var compiledTemplate = _.template( viewHtml, { photo: this.collection.at(this.collection.length -1) } );
        this.$el.prepend(compiledTemplate);
        var $firstImg = this.$el.find('img').first();
        _.delay(function(){
          $firstImg.removeClass('in-fx');
        }, 20);
      },
      initialize: function(){
        this.$el = $("#tiled-photos");
        _.bindAll(this, "renderOne");
        this.collection = Photos.getInstance();
       // this.$el.empty();
        this.render();
        //now for new onse
        this.collection.bind('add', this.renderOne);
      },
      clean: function(){
        this.collection.unbind('add', this.renderOne);
      }
  });
  
  return TiledPhotos;
});