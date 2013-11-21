var peerConnection;
$(function(){
    peerConnection = new peerConnection('client4', 'master4',onRecieved);

    function onRecieved(data){
        console.log('data = ' + data);
    }
});