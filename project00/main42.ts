/*42. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/
function showMagicians(magicians: string[]): void {
    console.log("Original Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    // Create a copy of the original array
    const greatMagicians: string[] = magicians.slice();
    
    // Modify the copy by adding 'the Great' to each name
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += " the Great";
    }
    
    return greatMagicians;
}

const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const greatMagicians: string[] = makeGreat(magicians);

showMagicians(magicians); // Display original magicians
showMagicians(greatMagicians); // Display magicians with 'the Great'
