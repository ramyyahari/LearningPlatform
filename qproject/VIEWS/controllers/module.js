/*********************************************************************************************\
 * Author: Erick Meyer  
 * Date Created: Sunday, January 24th 2016
 * Title: Module Controller (Generic)
 * Description: This runs the business logic for our basic module.
\*********************************************************************************************/
app.controller('moduleController', [
  '$scope',
  '$log',
  'panelService',
  'answerService',
  function($scope, $log, panelService, answerService ){
    $log.log("Module Controller Hit.");
    
    $scope.selected = []; 
    $scope.errors = "This is where the errors will be displayed.";
    $scope.sight = answerService;
    $scope.canSee = "";
    
    // Automatically will remove options if they are clicked twice. 
    $scope.onAnswerPress = function ( element ) {
      if ($scope.selected.indexOf(element) > -1) {
        var index = $scope.selected.indexOf(element);
        $scope.selected.splice(index, 1);
      } 
      else {
        // Otherwise add it to the array of selected answers. 
        $scope.selected.push(element);
      }
    };
    
    // This function will, for the time being, broadcast the submitted results to the other 
    // Modules to show that module communication is possible. 
    $scope.onSubmit = function( id ) {
      alert("Submitted!");
      alert($scope.selected);
      alert(id);
      answerService.submitted[id] = $scope.selected;
      $log.log(answerService.submitted);
    };
  
}]);