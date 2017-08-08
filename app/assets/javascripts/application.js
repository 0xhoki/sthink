// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require jquery.remotipart
//= require turbolinks
//= require select2
//= require_tree .


var ready;
ready = function() {

	// Multiple Select Dropbox
	$(".dropdown").select2({
	  theme: "bootstrap"
	});

    if (window.innerWidth < 500) {
      $('.style-change-window-small').addClass('profile-header-container');
      $('.container').addClass('profile-header-container');
    }
}

$(document).ready(ready);
$(document).on('turbolinks:load', ready);