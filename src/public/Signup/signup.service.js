angular.module('public')
.service('SignupService',SignupService);

SignupService.$inject =['$http'];
function SignupService($http) {
  var service = this;
  var info={favdish:'B1'};
  var array_empty=1;
  var ApiPath ='https://tejas-git103.herokuapp.com';
  service.add_info = function (info1){
    info = info1;
  }

  service.get_info = function () {
    return info;
  }

  service.get_data = function () {
    return $http.get(ApiPath + '/menu_items/'+ info.favdish + '.json').then(function (response) {
      return response.data;
    },function (response) {
      return "Error";
    });

  };


}
