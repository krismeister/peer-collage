define([
  'jquery',
  'underscore',
  'backbone',
  'views/client',
  'views/master'
], function($, _, Backbone, clientView, masterView){
  
  "use strict";
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
    if(Backbone.history.location.href.indexOf('master') > -1){
      this.navigate('master/1', false);
    }else{
      this.navigate('client/1', false);
    }
  }
  
  function onClientRoute(id){
    console.log('client route ' + id);
    clientView.initilize(id);
  }
  
  function onMasterRoute(id){
    console.log('master route ' + id);
    masterView.initilize(id);
  }
  
  function getRouter(){
    if(!router){
      router = new AppRouter();
    }
    return router;
  }
  
  return { getRouter : getRouter};
  
});