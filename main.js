require.config({
  paths:{
    'jquery':'lib/jquery-v3.1',
    'backbone':'lib/backbone',
    'underscore':'lib/underscore',
    'text':'lib/text',
    'css':'lib/css',
    'swiper':'lib/swiper-3.3.1.min',
    'baiduTemplate':'js/baiduTemplate',
    'jquery.lazyload':'lib/jquery.lazyload' 
  },
  shim : {
  	'jquery.lazyload' : {
  		 deps: ['jquery']
  	}
  }
});
//Path里边写进入后，要在下面的依赖部分写进去
require(['jquery','backbone','./router.js','swiper','baiduTemplate','jquery.lazyload'],function($,Backbone){
 Backbone.history.start();
 
//底部的footer部分
 $("footer dl").eq(0).on("touchstart",function(){
		clearColor();
		$(this).children("dt").html('<img src="images/home_color.png">');
			
		})
 $("footer dl").eq(1).on("touchstart",function(){
		clearColor();
 		$(this).children("dt").html('<img src="images/sscs_color.png">');
 })
 $("footer dl").eq(2).on("touchstart",function(){
   	clearColor();
 	$(this).children("dt").html('<img src="images/xxyd_color.png">');
 })
 	
 	$("footer dl").eq(3).on("touchstart",function(){
   		clearColor();
 	$(this).children("dt").html('<img src="images/cart_color.png">');
 })
 		$("footer dl").eq(4).on("touchstart",function(){
   			clearColor();
 	$(this).children("dt").html('<img src="images/my_color.png">');
 })
 	
 	
})

function clearColor(){
	$("footer dl").eq(0).children("dt").html('<img src="images/home.png">');
	$("footer dl").eq(1).children("dt").html('<img src="images/sscs.png">');
	$("footer dl").eq(2).children("dt").html('<img src="images/xxyd.png">');
	$("footer dl").eq(3).children("dt").html('<img src="images/cart.png">');
	$("footer dl").eq(4).children("dt").html('<img src="images/my.png">');
}


 
