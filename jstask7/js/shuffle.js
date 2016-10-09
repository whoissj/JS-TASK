/**
 * Created by �� on 2016/9/20.
 */
angular.module('myApp',[])
    .controller('Shuffle',function($scope,$state){
        localStorage.clear();
        $scope.playersNum = 6;
        $scope.set = function(){
            var playersNum = $scope.playersNum;
            if (playersNum < 6 || playersNum > 20){
                alert("请输入6-20玩家人数");
            }else{
                //确定职业个数
                var killerNum;
                var players = [];
                killerNum = Math.floor(playersNum/4);
                if (playersNum < 8) killerNum = 1;
                for ( var n = 0;n < killerNum;n ++){
                    players [n] = "杀 手";
                }
                for (n = killerNum;n < playersNum;n ++){
                    players[n] = "平 民";
                }
                //将获得的职业数组打乱顺序
                for (var k = players.length; k--; ) {
                    var j = Math.floor(Math.random() * (k + 1));
                    var temp = players[k];
                    players[k] = players[j];
                    players[j] = temp;
                }
                console.log(players);
                $scope.players = players;
            }
        };
        $scope.deal = function(){
            var playersNum = $scope.playersNum;
            var players = $scope.players;
            if(players == undefined) {
                alert("请分配玩家身份");
            }
            else if (playersNum < 6 || playersNum > 20){
                alert("请输入6-20玩家人数");
            }else{
                $state.go('check');
                playersStr = JSON.stringify(players);
                localStorage.players = playersStr;
            }
        }
    })

    .directive('maxmin',function(){
        return {
            restrict:"A",
            require:"ngModel",
            link:function(scope,ele,attrs,ngModelController){
                ngModelController.$parsers.push(function(viewValue){
                    if(viewValue >= 6 && viewValue <= 20){
                        ngModelController.$setValidity('maxmin',true);
                    }else{
                        ngModelController.$setValidity('maxmin',false);
                    }
                    return viewValue;
                });
            }
        }
    });
