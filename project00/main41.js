/*41. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
function showMagicians(magicians) {
    // Print the name of each magician in the list
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    // Modify the array of magicians by adding 'the Great' to each name
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
makeGreat(magicians);
showMagicians(magicians);
