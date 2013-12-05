var peerConnection;
$(function(){
	
	var connectionOptions = {
//		onConnectionReady: onConnectionReady,
		onDataRecieved : onDataRecieved
	};
	
	peerConnection = new peerConnection('master', null,connectionOptions);

    function onDataRecieved(data){
        console.log('data = ' + data);
		var img = "<img src='"+ data +"' + />";
		$('body').append(img);
    }
});