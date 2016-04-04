// Place your FizzBuzz code here. 

// Count through numbers 1-20 and find out if each one is divisible by 3, 5 or both.
for (i=1; i<=20; i++){

  // For each number do the following check:

  // See if it's divisible by 3
  if (i % 3 === 0) {
    // If so: See if it is also divisible by 5
      if (i % 5 === 0) {
          // If divisible by 3 and 5: Print FizzBuzz
          console.log('FizzBuzz');
      } else {
          // If only divisible by 3: Print Fizz
          console.log('Fizz');
      }
  } else if (i % 5 === 0) {
    // See if it's divisible by 5
    // If so print buzz
    console.log('Buzz');
  } else {  
  // See if it's not divisible by 3 or 5
  // If so print number
    console.log(i);
  }




}  