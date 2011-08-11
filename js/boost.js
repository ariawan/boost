(function($) {

      
var app = $.sammy('#main', function() {		
	this.use('Template');
	
	this.get('#/', function(context) {
    	this.partial('templates/home.template');
    	this.load('data/speakers.json').renderEach('templates/home-speakers.template').appendTo('#speakers');
    	$('li a').removeClass('active');
			     	
	});
	
	this.get('#/agenda', function(context) {
		this.partial('templates/agenda.template').then(function(){
			$('#accordion1').accordion({ autoHeight: false, collapsible: true });
			$('#accordion2').accordion({ autoHeight: false, collapsible: true });
			$('li a').removeClass('active');
			$('a.nav_agenda').addClass('active');
		});	

	});
	
	this.get('#/info', function(context) {
		this.partial('templates/info.template').then(function() {
			$('li a').removeClass('active');
			$('a.nav_info').addClass('active');
		});

	});
	
	this.get('#/participants', function(context) {
		this.partial('templates/participants.template').then(function() {
			$('li a').removeClass('active');
			$('a.nav_participants').addClass('active');
		});

	});
	
	this.get('#/press', function(context) {
		this.partial('templates/press.template');			
		$('li a').removeClass('active');
		$('a.nav_press').addClass('active');
	});
	
	this.get('#/registration', function(context) {
		this.partial('templates/registration.template').then(function() {
			$('li a').removeClass('active');
			$('a.nav_registration').addClass('active');
		});

	});
	
	this.get('#/speakers', function(context) {
		this.partial('templates/speakers.template')
		this.load('data/speakers.json').renderEach('templates/speakers-bio.template').appendTo('#speakers');
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