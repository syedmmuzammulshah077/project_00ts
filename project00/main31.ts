/*31. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
let current_users: string[] = ["John", "jane", "jim", "sally", "joe"];
let new_users: string[] = ["Jim", "SARA", "Sally", "Bob", "jOHN"];

for (let i = 0; i < new_users.length; i++) {
  let new_username = new_users[i].toLowerCase();
  let is_unique = true;
  for (let j = 0; j < current_users.length; j++) {
    if (current_users[j].toLowerCase() === new_username) {
      is_unique = false;
      break;
    }
  }
  if (is_unique) {
    console.log(`${new_users[i]} is available.`);
  } else {
    console.log(`${new_users[i]} has already been taken. Please enter a new username.`);
  }
}