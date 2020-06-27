angular.module('public')
.service('SignupService',SignupService);

function SignupService() {
  var service = this;
  var arrayInfo=[];
  var array_empty=1;
  service.add_info = function (info){
    arrayInfo.push(info);
    console.log("push operation succes");
  }

  service.get_array = function () {
    return arrayInfo;
  }
  service.setArrayEmpty = function () {
    array_empty = 0;
  }

  service.getArrayEmpty = function () {
    return array_empty;
  }
}
