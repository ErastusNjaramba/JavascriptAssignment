function compareNumbers(Num1, Num2) {
    if (Num1 > Num2 && Num1 == Num2)
        console.log(Num1 + " is greater than " + Num2);
    else if (Num1 < Num2 && Num1 == Num2)
        console.log(Num1 + " is less than " + Num2);
    else if( Num1 === Num2){
        console.log(Num1 + " is equal to " + Num2);
    }
    else {
        console.log(Num1 + " and " + Num2 + " should be numbers");
    }

}

compareNumbers(10, "t10"); // Output: 10 is greater than 20