var MsControllers = angular.module("MsControllers", []);

MsControllers.controller("MainController", ['$scope', 'DemoService', 'SearchLoc', '$http', '$log',
	function($scope, DemoService, SearchLoc, $http, $log)
		{
			var sLoc = SearchLoc.getLocation();
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
			$scope.slides = [{image: 'images/carousel1.png'}, {image: 'images/carousel2.png'}, {image: 'images/carousel3.png'}];
		}]
);

MsControllers.controller("ListController", ['$scope','$http', '$routeParams', 'DemoService', 'SearchLoc', '$log', 
	function($scope, $http, $routeParams, DemoService, SearchLoc, $log)
		{
			var sLoc = SearchLoc.getLocation();
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
);

MsControllers.controller("DetailsController", ['$scope', '$routeParams', 'DemoService', '$log',
	function($scope, $routeParams, DemoService, $log)
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
			
			$log.log($scope.posts.aReviews);
			
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
			
			
		}]
);

MsControllers.controller("searchController", ['$scope','$http', '$routeParams', 'DemoService', 'SearchLoc',
	function($scope, $http, $routeParams, DemoService, SearchLoc)
		{
			var sLoc = SearchLoc.getLocation();
			var data = '{"sLocation":"' + DemoService.Loc.SearchLoc + '","sSearch":"' + $routeParams.searchQuery + '"}';
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
					$scope.searchLoc = sLoc;
					DemoService.updateValue($scope.posts);
				}
			);
		}]
);

MsControllers.controller("FBController", ['$scope','$http', '$rootScope', 'DemoService',
	function($scope, $rootScope, $http)
		{
			$rootScope.$on("fb_connected", function (event, args) {
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
		}]
);