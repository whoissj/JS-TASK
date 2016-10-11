/**
 * Created by �� on 2016/9/27.
 */

var myApp = angular.module('myApp', ['ui.router', 'oc.lazyLoad']);
myApp.config(function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    var _lazyLoad = function(loaded) {
        return function($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };
    $urlRouterProvider.otherwise('/list');
    $stateProvider
        .state('list', {
            url: '/list',
            templateUrl: 'templates/list.html',
            controller:'List',
            resolve: {
                loadMyFile:_lazyLoad(
                    ['js/controllers.js','css/list.css']
                )
            }
        })
        .state('enrolling',{
            url:'/enrolling',
            templateUrl:'templates/enrolling.html',
            controller:'Enrolling',
            resolve: {
                loadMyFile:_lazyLoad(
                    ['js/controllers.js','css/enrolling.css']
                )
            }
        })
        .state('detail',{
            url:'/detail',
            templateUrl:'templates/detail.html',
            controller:'Detail',
            resolve: {
                loadMyFile:_lazyLoad(
                    ['js/controllers.js','css/detail.css']
                )
            }
        })
        .state('edit',{
            url:'/edit',
            templateUrl:'templates/edit.html',
            controller:'Edit',
            resolve: {
                loadMyFile:_lazyLoad(
                    ['js/controllers.js','css/edit.css']
                )
            }
        })
});
//.controller('Tab',function($scope,$state,$http){
//    $scope.tabs = {
//        list:"列表",
//        enrolling:"报名",
//        edit:"详情"
//    }
//});
