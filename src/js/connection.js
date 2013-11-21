var PEER_JS_KEY = 'd1ex4hq2p3bit3xr';

function peerConnection(myId, connectToId,onReceived){
    var peer,
        peerId,
        connection;

    function init(){

//        var options = {
//            host: '192.168.60.89',
//            port:9000,
//            debug:true
//        };

        var options = {
            key: PEER_JS_KEY,
            debug:true,
            label: 'chat',
            serialization: 'none',
            reliable: false,
            metadata: {message: 'hi i want to chat with you!'}
        };

        peer = new Peer(myId,options);
        peer.on('open', onOpen);

        //this is a passive listener if others want to connect to me.
        peer.on('connection',onConnection);
    }

    function onOpen(id){

        console.log('My peer ID is: ' + id);

        peerId = id;
        $('h1').text(peerId);

        //we need to decide how to connect to another peer by name.

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
        console.log('i got a connection');

        connection.on('data', onDataRecieved);
        connection.send('Hi from class over p2p!');
    }



    function onDataRecieved(data){
        console.log('Received', data);
        if(onReceived){
            onReceived(data);
        }
    }

    function send(data){
        connection.send(data);
    }

    init();
    return{
        send:send
    };

}