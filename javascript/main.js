function Scroll(){
	var top = document.getElementById('header');
	var ypos = window.pageYOffset
	
	if(ypos > 100){
		top.style.height = "55px";
	}
	else{
		top.style.height = "70px";
	}
	
}

window.addEventListener("scroll", Scroll);

$(document).ready(function(){
  $('.nav-text').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset-70}, 1000);
       return false;
      }
    }
  });
});