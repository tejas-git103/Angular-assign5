(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('signup',{
      url:'/signup',
      templateUrl:'src/public/signup/signup.template.html',
      controller:'SignupController as signupctrl'
    })
    .state('info',{
      url:'/info',
      templateUrl:'src/public/signup/info.template.html',
      controller:'InformationController as infoctrl',
      resolve:{
        info:['SignupService',function (SignupService) {
          return SignupService.get_info();
        }],
        favorite:['SignupService',function (SignupService){
          return SignupService.get_data();

        }]
      }

    });
}
})();
