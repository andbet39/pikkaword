/**
 * Created by andrea.terzani on 12/03/2015.
 */

app.controller('resultController', ['$scope','Word', function($scope,Word){


    $scope.words = Word.all;


}]);
