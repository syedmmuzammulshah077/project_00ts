/*41. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
function showMagicians(magicians: string[]): void {
  // Print the name of each magician in the list
  for (const magician of magicians) {
      console.log(magician);
  }
}

function makeGreat(magicians: string[]): void {
  // Modify the array of magicians by adding 'the Great' to each name
  for (let i = 0; i < magicians.length; i++) {
      magicians[i] += " the Great";
  }
}

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
makeGreat(magicians);
showMagicians(magicians);
