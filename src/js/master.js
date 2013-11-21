var peerConnection;
$(function(){
    peerConnection = new peerConnection('master17', null,onReceived);

    function onReceived(data){
        console.log('data = ' + data);
    }
});