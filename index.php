<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx58f26408796d28c7", "23b40ff878252cc6b37cbc4ed808f2dc");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/footer.css" />
 <script type="text/javascript" src="js/jquery-3.1.0.min.js" ></script>
 <script type="text/javascript" src="js/baiduTemplate.js" ></script>
 <script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
 <script src="lib/require.js" data-main='main'></script>
 
		<title></title>
	</head>
	<body>
		<div class="container">

  		</div>
  		
  		<footer>
  			<a href="#home">
				<dl>
					<dt><img src="images/home.png"></dt>
					<dd>首页</dd>
				</dl>
			</a>
			<a href="#market">
				<dl>
					<dt><img src="images/sscs.png"></dt>
					<dd>闪送超市</dd>
				</dl>
			</a>
			<a href="#book">		
				<dl>
					<dt><img src="images/xxyd.png"></dt>
					<dd>新鲜预定</dd>
				</dl>
			</a>
			<a href="#cart">	
				<dl>
					<dt><img src="images/cart.png"></dt>
					<dd>购物车</dd>
				</dl>
			</a>
			<a href="#mine">	
				<dl>
					<dt><img src="images/my.png"></dt>
					<dd>我的</dd>
				</dl>
			</a>
	</footer>
	<script type="text/javascript">
		document.documentElement.style.fontSize=innerWidth/10+"px";
		window.onresize=function(){
			document.documentElement.style.fontSize=innerWidth/10+"px";
		}
		
	wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        'checkJsApi',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });
	</script>
	
	</body>
</html>
