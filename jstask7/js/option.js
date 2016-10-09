/**
 * Created by �� on 2016/9/22.
 */

angular.module('myApp',[])
    .controller('Option',function($scope,$state){
        var playersStr = localStorage.players;
        var players = JSON.parse(playersStr);
        console.log(players);
        if(localStorage.daynum != null){
            var dayNumStr = localStorage.daynum;
            var dayNum = JSON.parse(dayNumStr);
            console.log(dayNum);
            $scope.dayNum = dayNum;
        }else{
            $scope.dayNum = '第一天';
        }
        $scope.step = true;
        $scope.col = function(){
            $scope.step = !$scope.step;
        };
        $scope.gotokill = function(){
            $state.go('kill');
        }
    });
