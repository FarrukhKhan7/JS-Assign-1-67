////////================CHAPTER 1 ALERTS=====================///////////////////////////////////////////////////////////////////////


// TASK 1
//alert("hello world");

// TASK 2
//alert("Error!Please enter a valid password.");

// TASK 3
//alert("Welcome to JS Land...\nHappy Coding!")

// TASK 4
//alert("Welcome to JS Land...");
//alert("Happy Coding!");

// TASK 5 RUN IN CONSOLE
//alert("Hello... I can run JS through my web browser's console");
// TASK 6 AND 7 DONE AND CHECKED.


//////////========= CHAPTER 2 VARIABLES FOR STRINGS==========/////////////////////////////////////////////////////////////////////


// TASK 1
//var username;

// TASK 2
//var myName="Farrukh";

// Task 3 (a,b,c)
//var message;
//message="Hello World";
//alert(message);

// TASK 4
// var name = "Jhone Doe";
// var age = "15 years old";
// var course = "Certified Mobile Application Development"
// alert(name);
// alert(age);
// alert(course);

// TASK 5
// var food="PIZZA"
// alert(food+"\n"+food.slice(0,4)+"\n"+food.slice(0,3)+"\n"+food.slice(0,2)+"\n"+food.slice(0,1));

// TASK 6
// var email="khanfrk700@gmail.com";
// alert("My email address is "+email);

// TASK 7
// var book="A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+book);

// TASK 8
//document.write("Yah! I can write HTML content through Javascript");

// TASK 9
// var x="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(x);


//////////=========== CHAPTER 3 VARIABLES FOR NUMBERS=========//////////////////////////////////////////////////////////////////////


// TASK 1 
// var age = 15;
// alert("I am "+age+" years old");

// TASK 2
// var x = +prompt("How many times you visited this site ?");
// alert("You have visited this site "+x+" times");

// TASK 3 
// var birthYear=1999;
//  document.write("My birth year is "+birthYear);
//  document.write("<br>");
//  document.write("Data type of my declared variable is "+typeof birthYear);

// TASK 4
// var name= prompt("Your Name: ")
// var product = prompt("Your Product's Name: ")
// var quantity = +prompt("Product's Quantity: ")
// alert(name+" ordered "+quantity+" "+product+" (s) on XYZ Clothing store.");


////////================= CHAPTER 4====================////////////////////////////////////////////////////////////////////////////


// VARIABLES NAMES : LEGAL AND ILLEGAL
// TASK 1 
//var x="Hello " , y="World " , z="2020";
//document.write(x+y+z);

// TASK 2 
// illegal var
// var 1stvar;
// var 2_check;
// var third check;
// var 123name;
// var #name;
// legal var
//var name,$age,first_name,name123;

// TASK 3
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<br>");
// document.write("Variable name can only contain, numbers,$ and _.For example: $my_1stVariable <br> Variable must begin with a letter, $ or _.For example: $name, _name or name <br> Variable name are case sensitive <br> Variable name should not be JS keywords")


///////////////================ CHAPTER 5 =================/////////////////////////////////////////////////////////////////////////


// MATH EXPRESSIONS
// TASK 1
// var x= +prompt("Enter 1st number: ");
// var y= +prompt("Enter 2nd number: ");
// var z= x+y;
// document.write("Sum of "+x+" and "+y+" is "+z);

// TASK 2
// var x= +prompt("Enter 1st number: ");
// var y= +prompt("Enter 2nd number: ");
// var z= x-y;
// document.write("Subtraction of "+y+" and "+x+" is "+z);
// var x= +prompt("Enter 1st number: ");
// var y= +prompt("Enter 2nd number: ");
// var z= x*y;
// document.write("Multiplication of "+x+" and "+y+" is "+z);
// var x= +prompt("Enter 1st number: ");
// var y= +prompt("Enter 2nd number: ");
// var z= x/y;
// document.write("Division of "+x+" and "+y+" is "+z);
// var x= +prompt("Enter 1st number: ");
// var y= +prompt("Enter 2nd number: ");
// var z= x%y;
// document.write("Modulus of "+x+" and "+y+" is "+z);

// TASK 3
// var x;
// document.write("Value after variable declaration is "+x+ "<br>");
// x = 5;
// document.write("Initial value: "+x+"<br>");
// x++;
// document.write("Value after increment is: "+x+"<br>");
// x=x+7;
// document.write("Value after addition is: "+x+"<br>");
// x--;
// document.write("Value after decrement is: "+x+"<br>");
// x=x%3;
// document.write("The remainder is: "+x);

// TASK 4
// var price=600;
// var tickets=5;
// var total= price*tickets;
// document.write("Total cost to buy 5 tickets to a movie is "+total+"PKR");

// TASK 5
// document.write("Table of 4 <br>");
// for(var i = 1; i<=10;i++){
//   document.write("4 x "+i+" = "+4*i)
//   document.write("<br>")
// };

// TASK 6
// var c=25;
// var F = (c*9/5)+32;
// var f=70;
// var C = (f-32)*5/9;
// document.write("25°C is "+F+"°F <br>");
// document.write("70°F is "+C+"°C");

