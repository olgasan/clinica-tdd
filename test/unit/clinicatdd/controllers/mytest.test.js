describe('MyTestCtrl', function() {
  beforeEach(module('clinicatdd.controllers'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('MyTestCtrl', { $scope: $scope });
    });
  });
});
