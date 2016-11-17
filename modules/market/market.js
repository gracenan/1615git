define(['text!./market.html','css!./market.css'],function(html){
    function render(){
      $('.container').html(html);
    }

    //ajax
    function getData(data){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category="+data,
			async:true,
			success:function(req){
			var req=JSON.parse(req);
//				alert(req.data);
				var str="";
				$.each(req.data,function(i,elem){
					str+="<dl><dt><img src='"+elem.img+"'/></dt>";
					str+="<dd>"+elem.name+"</dd><dd><img src='images/jx.jpg'>";
					if( elem.pm_desc != ""){
						str+="<span>"+elem.pm_desc+"</span>";
					}
					str+="</dd><dd>"+elem.specifics+"</dd><dd><span>"+
					elem.price+"</span><span>"+elem.market_price+"</span></dd>";
					str+="<dd><img src='images/add.png' class='ad'></dd>";
					str+="<dd><div class='add'style='display:none'><img src='images/reduce.jpg' class='reduce_num'/><span>0</span><img src='images/add_num.png' class='add_num'/></div></dd></dl>";
				});
				$(".market_thingslist").html(str);
				
				 //右边的点击 +号 出现 .add  
				$.each($(".ad"), function(i,elem) {
					$(elem).on("touchstart",function(){						
						$(".add").eq(i).show();
						$(this).parents("dl").find(".add_num").trigger("touchstart");
	    		   })
				});	
				console.log($(".add_num"))
				$(".add_num").on("touchstart",function(e){    
					var num = parseInt($(this).siblings("span").html());
					num++;
					console.log(e.target);
					$(this).siblings("span").html(num);
				})
						//点击左边的减号
				$(".reduce_num").on("touchstart",function(){
				var num = parseInt($(this).siblings("span").html());
					num--;   		
					if(num<=0){   			 		   		
						$(this).parents(".add").hide();
					}		
					$(this).siblings("span").html(num);
				})
				}
			});
    }

    function bindEvent(){

    }

    function swiper(){
      
    }
    //左边的侧边栏的小黄色竖条条；
    function marketAside(){
    	var li=$("li");   	
    	$.each(li,function(i,elem) {  		
    		$(elem).on("touchstart",function(){
    			li.removeClass("border_left");
    			$(this).addClass("border_left");
    			$("li").css("background-color","#f8f8f8");
    			$(this).css("background-color","#fff"); 
    			
    			getData($(elem).text());
    		})
    	});
    }
   
    
    return {
      render:render,    
//    add:add,
      getData:getData,
       marketAside:marketAside,
    }
})
