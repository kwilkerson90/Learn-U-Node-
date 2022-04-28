/*
Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  
   
  For example, if you get 'txt' as the second argument then you will need to  
  filter the list to only files that end with .txt. Note that the second  
  argument will not come prefixed with a '.'.  
   
  Keep in mind that the first arguments of your program are not the first  
  values of the process.argv array, as the first two values are reserved for  
  system info by Node.  
   
  The list of files should be printed to the console, one file per line. You  
  must use asynchronous I/O.  

*/

/*
fs.readdir()
    -Syntax: fs.readdir( path, options, callback )
    -Parameters:
        -path: holds the path of the directory from where the contents have to be read 
        -options: an object that can be used to specify optional params that will affect the method; two optional params
            -encoding: a string value that specifies which encoding should be used; default is 'utf8'
            -withFileTypes: boolean value that specifies whether the files would be returned as fs.Dirent objects; default is 'false'
        -callback: the function that would be called when the method is executed 
            -err: an error that would be thrown if the operation fails
            -files: an array of String, Buffer or fs.Dirent objects that has the files in the directory
*/

//Loading the fs and path modules
const fs = require('fs');
const path = require('path');

//Passing the third and fourth index of the argv property of the process object
 const folder = process.argv[2]
 const ext = '.' + process.argv[3]

 //Calling the readdir() method from the fs module
 //Accepts folder and callback as arguments 
 fs.readdir(folder, function (err, files) {
     //when the callback function runs, you check for an error 
     //print error message if error happens 
     if (err) return console.error(err)
     //at the same time as you're checking for an error, you call the
     //forEach() method on files 
     files.forEach(function(file) {
         //this method takes a callback function as an argument 
         //pass in a file from this method
         if (path.extname (file) === ext) {
             //if the path of the file == the variable ext, 
             //the file is printed out 
             console.log(file)
         }
     })
 })