// TASK 7
// var p1=+prompt("Price of item 1: ");
// var p2=+prompt("Price of item 2: ");
// var q1=+prompt("Quantity of item 1: ");
// var q2=+prompt("Quantity of item 2: ");
// var shipping = 100;
// var totalp1=p1*q1;
// var totalp2=p2*q2;
// var total= totalp1+totalp2+shipping;
// document.write("Price of item 1 is "+p1+"<br>");
// document.write("Price of item 2 is "+p2+"<br>");
// document.write("Quantity of item 1 is "+q1+"<br>");
// document.write("Quantity of item 2 is "+q2+"<br>");
// document.write("Shipping Charges "+shipping+"<br><br>");
// document.write("Total cost of your order is "+total);

// TASK 8
// var total = 980;
// var marks = 804;
// var per = 804/980 * 100 ;
// document.write("Total marks: "+total+"<br>")
// document.write("Marks obtained: "+marks+"<br>")
// document.write("Percentage: "+per+"%");

// TASK 9
// var $=10;
// var R=25;
// var pkr=$*104.80 + R*28;
// document.write("<h1>Currency in  PKR</h1><br>")
// document.write("Total Currency in PKR: "+pkr);

// TASK 10
// var x = 2;
// x=((x+5)*10)/2;
// document.write("Result is: "+x);

// TASK 11
// var current_year=+prompt("Write current year: ");
// var birth_year=+prompt("Write your birth year: ");
// var age=current_year-birth_year;
// document.write("<h1>Age Calculator</h1><br>");
// document.write("Current Year: "+current_year+"<br>");
// document.write("Birth Year: "+birth_year+"<br>");
// document.write("Your age is: "+age+"<br>");

// TASK 12 
// var r=+prompt("Write radius of a circle: ");
// var a=3.142*r*r;
// var c=2*3.142*r;
// document.write("<h1>The Geometrizer</h1><br>");
// document.write("Radius of a circle is: "+r+"<br>");
// document.write("The circumference is: "+c+"<br>");
// document.write("The area is: "+a+"<br>");

// TASK 13 
// var snack=prompt("Write your favourite snack: ");
// var age=+prompt("Write your age: ");
// var maxAge=+prompt("Write your max age: ");
// var amount=+prompt("Write your per day snack amount: ");
// var cal=(maxAge-age)*365*amount;
// document.write("<h1>The Lifetime Supply Calculator</h1><br>");
// document.write("Favourite Snack: "+snack+"<br>");
// document.write("Current Age: "+age+"<br>");
// document.write("Estimated maximum age: "+maxAge+"<br>");
// document.write("Amount of snacks per day: "+amount+"<br>");
// document.write("You will need "+cal+" "+snack+" to last you untill the ripe old of "+maxAge);

////////////============= CHAPTER 6-9 ============//////////////////////////////////////////////////////////////////////////////////


// MATH EXPRESSIONS
// TASK 1 
// var a = +prompt("Write a number: ");
// document.write("Result: <br>");
// document.write("The value of a is: "+a+"<br>");
// document.write("..............................<br><br>");

// document.write("The value of ++a is: "+(++a)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");

// document.write("The value of a++ is: "+(a++)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");

// document.write("The value of --a is: "+(--a)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");

// document.write("The value of a-- is: "+(a--)+"<br>");
// document.write("Now the value of a is: "+a+"<br>");

// TASK 2 
//  var a=2,b=1;
// document.write("a is "+a+"<br>");
// document.write("b is "+b+"<br>");
// document.write("result is "+(--a - --b + ++b + b--)+"<br>");
// a=2;
// b=1;
// document.write("Explanation: <br>");
// document.write("--a is "+(--a)+"<br>");
// a=2;
// --a - --b + ++b + b--;
// document.write("--a - --b is "+(--a - --b)+"<br>");
// a=2;
// b=1;
// document.write("--a - --b + ++b is "+(--a - --b + ++b)+"<br>");
// a=2;
// b=1;
// document.write("--a - --b + ++b + b-- is "+(--a - --b + ++b + b--)+"<br>");

// TASK 3
// var name = prompt("What is your name?");
// alert("Welcome "+name);

// TASK 5
//  var num = +prompt("Enter Table number: ");
// if(num==""){
//   for(var i=1; i<=10; i++){
//     document.write("5 x "+i+" = "+5*i)
//     document.write("<br>")}
// }
// else{
//   for(var i=1; i<=10; i++){
//     document.write(num+ " x "+i+" = "+num*i)
//     document.write("<br>")
//    }
// }

// TASK 6
//  var s1= prompt("Write subject 1: ");
//  var m1= +prompt("Marks of subject 1: ");
//  var s2= prompt("Write subject 2: ");
//  var m2= +prompt("Marks of subject 2: ");
//  var s3= prompt("Write subject 3: ");
//  var m3= +prompt("Marks of subject 3: ");
//  var t1=100, t2=100,t3=100;
//  var total=t1+t2+t3;
//  var p1=m1/t1*100,p2=m2/t2*100,p3=m3/t3*100;
//  var per=(p1+p2+p3)/total*100;
//  var marks=m1+m2+m3;
// document.write("<pre><h3>Subject  Total Marks  Obtained Marks  Percentage</h3></pre>");
// document.write("<pre>"+s1+"        "+t1+"             "+m1+"                "+p1+"</pre>");
// document.write("<pre>"+s2+"        "+t2+"             "+m2+"                "+p2+"</pre>");
// document.write("<pre>"+s3+"        "+t3+"             "+m3+"                "+p3+"</pre>");
// document.write("<pre>                  "+total+"             "+marks+"                "+per+"</pre>");


//////////============ CHAPTER 9-11m =============///////////////////////////////////////////////////////////////////////////////


