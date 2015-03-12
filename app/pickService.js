/**
 * Created by andrea.terzani on 12/03/2015.
 */


app.factory('Word' , function($firebaseArray){

    var ref = new Firebase('https://pickaword.firebaseio.com');
    var words = $firebaseArray(ref.child('words'));



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