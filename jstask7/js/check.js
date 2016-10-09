/**
 * Created by �� on 2016/9/20.
 */


angular.module('myApp',[])
    .controller('Check',function($scope,$state){
        var playersStr = localStorage.players;
        var players = JSON.parse(playersStr);
        console.log(players);
        var totalNum = $scope.totalNum = players.length;
        console.log(totalNum);
        var clickNum = $scope.clickNum = 1;
        var i = 0;
        $scope.imgSrc = '../images/check-03.png';
        $scope.picMargin = "bigMargin";
        $scope.playerNum = 1;
        $scope.checkPass = "查看" + 1 + "号玩家身份";
        $scope.check = function() {
            if (clickNum >= totalNum * 2){
                $state.go('details');
            }
            else{
                if (clickNum % 2 == 0){
                    checkId();
                }else{
                    passId();
                }
            }
            clickNum++;
            console.log(clickNum);
        };
        function checkId(){
            $scope.imgSrc = '../images/check-03.png';
            $scope.picMargin = "bigMargin";
            $scope.playerNum = i+ 1;
            $scope.show = false;
            $scope.checkPass = "查看" + (i + 1) + "号玩家身份";
        }
        function passId(){
            if (clickNum < totalNum * 2 - 1){
                $scope.imgSrc = '../images/check-04.png';
                $scope.picMargin = "smallMargin";
                $scope.show = true;
                $scope.playerNum = i + 1;
                $scope.job = players[i];
                $scope.keyword = "词组：西伯利亚";
                $scope.tips = "想办法猜到人的词，同时还要注意 不要暴露自己哦！";
                $scope.checkPass = "隐藏身份并传递给" + (i + 2) + "号";
                i++;
            }else{
                $scope.imgSrc = '../images/check-04.png';
                $scope.picMargin = "smallMargin";
                $scope.show = true;
                $scope.playerNum = i + 1;
                $scope.job = players[i];
                $scope.keyword = "词组：西伯利亚";
                $scope.tips = "想办法猜到人的词，同时还要注意 不要暴露自己哦！";
                $scope.checkPass = "查看法官台本";
            }
        }
    });