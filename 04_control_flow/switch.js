// switch (key) {
//     case value:
//         break;
//     case value:
//         break;
//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:                     //key matched => Entire code below it will executed //*except default
        console.log("Mar");
        break;                  //break save us form executing the rest of the code lines
    case 4:
        console.log("Apr");
        break;

    default:                    //seems like else in if-else condition
        console.log("default case match");
        
        break;
}

//In string case
const Month = "mar"
switch (Month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Febuary");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;
    
    default:
        console.log("default case match");
        break;
}