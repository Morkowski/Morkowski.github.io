let App = angular.module('App', ['pascalprecht.translate', 'ui.bootstrap', 'duScroll']);

App.value('duScrollCancelOnEvents', false);

App.config( ($translateProvider) => {
  
	$translateProvider.useStaticFilesLoader({
	    prefix: '../translations/locale-',
	    suffix: '.json'
	});
	  
	$translateProvider.preferredLanguage('pl');
	$translateProvider.useSanitizeValueStrategy('escape');

});

App.controller('CollapseCtrl', ($scope) => {

	$scope.isCollapsed = true;

	$scope.toggleCollapse = () => {

		$scope.isCollapsed = !$scope.isCollapsed;

	}

	$scope.collapse = () => {

		$scope.isCollapsed = true;
		
	}

});

App.controller('LanguageCtrl', ($scope, $rootScope, $translate) => {

	$scope.toggleLanguage = () => {

		$translate.use()==='pl' ? $translate.use('eng') : $translate.use('pl');
		
	}

});

App.run(["$rootScope","$translate",
			function($rootScope, $translate){

				$rootScope.language = $translate.use();
				$rootScope.$on("$translateChangeSuccess", function(){
					$rootScope.language = $translate.use();
				});
				
			}
]);