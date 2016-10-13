/**
 * Created by �� on 2016/10/11.
 */
var app = angular.module("myApp");
//自定义验证指令
////var nameReg = /^(?=.*\d)(?=.*[a-zA-Z]).{1,8}$/;
////var nameReg = /\d+/;
//var nameReg = /^[\\u4e00-\\u9fa5]{0,}$/;
//app.directive("maxMinDirective", function () {
//    return {
//        restrict:"A",
//        require: 'ngModel',
//        link: function (scope, ele, attrs, ngModelController) {
//            ngModelController.$parsers.push(function (viewValue) {
//                if(nameReg.test(viewValue)) {
//                    ngModelController.$setValidity("nameconfirm",true);
//                    return viewValue;
//                }else{
//                    ngModelController.$setValidity("nameconfirm",false);
//                    return undefined;
//                }
//
//            })
//        }
//    }
//});
