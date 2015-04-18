describe('MyTestCtrl', function() {

  var $scope, controller;
  var $controller;

  beforeEach(module('clinicatdd.filters'));

  describe("when there is no info", function () {

    beforeEach(inject(function(_$controller_){
      $controller = _$controller_;
    }));

    beforeEach(function() {
      $scope = {};
      controller = $controller('MyTestCtrl', { $scope: $scope });
    });

    it("something should be an empty array", function () {
      expect($scope.something).toBeDefined();
      expect(angular.isArray($scope.something)).toBeTruthy();
      expect($scope.something.length).toBe(0);
    });
  });
});
