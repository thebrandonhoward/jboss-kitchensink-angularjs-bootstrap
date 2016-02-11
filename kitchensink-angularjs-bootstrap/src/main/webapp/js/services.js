var cpServices = angular.module( 'cpServices' , ['ngResource'] )

cpServices.factory( 'cpServicesHome', ['$resource'
                                       ,function( $resource )
{
    return $resource( '/', {} );
}]);

cpServices.factory( 'cpServicesLinksData', ['$resource'
                                            ,function( $resource )
{
    return $resource( 'js/links/links.json'
                     , {}
                     , { query: { method:'GET'
                                 ,isArray:true } }
                    );
}]);