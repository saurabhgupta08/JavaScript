// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
//1> The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//2> The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


// Avoid polluting the global namespace
// Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

(function chai (){
    // Named IIFE
    console.log(`DB Connected`);
})();

(()=>{
    console.log(`second DB Connected`);
})();

//If you want to pass argument 
((name)=>{
    console.log(`second DB Connected, hi ${name}`);
})("Saurabh");

