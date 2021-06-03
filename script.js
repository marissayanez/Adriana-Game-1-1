/*var x;
var y = Math.floor(math.random() * 11);
var z = Math.floor(math.random() * 11);
var equation;

function myFunction() {
  if(equation== 1)(
    x= y-z;
  )
  else (
    x=y+z;
  )
}
*/

var result;
var first = Math.floor(Math.random() * 11);
var second = Math.floor(Math.random() * 11);
var equation;

equation = prompt(first + " and " + second + " The goal is to stay in between 0 and 21, would you like to add (enter 2) or subtract (enter 1) these numbers?") 

myFunction(first);

for(var i = 0; i < 4; i++){
  if(result > 0 && result <= 21){
    equation = prompt (result + " and " + second + " add(type 2) to subtract(type 1) ");
    myFunction(result);
  }
}




 function myFunction(n) {
   if(equation == 1){
     result = n - second;
   }else{
     result = n + second;
   }
 }

 if(result<0 || result >21) {
   prompt ("Sorry you lost");
 }
   else {
     prompt ("You have won");
   }
 