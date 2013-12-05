var peerConnection;
$(function(){
	
	var $imgContainer = $('#imgContainer');
	
	var connectionOptions = {
//		onConnectionReady: onConnectionReady,
		onDataRecieved : onDataRecieved
	};
	
	peerConnection = new peerConnection('master', null,connectionOptions);

    function onDataRecieved(data){
        console.log('data = ' + data);
		var img = "<img src='"+ data +"' + />";
		
		$imgContainer.append(img);
    }
});