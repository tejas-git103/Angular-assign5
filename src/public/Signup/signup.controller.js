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
  signupctrl.array=[];

  signupctrl.submit = function () {
    signupctrl.valid = 1;
    SignupService.add_info(signupctrl.info);
    SignupService.setArrayEmpty();

  }

  signupctrl.check = function () {
    signupctrl.array = SignupService.get_array();
  }
}
