var centerpieceApp = angular.module('centerpieceApp', []);

centerpieceApp.controller('LinksListCtrl', function ($scope) 
{       
   $scope.name = "Centerpiece!";
    
   $scope.links = [ { 'name': 'Google Search'
                     ,'snippet': 'Web Browser.'
                     ,'url': 'https://www.google.com/webhp?source=search_app&gws_rd=ssl'}
                   ,{ 'name': 'Centerpiece2.0'
                     ,'snippet': 'Associate productivity tool.'
                     ,'url': 'http://ngaserverplatform.dev.nextgenassembly.rmnim.qa.walmart.com:8080/CenterpieceMvc/'}
                   ,{ 'name': 'Angular2.0'
                     ,'snippet': 'Angularjs Home Page for 2.0 Beta.'
                     ,'url': 'https://angular.io/'}
                   ];
});