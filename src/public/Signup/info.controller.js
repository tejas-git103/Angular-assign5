angular.module('public')
.controller('InformationController',InformationController);

InformationController.$inject = ['SignupService'];

function InformationController() {
  var infoctrl = this;
  infoctrl.array_empty=1;
  this.$oninit = function () {
    console.log(array_empty);
    infoctrl.array_empty = SignupService.getArrayEmpty();
    console.log("infoctrl.array_empty===0"+infoctrl.array_empty===0);
  }

  //we need to set array empty to 0 after push operation of signupctrl
//maybe service can inject controller and write a function that eill be called in service
//look for component lifecyle properties something *****imp

}
