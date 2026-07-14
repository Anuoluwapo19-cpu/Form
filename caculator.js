function Caculator(operation, inputs) {

    // Add all numbers in the array
    if (operation === "add") {
        let sum = 0;

        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i];
        }

        return sum;
    }

    if (operation === "subtract") {
        
          let difference = inputs[0];

        for (let i = 1; i < inputs.length; i++) {
            difference -= inputs[i];
        }

        return difference;
    }


    if (operation === "multiply") {
        return inputs[0] * inputs[1];
    }

    if (operation === "modulus") {
        return inputs[0] % inputs[1];
    }

    if (operation === "power") {
        return inputs[0] ** inputs[1];
    }
   
     if (operation === "conbime") {
        return (inputs[0] + inputs[1]) % inputs[2];
    }
    return "Invalid operation";
}

// RESULT
let result = 
    Caculator("add", [1, 2, 3]) +
    Caculator("subtract", [10, 5]) +
    Caculator("multiply", [20, 5]) +
    Caculator("modulus", [30, 4]) +
    Caculator("power", [5, 3]) +
    Caculator("conbime", [5, 30, 4]);

console.log("Addition:", Caculator("add", [1, 2, 3]));
console.log("Subtraction:", Caculator("subtract", [10, 5]));
console.log("Multiplication:", Caculator("multiply", [20, 5]));
console.log("Modulus:", Caculator("modulus", [30, 4]));
console.log("Power:", Caculator("power", [5, 3]));
console.log("conbime:", Caculator("conbime", [5, 30, 4]));
console.log("Result:", result);

// Comparison
if (result > 300) {
    console.log("You pass");
} else if (result < 300) {
    console.log("You fail - try harder");
} else {
    console.log("Undefined");
}
if (Caculator("add", [1, 2, 3]) >  Caculator("subtract", [10, 5])){
    console.log("Add is greater than sub");  
}else {
    console.log("Add is lesser than sub"); 
}

// Logical Operators
if (result > 100 && result < 400) {
    console.log("Excellent Result");
}else{
    console.log("Average");
}

if (result < 50 || result > 200) {
    console.log("Very Good");
}

if (!(result === 0)) {
    console.log("Result is not zero.");
}