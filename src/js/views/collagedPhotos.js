// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/photos',
  'text!templates/tilePhotos/list.html',
  'text!templates/collagedPhotos/show.html'
], function($, _, Backbone,Photos, listViewHtml, viewHtml){

  "use strict";
  
  var CollagedPhotos = Backbone.View.extend({
      render: function(){
    //    var compiledTemplate = _.template( listViewHtml, { photos: this.collection.models } );
    //    this.$el.prepend(compiledTemplate);
      },
      renderOne: function(){
        var compiledTemplate = _.template( viewHtml, { photo: this.collection.at(this.collection.length -1) } );
        this.$el.append(compiledTemplate);
        var $firstImg = this.$el.find('img').first();
        _.delay(function(){
          $firstImg.removeClass('in-fx');
        }, 20);
      },
      initialize: function(){
        this.$el = $("#collaged-photos svg");
        _.bindAll(this, "renderOne");
        this.collection = Photos.getInstance();
        this.render();
        //now for new onse
        this.collection.bind('add', this.renderOne);
      },
      clean: function(){
        this.collection.unbind('add', this.renderOne);
        this.$el.empty();
      }
  });
  
  return CollagedPhotos;
});