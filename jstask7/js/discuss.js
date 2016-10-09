/**
 * Created by �� on 2016/9/23.
 */
angular.module('myApp',[])
    .controller('Discuss',function($scope,$state){
        var totalStatusStr = localStorage.totalstatus;
        var totalStatus = JSON.parse(totalStatusStr);
        console.log(totalStatus);
        $scope.killdeadPersons = [];
        $scope.votedeadPersons = [];
        var j = 0;
        var x = 0;
        var y = 0;
        var victor;
        for(var i in totalStatus){
            if(totalStatus[i].status == 'killdead' || totalStatus[i].status == 'votedead') {        //判断天数
                j++;
            }
            if(totalStatus[i].status == "killdead") {            //被杀手杀死的玩家
                $scope.killdeadPersons.push(totalStatus[i]);
            }
            if(totalStatus[i].status == "votedead") {            //被投票投死的玩家
                $scope.votedeadPersons.push(totalStatus[i]);
            }
            if(totalStatus[i].job == '平 民' && totalStatus[i].status == 'alive') {     //剩余平民数量
                x++;
            }
            if(totalStatus[i].job == '杀 手' && totalStatus[i].status == 'alive') {     //剩余杀手数量
                y++;
            }
        }
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
        $scope.deadStatus = deadStatus;

        var day = ["一","二","三","四","五","六","七","八","九","十"];
        if(x > y){
            if( j % 2 == 0){
                $scope.show = false;
                $scope.cryFace = '../images/discuss-03.png';
                $scope.voteOrnext = '第' + day[j/2] + '天';
                $scope.govote = function() {
                    $state.go('option');
                };
                dayNumStr = JSON.stringify('第' + day[j/2] + '天');
                localStorage.daynum = dayNumStr;
            }else {
                $scope.show = true;
                $scope.cryFace = '../images/discuss-01.png';
                $scope.voteOrnext = '去投票';
                $scope.govote = function(){
                    $state.go('vote');
                    totalStatusStr = JSON.stringify(totalStatus);
                    localStorage.totalstatus = totalStatusStr;
                }
            }
        }else {
            if(x == 1){
                victor = "killer";
                $scope.show = false;
                $scope.cryFace = '../images/discuss-03.png';
                $scope.voteOrnext = '游戏结束杀手胜利';
                $scope.govote = function(){
                    $state.go('result',victor);
                    victorStr = JSON.stringify(victor);
                    localStorage.victor = victorStr;
                    totalStatusStr = JSON.stringify(totalStatus);
                    localStorage.totalstatus = totalStatusStr;
                }
            }else {
                $scope.show = false;
                $scope.cryFace = '../images/discuss-01.png';
                $scope.voteOrnext = '第' + day[j/2] + '天';
                $scope.govote = function(){
                    $state.go('option');
                    dayNumStr = JSON.stringify('第' + day[j/2] + '天');
                    localStorage.daynum = dayNumStr;
                }
            }

        }
        if(y == 0){
            victor = "people";
            $scope.show = false;
            $scope.cryFace = '../images/discuss-01.png';
            $scope.voteOrnext = '游戏结束平民胜利';
            $scope.govote = function(){
                $state.go('result',victor);
                victorStr = JSON.stringify(victor);
                localStorage.victor = victorStr;
                totalStatusStr = JSON.stringify(totalStatus);
                localStorage.totalstatus = totalStatusStr;
            }
        }

    });