 $('a[href^="mailto:"]').each(function() {
	$(this).click(function() {
		var t;
		$(window).blur(function() { // The browser apparently responded, so stop the timeout.
			clearTimeout(t);
		});
		t = setTimeout(function() {// The browser did not respond after 500ms, so open an alternative URL.
			$('#contactModal').modal();
		}, 1000);
	});
});