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
			$('#accordion1').accordion();
			$('#accordion2').accordion();
			$('li a').removeClass('active');
			$('#nav_agenda').addClass('active');
		});	

	});
	
	this.get('#/info', function(context) {
		this.partial('templates/info.template').then(function() {
			$('li a').removeClass('active');
			$('#nav_info').addClass('active');
		});

	});
	
	this.get('#/participants', function(context) {
		this.partial('templates/participants.template').then(function() {
			$('li a').removeClass('active');
			$('#nav_participants').addClass('active');
		});

	});
	
	this.get('#/press', function(context) {
		this.partial('templates/press.template').then(function() {
			$('li a').removeClass('active');
			$('#nav_press').addClass('active');
		});

	});
	
	this.get('#/registration', function(context) {
		this.partial('templates/registration.template').then(function() {
			$('li a').removeClass('active');
			$('#nav_registration').addClass('active');
		});

	});
	
	this.get('#/speakers', function(context) {
		this.partial('templates/speakers.template').then(function() {
			$('li a').removeClass('active');
			$('#nav_speakers').addClass('active');
		});	

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