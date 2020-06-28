
(function() {
  'use strict';

  angular.module('public')
  .controller('SignupController',SignupController);

  SignupController.$inject = ['SignupService'];
  function SignupController(SignupService) {
    var signupctrl = this;
    signupctrl.info = {
      firstname:"",
      lasname:'',
      phone:'',
      email:'',
      favdish:''
    }
    signupctrl.submit = function () {
      signupctrl.valid = 1;
      SignupService.add_info(signupctrl.info);
      // signupctrl.array.push(signupctrl.info);
      // signupctrl.info = undefined; //coz when we change value in input inserted values are changed coz both refered same variable
      // delete(signupctrl.info);
    }

    // signupctrl.check = function () {
    //   signupctrl.array = SignupService.get_array();
    // }
  }
}());