// USER INPUT AND CONDITIONAL STATEMENT
// TASK 1 
// var city=prompt("Enter city name: ");
// if(city==="karachi" || city==="Karachi"){
//     alert("Welcome To City Of Lights");
// }

// TASK 2
// var gender=prompt("Enter your gender: ");
// if(gender==="male"|| gender==="Male"){
//     alert("Good Morning Sir");
// }
// else if(gender==="female"|| gender==="Female"){
//     alert("Good Morning Ma'am");
// }

// TASK 3
// var color = prompt("Enter Traffic Signal Color: ");
// if(color==="red"||color==="Red"||color==="RED"){
//     alert("Must Stop")
// }
// else if(color==="yellow"||color==="Yellow"||color==="YELLOW"){
//     alert("Ready To Move")
// }
// else if(color==="green"||color==="Green"||color==="GREEN"){
//     alert("Move Now")
// }

// TASK 4
// var fuel=+prompt("Enter remaining fuel in car in litres:","Answer should be in number");
// if (fuel<"0.25"){
//     alert("Please refill the fuel in your car")
// }

// TASK 5
// Running Scripts:
// a)
// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
// Ans.  "given condition for variable a is true"
// b)
// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
// Ans. not alert
// c)
// var c = 12; if (c++ === 13){ alert("condition 1 is true"); } 
// if (c === 13){ alert("condition 2 is true"); } 
// if (++c < 14){ alert("condition 3 is true"); } 
// if(c === 14){ alert("condition 4 is true"); }
// Ans  "condition 2 is true" &  condition 4 is true
// d)
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
// Ans  "The cost equals"
// e)
// if (true){ alert("True"); } if (false){ alert("False"); }
// Ans  True
// f)
// if("car" < "cat"){ alert("car is smaller than cat"); }
// Ans  "car is smaller than cat"

// TASK 6
// var sub=+prompt("Enter marks obtained in all 3 subjects: ")
// var total=+prompt("Enter total marks of all 3 subjects: ")
// var per= sub/total*100;
// document.write("<h1>Marks Sheet</h1>")
// document.write("Total marks: "+total+"<br>");
// document.write("Marks obtained: "+sub+"<br>");
// document.write("Percentage: "+per+"%<br>");
// if (per>=80){
//     document.write("Grade: A-one <br>")
//     document.write("Remarks: Excellent <br>")
// }
// else if (per>=70){
//     document.write("Grade: A <br>")
//     document.write("Remarks: Good <br>")
// }
// else if (per>=60){
//     document.write("Grade: B <br>")
//     document.write("Remarks: You need to improve <br>")
// }
// else if (per<60){
//     document.write("Grade: Fail <br>")
//     document.write("Remarks: Sorry <br>")
// }

// TASK 7
// var secretnum = 7;
// var guessnum = +prompt("Guess the secret number (ranging from 1 to 10: ");
// if(guessnum===secretnum){
//     alert("Bingo! Correct answer")
// }
// else if(++guessnum===secretnum){
//     alert("Close enough to the correct answer")
// }

// TASK 8
// check whether the given number is divisible by 3
// var x = +prompt("Enter number: ")
// if(x%3===0){
//     alert("Your number is divisible by 3")
// }

// TASK 9
// checks whether the given input is an even number or an odd number
//  var x = +prompt("Enter number:  ")
//  if(x%2===0){
//      alert("Your number is even")
//  }
// else if(x%2!==0){
//     alert("Your number is odd")
// }

// TASK 10
// var T = +prompt("Enter temperature","Enter numeric values only")
// if(T>40){
//     alert("It is too hot outside.")
// }
// else if(T>30){
//     alert("The Weather today is Normal.")
// }
// else if(T>20){
//     alert("Today’s Weather is cool.")
// }
// else if(T>10){
//     alert("OMG! Today’s weather is so Cool.")
// }

// TASK 11 
// CALCULATOR
// var x = +prompt("Enter first number: ")
// var z = prompt("Enter Operation sign: ")
// var y = +prompt("Enter second number: ")
// if (z=="+"){
//     alert(x+y)
// }
// else if (z=="-"){
//     alert(x-y)
// }
// else if (z=="/"){
//     alert(x/y)
// }
// else if (z=="%"){
//     alert(x%y)
// }

///////////////////============ CHAPTER 12-13 ===========////////////////////////////////////////////////////////////////////////////


// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
// TASK 1 
// var x = prompt("enter char(number or string): ")
// var y =x.charCodeAt()
// if(y>=65 && y<=90){
//     alert("Your input is a uppercase letter")
// }
// else if(y>=97 && y<=122){
//     alert("Your input is a lower letter")
// }
// else(
//     alert("Your input is a number")
// )




// TASK 2
// var x= +prompt("Enter 1st integer: ")
// var y= +prompt("Enter 2nd integer: ")
// if(x>y){
//     alert("1st integer: "+x+", is greater than 2nd integer: "+y)
// }
// else if(y>x){
//     alert("2nd integer: "+y+", is greater than 1st integer: "+x)
// }
// else if(x===y){
//     alert("Both integers are equal")
// }

// TASK 3
// var num=+prompt("Enter number :")

// if (num>0)
// {
// document.write(num+" is positive ")
// }
// else if (num<0)
// {
//     document.write(num+" is negative")
// }
// else if (num==0)
// {
//     document.write(num+" is zero")
// }
// else
// {
//     document.write("please enter only integer to check")
// }

// TASK 4
// var x=prompt("Enter a character to check vowel or not: ")
// if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u' ||x=='A'||x=='E'||x=='I'||x=='O'||x=='U'){
//     alert("True (vowel)")
// }
// else{
//     alert("False (not vowel)")
// }

