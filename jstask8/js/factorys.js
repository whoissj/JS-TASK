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
        Urls.deleteUrl = function () {      //删除学员地址
            return "/a/students/"
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
                    }).success(function (data) {
                        if(data.code == 200) {
                            bootbox.alert({
                                title: '老大说：',
                                message: data.message,
                                size: 'small'
                            });
                        }
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
        operate.deleteStn = function (student) {
            return $http({
                method: 'POST',
                url:"/a/students/",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function (data, headersGetter) {
                    return $.param(data);
                },
                data:student
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
    //app.factory('Common', ['$http', '$q', function($http, $q) {
    //        return {
    //            loadScript: function(url, callback) {
    //                var head = document.getElementsByTagName("head")[0];
    //                var script = document.createElement("script");
    //                script.setAttribute("type", "text/javascript");
    //                script.setAttribute("src", url);
    //                script.setAttribute("async", true);
    //                script.setAttribute("defer", true);
    //                head.appendChild(script);
    //                //fuck ie! duck type
    //                if (document.all) {
    //                    script.onreadystatechange = function() {
    //                        var state = this.readyState;
    //                        if (state === 'loaded' || state === 'complete') {
    //                            callback && callback();
    //                        }
    //                    }
    //                }
    //                else {
    //                    //firefox, chrome
    //                    script.onload = function() {
    //                        callback && callback();
    //                    }
    //                }
    //            },
    //            loadCss: function(url) {
    //                var ele = document.createElement('link');
    //                ele.href = url;
    //                ele.rel = 'stylesheet';
    //                if (ele.onload == null) {
    //                    ele.onload = function() {
    //                    };
    //                }
    //                else {
    //                    ele.onreadystatechange = function() {
    //                    };
    //                }
    //                angular.element(document.querySelector('body')).prepend(ele);
    //            }
    //        }
    //    }
    //]);