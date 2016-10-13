/**
 * Created by 俊 on 2016/10/10.
 */
var app = angular.module("myApp");
    app.factory("urls", function () {
        var Urls = {};
        Urls.listUrl = function () {        //获取列表地址
            return '/a/students';
        };
        Urls.addUrl = function () {         //添加学员地址
            return '/a/student'
        };
        Urls.editUrl = function () {        //修改学员地址
            return '/a/student/'+ student.id
        };
        Urls.deleteUrl = function (id) {      //删除学员地址
            return "/a/students?id=" + id
        };
        return Urls;
    });
    app.factory("operateStnInfo",function($state,$http,urls){
        var operate = {};
        //请求获取列表
        operate.getList = function () {
            return $http({
                    method: 'GET',
                    url: urls.listUrl()
                    })
        };
        //请求添加学员
        operate.addStn = function (newStn) {
            return   $http({
                method:'POST',
                url:urls.addUrl(),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function (data, headersGetter) {
                    return $.param(data);
                },
                data: newStn
            }).success(function(data){
                if(data.code == 200){
                    bootbox.alert({
                        title: '老大说：',
                        message: data.message,
                        size: 'small'
                    });
                } else{
                    bootbox.alert({
                        title: '老大说：',
                        message: data.message,
                        size: 'small'
                    });
                }
            }).error(function(data){
                bootbox.alert({
                    title: '老大说：',
                    message: data.message,
                    size: 'small'
                });
            })
        };
        //请求删除学员
        operate.deleteStn = function (id) {
            return $http({
                method: 'POST',
                url:urls.deleteUrl(id),
                data:id
            }).success(function(data,header,config,status){
                if(data.code == 200 ){
                    bootbox.alert({
                        title: '老大说：',
                        message: data.message,
                        size: 'small'
                    });
                }else{
                    bootbox.alert({
                        title: '老大说：',
                        message: data.message,
                        size: 'small'
                    });
                }
            }).error(function(data,header,config,status){
                bootbox.alert({
                    title: '老大说：',
                    message: data.message,
                    size: 'small'
                });
            })
        };
        //请求修改学员信息
        operate.editStn = function (student) {
          return $http({
              method: 'PUT',
              url: '/a/student/'+ student.id,
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              transformRequest: function (data, headersGetter) {
                  return $.param(data);
              },
              data:student
          }).success(function(data,header,config,status){
              if(data.code == 200) {
                  bootbox.alert({
                      title: '老大说：',
                      message: data.message,
                      size: 'small'
                  });
              }else {
                  bootbox.alert({
                      title: '老大说：',
                      message: data.message,
                      size: 'small'
                  });
              }
          }).error(function(data,header,config,status){
              bootbox.alert({
                  title: '老大说：',
                  message: data.message,
                  size: 'small'
              });
          })
        };
        return operate;

    });