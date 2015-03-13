/**
 * Created by andrea.terzani on 12/03/2015.
 */
var options ={
  gridSize: Math.round(16 * $('#canvas').width() / 1024),
  weightFactor: function (size) {
    return Math.pow(size, 2.0) * $('#canvas').width() / 1024;
  },
  fontFamily: 'Times, serif',
  color: function (word, weight) {
     return '#ee6e73';
  },
  rotateRatio: 0.3,
  backgroundColor: '#ffffff'
}


app.controller('cloudController',function($scope,Word,$timeout){


    $scope.words = Word.all;

    $scope.init = function(){
        $timeout( function(){
            if($scope.words.length<500){
                $scope.init();
                $scope.loading=false;

            }else{
            	
            	var list =[];
				$scope.words.forEach(function(entry) {
				    list.push([entry.word , entry.vote+2]);
				}); 

				options.list=list;

            	WordCloud(document.getElementById('canvas')	,options );



            }
        }, 200);
    }

    $scope.init();

});
