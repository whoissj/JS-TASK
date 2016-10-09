/**
 * Created by �� on 2016/9/24.
 */
angular.module('myApp',[])
    .controller('Result',function($scope,$state){
        var totalStatusStr = localStorage.totalstatus;
        var totalStatus = JSON.parse(totalStatusStr);
        console.log(totalStatus);
        var victorStr = localStorage.victor;
        var victor = JSON.parse(victorStr);
        if(victor == "killer"){
            $scope.victor = '杀手胜利';
        }
        if(victor == "people"){
            $scope.victor = '平民胜利';
        }
        var x = 0;
        var y = 0;
        var j = 0;
        for(var i in totalStatus){
            if(totalStatus[i].status == 'killdead' || totalStatus[i].status == 'votedead') {        //判断天数
                j++;
            }
          if(totalStatus[i].job == '杀 手'){
              x++;
          }
          if(totalStatus[i].job == '平 民') {
              y++
          }
        }
        $scope.killers = '杀 手' + x + '人';
        $scope.people = '平 民' + y + '人';

        var days = Math.ceil(j/2);  //同一天内死亡玩家放进一个对象，方便ng-repeat输出
        var deadStatus = [];
        for(var z = 1;z <= days;z ++){
            deadStatus[z-1] = {};
            for(var i in totalStatus) {
                if(totalStatus[i].deadDay == z) {
                    deadStatus[z-1].dayNum = z;
                    if(totalStatus[i].status == 'killdead'){
                        deadStatus[z-1].killed = totalStatus[i].job;
                        deadStatus[z-1].killedNum = totalStatus[i].num;
                    }else if(totalStatus[i].status == "votedead"){
                        deadStatus[z-1].voted = totalStatus[i].job;
                        deadStatus[z-1].votedNum = totalStatus[i].num;
                    }
                }
            }
        }
        console.log(deadStatus);
        $scope.deadStatus = deadStatus;
    });