var peerConnection;
$(function(){
    peerConnection = new peerConnection('client7', 'master7',onRecieved);

    function onRecieved(data){
        console.log('data = ' + data);
    }
});