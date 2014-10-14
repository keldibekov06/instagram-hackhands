angular.module('Instagram')
  .controller('HomeCtrl', function($scope, $auth, API) {

    if ($auth.isAuthenticated()) {
      API.getFeed().success(function(data) {
        $scope.photos = data;
      });
    }

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.linkInstagram = function() {
      $auth.link('instagram')
        .then(function(response) {
          console.log('done! linking');
        });
    };

  });