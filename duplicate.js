var roll = [3, 5, 6, 7, 3, 2, 3, 5, 7, 4, 5, 6, 7, 4, 5]

var uniqueName = [];

for (var i = 0; i < roll.length; i++) {
    var element = roll[i];
    var index = uniqueName.indexOf(element);

    if (index == -1) {
        uniqueName.push(element);

    }
}
console.log(uniqueName)

