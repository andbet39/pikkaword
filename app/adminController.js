/**
 * Created by andrea.terzani on 12/03/2015.
 */
/**
 * Created by andrea.terzani on 12/03/2015.
 */

app.controller('adminController', ['$scope','Word', function($scope,Word){


    $scope.rawwords ="";
    $scope.addWords = function () {

        var newwords  = $scope.rawwords.split(";");

        newwords.forEach(function(entry) {
            var upper = entry.toUpperCase()
            Word.create({word:upper,vote:0});
        });

    }


}]);