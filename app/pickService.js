/**
 * Created by andrea.terzani on 12/03/2015.
 */


app.factory('Word' , function($firebaseArray){

   var ref = new Firebase('https://pickaword.firebaseio.com/words');
    var words = $firebaseArray(ref);



    var Word = {
        all: words,
        create: function (word) {
           return words.$add(word);
        },
        get: function (wordID) {
           // return $firebase(ref.child('word').child(wordID)).$asObject();
        },
        delete: function (word) {
            //return words.$remove(word);
        },
        save: function (word) {
            return words.$save(word);
        }
    };


    return Word;

});