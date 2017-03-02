$('#burger').on('click', function(){
	$('#nav').addClass('dev');
	$('#nav li, .jumbotron, .main, .navbar-form').on('click',function(){ $('#nav').removeClass('dev'); });
	$('*').on('swipeleft',function(e){ $('#nav').removeClass('dev');e.preventDefault() ; });
});