var peerConnection;
$(function(){
    peerConnection = new peerConnection('master7', 'client7',onRecieved);

    function onRecieved(data){
        console.log('data = ' + data);
    }
});