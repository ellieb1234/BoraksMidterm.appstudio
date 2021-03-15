/*
a=parseInt(prompt("Enter three numbers (enter 0 for the last number if you want to divide two numbers)"))
b=parseInt(prompt("Enter another number"))
c=parseInt(prompt("Enter another number"))

function calcAvgSquare(x,y,z){
  xSquare=x**2
  xAvg=(x+y+z)/3
  avgXSquare=xAvg*xSquare
  return (avgXSquare)
}

function divideTwo(x,y){
  return(x%y)
}

if (c==0){
  let division=parseInt(a/b)
  let remainder=divideTwo(a,b)
  console.log(`The result of dividing ${a} by ${b} is ${division} with a remainder of ${remainder}.`)
}
else{
  avgSquare=calcAvgSquare(a,b,c)
  console.log(`The answer is ${avgSquare}.`)
}
*/