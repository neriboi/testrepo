angular.module('demoService', []).factory('DemoService', function($rootScope){
    var service = {};
    service.Post = {};
	service.Loc = {
		SearchLoc: 'Metro Manila (NCR)'
	};
	service.User = {
		log: 'false',
		accessToken: '',
		Name: ''
	}

    service.updateValue = function(value){
        this.Post = value;
    }
	
	service.updateLocation = function(value){
        this.Loc.SearchLoc = value;
    }
	
	service.updateUser = function(value){
		this.User.log = 'true';
        this.User.accessToken = value[0];
		this.User.Name = value[1];
    }

    return service;
});

angular.module('MsApp', ['ngRoute', 'MsControllers', 'demoService', 'ngAnimate', 'ui.bootstrap'])
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
  
  .controller('ExampleController', ['$scope', '$http', 'DemoService', function($scope, $http, DemoService) {
	
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
		var stringURL = 'index.html#/search/' + $scope.data.searchQuery;
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
				
				var data = '{"sFBId":"' + response.id + '","sFBAT":"' + accessToken.accessToken + '","sFBED":"' + expirationDate + '","sFBEA":"' + response.email + '","sFBUN":"' + response.name + '"}';
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
						DemoService.updateUser(aData);
						console.log(aData);
					}
				);
			   
			 });
			} else {
			 console.log('User cancelled login or did not fully authorize.');
			}
		}, {scope: 'public_profile,email'});
	}
   }])
   
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
  .when('/search/:searchQuery', {
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