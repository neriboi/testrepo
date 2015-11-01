angular.module('MsApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngCookies'])
  .run(function () {
		window.fbAsyncInit = function () {
			FB.init({
				appId:'1607735426109954',
				xfbml      : true,
				version    : 'v2.4'
			});
		};

		(function(d, s, id){
		 var js, fjs = d.getElementsByTagName(s)[0];
		 if (d.getElementById(id)) {return;}
		 js = d.createElement(s); js.id = id;
		 js.src = "//connect.facebook.net/en_US/sdk.js";
		 fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));
	})
	
	.factory('DemoService', function(){
		var service = {};
		service.Post = {};
		service.buttonLabel = ' Sign in via Facebook';
		service.bLogged = false;
		service.Loc = {
			SearchLoc: 'Metro Manila (NCR)'
		};

		service.updateValue = function(value){
			this.Post = value;
		}
		
		service.updateLogged = function(value){
			service.buttonLabel = ' Hello, ' + value;
			service.bLogged = true;
		}
		
		service.updateLocation = function(value){
			this.Loc.SearchLoc = value;
		}

		return service;
	})
  
  .controller('ExampleController', ['$scope', '$http', 'DemoService', '$cookies', function($scope, $http, DemoService, $cookies) {
	$scope.buttonLabel = DemoService.buttonLabel;
	$scope.bLogged = DemoService.bLogged;
	$scope.searchLoc = DemoService.Loc.SearchLoc;
	$scope.data = {
	 searchQuery: 'What service do you need today?',
	 
     availableOptions: [
        {id: '1', name:  'Metro Manila (NCR)'}, 
		{id: '2', name:  'Manila'}, 
		{id: '3', name:  'Caloocan'}, 
		{id: '4', name:  'Las Pinas'}, 
		{id: '5', name:  'Makati'}, 
		{id: '6', name:  'Malabon'}, 
		{id: '7', name:  'Mandaluyong'}, 
		{id: '8', name:  'Marikina'}, 
		{id: '9', name:  'Muntinlupa'}, 
		{id: '10', name:  'Navotas'}, 
		{id: '11', name:  'Paranaque'}, 
		{id: '12', name:  'Pasay'}, 
		{id: '13', name:  'Pasig'}, 
		{id: '14', name:  'Pateros'}, 
		{id: '15', name:  'Quezon City'}, 
		{id: '16', name:  'San Juan'}, 
		{id: '17', name:  'Taguig'}, 
		{id: '18', name:  'Valenzuela'}, 
		{id: '19', name:  'Metro Cebu (MC)'}, 
		{id: '20', name:  'Carcar City'}, 
		{id: '21', name:  'Cebu City'}, 
		{id: '22', name:  'Compostela'}, 
		{id: '23', name:  'Consolacion'}, 
		{id: '24', name:  'Cordova'}, 
		{id: '25', name:  'Danao City'}, 
		{id: '26', name:  'Lapu-Lapu City'}, 
		{id: '27', name:  'Liloan'}, 
		{id: '28', name:  'Mandaue City'}, 
		{id: '29', name:  'Minglanilla'}, 
		{id: '30', name:  'Naga City'}, 
		{id: '31', name:  'San Fernando'}, 
		{id: '32', name:  'Talisay'}, 
		{id: '33', name:  'Metro Davao (MD)'}, 
		{id: '34', name:  'Davao City'}, 
		{id: '35', name:  'Digos City'}, 
		{id: '36', name:  'Panabo City'}, 
		{id: '37', name:  'Samal City'}, 
		{id: '38', name:  'Tagum City'}, 
		{id: '39', name:  'Carmen'}, 
		{id: '40', name:  'Santa Cruz'}, 
		{id: '41', name:  'Cordillera Administrative Region (CAR)'}, 
		{id: '42', name:  'Abra'}, 
		{id: '43', name:  'Apayao'}, 
		{id: '44', name:  'Baguio'}, 
		{id: '45', name:  'Benguet'}, 
		{id: '46', name:  'Ifugao'}, 
		{id: '47', name:  'Kalinga'}, 
		{id: '48', name:  'Mountain Province'}, 
		{id: '49', name:  'Ilocos Region (R1)'}, 
		{id: '50', name:  'Dagupan'}, 
		{id: '51', name:  'Ilocos Norte'}, 
		{id: '52', name:  'Ilocos Sur'}, 
		{id: '53', name:  'La Union'}, 
		{id: '54', name:  'Pangasinan'}, 
		{id: '55', name:  'Cagayan Valley (R2)'}, 
		{id: '56', name:  'Batanes'}, 
		{id: '57', name:  'Cagayan'}, 
		{id: '58', name:  'Isabella'}, 
		{id: '59', name:  'Nueva Vizcaya'}, 
		{id: '60', name:  'Quirino'}, 
		{id: '61', name:  'Santiago'}, 
		{id: '62', name:  'Central Luzon (R3)'}, 
		{id: '63', name:  'Angeles'}, 
		{id: '64', name:  'Aurora'}, 
		{id: '65', name:  'Bataan'}, 
		{id: '66', name:  'Bulacan'}, 
		{id: '67', name:  'Nueva Ecija'}, 
		{id: '68', name:  'Olongapo'}, 
		{id: '69', name:  'Pampanga'}, 
		{id: '70', name:  'Tarlac'}, 
		{id: '71', name:  'Zambales'}, 
		{id: '72', name:  'CALABARZON (R4A)'}, 
		{id: '73', name:  'Batangas'}, 
		{id: '74', name:  'Cavite'}, 
		{id: '75', name:  'Laguna'}, 
		{id: '76', name:  'Lucena'}, 
		{id: '77', name:  'Quezon'}, 
		{id: '78', name:  'Rizal'}, 
		{id: '79', name:  'MIMAROPA (R4B)'}, 
		{id: '80', name:  'Marinduque'}, 
		{id: '81', name:  'Occidental Mindoro'}, 
		{id: '82', name:  'Oriental Mindoro'}, 
		{id: '83', name:  'Palawan'}, 
		{id: '84', name:  'Puerto Princesa'}, 
		{id: '85', name:  'Romblon'}, 
		{id: '86', name:  'Bicol Region (R5)'}, 
		{id: '87', name:  'Albay'}, 
		{id: '88', name:  'Camarines Norte'}, 
		{id: '89', name:  'Camarines Sur'}, 
		{id: '90', name:  'Catanduanes'}, 
		{id: '91', name:  'Masbate'}, 
		{id: '92', name:  'Naga'}, 
		{id: '93', name:  'Sorsogon'}, 
		{id: '94', name:  'Western Visayas (R6)'}, 
		{id: '95', name:  'Aklan'}, 
		{id: '96', name:  'Antique'}, 
		{id: '97', name:  'Capiz'}, 
		{id: '98', name:  'Guimaras'}, 
		{id: '99', name:  'Iloilo'}, 
		{id: '100', name:  'Iloilo City'}, 
		{id: '101', name:  'Central Visayas (R7)'}, 
		{id: '102', name:  'Bohol'}, 
		{id: '103', name:  'Cebu'}, 
		{id: '104', name:  'Lapu-Lapu'}, 
		{id: '105', name:  'Mandaue'}, 
		{id: '106', name:  'Siquijor'}, 
		{id: '107', name:  'Eastern Visayas (R8)'}, 
		{id: '108', name:  'Biliran'}, 
		{id: '109', name:  'Eastern Samar'}, 
		{id: '110', name:  'Leyte'}, 
		{id: '111', name:  'Northern Samar'}, 
		{id: '112', name:  'Ormoc'}, 
		{id: '113', name:  'Samar'}, 
		{id: '114', name:  'Southern Leyte'}, 
		{id: '115', name:  'Tacloban'}, 
		{id: '116', name:  'Negros Island Region (R18)'}, 
		{id: '117', name:  'Bacolod'}, 
		{id: '118', name:  'Negros Occidental'}, 
		{id: '119', name:  'Negros Oriental'}, 
		{id: '120', name:  'Zamboanga Peninsula (R9)'}, 
		{id: '121', name:  'Isabela City'}, 
		{id: '122', name:  'Zamboanga City'}, 
		{id: '123', name:  'Zamboanga del Norte'}, 
		{id: '124', name:  'Zamboanga del Sur'}, 
		{id: '125', name:  'Zamboanga Sibugay'}, 
		{id: '126', name:  'Northern Mindanao (R10)'}, 
		{id: '127', name:  'Bukidnon'}, 
		{id: '128', name:  'Cagayan de Oro'}, 
		{id: '129', name:  'Camiguin'}, 
		{id: '130', name:  'Iligan'}, 
		{id: '131', name:  'Lanao del Norte'}, 
		{id: '132', name:  'Misamis Occidental'}, 
		{id: '133', name:  'Misamis Oriental'}, 
		{id: '134', name:  'Davao Region (R11)'}, 
		{id: '135', name:  'Compostela Valley'}, 
		{id: '136', name:  'Davao del Norte'}, 
		{id: '137', name:  'Davao del Sur'}, 
		{id: '138', name:  'Davao Oriental'}, 
		{id: '139', name:  'Davao Occidental'}, 
		{id: '140', name:  'SOCCSKSARGEN (R12)'}, 
		{id: '141', name:  'Cotabato'}, 
		{id: '142', name:  'Cotabato City'}, 
		{id: '143', name:  'General Santos'}, 
		{id: '144', name:  'Sarangani'}, 
		{id: '145', name:  'South Cotabato'}, 
		{id: '146', name:  'Sultan Kudarat'}, 
		{id: '147', name:  'Caraga (R13)'}, 
		{id: '148', name:  'Agusan del Norte'}, 
		{id: '149', name:  'Agusan del Sur'}, 
		{id: '150', name:  'Butuan'}, 
		{id: '151', name:  'Dinagat Islands'}, 
		{id: '152', name:  'Surigao del Norte'}, 
		{id: '153', name:  'Surigao del Sur'}, 
		{id: '154', name:  'Autonomous Region Muslim Mindanao (ARMM)'}, 
		{id: '155', name:  'Basilan'}, 
		{id: '156', name:  'Lanao del Sur'}, 
		{id: '157', name:  'Maguindanao'}, 
		{id: '158', name:  'Sulu'}, 
		{id: '159', name:  'Tawi-Tawi'}
     ]
    }
	
	$scope.update = function(index) {
		DemoService.updateLocation($scope.data.availableOptions[index].name);
		$scope.searchLoc = DemoService.Loc.SearchLoc;
	}
	
	$scope.get = function() {
		$scope.searchLoc = DemoService.Loc.SearchLoc;
		var stringURL = 'index.html#/search/' + DemoService.Loc.SearchLoc + '/' + $scope.data.searchQuery;
		location.href = stringURL;
	}
	
	$scope.FBLogin = function() {
		FB.login(function(response) {
			if (response.authResponse) {
			 console.log('Welcome!  Fetching your information.... ');
			 FB.api('/me?fields=id,name,email', function(response) {
			   console.log('Good to see you, ' + response.name + '.');
			   console.log(response.email);
			   console.log(response);
			   var accessToken = FB.getAuthResponse();
			   console.log(accessToken);
			   
				var expirationDate = new Date();
				expirationDate.setMinutes(expirationDate.getSeconds() + accessToken.expiresIn);
				
				var data = '{"sFBId":"' + response.id + '","sFBAT":"' + accessToken.accessToken + '","sFBED":"' + expirationDate.toISOString() + '","sFBEA":"' + response.email + '","sFBUN":"' + response.name + '"}';
				var dEncoded = btoa(data);
				//var jsonData=angular.toJson(data);
				var objectToSerialize={'sEncoded':dEncoded};
				
				$http({
					method: 'POST', 
					url: 'https://api.parse.com/1/functions/masSulitLogin', 
					headers: { 'X-Parse-Application-Id':'9XYZMrEUVyTb2VJM4zOuW3cxEyOAAnPSwnkFDURM', 'X-Parse-REST-API-Key':'HoW440iQCWQFVT6qW2qpo0wrVflSq7bH8VTQjOeV'},
					data: objectToSerialize
				}).success(function(data)
					{
						var aData = atob(data.result).split(';');
						$cookies.put('myToken',aData[0]);
						$cookies.put('myName',aData[1]);
						$cookies.put('myLogged',true);
						console.log(aData);
						DemoService.updateLogged(aData[1]);
						$scope.buttonLabel = DemoService.buttonLabel;
						$scope.bLogged = DemoService.bLogged;
					}
				);
			   
			 });
			} else {
			 console.log('User cancelled login or did not fully authorize.');
			}
		}, {scope: 'public_profile,email'});
	}
   }])
   
   .controller("ListController", ['$scope','$http', '$routeParams', 'DemoService', '$log', 
	function($scope, $http, $routeParams, DemoService, $log)
		{
			var sLoc = DemoService.Loc.SearchLoc;
			var data = '{"sLocation":"' + DemoService.Loc.SearchLoc + '","sSearch":"' + $routeParams.categoryName + '"}';
			var dEncoded = btoa(data);
			//var jsonData=angular.toJson(data);
			var objectToSerialize={'sEncoded':dEncoded};
			
			$http({
				method: 'POST', 
				url: 'https://api.parse.com/1/functions/getCategoryResults', 
				headers: { 'X-Parse-Application-Id':'9XYZMrEUVyTb2VJM4zOuW3cxEyOAAnPSwnkFDURM', 'X-Parse-REST-API-Key':'HoW440iQCWQFVT6qW2qpo0wrVflSq7bH8VTQjOeV'},
				data: objectToSerialize
			}).success(function(data)
				{
					var aData = atob(data.result).split(';');
					var aJSON = [];
					
					if (aData[0] == 'Error' && aData.length == 2) {
					
					} else {
						for (var x=0; x<aData.length; x++) {
							var jData = JSON.parse(aData[x]);
							aJSON.push(jData);
						}
					}
					
					$scope.posts = aJSON; // response data 
					$scope.searchCategory = $routeParams.categoryName;
					$scope.searchLoc = sLoc;
					DemoService.updateValue($scope.posts);
				}
			);
		}]
	)
	
	.controller("DetailsController", ['$scope', '$http', '$routeParams', 'DemoService', '$log', '$cookies',
	function($scope, $http, $routeParams, DemoService, $log, $cookies)
		{
			var aJSON = [];
			if (DemoService.Post[$routeParams.postID].iReviews > 0) {
				for (index = 0; index < DemoService.Post[$routeParams.postID].aReviews.length; index++) {
					var res = DemoService.Post[$routeParams.postID].aReviews[index].split("||");
					res[0] = '"iRating":"' + res[0] + '"';
					res[1] = '"sTitle":"' + res[1] + '"';
					res[2] = '"sDesc":"' + res[2] + '"';
					res[3] = '"sDate":"' + res[3] + '"';
					res[4] = '"sAuthor":"' + res[4] + '"';
					var sRes = '{' + res[0] + ',' + res[1] + ',' + res[2] + ',' + res[3] + ',' + res[4] + '}';
					var jRes = JSON.parse(sRes);
					aJSON.push(jRes);
				}
			}
			
			DemoService.Post[$routeParams.postID].aReviews = aJSON;
			$scope.posts = DemoService.Post[$routeParams.postID];
			
			console.log($scope.posts.aReviews);
			
			$scope.selectedTab = 1;
			$scope.image = [{image: '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'}];
			if ($scope.posts.aPhotos[0].length > 0) {
				$scope.image[0].image = $scope.posts.aPhotos[0];
			}
			$scope.photo = 'data:image/png;base64, ' + $scope.image[0].image;
			
			$scope.empty = false;
			if ($scope.posts.aReviews.length > 0) {
				$scope.empty = true;
			}
			
			var userToken = $cookies.get('myToken');
			var userName = $cookies.get('myName');
			$scope.logged = $cookies.get('myLogged');
			console.log(userToken);
			
			$scope.review = {
				iRating: 5,
				sTitle: '',
				sDesc: ''
			};
			
			$scope.reviewHolder = {};
			
			var d = new Date();
			var sDate = d.toDateString();
			
			$scope.addReview = function(){
			  $scope.reviewHolder.sDate = sDate;
			  $scope.reviewHolder.iRating = $scope.review.iRating;
			  $scope.reviewHolder.sTitle = $scope.review.sTitle;
			  $scope.reviewHolder.sDesc = $scope.review.sDesc;
			  $scope.reviewHolder.sAuthor = userName;
			  $scope.posts.aReviews.push($scope.reviewHolder);
			  $scope.review.iRating = 5;
			  $scope.review.sTitle = '';
			  $scope.review.sDesc = '';
			  console.log($scope.posts.aReviews);
			  
			  var data = '{"sPostId":"' + $scope.posts.sPostId + '","sTitle":"' + $scope.reviewHolder.sTitle + '","sMessage":"' + $scope.reviewHolder.sDesc + '","iStars":"' + $scope.reviewHolder.iRating +'"}';
			  var dEncoded = btoa(data);
			  //var jsonData=angular.toJson(data);
			  var objectToSerialize={'sEncoded':dEncoded};
			
			  $http({
				method: 'POST', 
				url: 'https://api.parse.com/1/functions/setPostReview', 
				headers: { 'X-Parse-Application-Id':'9XYZMrEUVyTb2VJM4zOuW3cxEyOAAnPSwnkFDURM', 'X-Parse-REST-API-Key':'HoW440iQCWQFVT6qW2qpo0wrVflSq7bH8VTQjOeV', 'X-Parse-Session-Token':userToken},
				data: objectToSerialize
			  }).success(function(data)
				{
					var aData = atob(data.result);
					console.log(aData);
				}
			  );
			  
			};
		}]
	)
	
	.controller("searchController", ['$scope','$http', '$routeParams', 'DemoService',
	function($scope, $http, $routeParams, DemoService)
		{
			var sLoc = DemoService.Loc.SearchLoc;
			var data = '{"sLocation":"' + $routeParams.searchLoc + '","sSearch":"' + $routeParams.searchQuery + '"}';
			var dEncoded = btoa(data);
			//var jsonData=angular.toJson(data);
			var objectToSerialize={'sEncoded':dEncoded};
			
			$http({
				method: 'POST', 
				url: 'https://api.parse.com/1/functions/getSearchResults', 
				headers: { 'X-Parse-Application-Id':'9XYZMrEUVyTb2VJM4zOuW3cxEyOAAnPSwnkFDURM', 'X-Parse-REST-API-Key':'HoW440iQCWQFVT6qW2qpo0wrVflSq7bH8VTQjOeV'},
				data: objectToSerialize
			}).success(function(data)
				{
					var aData = atob(data.result).split(';');
					var aJSON = [];
					if (aData[0] == 'Error' && aData.length == 2) {
					
					} else {
						for (var x=0; x<aData.length; x++) {
							var jData = JSON.parse(aData[x]);
							aJSON.push(jData);
						}
					}
					
					$scope.posts = aJSON; // response data 
					$scope.searchQuery = $routeParams.searchQuery;
					$scope.searchLoc = $routeParams.searchLoc;
					DemoService.updateValue($scope.posts);
				}
			);
		}]
	)
   
	//
	
	.controller("MainController", ['$scope', 'DemoService', '$http', '$log',
	function($scope, DemoService, $http, $log)
		{
			var sLoc = DemoService.Loc.SearchLoc;
			var data = '{"sLocation":"' + DemoService.Loc.SearchLoc + '"}';
			var dEncoded = btoa(data);
			var objectToSerialize={'sEncoded':dEncoded};
			$http({
				method: 'POST', 
				url: 'https://api.parse.com/1/functions/getRandomFeatured', 
				headers: { 'X-Parse-Application-Id':'9XYZMrEUVyTb2VJM4zOuW3cxEyOAAnPSwnkFDURM', 'X-Parse-REST-API-Key':'HoW440iQCWQFVT6qW2qpo0wrVflSq7bH8VTQjOeV'},
				data: objectToSerialize
			}).success(function(data)
				{
					var aData = atob(data.result).split(';');
					var aJSON = [];
					
					if (aData[0] == 'Error' && aData.length == 2) {
					
					} else {
						for (var x=0; x<aData.length; x++) {
							var jData = JSON.parse(aData[x]);
							aJSON.push(jData);
						}
					}
					
					$scope.posts = aJSON; // response data 
					DemoService.updateValue($scope.posts);
					$scope.show = $scope.posts.length;
					if ($scope.posts.length > 0) {
						for (var x=0; x < $scope.posts.length; x++) {
							if ($scope.posts[x].aPhotos[0].length > 0) {
								$scope.posts[x].aPhotos[0] = 'data:image/png;base64, ' + $scope.posts[x].aPhotos[0];
							} else {
								$scope.posts[x].aPhotos[0] = 'data:image/png;base64, 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';;
							}
						}
					} 
				}
			);
			
			$scope.myInterval = 5000;
			$scope.noWrapSlides = false;
			$scope.searchLoc = sLoc;
			$scope.slides = [{image: 'images/carousel1.png'}, {image: 'images/carousel2.png'}, {image: 'images/carousel3.png'}];
		}]
	)
	
	//
   
   .config(function($routeProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'partials/main.html',
	controller: 'MainController',
	resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
    
  })
   .when('/list/:categoryName', {
    templateUrl: 'partials/list.html',
    controller: 'ListController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/details/:postID', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/search/:searchLoc/:searchQuery', {
    templateUrl: 'partials/search.html',
    controller: 'searchController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/conditions', {
    templateUrl: 'partials/conditions.html'
  })
  .when('/advertise', {
    templateUrl: 'partials/advertise.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});