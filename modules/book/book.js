define(['text!./book.html','css!./book.css'],function(html){
    function render(){
      $('.container').html(html);
    }

    //ajax
    function getData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",
			async:true,
			success:function(req){
				var req= JSON.parse(req);
				var str="";
				
				$.each(req.product, function(i,elem){
					
					str+="<dl><dt><img src='"+elem.img+"'/></dt>";
					str+="<dd><p>"+elem.name+"</p>";
					str+="<p>"+elem.price+"</p>";
					str+='<img src="images/car_red.png" /></dl>';
					
				});
				
				$(".booklist_show").html(str);
			}
		});
    }

    function bindEvent(){

    }

    function swiper(){
      
    }

    return {
      render:render,
      getData:getData
    }
})
