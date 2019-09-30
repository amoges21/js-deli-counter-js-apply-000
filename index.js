var i;
var emptyarray = [];

function takeANumber(Array)
{
  //var numberinline = Array.length + 1;
  

  Array.push(string);
  
  
    console.log(Array);
  
    return "Welcome, " +"You are number " + Array.length  + " in line." ;
   
}


function nowServing(Array)
{
 
 if (Array.length === 0)
 {
   return "There is nobody waiting to be served!";
 }
 
 else
 {
   var firstinline = Array[0];
      Array.splice(0,1);

   console.log(Array);

   return "Currently serving " + firstinline  + ".";
   
 }
 
}
 
 
 
 
 function currentLine (Array)
{
 
 if (Array.length === 0)
 {
   return "The line is currently empty.";
 }
 
 else
 {
        var thestring  = "";
        
<<<<<<< HEAD
   for ( i = 0 ; i < Array.length ; ++i)
   {
     var position = i +1;
   

if (i === Array.length -1)
{
     thestring = thestring + position  + ". " + Array[i] ;
   return "The line is currently: " + thestring;

}
else
{
       thestring = thestring + position  + ". " + Array[i] + ", "
}
=======
   for ( i = 1 ; i < Array.length ; ++i)
   {
     thestring = thestring + i  + ". " + Array[i - 1] + ", ";
     

                 return "The line is currently: " + thestring;

>>>>>>> d764054cabbf66928a9ee3b3127ae04cb9066a13

   }
  
   }
 
}
