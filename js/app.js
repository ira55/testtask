var app = angular.module('Test', []);

app.controller('TestCtrl', function ($scope) {
  $scope.objects = [{
  	header: 'What?',
  	text:'Chania is a city on the island of Crete.'
  },{
  	header: 'Where?',
  	text:'Crete is a Greek island in the Mediterranean Sea.'
  },
  {
  	header: 'How?',
  	text:'You can reach Chania airport from all over Europe.'
  },
  {
  	header: 'How?',
  	text:'You can reach Chania airport from all over Europe.'
  }];
  $scope.element5 = 'Crete is a Greek island in the Mediterranean Sea.';

});