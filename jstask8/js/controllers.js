/**
 * Created by 俊 on 2016/10/10.
 */
var app = angular.module("myApp",[]);
    //获取列表控制器
    app.controller("List",["$rootScope","$scope","$state","$http","operateStnInfo", function ($rootScope,$scope,$state,$http,operateStnInfo) {
        var details;
        console.log($("input[name = stninfo]").val());
        operateStnInfo.getList().then(function (respInfo) {
            $scope.students = respInfo.data.data;
            details = $scope.students;
            console.log(details);
        });
        $scope.choose = function($index){       //点击进入详情
            console.log(details[$index]);
            $rootScope.student = details[$index];       //点击获得的学员信息绑定到根作用域
            $state.go('detail',{id:details[$index].id})
        }
    }]);
    //添加学员控制器
    app.controller("Enrolling", ["$scope","$state","$http","operateStnInfo", function ($scope,$state,$http,operateStnInfo) {
        $scope.simple = {
            toolbars: [
                [
                    '|', 'undo', 'redo', '|',
                    'bold', 'italic', 'underline', 'fontborder', 'removeformat', 'formatmatch', '|', 'forecolor', 'backcolor','|',
                    'fontfamily', 'fontsize', '|',
                    'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
                    'link', 'unlink', '|',
                    'simpleupload', 'insertimage', 'emotion',  '|'
                ]
            ],
            wordCount:false,
            autoHeightEnabled: false,
            autoFloatEnabled: false,
            elementPathEnabled:false
        };
        $scope.save = function(){
            var newStn = $scope.newStu;
            console.log(newStn);
            operateStnInfo.addStn(newStn).then(function (respInfo) {
                console.log(respInfo.data.message);
            })
        };
        $scope.regName = '^[\\u4e00-\\u9fa5]{0,}$';
        $scope.regQQ = '\\d+'
    }]);
    //详情删除控制器
    app.controller("Detail", ["$rootScope","$scope","$state","$http","operateStnInfo", function ($rootScope,$scope,$state,$http,operateStnInfo) {
        console.log( $scope.student);       //此处scope从rootScope继承而来
        var id = $state.params.id;          //获取url上的id
        $scope.delete = function () {
            operateStnInfo.deleteStn(id).then(function (respInfo) {
                console.log(respInfo.data.message);
                $rootScope.student = {};
            })
        };
        $scope.edit = function () {
            $state.go('edit',{id:id})
        }
    }]);

    //修改学员控制器
    app.controller("Edit", ["$scope","$state","$http","operateStnInfo", function ($scope,$state,$http,operateStnInfo) {
        $scope.simple = {
            toolbars: [
                [
                    '|', 'undo', 'redo', '|',
                    'bold', 'italic', 'underline', 'fontborder', 'removeformat', 'formatmatch', '|', 'forecolor', 'backcolor','|',
                    'fontfamily', 'fontsize', '|',
                    'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
                    'link', 'unlink', '|',
                    'simpleupload', 'insertimage', 'emotion',  '|'
                ]
            ],
            wordCount:false,
            autoHeightEnabled: false,
            autoFloatEnabled: false,
            elementPathEnabled:false
        };
        $scope.save = function () {
            var student = $scope.student;
            operateStnInfo.editStn(student).then(function (respInfo) {
                console.log(respInfo.data.message);
            })
        }
    }]);