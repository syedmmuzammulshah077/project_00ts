/*14. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.
*/
// Define an array of people to invite to dinner
let guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Print invitation messages to each person
guestList.forEach((person) => {
    console.log(`Dear ${person},\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\n\nBest regards,\nM Muzammil Shah`);
});

// Print the name of the guest who can't make it
const unableToAttend = guestList.shift(); // Remove the first person from the list
console.log(`${unableToAttend} is unable to attend the dinner.`);

// Replace the guest who can't make it with a new person
const newGuest = "Nikola Tesla";
guestList.push(newGuest);

// Print second set of invitation messages
console.log("\nSecond set of invitations:\n");
guestList.forEach((person) => {
    console.log(`Dear ${person},\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\n\nBest regards,\nM Muzammil Shah`);
});
