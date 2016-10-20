

function getGif(tag){
	var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+tag;
	jQuery.getJSON(url, handleOtters);

}

function handleOtters (json) {
	console.log('handleOtters', json);
	var img=document.createElement('img');
	img.src=json.data.image_url;
	document.body.appendChild(img);
}