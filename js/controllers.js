angular
	.module('jamApp.controllers', [])
	.controller('JamController', JamController);
	function JamController($http) {
	    var self = this;
	    self.foo = "bar";
	    self.searchInstagram = searchInstagram('', function(data) {
			                    self.pictures = data.data;
			                });
      
  	
	function searchInstagram(name,callback){
		var method = 'GET'
		var url = 'https://api.instagram.com/v1/tags/birthday/media/recent?access_token=45152981.1fb234f.f715923e64d843deb89a3c2deb3a6601&callback=JSON_CALLBACK'
		// var params = {	
		// 	access_token: '45152981.1fb234f.f715923e64d843deb89a3c2deb3a6601' 
		// }
			$http.jsonp(url).success(callback);
		}
	
	}

	