const passwordBox = document.getElementById("password");
const  length =12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "~!@#$%^&*()_-<>?";
const number = "1234567890";
const allChar =uppercase + lowercase + symbol +number;
function createPassword() {
    let password = "";
    password+=uppercase[Math.floor(Math.random() *  uppercase.length)];
    password+=lowercase[Math.floor(Math.random() *  lowercase.length)];

    password+=symbol[Math.floor(Math.random() *  symbol.length)];

    password+=number[Math.floor(Math.random() *  number.length)];

    while (length > password.length) {
        password+=allChar[Math.floor(Math.random() * allChar.length)];
    }

passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}