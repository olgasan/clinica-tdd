(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('clinicatdd.config', [])
      .value('clinicatdd.config', {
          debug: true
      });

  // Modules
  angular.module('clinicatdd.directives', []);
  angular.module('clinicatdd.filters', []);
  angular.module('clinicatdd.services', []);
  angular.module('clinicatdd',
      [
          'clinicatdd.config',
          'clinicatdd.directives',
          'clinicatdd.filters',
          'clinicatdd.services'
      ]);

})(angular);
