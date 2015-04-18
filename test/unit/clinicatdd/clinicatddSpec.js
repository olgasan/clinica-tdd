'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('clinicatdd');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('clinicatdd.config')).to.be.ok;
  });

  
  it('should load filters module', function() {
    expect(hasModule('clinicatdd.filters')).to.be.ok;
  });
  

  
  it('should load directives module', function() {
    expect(hasModule('clinicatdd.directives')).to.be.ok;
  });
  

  
  it('should load services module', function() {
    expect(hasModule('clinicatdd.services')).to.be.ok;
  });
  

});