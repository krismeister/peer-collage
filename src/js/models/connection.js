define([
  'jquery',
  'underscore',
  'backbone',
  'peer',
  'collections/photos'
], function($, _, Backbone, Peer, photos){
  "use strict";
  
  var instance,
    peer;
    
  var Connection = Backbone.Model.extend({
    defaults: function() {
      return {
        connectionName : "Unknown",
        open :false,
        ready:false,
        peerJsKey : 'd1ex4hq2p3bit3xr',
        peerJsUrl : window.location.protocol + "//" + window.location.hostname + ':9000',
        connection : null
      };
    },
    openConnection: openConnection,
    connectToPeer: connectToPeer,
    send: send
  });
  
  function openConnection(myId){
    var connectionOptions = {
        key: this.get('peerJsKey'),
        debug:true,
        serialization: 'binary',
        reliable: false,
        recievedData : null
    };
    
    if(myId){
      peer = new Peer(myId,connectionOptions);
    }else{
      peer = new Peer(connectionOptions);
    }
    
    peer.on('open', onOpen);
    //this is a passive listener if others want to connect to me.
    peer.on('connection',onConnection);
  }
    
  function onOpen(id){
    getInstance().set('connectionName',id);
    getInstance().set('open',true);
  }

  function connectToPeer(peerId){
    var c = peer.connect(peerId);
    //listen to connectRequest
    console.log('listening to connection request');
    c.on('open', function() {
        onConnection(c);
    });
    c.on('error', function(err) { alert(err); });
  }  

  function onConnection(conn){
    getInstance().set('connection',conn);
    getInstance().set('ready',true);
    getInstance().get('connection').on('data', onDataRecieved);
  }

  function onDataRecieved(data){
    photos.getInstance().add({ src: data});
    getInstance().set('recievedData',data);
  }

  function send(data){
      getInstance().get('connection').send(data);
  }
  
  function getInstance(){
    if(!instance){
      instance = new Connection();
    }
    return instance;
  }
  
  return {
    getInstance:getInstance
  };
});
