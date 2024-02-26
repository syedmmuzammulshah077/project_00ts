/*15. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
// Define an array of people to invite to dinner
var guestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// Print invitation messages to each person
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\n\nBest regards,\nM Muzammil Shah"));
});
// Print the name of the guest who can't make it
var unableToAttend = guestList.shift(); // Remove the first person from the list
console.log("".concat(unableToAttend, " is unable to attend the dinner."));
// Replace the guest who can't make it with a new person
var newGuest = "Nikola Tesla";
guestList.push(newGuest);
// Inform about the bigger dinner table
console.log("We have found a bigger dinner table!");
// Add three new guests to the list
guestList.unshift("Isaac Newton"); // Add to the beginning
guestList.splice(Math.ceil(guestList.length / 2), 0, "Galileo Galilei"); // Add to the middle
guestList.push("Ada Lovelace"); // Add to the end
// Print a new set of invitation messages
console.log("\nNew set of invitations:\n");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\n\nBest regards,\nM Muzammil Shah"));
});
