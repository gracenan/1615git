define(['backbone'],function(){
  
  var Router = Backbone.Router.extend({

      routes: {
        "home": "homeFn",
        "market": "marketFn",
        "book": "bookFn",
        "cart": "cartFn",
        "mine": "mineFn",
      
        "*actions":'defaultAction'
      },

      homeFn: function() {
          require(['./modules/home/home.js'],function(home){
            home.render();
            home.getData();
            home.bindEvent();
          })
      },
      marketFn: function() {
        require(['./modules/market/market.js'],function(market){
          market.render();
         market. marketAside();
//       market.add();
         market.getData();
        })
      },
      bookFn: function() {
   		require(['./modules/book/book.js'],function(book){
          book.render();
          book.getData();
        })
      },
      cartFn: function() {
		require(['./modules/cart/shoppingcart.js'],function(cart){
          cart.render();
        })
      },
      mineFn: function() {
		require(['./modules/mine/mine.js'],function(cart){
          cart.render();
        })

      },
         
      defaultAction:function(){
        location.hash = 'home'
      }
      
  });

  var router = new Router();
})
