/*13. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
// Define an array of people to invite to dinner
const guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Print invitation messages to each person
guestList.forEach((person) => {
    console.log(`Dear ${person},\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\n\nBest regards,\n[Your Name]`);
});
