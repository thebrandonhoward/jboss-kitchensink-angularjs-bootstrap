var cpFilters = angular.module( 'cpFilters', [] );

cpFilters.filter( 'cpCheckmark', function()
{
  return function( input )
  {
    return input == 'Y' ? '\u2713' : '\u2718';
  };
});