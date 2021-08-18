var marks = [99,86,55,33,66,77,98,76,43,56,100,1022,2294,334,6446];

var max =marks[0];
for (var i =0; i< marks.length; i++) {
    const element = marks[i];

    if (element>max) {
        max=element;
        
    }
    
}
console.log("The Highest Value Is ", max);