/**
 * Created by andrea.terzani on 12/03/2015.
 */
var options ={
  gridSize: Math.round(16 * 1900/ 1024),
  weightFactor: function (size) {
    return Math.pow(size, 2.3) * 1900 / 1024;
  },
  fontFamily: 'Times, serif',
  color: function (word, weight) {
    return '#ee6e73';
  },
  rotateRatio: 0.5,
  backgroundColor: '#ffffff',
  minSize:2
}


 function resize_canvas(){
            canvas = document.getElementById("canvas");
            if (canvas.width  < window.innerWidth)
            {
                canvas.width  = window.innerWidth;
            }

            if (canvas.height < window.innerHeight)
            {
                canvas.height = window.innerHeight;
            }
        }


app.controller('cloudController',function($scope,Word,$timeout){


    $scope.words = Word.all;

    $scope.init = function(){
        $timeout( function(){
            if($scope.words.length<500){
                $scope.init();
                $scope.loading=false;

            }else{
            	resize_canvas();
            	
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
