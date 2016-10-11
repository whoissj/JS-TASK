/**
 * Created by 俊 on 2016/10/10.
 */
var app = angular.module("myApp");
    app.filter("typeFilter", function () {
        var typeNew = ["CSS", "JS", "Java", "运维", "DBA", "产品", "IOS", "Android"];
        return function (type) {
            return type = typeNew[type - 1];
        }
    });
    app.filter("talentFilter", function () {
        var talentNew = ['学霸','学渣'];
        return function (talent) {
            return talent = talentNew[talent - 1];
        }
    });
    app.filter("levelFilter", function () {
        var levelNew = ['0基础','修行3个月以内','修行6个月以内','修行1年以内','修行3年以内','修行3年以上'];
        return function (level) {
            return level = levelNew[level - 1];
        }
    });
