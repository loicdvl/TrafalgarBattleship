$("#search-button").click(function(e){
	e.preventDefault();
	if(window.innerWidth < 767) $('.navbar-brand').toggle('display');
	$(".search-bar").animate({width:'toggle'}, 500);
});
 function toggleLogo(){
	if(window.innerWidth<767 && $('.search-bar').css('display')=="block")  $('.navbar-brand').hide() ;
    if(window.innerWidth>=767)  $('.navbar-brand').show() ;
 }