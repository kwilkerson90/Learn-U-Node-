/*

Write a program that uses a single asynchronous filesystem operation 
to read a file and print the number of newlines it contains to the console

*/


/*
Syntax for fs.readFile() method
    - fs.readFile( filename, encoding, callback_function )
*/

//Loading the fs module
const fs = require('fs');

//Sets a reference to the third argument's file path
const inputFile = process.argv[2];

//Necessary callback function
//Defining the function before it's called; can prevent probs in complex code 
function readFileCallback(err, data) {

    const fileContents = data;

    console.log(fileContents.split('\n').length - 1);
}

//Tells the computer to read the file at said path
fs.readFile(inputFile, 'utf8', readFileCallback);


