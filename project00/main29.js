/*29. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
var users = ["admin", "Eric", "John", "Sarah", "Alex"];
if (users.length > 0) {
    if (users[0] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users[0], ", thank you for logging in again."));
    }
}
if (users.length > 1) {
    if (users[1] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users[1], ", thank you for logging in again."));
    }
}
if (users.length > 2) {
    if (users[2] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users[2], ", thank you for logging in again."));
    }
}
if (users.length > 3) {
    if (users[3] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users[3], ", thank you for logging in again."));
    }
}
if (users.length > 4) {
    if (users[4] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users[4], ", thank you for logging in again."));
    }
}
