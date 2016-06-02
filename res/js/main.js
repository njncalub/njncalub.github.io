(function() {
  var _gaq=[['_setAccount','UA-49038623-1'],['_trackPageview']];
  (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src='//www.google-analytics.com/ga.js';
  s.parentNode.insertBefore(g,s)}(document,'script'));
  
  window.fbAsyncInit = function() {
    FB.init({
      appId: '263458120711469',
      xfbml: true,
      version: 'v2.6'
    });
  };
  
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  
  $(document).ready(function() {
    $('.navigation li').each(function(index) {
      $(this).delay(500*index).fadeIn("slow");
    });
  });
}());
