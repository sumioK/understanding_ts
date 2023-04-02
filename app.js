var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generageError(message, code) {
    throw { message: message, errorCode: code };
}
generageError('エラーが発生しました', 500);