// TASK 5
// var pass = "charcoal001"
// var x = prompt("Please enter your password: ")
// if(x==pass){
//     alert("Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect password")
// }

// TASK 6
//This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day";
//     alert(greeting);
//      } 
// else greeting = "Good evening";
// alert(greeting);

// TASK 7
// var time = +prompt("Enter time in 24 hours format (like: 1900 = 7pm): ")
// if(time>=0000 && time<1200){
//           alert("Good Morning!")
// }
// else if(time>=1200 && time<1700){
//     alert("Good Afternoon!")
// }
// else if(time>=1700 && time<2100){
//     alert("Good Evening!")
// }
// else if(time>=2100 && time<=2359){
//     alert("Good Night!")
// }

/////////////========== CHAPTER 14-16 ==================////////////////////////////////////////////////////////////////////////////


// ARRAYS 
// TASK 1 
// var empty_array=[""];

// TASK 2 
// var empty_array=["",];

// TASK 3
//var arr= ["web","mobile","app"];

// TASK 4
//var arr= [100,200,500];

// TASK 5 
//-var bol=[true,false,true];

// TASK 6
// var arr= ["web","mobile",200];


// TASK 7
// var x = ["","SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
// document.write("<h3>Qualifications:</h3>")
// for(var i=1; i<x.length;i++){
//     document.write(i+") "+x[i]+" <br>");
// }
// OR
//  var x = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
//  document.write("<h3>Qualifications:</h3>");
//  document.write("1) "+x[0]+"<br>");
//  document.write("2) "+x[1]+"<br>");
//  document.write("3) "+x[2]+"<br>");
//  document.write("4) "+x[3]+"<br>");
//  document.write("5) "+x[4]+"<br>");
//  document.write("6) "+x[5]+"<br>");
//  document.write("7) "+x[6]+"<br>");
//  document.write("8) "+x[7]+"<br>");


// TASK 8
// var x=["Michael","John","Tony"];
// var marks=[320,230,480];
// var total=500;
// for(var i=0; i<x.length;i++)
// {
//     document.write("Score of "+x[i]+" is "+marks[i]+". Percentage: "+marks[i]/total*100+"% <br>")
// }

// TASK 9 
// var color=["red","green","blue","orange","black"];

// var x = prompt("What color you want to add to the beginning: ");
// var y = prompt("What color you want to add to the end: ");
// color.unshift(x);

// color.push(y);

// var a = prompt("Add two more color to the beginning of the array, color 1: ");
// var b = prompt("Color 2: ");
// color.unshift(a);
// color.unshift(b);
// color.shift();
// color.pop();

// var c = prompt("At which index you want to add a color: ");
// var d = prompt("Color name: ");
// color.splice(c,0,d);
//  var e = prompt("At which index you want to delete color(s): ")
//  var f = prompt("How many colors you want to delete: ")
// color.splice(e,f)
// document.write(color);

// TASK 10
// var arr1 = [320,230,480,120]
// document.write("Scores of students: "+arr1+"<br>")
// arr1.sort();
// document.write("Ordered Scores of students: "+arr1+"<br>");

// TASK 11
// var arr1 = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities list: <br>"+arr1+"<br><br>");
// var arr2=arr1.slice(2,4);
// document.write("Selected cities list: <br>"+arr2);

// TASK 12 
// var arr = ["This", "is", "my","cat"];
// document.write("Array: <br> "+arr+"<br><br>");
// document.write("String: <br> "+arr.join(" "));

// TASK 13 FIFO METHOD
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices: <br>"+arr+"<br><br>");
// document.write("Out: <br>"+arr.shift()+"<br>");
// document.write("Out: <br>"+arr.shift()+"<br>");
// document.write("Out: <br>"+arr.shift()+"<br>");
// document.write("Out: <br>"+arr.shift()+"<br>");

// OR By Loop
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices: <br>"+arr+"<br><br>");
// for(var i=0; i<4; i++){
// document.write("Out: <br>"+arr.shift()+"<br>");
// }

// TASK 14 LIFO METHOD
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices: <br>"+arr+"<br><br>");
// document.write("Out: <br>"+arr.pop()+"<br>");
// document.write("Out: <br>"+arr.pop()+"<br>");
// document.write("Out: <br>"+arr.pop()+"<br>");
// document.write("Out: <br>"+arr.pop()+"<br>");

// OR By Loop
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices: <br>"+arr+"<br><br>");
// for(var i=0; i<4; i++){
// document.write("Out: <br>"+arr.pop()+"<br>");
// }

// TASK 15
// var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
// document.write("<select>")
// for(var i=0; i<arr.length; i++){
//     document.write("<option>"+arr[i]+"</option>")
// }
// document.write("</select>")







///////////////////========== CHAPTER 17-20 ==========///////////////////////////////////////////////////////////////////////////////


// ARRAYS AND LOOPS
// TASK 1 
// var mul_arr=[[],[],[]];

// TASK 2 
// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for (var i=0; i<arr.length; i++){
//     document.write(arr[i].join(" ")+"<br>")
// }

// TASK 3
// for(var i=1; i<=10; i++){
//     document.write(i+"<br>")
// }

// TASK 4
// var a=+prompt("Enter a number to show its multiplication table");
// var b=+prompt("Enter length of multiplication table");

