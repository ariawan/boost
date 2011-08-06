(function($) {

      
var app = $.sammy('#main', function() {		
	this.use('Template');
	
	this.get('#/', function(context) {
    	this.partial('templates/home.template');
    	this.load('data/speakers.json').renderEach('templates/home-speakers.template').appendTo('#speakers');
    	
    	var new_position = $('#main').offset();
    	window.scrollTo(new_position.left,new_position.top);			     	
	});
	
	this.get('#/agenda', function(context) {
		this.partial('templates/agenda.template').then(function(){
			$('#accordion1').accordion();
			$('#accordion2').accordion();
		});	
		var new_position = $('#main').offset();
    	window.scrollTo(new_position.left,new_position.top);
	});
	
	this.get('#/info', function(context) {
		this.partial('templates/info.template');
		var new_position = $('#main').offset();
    	window.scrollTo(new_position.left,new_position.top);
	});
	
	this.get('#/participants', function(context) {
		this.partial('templates/participants.template');
		var new_position = $('#main').offset();
    	window.scrollTo(new_position.left,new_position.top);
	});
	
	this.get('#/press', function(context) {
		this.partial('templates/press.template');
		var new_position = $('#main').offset();
    	window.scrollTo(new_position.left,new_position.top);
	});
	
	this.get('#/registration', function(context) {
		this.partial('templates/registration.template');
		var new_position = $('#main').offset();
    	window.scrollTo(new_position.left,new_position.top);
	});
	
	this.get('#/speakers', function(context) {
		this.partial('templates/speakers.template');	
		var new_position = $('#main').offset();
    	window.scrollTo(new_position.left,new_position.top);
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