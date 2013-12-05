var PEER_JS_KEY = 'd1ex4hq2p3bit3xr';

function peerConnection(myId, connectToId, options){
    var peer,
        peerId,
        connection,
		o = {
			onConnectionReady: function(){},
			onDataRecieved : function(){}
		};
	
	o = $.extend(true,o,options);
		

    function init(){

//        var options = {
//            host: '192.168.60.89',
//            port:9000,
//            debug:true
//        };

        var connectionOptions = {
            key: PEER_JS_KEY,
            debug:true,
            label: 'chat',
            serialization: 'binary',
            reliable: false,
            metadata: {message: 'hi i want to chat with you!'}
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

        console.log('My peer ID is: ' + id);

        peerId = id;
        $('h1').text(peerId);

        //we need to decide how to connect to another peer by name.
		if(options)
        //if connectToId was passed then we want to activly connect.
        if(connectToId){
            console.log('trying to make connection');
            var c = peer.connect(connectToId);
            //listen to connectRequest
            console.log('listening to connection request');
            c.on('open', function() {
                onConnection(c);
            });
            c.on('error', function(err) { alert(err); });
        }
    }

    function onConnection(conn){
        connection = conn;
        connection.on('data', onDataRecieved);
		o.onConnectionReady();
    }

    function onDataRecieved(data){
		o.onDataRecieved(data);
    }

    function send(data){
        connection.send(data);
    }

    init();
    return{
        send:send
    };

}