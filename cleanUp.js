// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function questionName(){
  console.log("Hello, what is your name?");
};

questionName();
// I changed the name of the function from nameQuestion to questionName since the previous name did not accurate describe the action that was meant to occur first.
// I then added semi colons in the appropriate locations so the sytax was correct


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
};

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// I removed the indentation of the final curly bracket since that is inccorect sytax.
//I then indented the two statements inside the function to clearly show what was occuring in the function.
//Finally I added semi colons where there weren't any so the code would run as it should

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
};

makeFreshPesto();
// First I dropped the final curly bracket down one line so we can clearly see when the function ends
// I then completed the rest of function since the system wouldn't recognize it as a funtion otherwise
// Finally I added semicolons where there weren't any so the code could would run as it should with no sytax errors


//  EX 4:
function average(num1, num2){
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}.`);
};

average(2, 4);

//First I update the opening and closing curly brackets for the code block, I moved the opening bracket onto the same line as the function declaration then removed the indentation fro the closing bracket.
//I then indented the first block of code inside the codeblock and then romeved the extra indentation in the socond so the codeblock could be easily identified
//I then removed the extra line in the code block between the avg variable and the console.log so all of the codeblock was compact and easily identified
//I then added the calling line below the function so that the function would function would be invoked and run
// I then moved the period from outside of the interpolation to inside so the console.log code would run without syntax errors and so that the period would be shown
// Finally I added semicolons where there weren't any so the code could would run as it should with no sytax errors
