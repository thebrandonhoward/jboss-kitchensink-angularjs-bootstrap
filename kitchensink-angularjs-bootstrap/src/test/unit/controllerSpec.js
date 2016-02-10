describe('LinksListCtrl', function(){

  beforeEach(module('centerpieceApp'));

  it('should create "links" model with 3 links', inject(function($controller) {
    var scope = {},
        ctrl = $controller('LinksListCtrl', {$scope:scope});

    expect(scope.links.length).toBe(3);
  }));

});