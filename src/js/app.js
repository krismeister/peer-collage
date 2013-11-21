$(function(){
    var peer,
        peerId;
    function init(){
        peer = new Peer('master',{key: 'd1ex4hq2p3bit3xr'});
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