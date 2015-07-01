angular
	.module('jamApp.controllers', [])
	.controller('JamController', JamController);
	function JamController($http) {
	    var self = this;
	    self.foo = "bar";
      
  	
	function searchInstagram(tag){
		var method = 'GET'
		var url = 'https://api.instagram.com/v1/media/search'
		var params = {
			
		}
	}




  	function returnYelp(name,callback) {
                        var method = 'GET';
                        var url = 'http://api.yelp.com/v2/search';
                        var params = {
                                callback: 'angular.callbacks._0',
                                location: $scope.trip.location,
                                oauth_consumer_key: '028e6Wxp-UzuX6K2jc3ZPA', 
                                oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                                oauth_signature_method: "HMAC-SHA1",
                                oauth_token: 'UXqJ2CyAaKQD_mzqH8mMp7Y7-lIrWhqt', //Token
                                oauth_timestamp: new Date().getTime(),
                                term: 'attractions',
                                limit: 20           
                        };
                        var consumerSecret = '5h_r39wNZo5GMcEGIKbaZ18busA'; 
                        var tokenSecret = 'oKSqk3Kpc3QMdPsLtHMZnzRqH-0'; //Token Secret
                        var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
                        params['oauth_signature'] = signature;
                        console.log(params);
                        $http.jsonp(url, {params: params}).success(callback);
    }

  	}