function validateForm(userName, age, isSubscribed) {
    console.log("--- Before conversion ---");
    console.log("User Name:", userName, "type:", typeof userName);
    console.log("Age:", age, "type:", typeof age);
    console.log("isSubscribed:", isSubscribed, "type:", typeof isSubscribed);

    age = Number(age);
    isSubscribed = isSubscribed === "true";

    console.log("--- After conversion ---");
    console.log("User Name:", userName, "type:", typeof userName);
    console.log("Age:", age, "type:", typeof age);
    console.log("isSubscribed:", isSubscribed, "type:", typeof isSubscribed);

    let validationResult = {
        userName: userName,
        age: age,
        isSubscribed: isSubscribed,
        isValid: typeof userName === "string" && userName.trim().length > 0 && !Number.isNaN(age),
    };

    console.log("Validation result:", validationResult);
    return validationResult;
}

let userName = prompt("Enter user name:");
let age = prompt("Enter your age:");
let isSubscribed = prompt("Are you subscribed? Enter true or false:");

validateForm(userName, age, isSubscribed);