// document.write("Multiplication table of "+a+"<br>");
// document.write("Length "+b+"<br><br>");
// for(var i=1; i<=b; i++){
//     document.write(a+" x "+i+" = "+a*i)
//     document.write("<br>")
// }

// TASK 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i]+"<br>")  
// }
// document.write("<br>")
// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>")  
// }

// TASK 6
// document.write("<b>Counting:</b><br><br>")
// for(var i=0; i<=15; i++){
//     document.write(i+",")
// }
// document.write("<br><br><b>Reverse Counting:</b><br><br>")
// for(var i=10; i>=0; i--){
//     document.write(i+",")
// }
// document.write("<br><br><b>Even:</b><br><br>")
// for(var i=0; i<=20; i++){
//     if(i%2==0){
//         document.write(i+",")
//     }

// }
// document.write("<br><br><b>Odd:</b><br><br>")
// for(var i=0; i<=20; i++){
//     if(i%2!==0){
//         document.write(i+",")
//     }

// }
// document.write("<br><br><b>Series:</b><br><br>")
// for(var i=2; i<=20; i++){
//     if(i%2==0){
//         document.write(i+"k,")
//     }

// }

// TASK 7

//  var items = ["cake", "apple pie", "cookie", "chips", "patties"]
//  var search = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")
//  if(items.indexOf(search)!==-1){
//      document.write(search+" is <b>available</b> at index "+items.indexOf(search)+" in our bakery")
//  }
//  else{
//     document.write("We are sorry, "+search+" is <b>not available</b>  in our bakery")
//  }

// OR 2nd Method
// var a=["cake","apple pie","cookie","chips","patties"]
// var item=prompt("Enter item to check: ")
// var match=false;
// for (var i=0; i<6; i++)
// {
//     if (item==a[i])
//     {
//         match=true
//         alert(item+" is available at index "+i+" in our bakery")
//     }

// }
// if (match===false)
// {
//     alert("We are sorry! "+item+" is not availabe in our bakery")
// }


// TASK 8
// var A = [24, 53, 78, 91,12];
// var largest="";
// for(var i=0; i<5; i++)
// {
//  if (largest==="")
//  {
//      largest=A[i]
//  }
//  else if(A[i]>largest)
//  {
//      largest=A[i]
//  }

// }
// document.write("Array items: "+A+"<br>")
// document.write(" The Largest number is: "+largest)

// OR 2ND METHOD
// var arr = [24, 53, 78, 91, 12]
// document.write("Array items: "+arr+"<br>")
// var max = Math.max.apply(Math, arr)
// document.write("The largest number is "+max)

// TASK 9

// var arr = [24, 53, 78, 91, 12]
// document.write("Array items: "+arr+"<br>")
// var min = Math.min.apply(Math, arr)
// document.write("The smallest number is "+min)

// OR
//var A = [24, 53, 78, 91,12];
// var smallest="";
// for(var i=0; i<5; i++)
// {
//  if (smallest==="")
//  {
//      smallest=A[i]
//  }
//  else if(A[i]<smallest)
//  {
//      smallest=A[i]
//  }

// }
// document.write("Array items: "+A+"<br>")
// document.write(" The Smallest number is: "+smallest)

// TASK 10
// for(var i=1; i<=100; i++){
//     if(i%5==0){
//         document.write(i+",")
//     }
// }

//----------------------20 CHAPTERS END--------------------//

//////////------From chapter 21-----////////
////////////////////////Program 1/////////////////////////////////

// var firstname=window.prompt("enter first name: ");
// var lastname=window.prompt("enter last name: ");
// var a = firstname.slice(0);
// var b = lastname.slice(0);
// a =a .toLowerCase();
// b=b.toLowerCase();
// var join= alert("full name: "+firstname+lastname);

/////////////////////program 2//////////////////////////////////////

// var fav=window.prompt("Enter your favorite phone company");
// var a = document.write ("Phone: " + fav)
// fav = document.write ("legnth: " +fav.length)

/////////////////program 3//////////////////////////////

// var a=window.prompt("enter string")
// var b=window.prompt("enter char to find index")
// var c= a.indexOf(b);
// var g=  alert("string: "+a)
// var d=alert("index of" + b + " "+"is"+c)

/////////////////program4//////////////////////

// var a="hello world"

// var b= a.lastIndexOf("l")

// var d=alert("index of" + "l" + " "+"is"+b)

///////////////////////program5/////////////////////////////

// var a=window.prompt("Enter string")
// var b=window.prompt("Enter index to find char")

//     if(b < a.length)
//     {
//         var c = a.charAt(b);
//         alert("at index" +" "+ b +": " + c)
//     }
/////////////////////////program 6////////////////////////////

// var firstname=window.prompt("Enter your first name: ");
// var lastname=window.prompt("Enter your last name: ");
// var b = firstname.slice(0,1);
// var c=firstname.slice(1)
// var d = lastname.slice(0);
// b =b.toUpperCase();
// c=c.toLowerCase();

// d=d.toLowerCase();
// var e=b.concat(c,d);
// document.write(e);

///////////////////////program 7///////////////////////
// var text= "hyder"
// var text2="abad"
// document.write("string : "+text+text2)
// var text1= text.replace("hyder","Islam");
// var text3= text1+text2;
// document.write("<br>"+ "replaced: "+text3)

////////////////////program 8////////////////////////

// var message = "Ali and Sami are best friends. They play cricket and football together"
// var msg= message.replace(/and/g ,"&")
// document.write(msg)

//////////////////program 9//////////////////////////

