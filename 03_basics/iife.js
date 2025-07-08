
// sometimes functions polluted by the global scope declarations
// so we use :-  IIFE Functions 

(function DB(){   // this is an named iife
    console.log(`DB Connected`);
})();             //use ; when writing >1 iife to, end the cuurent iife manually 

((count) => {  //un named iife
    console.log(`DB Connected ${count}` );
    
})(2);            //

