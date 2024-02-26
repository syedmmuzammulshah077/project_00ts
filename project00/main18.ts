/*18. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.
*/
const guestList: string[] = ["Leonardo da Vinci", "Marie Curie", "Nelson Mandela"];

// Print invitation messages to each person
guestList.forEach((person) => {
    console.log(`Dear ${person},\nYou are invited to dinner. We would be honored to have you join us.\nSincerely,\nThe Host`);
});
// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);

