/*************************************************************************\
    Author: Erick Meyer
    Description: The 'panelController' is to remove unessisary watches that
    we would otherwise have to use. It also ensures that the scope of this
    page has been saved, by using the 'panelService'. This way all of our
    modules can communicate between eachother and provide the desired
    functionality.
\*************************************************************************/
app.controller('panelController', [
    '$scope',       // $scope is the ViewModel for the panel.
    '$log',         // $log contains safe ways to write information out to the console.
    '$sanitize',
    'panelService', // panelService is a CUSTOM service.
    function( $scope, $log, $sanitize, panelService ) {
        'use strict';
        $scope.panel = panelService;
        $log.log("Hit panel controller.");
        
        $scope.sanitizeThis = function ( someStringUrl ) {
          return $sanitize( someStringUrl );
        };
        
        
        $scope.onDemoCommunication = function(modId, recvId, someString) {
          
        };
        
        $scope.onSubmit = function(panelService) {
          // Send the answers over the secure connection.
          alert("Submitting Assignment: Pressed");
        };
        
        
    }
]);