describe('LinksListCtrl', function(){

  it('should create "links" model with 3 links', function() {
    var scope = {},
        ctrl = new LinksListCtrl(scope);

    expect(scope.links.length).toBe(3);
  });

});