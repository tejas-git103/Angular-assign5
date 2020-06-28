
(function() {
  'use strict';
  angular.module('public')
  .controller('InformationController',InformationController);

  InformationController.$inject = ['info', 'SignupService','favorite'];

  function InformationController(info,SignupService,favorite) {
      var infoctrl = this;
      infoctrl.info = info;
      infoctrl.favorite = favorite;
      console.log(infoctrl.favorite);
      console.log(infoctrl.favorite.description);
      infoctrl.ApiPath='https://tejas-git103.herokuapp.com';


    }
}());
