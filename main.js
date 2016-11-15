require.config({
  paths:{
    'jquery':'lib/jquery-v3.1',
    'backbone':'lib/backbone',
    'underscore':'lib/underscore',
    'text':'lib/text',
    'css':'lib/css'
  }
});

require(['jquery','backbone','./router.js'],function($,Backbone){
 Backbone.history.start();
 

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


 
