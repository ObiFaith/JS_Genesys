// Task 1 : Fahrenheit to Celcius
function f_to_c(celcius){
    return (1.8 * celcius) + 32;
}

//console.log(f_to_c(100));

// Task 2 : Average value of an Array 
function arrAverage(arr){
    let sum = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++)
        sum += arr[i];
    return (sum / len);
}

//console.log(arrAverage([1, 2, 3, 4, 5]));

// Task 3 : Check if a num is divisible to two diif nos
function divisor(num, num1, num2){
    if (num > 0 && num1 > 0 && num2 > 0){
        if (num % num1 === 0 && num % num2 === 0)
            return true;
        else 
            return false;
    }
    else
        console.log("Inputs must be non-zero and positive numbers");
}

//console.log(divisor(2, 0, 2));

// Task 4 : Output first 100 Prime Numbers
for (let i = 0; i <= 100; i++){
    
}

// Task 5 : Return boolean value if a number is Prime number or not

// Task 6 : Return positive items of a Diverse Array
function positiveItems(arr){
    let newArr = [];

    let j = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 0 && newArr.includes(arr[i]) != true){
            newArr[j] = arr[i];
            j++;
        }
    }

    return newArr;
}

//console.log(positiveItems([-2, -1, 0, 2, 3, 2, 1, 3]));

// Task 7 : Loop through 1 <= n <= 100 and console 'Fuzz', 'Buzz', and 'FizzBuzz' if n is a multiple of 3, 5, and 15 respectively
function FizzBuzz(){
    for (let i = 0; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0)
            console.log('FizzBuzz');
        else if (i % 3 === 0)
            console.log('Fizz');
        else if (i % 5 === 0)
            console.log('Buzz');
        else
            console.log(i);
    }
}

//FizzBuzz();

// Task 8 : Hashtag Generator
function Hashtag(){
    
}