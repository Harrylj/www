$(function() {
	$("#contact-form").submit(function(event) {
		/* stop form from submitting normally */
		event.preventDefault(); 
			
		/* get some values from elements on the page: */
		var $form = $( this ),
			name = $form.find( 'input[name="name"]' ).val(),
			email = $form.find( 'input[name="email"]' ).val(),
			message = $form.find( 'textarea[name="message"]' ).val(),
			url = $form.attr( 'action' );

		/* Send the data using post and put the results in a div */
		$.post( url, { name: name, email: email, message: message
		}, function( data ) {
			  //var content = $( data ).find( '#content' );
			  //$( "#result" ).empty().append( content );
		}).success(function() { 
			// success
			// reset form values
			$form.find( 'input[name="name"]' ).val('');
			$form.find( 'input[name="email"]' ).val('');
			$form.find( 'textarea[name="message"]' ).val('');
		}).error(function() {
			// handle error
		})
		.complete(function() { 
			// finally
		});
	});
});