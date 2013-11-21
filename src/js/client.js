var PEER_JS_KEY = 'd1ex4hq2p3bit3xr';

$(function(){
    var peer,
        peerId;
    function init(){
        peer = new Peer('client',{key: PEER_JS_KEY});
        startConnection();
    }
    function startConnection(){
        peer.on('open', function(id) {
            console.log('My peer ID is: ' + id);
            peerId = id;
            $('h1').text(peerId);
        });
    }

    init();
});