$(function(){
	var li=$("li");

	$(li).each(function(i,elem){
		$(elem).click(function(){
			// alert(i);
		li.removeClass("border_left");
		$(this).addClass("border_left");
		})
	})
	
})