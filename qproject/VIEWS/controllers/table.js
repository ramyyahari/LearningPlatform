/*
/!**
 * Created by quang on 06/02/16.
 *!/

var app = angular.module('myApp', []);
app.controller('myTableCtrl', function($scope) {
    $scope.val = null;
    $scope.tableArray = [
        {row:"1", col:"72", logic:"122", move:"move1"},
        {row:"2", col:"52", logic:"132", move:"move2"},
        {row:"3", col:"24", logic:"125", move:"move3"},
        {row:"4", col:"32", logic:"126", move:"move4"},
        {row:"5", col:"72", logic:"122", move:"move1"},
        {row:"6", col:"52", logic:"132", move:"move2"},
        {row:"7", col:"24", logic:"125", move:"move3"},
        {row:"8", col:"32", logic:"126", move:"move4"}
    ];


    $scope.CheckSubmit = function(){

/!*        console.log("hey");*!/
/!*        var oForm = document.getElementById('form1').submitted;
        console.log(oForm);*!/

/!*        var a= $scope.stepnum;
        var b= $scope.r1;
        var c= $scope.r2;*!/



/!*       var form = document.forms[1].id;
        var a = document.getElementsByName("form100");
        var a1 = document.getElementsByName("hello1");
        console.log("hey");*!/


        /!*This is what I want to do:
        * When the user click the submit button
        *   if the step number == 1
        *       then check tableArray at index 1, to see if all the attributes matches
        *       if it does match, then allow them to move on
        *       else, hightlight the area that is incorrect with red
        *
        *    same applies if step number ==2 , 3 ect.. and so on
        *
        *
        * *!/
    }



});
*/




//var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {

    /*just hard-coding the table*/
    table = [
        {step:"1", row:"1", col:"1", logic:"A(i) * A(j)", move:"1"},
        {step:"2", row:"1", col:"0", logic:"A(i) * A(j)", move:"0"},
        {step:"3", row:"1", col:"-2", logic:"A(i) * A(j)", move:"-2"},
        {step:"4", row:"2", col:"1", logic:"A(i) * A(j)", move:"2"},
        {step:"5", row:"2", col:"0", logic:"A(i) * A(j)", move:"0"},
        {step:"6", row:"2", col:"-2", logic:"A(i) * A(j)", move:"-4"},
        {step:"7", row:"1", col:"-1", logic:"A(i) * A(j)", move:"-1"},
        {step:"8", row:"-1", col:"0", logic:"A(i) * A(j)", move:"0"},
        {step:"9", row:"-1", col:"-2", logic:"A(i) * A(j)", move:"2"},
    ];

    /*the form values(row,col ect..) won't get create unless you set it to something upon start*/
    $scope.master = { step: "",row:"", col:"", logic:"A(i) * A(j)", move:""};
       var a = $scope.user = $scope.master;

    /*upon a button click, we will check the user input with what we have in the array
    * then we send an alert back to tell them if they got it right or not
    * we probably need take away the alert and use something else*/
    $scope.check = function() {
        var arrlen = table.length;
        var usrstep =($scope.user.step) -1 ;
        if(usrstep <= arrlen)
        {
            if(table[usrstep].row == $scope.user.row &&
                table[usrstep].col == $scope.user.col &&
                table[usrstep].logic == $scope.user.logic &&
                table[usrstep].move == $scope.user.move ) {
                alert("Correct!");
                console.log("match!");
                $scope.hints = "";
            }
            else {
                console.log('does not match');
                alert("Incorrect!");
                $scope.hints = "Hints: place holder for hints";

            }
        }
        /*this case happens when user "step" input
        * is longer than the array itself*/
        else {
            console.log('out of bound');
            alert("Out of Bound!");
        }


    };
});


