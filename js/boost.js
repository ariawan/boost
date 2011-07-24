(function($) {
      
var app = $.sammy('#main', function() {		
	this.use('Template');
	
	this.get('#/', function(context) {
    	this.partial('templates/home.template');
    	this.load('data/speakers.json').renderEach('templates/home-speakers.template').appendTo('#speakers');			     	
	});
	
	this.get('#/agenda', function(context) {
		this.partial('templates/agenda.template');
	});
	
	this.get('#/info', function(context) {
		this.partial('templates/info.template');
	});
	
	this.get('#/participants', function(context) {
		this.partial('templates/participants.template');
	});
	
	this.get('#/press', function(context) {
		this.partial('templates/press.template');
	});
	
	this.get('#/registration', function(context) {
		this.partial('templates/registration.template');
	});
	
	this.get('#/speakers', function(context) {
		this.partial('templates/speakers.template');	
	});
});

$(function() {
	app.run('#/');
});

})(jQuery);