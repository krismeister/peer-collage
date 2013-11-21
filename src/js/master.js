var peerConnection;
$(function(){
    peerConnection = new peerConnection('master4', 'client4',onRecieved);

    function onRecieved(data){
        console.log('data = ' + data);
    }
});