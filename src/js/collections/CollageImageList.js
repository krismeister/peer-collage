var CollageImageList = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: CollageImage,

    // Filter down the list of all todo items that are finished.
    done: function() {
      return this.where({sent: true});
    }

  });