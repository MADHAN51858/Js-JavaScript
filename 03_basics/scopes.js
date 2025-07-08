//**Note the node.js scopes and browser console scopes are  different

// global scope 


{
    // block scope 

}

function aac(){

    //function scope
}
aac()

/*


***************************************
*                                     *
*                                     *
*       function abc(){               *       
*                                     *
*     <--function scope-->            *
*           return                    *
*                                     *
*        }                            *  
*        abc();                       *   
*                                     *
*        function bbc(abc){           *
*             ....                    *
*           }                         *
*                                     *
*    <--lexical scope-->              *
***************************************

 another function bbc taking abc() as an callback function

*/



// ************************ closures ********************

// (using parent or global or upper scope variables inside lowecase scopes )

function aaa(){
    let name = "Madhu"

    function bbb(){
        console.log(name);
        
    }
    bbb()
}
aaa()