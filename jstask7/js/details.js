/**
 * Created by �� on 2016/9/20.
 */


angular.module('myApp',[])
    .controller('Details',function($scope,$state){
        var playersStr = localStorage.players;
        var players = JSON.parse(playersStr);
        console.log(players);
        var totalStatus = [];
        for(var i = 0;i < players.length;i ++){
            totalStatus[i] = {};
            totalStatus[i].job = players[i];
            totalStatus[i].num = i + 1;
            totalStatus[i].status = 'alive';
            totalStatus[i].deadDay = 0;
        }
        console.log(totalStatus);
        totalStatusStr = JSON.stringify(totalStatus);
        localStorage.totalstatus = totalStatusStr;
        $scope.players = players;
        $scope.gamestart = function(){
            $state.go('option');
        }
    });
