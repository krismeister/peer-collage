define([
  'jquery',
  'underscore',
  'backbone',
  'views/Client'
], function($, _, Backbone, clientView){
  
  var router;
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'master/:id': 'showMaster',
      // Default
      'client/:id': 'showClient',

      // Default
      '': 'defaultAction'
    },
    initialize:function(){
      Backbone.history.start();
    },
    defaultAction:onDefaultRoute,
    showMaster:onMasterRoute,
    showClient:onClientRoute
  });
  
  function onDefaultRoute(){
    console.log('default route');
    this.navigate('client/1', true);
  }
  
  function onClientRoute(id){
    console.log('client route ' + id);
    clientView.initilize(id);
  }
  
  function onMasterRoute(id){
    console.log('master route ' + id);
  }
  
  function getRouter(){
    if(!router){
      router = new AppRouter();
    }
    return router;
  }
  
  return { getRouter : getRouter};
  
});