$(document).ready(
	function() {
		//sticky nav
		$('.about-section').waypoint(
			function(direction) {
				if(direction == "down"){
					$('nav').addClass('sticky');
				}
				else{
					$('nav').removeClass('sticky');
				}
			},{
				offset: '500px'
			}
		)
		
		//smooth scroll
		$('a[href*=#]').click(function(event){
		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 750);
		    event.preventDefault();
		});
		
		//mobile-navigation
		$('.mobile-nav-icon').click(
			function(){
				$('.main-nav').slideToggle(200);
			}
		)
	}
)