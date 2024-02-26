/*16. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.
*/
// Define an array of people to invite to dinner
let guestList: string[] = ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie", "Leonardo da Vinci", "Nikola Tesla", "Ada Lovelace"];

// Print invitation messages to each person
guestList.forEach((person) => {
    console.log(`Dear ${person},\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\n\nBest regards,\nM Muzammil shah `);
});

// Print a message that only two people can be invited for dinner
console.log("\nUnfortunately, due to unforeseen circumstances, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop(); // Remove the last person from the list
    console.log(`${removedGuest}, we're sorry, but we can't invite you to dinner.`);
}

// Print invitation messages to the two remaining guests
console.log("\nInvitations to the two remaining guests:\n");
guestList.forEach((person) => {
    console.log(`Dear ${person},\nYou are still invited to dinner. We look forward to seeing you!\n\nBest regards,\nM Muzammil shah`);
});

// Remove the last two names from the list
guestList.pop();
guestList.pop();

// Print the empty list to confirm
console.log("\nRemaining guest list:", guestList);
