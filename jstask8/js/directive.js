/**
 * Created by �� on 2016/10/11.
 */
var app = angular.module("myApp");
//var nameReg = /^(?=.*\d)(?=.*[a-zA-Z]).{1,8}$/;
//app.directive("nameDirective", function () {
//    return {
//        require: ngModel,
//        link: function (scope, ele, attrs, ngModelController) {
//            ngModelController.$parsers.push(function (viewValue) {
//                if(nameReg.test(viewValue)) {
//                    ngModelController.$setValidity("nameconfirm",true)
//                }else{
//                    ngModelController.$setValidity("nameconfirm",false)
//                }
//                return viewValue;
//            })
//        }
//    }
//});
//    app.directive('ueditor', ['Common', '$rootScope', function(Common, $rootScope) {
//            return {
//                restrict: 'EA',
//                require: 'ngModel',
//                link: function(scope, ele, attrs, ctrl) {
//                    $rootScope.$emit('loading', '初始化编辑器...');//广播loading事件，可以删除
//                    var _self = this,
//                        _initContent,
//                        editor,
//                        editorReady = false,
//                        base = '/public/vendor/utf8_qiniu_ueditor-master', //ueditor目录
//                        _id = attrs.ueditor;
//                    var editorHandler = {
//                        init: function() {
//                            window.UEDITOR_HOME_URL = base + '/';
//                            var _self = this;
//                            if (typeof UE != 'undefined') {
//                                editor = UE.getEditor(_id, {
//                                    toolbars: [
//                                        [
//                                            '|', 'undo', 'redo', '|',
//                                            'bold', 'italic', 'underline', 'fontborder', 'removeformat', 'formatmatch', '|', 'forecolor', 'backcolor','|',
//                                            'fontfamily', 'fontsize', '|',
//                                            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
//                                            'link', 'unlink', '|',
//                                            'simpleupload', 'insertimage', 'emotion',  '|'
//                                        ]
//                                    ],
//                                    autoHeightEnabled: false,
//                                    autoFloatEnabled: false,
//                                    elementPathEnabled:false
//                                });
//                                editor.ready(function() {
//                                    editor.setHeight(120);
//                                    editorReady = true;
//                                    $rootScope.$emit('loading', '');//编辑器初始化完成
//                                    editor.addListener('contentChange', function() {//双向绑定
//                                        if (!scope.$$phase) {
//                                            scope.$apply(function() {
//                                                ctrl.$setViewValue(editor.getContent());
//                                            });
//                                        }
//                                    });
//                                });
//                            }
//                            else {
//                                Common.loadScript(base + '/ueditor.config.js', null);
//                                Common.loadScript(base + '/ueditor.all.min.js', function() {
//                                    _self.init();
//                                });
//                            }
//                        },
//                        setContent: function(content) {
//                            if (editor && editorReady) {
//                                editor.setContent(content);
//                            }
//                        }
//                    };
//                    ctrl.$render = function() {
//                        _initContent = ctrl.$isEmpty(ctrl.$viewValue) ? '' : ctrl.$viewValue;
//                        editorHandler.setContent(_initContent);//双向绑定
//                    };
//                    editorHandler.init();
//                    //事件
//                    $rootScope.$on('$routeChangeStart', function() {
//                        editor && editor.destroy();
//                    });
//                }
//            }
//        }
//    ]);
