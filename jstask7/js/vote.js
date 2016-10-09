/**
 * Created by �� on 2016/9/23.
 */
angular.module('myApp',[])
    .controller('Vote',function($scope,$state){
        var playersStr = localStorage.players;
        var players = JSON.parse(playersStr);
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
        $scope.vote = function ($index) {
            if(totalStatus[$index].status == 'killdead' || totalStatus[$index].status == 'votedead'){
                alert('该玩家已死亡，请重新选择');
            }else{
                $scope.isSelect = $index;
            }
            $scope.votedead = function(){
                totalStatus[$index].status = 'votedead';
                totalStatus[$index].deadDay = Math.ceil((j-1)/2 + 1);
                $state.go('discuss');
                totalStatusStr = JSON.stringify(totalStatus);
                localStorage.totalstatus = totalStatusStr;
            }
        }
    });