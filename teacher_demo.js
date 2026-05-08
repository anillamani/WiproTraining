let userName = prompt("Enter user name");
let age = prompt("Enter your age");
let isSubscribed = "true";

document.writeln("Your Name is: " + userName + "<br>");
document.writeln("Your Age is: " + +age + "<br>");

function validateForm(userName, age, isSubscribed) {
    let userNameType = typeof userName;
    let ageType = typeof age;
    let isSubscribedType = typeof isSubscribed;

    console.log("User Name: " + userName + " Data type: " + userNameType);
    console.log("Age: " + age + " Data type: " + ageType);
    console.log("isSubscribed: " + isSubscribed + " Data type: " + isSubscribedType);

    // conversion
    age = Number(age);
    isSubscribed = isSubscribed === "false";

    console.log("User Name: " + userName + " Data type: " + userNameType);
    console.log("Age: " + age + " Data type: " + typeof age);
    console.log("isSubscribed: " + isSubscribed + " Data type: " + typeof isSubscribed);
}

function showMessage() {
    alert("The event has occurred");
}

// JSON format and object literal format are same in JavaScript
const user = {
    role: "client"
};

if (user.role === "admin" && isSubscribed === "true") {
    let accessLevel = "Full Control";
    console.log("The access level is:", accessLevel);
} else if (user.role === "client" && isSubscribed === "false") {
    console.log("The access level is: Partial Control");
}