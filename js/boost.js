(function($) {

      
var app = $.sammy('#main', function() {		
	this.use('Template');
	
	this.get('#/', function(context) {
    	this.partial('templates/home.template');
    	this.load('data/speakers.json').renderEach('templates/home-speakers.template').appendTo('#speakers');
    	
    	$.scrollTo('#main', 800);			     	
	});
	
	this.get('#/agenda', function(context) {
		this.partial('templates/agenda.template').then(function(){
			$('#accordion1').accordion();
			$('#accordion2').accordion();
		});	
		$.scrollTo('#main', 800);
	});
	
	this.get('#/info', function(context) {
		this.partial('templates/info.template');
		$.scrollTo('#main', 800);
	});
	
	this.get('#/participants', function(context) {
		this.partial('templates/participants.template');
		$.scrollTo('#main', 800);
	});
	
	this.get('#/press', function(context) {
		this.partial('templates/press.template');
		$.scrollTo('#main', 800);
	});
	
	this.get('#/registration', function(context) {
		this.partial('templates/registration.template');
		$.scrollTo('#main', 800);
	});
	
	this.get('#/speakers', function(context) {
		this.partial('templates/speakers.template');	
		$.scrollTo('#main', 800);
	});
	
});

$(function() {
	app.run('#/');
});

})(jQuery);