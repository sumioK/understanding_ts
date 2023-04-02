let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max'

if(typeof userInput === 'string'){
  userName = userInput;
}

function generageError(message: string, code:number):never{
  throw { message: message, errorCode: code};
}
generageError('エラーが発生しました', 500)