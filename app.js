// a comment 

/*
multi comment
sjfnjfj
fnjdnfjd
sknfksnf
ksmmk

 */


/*
Syntax

Data types :

- numbers ; 1 , 5 -2 

-boolean : true/false 

- strings : "ahmad", 'aknnadkandka !@# 1233'

<<<<<<< HEAD

=======
>>>>>>> 6721e2c9bf0e33f40b16fc1ad864bc986eb9decb
variables: 

- to store anything in them 

var name = "ahmad"

var x = 10 

var sum = 0 + x => 0 + 10 =>10 




operators:

arithmatic operators:

+ , - , * , /

1+1 
6*7

assigment operator:

= 

comparison operators:

> , < , == , === , != 

1 > 9 




*/

// var name = "ahmad ' \" 0 1 +1 @ @$ckdsnksdnv "

// console.log(name)
// var firstName = "Ahlam";

// var x // undefined
// x = 928
// var y = 190

// x = 10
// var sum = x+y

// console.log(x)
// console.log(sum)


// name = "Nahla"

// console.log(name)



// console.log(firstName)

// console.log("hello world 1+1")

// console.log(1+1)


// comparison  ===, check the value and datatype

// console.log(1=='1', 1==='1', 1!=1, 1 < 1, 1<=1)


//boolean datatype

// var isGreater = true;

//concatation

// var firstName = "ahmad  "
// var lastName = "Jihad"

// var name = firstName + lastName + "   wahtever "+ 1

// console.log(name)


//conditional statments

/* 

if(condtion){
  code 
}
else{
  code 
}

*/


// if(10 === 4){
//   console.log("yes it is")
// }
// else{
//   console.log("no it is not")
// }



//if elsif 


// if (10 < 8){
//     console.log("yes it is")

// }
// else if (20 > 150)
// {
//   console.log("20 greater than 15")
// }
// else if(100 === 1000) {
//   console.log("whatever")
// }
// else{
//     console.log("no it is not")

// }


/* 

pop up box 

alert() => showing info to user 


prompt()= > it will take input and we can assign to a variable 



<<<<<<< HEAD


Truth table

T  and  T =>T
T or T => T
F and T =>F 
F && F => F 
T or F => T 

T and T and F =>F



logical operators


&& 

|| 


loops 
when you want to repeat smth 

for 

we  are gonna use when we know how many time the code need to run 

for(intial exp, condtion, counter){
  whatever i want to repeat goes here
}

for(var i = 0; i < 20; i++){
  codes goes here 
}


while 

we don't knw how any times the code will run but for sure weknow it will keep running as long as the condition is true 

=======
*/
var name = prompt("what is your name?")

alert("welcome to Fantacy movies website " + name)

var favMovie = prompt("what is your fav movies from these (harry potter, fast and furious , forrest gump )?")



while (favMovie != "harry potter" && favMovie != "fast and furious" && favMovie != "forrest gump") {

  favMovie = prompt("you entered wrong movie please try gain ")

}

// console.log(favMovie)


if (favMovie == "fast and furious") {
 
  
    document.write("<div>" + "<h3>" + "fast and furious" + "</h3>" +
      "<img  src='https://img.cinemablend.com/filter:scale/quill/a/2/0/5/4/a/a2054a28078bf01c678929806dc5be09096391a2.jpg?mw=600' >" +
      "</div>")

  
}
else if (favMovie == "harry potter") {



}

else if (favMovie == "forrest gump") {
  document.write("<p>" + "great thing you love forrest gump movies becuase we have it here so you can watch it" + "</p>")
}



// var num = prompt("guess a number?")

// console.log(typeof(num))



//for loop

// for(var x = 1; x <20;x++){
//   console.log("this is from loop" + x)
// }




//infinte loop

// for( var y = 1; y>=1 ;y++){
//   // alert("hello world")

//   console.log(y)
// }


// for(var x = 8 ; x < 10 && x >0;x++){

// if (x === 8){
//   alert("the number is 8")
// }
// else{
//   alert("it is not 8")
// }
// }


// if( 10 > 9){
//   for(var x =1 ; x <=10 ;x++){
//     console.log("hey " + x)
//   }
// }
// else{
//   //do whatever
// }


//while 

// var x = 10 

// while(x <15 && x == 15){
//   console.log("hello")
//   x++
// }