// var a ="472"
// document.write("value: "+a+"<br>"+"type : string");
// var b= parseInt(a);
// document.write("<br>"+"value: "+b+"<br>"+"type : number");

///////////////////program 10///////////////////////
// var str = "peanuts";
// var res = str.toUpperCase();

/////////////////////program 11//////////////////////
// var a=window.prompt("Enter a string")
// var b=a.slice(0,1);
// var c=a.slice(1);
//  b= b.toUpperCase();
//  c=c.toLowerCase();
// document.write("string :"+a +"<br>" + "Title: "+b+c);

// ///////////////////program 12//////////////////////////
// var num =35.36;
// var a= num.toString
// document.write(a);

//////////////////program 13//////////////////////////
// var a=window.prompt("user name")
// for (var i = 0; i < text.length; i++) {
//      if (a.charAt(i)===a.charCodeAt(33) ) {
//      document.write("Exclamation point found!");
//      }
//      }

///////////////////program 14//////////////
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b= window.prompt("search by name in our bakery")
// var c= b.slice(0);
// var d= c.toLowerCase();

// if(d === a[0]){
//     document.write("cake is available at index 0 in our bakery")
// }
// if(d === a[1]){
//     document.write("apple pie is available at index 1 in our bakery")
// }
// if(d === a[2]){
//     document.write("cookie is available at index 2 in our bakery")
// }
// if(d === a[3]){
//     document.write("chips is available at index 3 in our bakery")
// }
// if(d === a[4]){
//     document.write("patties is available at index 4 in our bakery")
// }
// else{
//     document.write(b + " is not available  in our bakery")
// }


//////////////////////////program 15///////////////////////////
// var b= window.prompt("enter password")
// var c= b.slice(0,1);


// if(c === "1"||c === "2"||c === "3"||c === "4"||c === "5"||c === "6"||c === "7"||c === "8"||c === "9"||c === "0" ){
//     document.write("wrong, start with numbers")
// }

// else if(b.length<6 || b.length>6){
//     document.write("pswd should be 6 legnth")
// }

// else{
//     document.write("success")
// }

///////////////////program 16////////////////////////////
// var a = "University of Karachi";
// for( var i=0 ; i<a.length; i++){
//     var chars = a.split('');
//     document.write("<br>");
//     document.write(chars[i]);

// }

//////////////////program 17///////////////////
// var a=window.prompt("enter string");
// var b = a.slice(a.length-1,a.length)
// document.write("string : " +a)
// document.write("<br>"+"last char is"+" " +b)


/////////////////////program 18////////////////////
// function gfg() { 
//     var s = "“the quick brown fox jumps over the lazy dog"; 
//     var f = "the"; 
//     var r = s.indexOf(f); 
//     var c = 0; 
//     while (r != -1) { 
//         c++; 
//         r = s.indexOf(f, r + 1); 
//     } 
//     document.getElementById("rk").innerHTML = c; 
// } 

////////Data methods program 1//////////////////

// var a= 3.45214
// var b= Math.round(a);
// document.write("number: "+a)
// document.write("<br>"+"round: "+b)
// var c=Math.ceil(a)
// document.write("<br>"+"ceil: "+c)
// var d=Math.floor(a)
// document.write("<br>"+"floor: "+d)

/////////////////program2////////////////////
// var a=window.prompt("enter -ve float number")
// var b= Math.round(a);
// document.write("number: "+a)
// document.write("<br>"+"round: "+b)
// var c=Math.ceil(a)
// document.write("<br>"+"ceil: "+c)
// var d=Math.floor(a)
// document.write("<br>"+"floor: "+d)

/////////////////program 3/////////////////

// var a=-4;
// var b = Math.abs(a)
// var c= 5
// var d= Math.abs(c)
// document.write("Numbers are  "+ a +" , "+ c)
// document.write("<br>"+"absolute of -4: "+b)
// document.write("<br>"+"absolute of 5: "+d)

///////////program 4///////////////
// var a= (Math.floor(Math.random()*4)+1);
// var b= (Math.floor(Math.random()*6)+1);
// document.write("die of 4 is : " +a)
// document.write("die of 6 is : " +b)

/////////////program 5///////////////
// var a=Math.floor( Math.random()*2)+1;
// document.write("number "+a+"<br>")
// if(a===1){
//     document.write("head")
// }
// if(a===2){
//     document.write("tail")
// }


////////////program 6/////////////////

// var a = window.prompt("enter your weight in killograms")
// var c= parseFloat(a)
// document.write("the weight of user is "+c+"killograms")

//////////program 7//////////////////////

// var a = window.prompt("enter your weight in killograms")
// var c= parseFloat(a)
// document.write("the weight of user is "+c+"killograms")

///////////program 8/////////////////
// var a=["1","2","3","5"]
// var b= window.prompt("guess the number")
// if(b===1){
//     alert("your guess is right")
// }
// else if(b===2){
//     alert("your guess is right")
// }
// else if(b===3){
//     alert("your guess is right")
// }
// else if(b===5){
//     alert("your guess is right")
// }

//////////////31-34  Data methods program 1/////////////

// var today = new Date();

// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// var dateTime = date+' '+time;

// /////////////program 2//////////////
// var dayNames = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//  var now = new Date();
//  var theDay = now.getMonth();
//  var nameOfToday = dayNames[theDay];
//  document.write("current month :" +nameOfToday);

// /////////program 3////////////
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("today is: "+ nameOfToday);

///////////program 4////////////
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
//   if (nameOfToday=="Sat"|| nameOfToday=="Sun")
//   {
//       document.write("It's a fun day");
//   }

