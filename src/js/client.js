var peerConnection;
$(function(){
    peerConnection = new peerConnection('client17', 'master17',onReceived);

    function onReceived(data){
        console.log('data = ' + data);
    }
});