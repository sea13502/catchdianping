$("body").append( "<button id='catchbtn' style='position:absolute;top:0;left:0;width:150px;height:50px;'>开始抓取</button>" );
$("body").append( "<button id='stopbtn' style='position:absolute;top:55px;left:0;width:150px;height:50px;'>停止抓取</button>" );
$("#catchbtn").on("click",function(){
	chrome.runtime.sendMessage("start", function(response){ 
	    console.log( response );
	});
	startCatching();
});
$("#stopbtn").on("click",function(){
	chrome.runtime.sendMessage("stopcatch", function(response){

	});
});
function startCatching(){
	$(".txt").each(function(i,item){
	    if( $(item).find(".tit h4").html() ){
	    	console.log( "店铺信息",$(item).find(".tit a").attr("title"),$(item).find(".comment .sml-rank-stars")[0].title,$(item).find(".addr").html() );
	    }
	});
	//console.log( $(".cur").next().click() );
	setTimeout(function(){
		//alert(1);
		$(".cur").next().trigger("click");
		//console.log( $(".shop-wrap .page .cur").next()[0].href );
		window.location = $(".shop-wrap .page .cur").next()[0].href;
	},3000);
}



chrome.runtime.sendMessage("checkstart", function(response){
    if( response ){
    	startCatching();
    }
});