/*
Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. The first argument is the  
  directory name and the second argument is the extension filter. Print the  
  list of files (one file per line) to the console. You must use  
  asynchronous I/O. 


-This module must export a single function that takes three arguments:
    -the directory name
    -the filename extension string
    -the callback function 
        -in this order
-Don't alter the filename extension string in any way before passing it to your module

-Callback function must be called using the idiomatic node(err, data) convention
    -convention states that unless there is an error, the first argument passed to the function will be null
        -the second will be your data

-In this exercise, the data will be your filtered list of files, as an array

-If you get an error, the callback must be called with the error as the first and only argument 

These four things are the contract that your module must follow.  
   
   1. Export a single function that takes exactly the arguments described.  
   2. Call the callback exactly once with an error or some data as described.  
   3. Don't change anything else, like global variables or stdout.  
   4. Handle all the errors that may occur and pass them to the callback.  
*/

/*
-this file should only contain your directory reading and filtering function
-to define a single function export, you assign your function to the module.exports object
    - module.exports = function (args) { }

*/

const fs = require('fs')
const path = require('path')

//Assigning an unnamed function to module.exports to overwrite 
module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
        //when the callback function runs, you check for an error 
        //print error message if error happens 
        if (err)
            return callback(err)
        list  = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })
        
    callback(null, list)

    })
}