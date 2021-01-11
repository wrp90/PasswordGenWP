function passwordGen(passFinal, passLength) {
    var passGen = '';
    for(var i = 0; i < passLength; i++) {
        var rand = Math.floor(Math.random() * passFinal.length);
        var arrayGen = passFinal[rand]
        passGen += arrayGen;
    }
    return passGen;

}


var passFinal = ['a', 'b', 'c', '!', '@', '#', 'A', 'B', 'C'];
console.log(passwordGen(passFinal, 12));