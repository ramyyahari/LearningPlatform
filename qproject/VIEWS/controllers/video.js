/*********************************************************************************************\
 * Author: Erick Meyer  
 * Date Created: Sunday, January 24th 2016
 * Title: Video Controller
 * Description: This runs the business logic for our video Module.
\*********************************************************************************************/
app.controller("videoController", [
  '$scope',
  '$log',
  'answerService',
  function($scope, $log, answerService){
    $scope.sight = answerService;
  }
  
]);