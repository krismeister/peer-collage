var peerConnection;
$(function(){
	var connectionOptions = {
		onConnectionReady: onConnectionReady//,
//		onDataRecieved : function(){}
	};
	
	peerConnection = new peerConnection(null,'master',connectionOptions);

    function onReceived(data){
        console.log('data = ' + data);
    }

	function onConnectionReady(){
		setupPhotoTaker();
	}
	
	function setupPhotoTaker(){		
		// Grab elements, create settings, etc.
		var canvas = document.getElementById("canvas"),
			context = canvas.getContext("2d"),
			video = document.getElementById("video"),
			videoObj = { "video": true },
			errBack = function(error) {
				console.log("Video capture error: ", error.code); 
			};

		// Put video listeners into place
		if(navigator.getUserMedia) { // Standard
			navigator.getUserMedia(videoObj, function(stream) {
				video.src = stream;
				video.play();
			}, errBack);
		} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
			navigator.webkitGetUserMedia(videoObj, function(stream){
				video.src = window.webkitURL.createObjectURL(stream);
				video.play();
			}, errBack);
		}
		
		$('#snap').on('click',function(){
			context.drawImage(video, 0, 0, 640, 480);
			
//			var imageData = context.getImageData( 0, 0, 640, 480);
			var imageData = canvas.toDataURL();
			peerConnection.send(imageData);
		});
	}
});