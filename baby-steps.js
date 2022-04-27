//Write a program that accepts one or more numbers as command-line arguments
//and prints the sum of those numbers to the console

// console.log(process.argv);

/*

Expected Output:
 ['node', '/path/to/your/baby-steps.js', '1', '2', '3']

*/

//Solving Using the Arguments Object
function addEmUp() {
    let sum = 0;
    for (i = 2; i < process.argv.length; i++) {
        sum += Number(process.argv[i]);
    }
    return sum;
}
console.log(addEmUp());


