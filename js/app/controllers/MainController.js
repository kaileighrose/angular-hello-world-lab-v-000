function MainController($scope) {
  $scope.contact = {
    name: 'Steve Jobs',
    email: 's.jobs@apple.com',
    phone: '01234567890'
  };
}

angular
  .module('app') 
  .controller('MainController', MainController);