/////////////program 5/////////////
// var now = new Date();
//  var theDay = now.getDate();
//  if (theDay<=15 ){
//  document.write("First 15 days")
//  }
//  else if( theDay>15){
//     document.write("Last 15 days")
//  }

// ///////////program 6/////////////
// var d= new Date();

// document.write("today : "+ d+"<br>")
// var ms= d.getTime()
// document.write("ellapsed millisecond "+ ms+"<br>")
// var mn= (ms/60000)
// document.write("ellapsed minutes "+ mn)

//////////program 7/////////////

// var d= new Date()
// var c= d.getHours()
// if (c<12 ){
//     document.write("Its am")
//     }
//     else if( c>=12){
//        document.write("Its pm")
//     }

///////////program 8/////////////

// var d = new Date("May 28 , 2020")

// document.write(d)

// //////////program 9////////////////
// var n = new Date("June 18 , 2015")
// var n1= n.getTime();
// var g = new Date()
// var g1= g.getTime();
// var r =  g1-n1;
// var e = r/(1000*3600*24)
// document.write(r+"  days are passed since 1st ramadan 2015")
////////////program 10//////////////

// var e= new Date("Dec 05 , 2015")
// document.write(e)
// var d= e.getTime();
// var n=new Date("jan 01 , 2015")
// var g=n.getTime();
// var r= d-g;
// var sec = r/(1000)
// document.write("<br>"+"seconds fom begiining to end of 2015 is : "+ sec)

///////////////program 11///////////////
// var e = new Date()
// document.write(e);
// var r = new Date()
// r.setHours(16)
// document.write("<br>"+r);


//////////////program 12/////////////////
// var d= new Date()
// var c = new Date("jan 01 ,1920")
// document.write("TODAY : " + d + "<br>" + "BEFORE 100 YEARS: " + c )

// ////////////program 13///////////

// var r = window.prompt("enter age")
// var d = new Date();
// var y=d.getFullYear()-r;
// document.write("your age is  "+ r+"<br>"+"your birth year is   "+ y)

////////////////program 14///////////////


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// var unit= 410
// var p=16
// var n = unit*p;
// var l=350;
// var late=n+l;
// document.write("Customer Name: ABC customer"+"<br>"+"Month: "+nameOfToday+"<br>"+"No. of Units: "
// +unit+"<br>"+"No. of charges per unit: "+p+"<br>"+"<br>"+"<br>"+"Net Amount Payable (within Due Date): "+n
// +"<br>"+"Late Payment Surcharge: "+l+"<br>"+"Gross Amount Payable (after Due Date): "+ late);


////////////// Function program 1/////////////

// function telltime(){
//     var a= new Date()
//     document.write(a)
// }
// telltime();

///////////program 2///////////////
// function m(){
//     var a=window.prompt("enter your first name: ")
//     var b= window.prompt("enter your second name: ")
//     var c = a.toUpperCase()
//     var d= b.toUpperCase()
//     document.write("Your name is: " +c+d)

// }
// m();


////////program 3////////////
// function add(){
//     var a= window.prompt("enter a number :  ")
//  var b= window.prompt("enter a 2nd number:  ")
//  var c= a+b;
//  document.write("sum is " +c)


// }
// add();

////////////program 4//////////////
// function cal(a,b,c){
//     var a= window.prompt("enter a value")
//     var b= window.prompt("enter a value")
//     var c= window.prompt("enter operation")

//     if(c=="+"){
//         document.write(a+b)
//     }
//     else if(c=="-"){
//         document.write(a-b)
//     }
//     else if(c=="x"){
//         document.write(a*b)
//     }
//     else if(c=="/"){
//         document.write(a/b)
//     }


// }
// cal();

// /////////program 5/////////////
// function calc(a){

//     document.write(a*a);

// }

// calc(9);


///////////progranm 6/////////////
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 5;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);

/////////////////program 7/////////////////
// function add(a, b=20) {
//     return a + b;
//   }
//   add(25);

//   ////////////program 8///////////
//   function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }

//   console.log(pythagorean(5, 3));


// //////////program 9////////////
// var height = prompt("Enter a whole number for the height of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// function perimeter(height, width) {
//     return 2*( height + width);
// }

// document.writeln('The area of your rectangle is ' + area(height, width));         
// document.writeln('The perimeter of your rectangle is ' + perimeter(height, width));


/////////program 10/////////////


// function check_Palindrome(str_entry){
//     // Change the string into lower case and remove  all non-alphanumeric characters
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or not
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         for (var x = 0; x < ccount; x++) {
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');


// /////////////////program 11/////////////////
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

//////////////program 12///////////
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];
// ​
//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));



// //////////program 13///////////////
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('google.com', 'o'));


///////////program 14/////////////////
// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   console.log("The circumfrence is " + y + ".");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   console.log("The area is " + x + ".");
//   }

