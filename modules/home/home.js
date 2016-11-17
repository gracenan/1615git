define(['text!./home.html','css!./home.css'],function(html){
    function render(){
      $('.container').html(html);
    }

    //ajax
    function getData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
			async:true,
			success:function(req){
//				console.log(req);
				var icon_first="";
				var icon_sec="";
				var req=JSON.parse(req);
				var menu=req.data.menu;
				//这是把四个dl放在了第一个叫做icon_first的div里；
				$.each(menu, function(i,elem){
					if(elem.activity.name=="抽奖"){
					icon_first+="<a href='icon_one.html'><dl>";
					icon_first+="<dt><img src='"+elem.activity.img+"'/></dt>";
					icon_first+="<dd>"+elem.activity.name+"</dd>";
					}
					if(elem.activity.name=="疯狂秒杀"){
					icon_first+="<a href='html/home_fkms.html'><dl>";
					icon_first+="<dt><img src='"+elem.activity.img+"'/></dt>";
					icon_first+="<dd>"+elem.activity.name+"</dd>";
					}
					if(elem.activity.name=="鲜货直供"){
					icon_first+="<a href='home_fkms.html'><dl>";
					icon_first+="<dt><img src='"+elem.activity.img+"'/></dt>";
					icon_first+="<dd>"+elem.activity.name+"</dd>";
					}
					if(elem.activity.name=="大闸蟹"){
					icon_first+="<a href='home_fkms.html'><dl>";
					icon_first+="<dt><img src='"+elem.activity.img+"'/></dt>";
					icon_first+="<dd>"+elem.activity.name+"</dd>";
					}
					if(elem.activity.name=="水果"){
						icon_sec+="<a href='home_fkms.html'><dl>";
					icon_sec+="<dt><img src='"+elem.activity.img+"'/></dt>";
					icon_sec+="<dd>"+elem.activity.name+"</dd>";
					}
					if(elem.activity.name=="乳品"){
						icon_sec+="<a href='home_fkms.html'><dl>";
						icon_sec+="<dt><img src='"+elem.activity.img+"'/></dt>";
					icon_sec+="<dd>"+elem.activity.name+"</dd>";
					}
					if(elem.activity.name=="卤味"){
						icon_sec+="<a href='home_fkms.html'><dl>";
						icon_sec+="<dt><img src='"+elem.activity.img+"'/></dt>";
					icon_sec+="<dd>"+elem.activity.name+"</dd>";
					}
					if(elem.activity.name=="零食"){
						icon_sec+="<a href='home_fkms.html'><dl>";
						icon_sec+="<dt><img src='"+elem.activity.img+"'/></dt>";
						icon_sec+="<dd>"+elem.activity.name+"</dd>";
					}
					
					icon_first+="</dl></a>";
					icon_sec+="</dl></a>";					
										
//					if(i>3){
//					icon_sec+="<dl>";
//					icon_sec+="<dt><img src='"+elem.activity.img+"'/></dt>";
//					icon_sec+="<dd>"+elem.activity.name+"</dd>";
//					icon_sec+="</dl>";											
//					}
										
				});

				//给页面元素增加内容
				$(".icon_first").html(icon_first);
								
				//这是把四个dl放在了第一个叫做icon_sec的div里；
				$(".icon_second").html(icon_sec);
								
			}
			
		});
		
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
			async:true,
			success:function(req){
				var req=JSON.parse(req);
				var slide=req.data.slide;
				var str="";
				for(var i in slide){
				str+="<img src='"+slide[i].activity.img+"' class='swiper-slide'/>"; 	   
				} 
				console.log(str);
				$(".swiper-wrapper").html(str);
				swiper();	
			}
		});
    }

    function bindEvent(){
    
    	$("#saoyisao").click(function(){
    	
//  		alert('------')
    		wx.scanQRCode({
		    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
		    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
		    success: function (res) {
		    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
		}
		});


    	})

    }

    function swiper(){
      var mySwiper = new Swiper ('.swiper-container', {
//				    direction: 'vertical',
				    loop: true,
				    //隔多少秒后跳到下一个banner
				    autoplay:1000,
				    //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
				    autoplayDisableOnInteraction:false,
				    // 如果需要分页器
				    pagination: '.swiper-pagination'
				})
    }

    return {
      render:render,
     	getData:getData,
     	bindEvent:bindEvent
     	
    }
})
