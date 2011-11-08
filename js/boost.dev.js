(function($) {

function carousel_init_callback(carousel) {
    $('#speakers-next').bind('click', function() {
        carousel.next();
        return false;
    });

    $('#speakers-prev').bind('click', function() {
        carousel.prev();
        return false;
    });
    carousel.clip.hover(function() { carousel.stopAuto(); }, 
		  function() { carousel.startAuto(); });
};

function load_speakers(t) {
    	t.load('data/speakers.json').renderEach('templates/home-speakers.template').appendTo('#speakers').then(function(){
			$('#speakers').jcarousel({
			  ltr:1,
			  scroll:1,
			  auto: 3,
			  wrap: 'circular',
			  initCallback: carousel_init_callback
	    });
      });	
}
      
var app = $.sammy('#main', function() {		
	this.use('Template');
	this.get('#/', function(context) {
    load_speakers(this);
    this.partial('templates/home.template');
    $('li a').removeClass('active');
  });
	
	this.get('#/agenda', function(context) {
    load_speakers(this);
    this.partial('templates/agenda.template').then(function(){
			$('#accordion1').accordion({ autoHeight: false, collapsible: true });
			$('#accordion2').accordion({ autoHeight: false, collapsible: true });
			$('li a').removeClass('active');
			$('a.nav_agenda').addClass('active');
		});	
	});
	
	this.get('#/about', function(context) {
    load_speakers(this);
    this.partial('templates/info.template').then(function() {
			$('li a').removeClass('active');
			$('a.nav_info').addClass('active');
		});
	});
	
	this.get('#/participants', function(context) {
    load_speakers(this);
    this.partial('templates/participants.template').then(function() {
			$('li a').removeClass('active');
			$('a.nav_participants').addClass('active');
		});
	});
	
	this.get('#/press', function(context) {
    load_speakers(this);
    this.partial('templates/press.template');			
		$('li a').removeClass('active');
		$('a.nav_press').addClass('active');
	});
	
	this.get('#/registration', function(context) {
    load_speakers(this);
    this.partial('templates/registration.template').then(function() {
			$('li a').removeClass('active');
			$('a.nav_registration').addClass('active');
		});
	});

	this.get('#/sponsors', function(context) {
    load_speakers(this);
		this.partial('templates/sponsors.template');
  });

	this.get('#/speakers', function(context) {
    load_speakers(this);
    var speaker = this.params['id'];
		this.partial('templates/speakers.template');
		this.load('data/speakers.json').renderEach('templates/speakers-bio.template').appendTo('#speakers-list').then(
			function() {	
				if(undefined != speaker) {
    				var new_position = $('li#'+speaker).offset();
    				window.scrollTo(new_position.left,new_position.top);
    				return false;
				}
      }
		);
		$('li a').removeClass('active');
		$('a.nav_speakers').addClass('active');	

  });

	this.get('#/save_email', function(context) {
    	var email = JSON.stringify({"email":this.params['email']}) ;  
   		$.ajax({
   			type: "POST",
   			url: "https://mongolab.com/api/1/databases/boost/collections/emails?apiKey=4e2b7fe95e4cc8b7512975a3",
   			data: email,
 			dataType: "json",
 			contentType: "application/json;charset",
 			success: function(msg){
         		alert('thanks! '+msg['email']);
      		}
 		  });
   		this.partial('templates/home.template');
    	this.load('data/speakers.json').renderEach('templates/home-speakers.template').appendTo('#speakers');
    	$('li a').removeClass('active');
    });

});

$(function() {
  app.run('#/');
});

$(document).ready(
	function() {
		$("li a").bind('touchstart',function() {
            $(this).addClass('touched');
        });
        $("li a").bind('touchend',function() {
            $(this).removeClass('touched');
        });
        $("li a").bind('touchcancel',function() {
            $(this).removeClass('touched');
        });
	}
);

})(jQuery);