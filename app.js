document.writeln("<strong>JavaScript Variables Demo</strong><br><br>");

var age = 40;              // Number
const myName = "Niti";    // String
var isTrue = true;         // Boolean

console.log("age:", age, "type:", typeof age);
console.log("myName:", myName, "type:", typeof myName);
console.log("isTrue:", isTrue, "type:", typeof isTrue);

document.writeln("age: " + age + ", type: " + typeof age + "<br>");
document.writeln("myName: " + myName + ", type: " + typeof myName + "<br>");
document.writeln("isTrue: " + isTrue + ", type: " + typeof isTrue + "<br><br>");

let score = "787"; // client input as string
let toIntScore = Number(score);
let average = toIntScore / 5;

console.log("score (string):", score, "type:", typeof score);
console.log("toIntScore:", toIntScore, "type:", typeof toIntScore);
console.log("Average is:", average);

document.writeln("score (string): " + score + ", type: " + typeof score + "<br>");
document.writeln("toIntScore: " + toIntScore + ", type: " + typeof toIntScore + "<br>");
document.writeln("Average is: " + average + "<br>");
