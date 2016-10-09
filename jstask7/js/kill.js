/**
 * Created by �� on 2016/9/22.
 */

angular.module('myAPP',[])
    .controller('Kill',function($scope,$state){
        var playersStr = localStorage.players;
        var players = JSON.parse(playersStr);
        console.log(players);
        var totalStatusStr = localStorage.totalstatus;
        var totalStatus = JSON.parse(totalStatusStr);
        console.log(totalStatus);
        $scope.players = players;
        var j = 0;
        for(var i in totalStatus){
            if(totalStatus[i].status == 'killdead' || totalStatus[i].status == 'votedead'){
                j++;
            }
        }

        $scope.kill = function ($index) {
            if(totalStatus[$index].status == 'killdead' || totalStatus[$index].status == 'votedead'){
                alert('该玩家已死亡，请重新选择');
            }
            if(players[$index] == '杀 手'){
                alert('杀手不能杀死杀手');
            }
            else{
                $scope.isSelect = $index;
                $scope.decide = function(){
                    totalStatus[$index].status = 'killdead';
                    totalStatus[$index].deadDay = (j/2 + 1);
                    $state.go('discuss');
                    totalStatusStr = JSON.stringify(totalStatus);
                    localStorage.totalstatus = totalStatusStr;
                }
            }
        };
    });

//$scope.kill = function ($index) {
//    if(totalStatus[$index].status == 'killdead' || totalStatus[$index].status == 'votedead'){
//        alert('该玩家已死亡，请重新选择');
//    }else if(players[$index] == '杀 手'){
//        alert('杀手不能杀死杀手');
//        $scope.isSelect = null;
//    }
//    else{
//        $scope.isSelect = $index;
//    }