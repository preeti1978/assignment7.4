/*Create  a  Ja va Sc rip t  fil e ap p .j s  an d i nc lude  t hat sc r ip t file  in to yo u r in dex .html file  
using  <sc rip t> t ag . I n ap p .j s file , wri te a J av aSc rip t  f unc tio n  name d ou ter f u nc tion . 
Pass  an  in ner  f unc tio n  as  arg umen t to  oute r  func t ion.  Call  the inner function wi thin  
outer function that should display “Hello World From Inner Function” in console .*/

function outerFunction(innerFunction){    //definibg outer function. It accepts as argument a function called InnerFunction
	innerFunction(); //Inner function called within Outer function
}

var arg1 = function(){console.log("Hello World From Inner Function ")}; //defining a function experssion that prints to console
outerFunction(arg1); //calling outer function with that arg1