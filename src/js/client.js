var peerConnection;
$(function(){
    peerConnection = new peerConnection('client5', 'master5',onRecieved);

    function onRecieved(data){
        console.log('data = ' + data);
    }
});