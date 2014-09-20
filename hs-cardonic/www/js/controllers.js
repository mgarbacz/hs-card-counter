angular.module('hs-card-counter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('DecklistsCtrl', function($scope) {
  $scope.decklists = [
    { title: 'heavy', id: 1 },
    { title: 'naxxroll', id: 2 },
    { title: 'handlock', id: 3 },
    { title: 'legendeath', id: 4 },
    { title: 'madness', id: 5 }
  ];
})

.controller('DecklistCtrl', function($scope, $stateParams) {
    console.log($scope);
    console.log($stateParams);
});
