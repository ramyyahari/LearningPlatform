/**
 * Created by Zachariah on 10/24/2015.
 */

/*
 * {"question":"Is this working $$A=\\left(\\begin{array}{cc}1 & 2 \\\\3 & 5\\end{array}\\right).$$ ?", "answers":["no", "yes"], "correct":"yes", "type":"mc"}
 * */

//
//Need to assign point values

MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: "none",
    "HTML-CSS": {
        showMathMenu: false
    }
});
MathJax.Hub.Configured();
//
app.controller('Main', ['$scope', 'Server', function($scope, Server) {
    $scope.rerender = function() {


    $scope.jax = function() {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    };

}]);


app.directive('dynamic', function($compile, $timeout) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, ele, attrs) {
            scope.$watch(attrs.dynamic, function(html) {
                //var copy = html;
                    //ele.html("");
                    ele.html
                    ele.html(html);
                    var compiled = $compile(ele.contents())(scope);

                $timeout(function(){
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
                });
            })
        }
    };
});
