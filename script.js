var app = angular.module("Authapp", ["ngRoute", "ngTouch"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
		controller : "homeController" 
	})
	.when("/crud", {
        templateUrl : "crud.html",
		controller : "crudController"
	})
	.when("/tracker", {
		templateUrl: "tracker.html",
		controller : "trackerController"
	})
})

.directive('ngCarousel', function($timeout) {
	return function(scope, element, attrs) {
	  var el = element[0];
	  var timer;
	  var containerEl = el.querySelector("ul");
	  var slidesEl = containerEl.querySelectorAll("li");
	  scope.numSlides = slidesEl.length;
	  scope.curSlide = 1;

	  scope.$watch('curSlide', function(num) {
		num = (num % scope.numSlides) + 1;
		containerEl.style.left = (-1*100*(num-1)) + '%';
	  });
	  
	  el.style.position = 'relative';
	  el.style.overflow = 'hidden';

	  containerEl.style.position = 'absolute';
	  containerEl.style.width = (scope.numSlides*100)+'%';
	  containerEl.style.listStyleType = 'none';
	  containerEl.style.margin =0;
	  containerEl.style.padding=0;
	  containerEl.style.transition = '1s';
	  
	  for(var i=0; i<slidesEl.length; i++) {
		var slideEl = slidesEl[i];
		slideEl.style.display = 'inline-block';
		slideEl.style.width = (100/scope.numSlides) + '%';
	  }
	};
  })

	.controller("homeController", function($scope){
	})

	.controller("crudController", function($scope){
			$scope.newProperty = {};
			$scope.info = "";
		
			$scope.properties = [
				{type: "Residential", address: "5 Nenagh St, North Manly, NSW-2100", purpose:"For Lease", status:"Available"},
				{type: "Hotel", address: "180 Haldon St, Lakemba, NSW-2195", purpose:"For Rent", status:"Available"},
				{type: "Office", address: "56 Browning St, Kingsbury, VIC-3083", purpose:"For Lease", status:"Available"},
				{type: "Hotel", address: "16 Dunne St, Kingsbury VIC-3083", purpose:"For Lease", status:"Available"},
				{type: "Residential", address: "44 Raglan St, Preston, VIC-3072", purpose:"For Rent", status:"Available"},
				{type: "Residential", address: "17 Berkeley Rd, Wollongong, NSW-2500", purpose:"For Lease", status:"Available"}
			];

			/*var mapOptions = {
				zoom: 4,
				center: new google.maps.LatLng(25,80),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

			$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

			$scope.markers = [];
			
			var infoWindow = new google.maps.InfoWindow();
			
			var createMarker = function (info){
				
				var marker = new google.maps.Marker({
					map: $scope.map,
					position: new google.maps.Point(0, -29),
					title: info.place
				});
				marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';
				
				google.maps.event.addListener(marker, 'click', function(){
					infoWindow.setContent('<h2>' + marker.title + '</h2>' + 
					  marker.content);
					infoWindow.open($scope.map, marker);
				});
				
				$scope.markers.push(marker);
				
			}  
			
			for (i = 0; i < $scope.properties.length; i++){
				createMarker($scope.properties[i]);
			}

			$scope.openInfoWindow = function(e, selectedMarker){
				e.preventDefault();
				google.maps.event.trigger(selectedMarker, 'click');
			}*/
		
			$scope.saveProperty = function(){
				$scope.properties.push($scope.newProperty);
				$scope.info = "New Property Added Successfully!";
				$scope.newProperty = {};
			};
		
			$scope.selectProperty = function(property){
				$scope.clickedProperty = property;
			};
		
			$scope.deleteProperty = function(){
				$scope.properties.splice($scope.properties.indexOf($scope.clickedProperty), 1);
				$scope.info = "Property Deleted Successfully!";
			};
		
			$scope.clearInfo = function(){
				$scope.info = "";
			};
		})

	.controller("trackerController", function($scope){
		var vm = $scope;
		$scope.tracker = {
			heading: "Search for your Dream"
		};
		$scope.type = null;
		$scope.properties = [
			{type: "Residential", address: "5 Nenagh St, North Manly, NSW-2100", purpose:"For Lease", status:"Available"},
			{type: "Hotel", address: "180 Haldon St, Lakemba, NSW-2195", purpose:"For Rent", status:"Available"},
			{type: "Office", address: "56 Browning St, Kingsbury, VIC-3083", purpose:"For Lease", status:"Available"},
			{type: "Hotel", address: "16 Dunne St, Kingsbury VIC-3083", purpose:"For Lease", status:"Available"},
			{type: "Residential", address: "44 Raglan St, Preston, VIC-3072", purpose:"For Rent", status:"Available"},
			{type: "Residential", address: "17 Berkeley Rd, Wollongong, NSW-2500", purpose:"For Lease", status:"Available"}
		];

		$scope.validTable = $scope.properties !==false;
	})