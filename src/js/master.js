var peerConnection;
$(function(){
    peerConnection = new peerConnection('master5', 'client5',onRecieved);

    function onRecieved(data){
        console.log('data = ' + data);
    }
});