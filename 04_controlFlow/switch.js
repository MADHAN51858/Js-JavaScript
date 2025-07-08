//Note after matching the condition ,
// it's Executes all the conditions below it except default,
//  that's why break is used


// let Grade;  You Failed
let Grade = "A"; //You scored A grade
switch (Grade) {
  case 'A':
      console.log(`You scored A grade`);
      
      break;
      case 'B':
          console.log(`You scored B grade`);
          
          break;
          case 'C':
              console.log(`You scored C grade`);
              
              break;
              case 'D':
                  console.log(`You scored D grade`);
                  
                  break;
                  
                  default:
                      console.log(`You Failed`);
                      break;
                    }

                    //or not exactly correct
(Grade != null)?console.log(`You scored ${Grade} grade`):console.log(`You Failed`);