let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

//SyntaxError: Unexpected token && -> A specific language construct was expected, but something else was provided. This might be a simple typo. 
//In this case it was the opening and closing parens for the conditional of the if statement.