//   calcCircumfrence(30);
//   calcArea(10);
/////////////////chapter no: 38-42////////////////////
//answer 1
// function power(a, b) {
//     var result = 1;
//     if (b == undefined) b = 2;
//     for (var i = 1; i <= b; i++) {
//       result = result * a;
//     }
//     return result;
//   }
//   //answer 2
//   function leapyear(year) {
//     return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
//   }
  
  
//   //answer 3
//   function calculateS(a, b, c) {
//     return (a + b + c) / 2;
//   }
  
  
//   function calculateArea(a, b, c) {
//     var S = calculateS(a, b, c);
//     var area = S * (S - a) * (S - b) * (S - c);
//     return area;
//   }
  
  
//   //answer 4
//   function average(m1, m2, m3) {
//     var sum = m1 + m2 + m3;
//     var avg = sum / 3;
//     return avg;
//   }
//   //assuming marks from 100
//   function percentage(m1, m2, m3) {
//     var sum = m1 + m2 + m3;
//     var per = (sum / 300) * 100;
//     return per;
//   }
  
  
//   function mainFunction(m1, m2, m3) {
//     var num1 = parseInt(m1);
//     var num2 = parseInt(m2);
//     var num3 = parseInt(m3);
//     console.log("Average: " + average(num1, num2, num3));
//     console.log("Percentage: " + percentage(num1, num2, num3));
//   }
  
  
//   //answer 5
//   function indexOf(str, character) {
//     var i = 0;
//     for (; i < str.length; i++)
//       if (str.charAt(i).toLowerCase() === character.toLowerCase()) return i;
//   }
  
  
//   //answer 6
//   //utility function check vowel
//   function isVowel(char) {
//     switch (char) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         return true;
//     }
//     return false;
//   }
//   function removeVowels(str) {
//     var i = 0;
//     var output = "";
//     for (; i < str.length; i++) {
//       if (!isVowel(str.charAt(i))) output += str.charAt(i);
//     }
//     str = output;
//     return str;
//   }
  
  
//   //answer 7
//   function countVowelPair(str) {
//     var i = 0;
//     var count = 0;
  
  
//     for (; i < str.length - 1; i++) {
//       var char = str.charAt(i);
//       switch (char) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u": {
//           var char2 = str.charAt(i + 1);
//           switch (char2) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//               //console.log("" + char + char2);
//               count++;
//           }
//         }
//       }
//     }
//     return count;
//   }
  
  
//   //answer 8
//   function convertDistances(km) {
//     km = parseFloat(km);
//     var m = km * 1000.0;
//     var feet = m * 3.28084;
//     var inch = feet * 12.0;
//     var cm = m * 100.0;
//     console.log("Meter : " + m.toPrecision());
//     console.log("Feet : " + feet.toPrecision());
//     console.log("Inches : " + inch.toPrecision());
//     console.log("Centimeter : " + cm.toPrecision());
//   }
  
  
//   //answer  9
//   function calculatePay(hours) {
//     var pay = 0.0;
//     var over = 0.0;
//     if (hours > 40) {
//       over = hours - 40;
//     }
//     pay = 12 * over;
//     return pay;
//   }
// answer 10
//   function currency(total) {
//     var hundred = total / 100;
//     var fifty = (total % 100) / 50;
//     var ten = ((total % 100) % 50) / 10;
//     document.write(
//       "You will have " +
//         Math.floor(hundred) +
//         " hundred notes " +
//         Math.floor(fifty) +
//         " fifty notes " +
//         Math.floor(ten) +
//         " ten notes."
//     );
//     console.log(
//       "You will have " +
//         Math.floor(hundred) +
//         " hundred notes " +
//         Math.floor(fifty) +
//         " fifty notes " +
//         Math.floor(ten) +
//         " ten notes."
//     );
//   }

  //////////////////chapter 43 to 48////////////////
  //////////QNo:1///////////////
  // function myAlert() {
  //   alert("Thanks for purchasing a phone from us!");
  // }
/////////Q2/////////////
// var ctr = 0;
// function hit(temp) {
//     ctr = ctr + temp;
//     test.innerHTML = ctr;
// };
// window.onclick;

  ////////Q:3////////////////
  // function delRow(temp) {
  //   var parentRowIndex = temp.parentNode.parentNode.rowIndex;
  //   document.getElementById("table").deleteRow(parentRowIndex);
  // }
  
  ////////Q5//////////
//   var ctr = 0;
// function hit(temp) {
//     ctr = ctr + temp;
//     test.innerHTML = ctr;
// };
// // window.onclick;
// <button onclick="hit(-1)">Decrease</button>
// <span id="test">--</span>
// <button onclick="hit(1)">Increase</button>



////////Dom chapter 58 to 57/////////////
// Q1
//  var mainontent=document.getElementById("main-content");

//  var maincontent= document.getElementById("main-content").childNodes;

//  var outpout = "";

//  var i;

//  for (i = 0; i < c.length; i++) {

//  ouput= output + maincontent[i].nodeName + "<br>";

//  }

//  document.write (output);

// var render=document.getElementByClassName("render");

// 	document.write(render);

// 	var firstname=getElementById("first-name");

// 		firstname.value="First Name"

// 	var lastname=getElementById("last-name")

// 	lastname.value=("Last Name")

// 	var lastname=getElementById("email")

// 	lastname.value=("Email")


// // Q2

// var nodeType=document.getElementById("last-name").nodeType;

// var childNode=document.getElementById("last-name").childNode;

// document.write(nodeType);

// document.write(childNode);

// var newnode= document.createTextNode("newNode");

// 	var lastnamenode= document.getElementById("lastName").childNodes[0];

// 	lastnamenode.replaceChild(newnode, lastnamenode.childNodes[0]);

// var firstchild = document.getElementById("main-content").firstChild;

// var lastchild = document.getElementById("main-content").lastChild;


// var prev =  document.getElementById("lastName").previousElementSibling;

// var next =  document.getElementById("lastName").nextElementSibling;



// var parentNode = document.getElementById("myLI").parentNode.nodeType;

	
