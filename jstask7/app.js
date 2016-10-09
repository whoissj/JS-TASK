/**
 * Created by �� on 2016/9/20.
 */
var myApp = angular.module('myApp', ['ui.router', 'oc.lazyLoad']);
    myApp.config(function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
        var _lazyLoad = function(loaded) {
            return function($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {serie: true});
            }
        };
        $urlRouterProvider.otherwise('/homepage');
        $stateProvider
            .state('homepage', {
                url: '/homepage',
                templateUrl: 'templates/JSTask7homepage.html',
                resolve: {
                    loadMyFile:_lazyLoad(
                        ['css/homepage.css']
                    )
                }
            })
            .state('shuffle',{
                url:'/shuffle',
                templateUrl:'templates/shuffle.html',
                controller:'Shuffle',
                resolve: {
                    loadMyFile:_lazyLoad(
                        ['js/shuffle.js','css/shuffle.css','css/common.css']
                    )
                }
            })
            .state('check',{
                url:'/check',
                templateUrl:'templates/check.html',
                controller:'Check',
                resolve: {
                    loadMyFile:_lazyLoad(
                        ['js/check.js','css/check.css']
                    )
                }
            })
            .state('details',{
                url:'/details',
                templateUrl:'templates/details.html',
                controller:'Details',
                resolve: {
                    loadMyFile:_lazyLoad(
                        ['js/details.js','css/details.css','css/common.css']
                    )
                }
            })
            .state('option',{
                url:'/option',
                templateUrl:'templates/option.html',
                controller:'Option',
                resolve: {
                    loadMyFile:_lazyLoad(
                        ['js/option.js','css/option.css','css/common.css']
                    )
                }
            })
            .state('kill',{
                url:'/kill',
                templateUrl:'templates/kill.html',
                controller:'Kill',
                resolve: {
                    loadMyFile:_lazyLoad(
                        ['js/kill.js','css/kill.css','css/common.css']
                    )
                }
            })
            .state('discuss',{
                url:'/discuss',
                templateUrl:'templates/discuss.html',
                controller:'Discuss',
                resolve: {
                    loadMyFile:_lazyLoad(
                        ['js/discuss.js','css/discuss.css','css/common.css']
                    )
                }
            })
            .state('vote',{
                url:'/vote',
                templateUrl:'templates/vote.html',
                controller:'Vote',
                resolve: {
                    loadMyFile:_lazyLoad(
                        ['js/vote.js','css/vote.css','css/common.css']
                    )
                }
            })
            .state('result',{
                url:'/result',
                templateUrl:'templates/result.html',
                controller:'Result',
                resolve: {
                    loadMyFile:_lazyLoad(
                        ['js/result.js','css/result.css','css/common.css']
                    )
                }
            })
    });