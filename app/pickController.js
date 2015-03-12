/**
 * Created by andrea.terzani on 12/03/2015.
 */

app.controller('pickController',function($scope,Word,$timeout){

    $scope.words = Word.all;


    $scope.init = function(){
        $timeout( function(){
            if($scope.words.length<1){
                $scope.init();
            }else{
                $scope.newpool();
            }
        }, 200);

    }

    $scope.init();

    $scope.newpool = function () {

        var idx1=0;
        var idx2=0;


            idx1 = Math.floor(Math.random() * $scope.words.length);
            idx2 = Math.floor(Math.random() * $scope.words.length);

        $scope.word1 =   $scope.words[idx1];
        $scope.word2 =   $scope.words[idx2];



    }


    $scope.vote = function (word) {

        word.vote++;
        Word.save(word);
        $scope.newpool();

    }








});