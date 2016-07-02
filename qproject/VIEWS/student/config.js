var app = angular.module('studentApp', ['ngRoute', 'ngSanitize', 'ui.ace']);

app.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'announcements.htm'
        })
        .when('/example', {
            templateUrl: 'newExample.htm'
        })
        .when('/chapter9', {
            templateUrl: 'Chapter9Assessment.html'
        })
        .when('/chapter2', {
            templateUrl: 'Chapter2Assessment.html'
        })
        
        .when('chapter5-assessment-p1', {
            templateUrl: 'Chapter5Assessment1.html'
        })
        .when('chapter5-assessment-p2', {
            templateUrl: 'Chapter5Assessment2.html'
        })
        .when('chapter5-assessment-p3', {
            templateUrl: 'Chapter5Assessment3.html'
        })
        .when('chapter5-assessment-p4', {
            templateUrl: 'Chapter5Assessment4.html'
        })
        .when('chapter5-assessment-p5', {
            templateUrl: 'Chapter5Assessment5.html'
        })
        .when('chapter5-assessment-p6', {
            templateUrl: 'Chapter5Assessment6.html'
        })
        .when('chapter5-assessment-p7', {
            templateUrl: 'Chapter5Assessment7.html'
        })
        
        .when('/chapter3', {
            templateUrl: 'Chapter3Assessment.html'
        })
                
        .when('/videos', {
            templateUrl: 'videos.htm'
        })
        .when('/grades', {
            templateUrl: '/pages/grades.htm'
        })
        .when('/notes', {
            templateUrl: 'notes.htm'
        })

        .when('/notes2', {
            templateUrl: 'notes2.html'
        })

        .when('/notes10', {
            templateUrl: 'notes10.htm'
        })

        .when('/lectureVideo', {
            templateUrl: 'lectureVideo.htm'
        })
        .when('/exampleVideo', {
            templateUrl: 'exampleVideo.htm'

        })

        .when('/sudoCode', {
            templateUrl: 'SudoCode.htm'
        })
        .when('/conCode', {
            templateUrl: 'Conditional.html'
        })

        .when('/animation', {
            templateUrl: 'Animation.html'
        })

        .when('/pcTable', {
            templateUrl: 'PC-example2.html'
        })
        .when('/tutorial', {
            templateUrl: 'tutorial.htm'
        })
        .when('/ifAnimation', {
            templateUrl: 'AnimationIF.html'
        });

}]);