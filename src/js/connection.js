var PEER_JS_KEY = 'd1ex4hq2p3bit3xr';

function peerConnection(myId, connectToId,onRecieved){
    var peer,
        peerId,
        connection;

    function init(){

        var options = {
            host: '192.168.60.89',
            port:9000,
            debug:true
        };

//        var options = {
//            key: PEER_JS_KEY,
//            debug:true
//        };

        peer = new Peer(myId,options);
        peer.on('open', onOpen);
    }

    function onOpen(id){

        console.log('My peer ID is: ' + id);

        peerId = id;
        $('h1').text(peerId);

        //we need to decide how to connect to another peer by name.

        //i want to connect to 'client'
        peer.connect(connectToId);
        peer.on('connection', onConnection);
    }

    function onConnection(conn){
        connection = conn;
        console.log('i got a connection');

        connection.on('data', onDataRecieved);
        connection.send('Hi from class over p2p!');
    }



    function onDataRecieved(data){
        console.log('Received', data);
        if(onRecieved){
            onRecieved(data);
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