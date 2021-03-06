var cpModule = angular.module( 'cpModule', ['ngRoute', 'cpControllers', 'cpFilters', 'cpServices', 'cpAnimations'] );

cpModule.config(['$routeProvider',
  function( $routeProvider )
  {
    $routeProvider.when('/',
                        { templateUrl: 'partials/linkslistmain.html'
                         ,controller: 'cpControllersMain'
                        })
                   .when('/links/:linkid',
                         { templateUrl: 'partials/linkslistsecond.html'
                          ,controller: 'cpControllersSecond'
                         })
                   .otherwise( { redirectTo: '/' });
  }]);
