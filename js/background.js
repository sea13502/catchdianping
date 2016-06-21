var isStarting = false;
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	//console.log( message );
    if(message == "start" ){
    	isStarting = true;
        sendResponse( isStarting );
    }
    if(message == "checkstart" ){
        sendResponse( isStarting );
    }
    if( message == "stopcatch" ){
    	isStarting = false;
        sendResponse( isStarting );
    }
});
//alert( chrome.extension.getBackgroundPage() );