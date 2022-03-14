// let i = 0;

// do {
//     console.log(i);
//     i++;

// }while(i < 10);


// break and countinue

for (let i = 0; i < 10; i++){
    if (i === 5){
        console.log("Five");
        continue;
    }

    console.log(i);
}

for (let i = 0; i < 10; i++){
    if (i === 5){
        console.log("Five");
        break;
    }

    console.log(i);
}


//functions

// function myself(){
//     console.log("My name is John Doe");
// }
// myself();

//function with params

function myself(name){
    console.log("my name is ", name);
}

myself("John Doe")
myself("Jane Doe")
myself("Gifty Doe")


function add(x,y){
 let sum = x + y;
 console.log(sum);
}

add(5,6);
add(6,7);
add(7,8);


//classwork: write a function to multiply to compute multiplication of two digits
function multiply(a,b){
    return a * b;
}

console.log( multiply(3,5));
console.log(multiply(8,3));


//function with return value

function add(x,y){
    let sum = x + y;
    return sum;
}

let result = add(10,15);
let newResult = result * 2;
console.log(newResult);


//arrow func

let divide = (a,b) => a/b;

let product = (a,b) => {
    return a * b;
}

 console.log(divide(40,5));
 console.log(product(5,6));


 //Higher order func
 // Is a func that takes a func as params


 //map
 let numbers = [0,1,2,3,4,5,6,7,8,9,10];

 let squares = numbers.map((number) => number * number);

 console.log(squares);

 //classwork: double each element in the array

 let double = numbers.map((num) => num + num);
 console.log(double);

//filter
 let evens = numbers.filter((number) => number % 2 === 0);
 console.log(evens);
//classwork
 let odds = numbers.filter((number) => number % 2 !== 0);
 console.log(odds);



 //find

 let five = numbers.find((num) => num === 11);
 console.log(five);

 //string
 let sentence = " The quick brown fox jumps over the sentence ";

 console.log(sentence.length);
 console.log(sentence.concat(" from concatenation"));
 console.log(sentence.endsWith("dog"));
 console.log(sentence.includes('hardwork'));
 console.log(sentence.indexOf('brown'));
 console.log(sentence.lastIndexOf("0"));
 console.log(sentence.replace("lazy","hardwork"));
 console.log(sentence.repeat(2));
 console.log(sentence.slice(20,20));
 log
 console.log(sentence.toLocaleLowerCase());
