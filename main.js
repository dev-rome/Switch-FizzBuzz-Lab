// FizzBuzz

for (let num = 1; num <= 100; num++) {
  // for loob that finds if numbers are divisible by 3 && 5 or just 3 or 5
  // logs Fizzbuz, Buzz, or Fizz
  // also logs current number under each text
  // numbers not divisible by 3 or 5 logs x and the number under X
  if ((num % 3 === 0) && (num % 5 === 0)) {
    console.log("FizzBuzz");
    console.log(num);
  } else if (num % 5 === 0) {
    console.log("Buzz");
    console.log(num);
  } else if (num % 3 === 0) {
    console.log("Fizz");
    console.log(num);
  } else {
    console.log("x");
    console.log(num);
  }
}

// Switch Statement

let favoriteMovie = "star wars";
let moviePhrase;
// switch statement to check for favorite movie 
// then logs movie phrase to the console
switch (favoriteMovie) {
  case "jaws":
    moviePhrase = "You're gonna need a bigger boat.";
    console.log(moviePhrase);
    break;
  case "the shining":
    moviePhrase = "All work and no play makes Jack a dull boy.";
    console.log(moviePhrase);
    break;
  case "star wars":
    moviePhrase = "Do. Or do not. There is no try.";
    console.log(moviePhrase);
    break;
  case "forrest gump":
    moviePhrase = "Life was like a box of chocolates.";
    console.log(moviePhrase);
    break;
  case "back to the future":
    moviePhrase = "Where we're going, we don't need roads.";
    console.log(moviePhrase);
    break;
  default:
    console.log("Great movie choice!");
}