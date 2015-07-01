angular
	.module('jamApp.controllers', [])
	.controller('JamController', JamController);
	function JamController($http) {
	    var self = this;
	    self.foo = "bar";
	    self.query = 'birthday'
	    self.searchInstagram = searchInstagram('', "birthday", function(data) {
			                    self.pictures = data.data;
			                });
	self.updateInstagram = function(){

		
	}    
      
  	
	function searchInstagram(name, query,callback){
		var method = 'GET'
		var url = 'https://api.instagram.com/v1/tags/'+query+'/media/recent?access_token=45152981.1fb234f.f715923e64d843deb89a3c2deb3a6601&callback=JSON_CALLBACK'
		// var params = {	
		// 	access_token: '45152981.1fb234f.f715923e64d843deb89a3c2deb3a6601' 
		// }
		$http.jsonp(url).success(callback);
		}
	self.addComment = function(){
		alert('Happy Birthday Sophie!');

	}
	
	}

	