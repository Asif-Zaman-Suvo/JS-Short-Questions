function reverseStr(str) {
    var reverse = "";

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var anotherLine = "Hello I am Md Asifuzzaman Suvo.And what about you?"
var answer = reverseStr(anotherLine);
console.log(answer);