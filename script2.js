$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});

function initMap() {
        				var uluru = {lat: 43.074335, lng: -89.394476};
        				var map = new google.maps.Map(document.getElementById('map'), {
          					zoom: 17,
          					center: uluru
        				});
        				var marker = new google.maps.Marker({
          					position: uluru,
          					map: map
        				});
      				}

$(document).ready(function() {

	$(this).scrollTop(0);

	$('a').smoothScroll({
        beforeScroll: function( options ) {
            if ( window.matchMedia("(min-width:840px)").matches ) {
                options.offset = 0;
            }
            else {
                options.offset = -45;
            }
        }
   });
	//$('a').smoothScroll({offset: -45});

	/*if (screen.width < 600) {
		$('a').smoothScroll({offset: -700});
	}
	else {
		$('a').smoothScroll();
	}*/

	$(document).scroll(function () {
  
  		var $movebg = $(window).scrollTop() * -0.3;

		var scrollPos = $(document).scrollTop() + 100;
  			$('nav a').each(function () {
    		var currLink = $(this);
    		var refElement = $(currLink.attr("href"));
    		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      			$('nav a').removeClass("active");
      			currLink.addClass("active");
    		}
  		});
  	});

  	$('#more').click(function() {
  		$('#sidebar').animate({width: 'toggle'});
  	});

  	$('#sidebar li a').on('click', function() {
  		$('#sidebar').animate({width: 'toggle'});
  	});
});
