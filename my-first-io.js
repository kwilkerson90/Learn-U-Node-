/*
Write a program that uses a single synchronous filesystem operation to read 
a file and print the number of newlines (\n) it contains to the console,
similar to running cat file | wc -l


All synchronous fs methods in the fs module end with 'Sync'
To read a file, you'll need to use fs.readFileSync('/path/to/file')
    this will return a Buffer object 
    buffer objects can be converted to strings by calling the toString() method on them
        const str = buf.toString()

-single synchronous fs operation to read a file
    -waits for each op to complete, after which it only 
    executes the next operation

-print the number of newlines (\n) it contains to the console
    -to count the number of newlines in a string:
        - .split() will split a string into an array of substrings
        -'\n' can be used as a delimiter 

-I/O
    -in Node.js, I/O refers to reading/writing files or network 
    operations 
    -network operations get external info into your app, or 
    send data from your app out to something else

-fs.readFileSync() method
    -built in API of the fs module
    -used to read the file and return its content 
    -in this method, you can read the files in a synchronous way 
-syntax:
    - fs.readFileSync( path, options )
        -path: takes the relative path of the text file
        -if both files are in the same folder, just give the filename 
        in quotes 
        -options: optional param that contains the encoding and flag
*/

//Similar solution, except the file that's passed in is static
//Load the fs module
// const fs = require('fs');

// //Call the readfilesync() method to read the file
// let words = fs.readFileSync('./ayo-io.txt', 
//             {encoding: 'utf8', flag:'r'});

// let lines = words.split('\n').length - 1;


// //Displaying the file data
// console.log(lines);
//////////////////

const fs = require('fs')

const words = fs.readFileSync(process.argv[2])

const lines = words.toString().split('\n').length - 1

console.log(lines);



