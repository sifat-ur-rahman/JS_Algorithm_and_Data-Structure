

// একটা প্রোগ্রাম লিখ যেটা ১ থেকে আমার ডিফাইন করা নাম্বার(n) 
// পর্যন্ত সবগুলো নাম্বার প্রিন্ট করবে৷ কিন্তু যদি সেই নাম্বারটা ৩ এর গুণিতক হয় 
// তাহলে নাম্বারের পরিবর্তে “Fizz" প্রিন্ট করতে হবে৷
// আর যদি ৫ এর গুণিতক হয় তাহলে নাম্বারের পরিবর্তে “Buzz" প্রিন্ট করতে হবে৷ 
// কিন্তু আবার যদি নাম্বারটা ৩ এবং ৫ দুইটারই গুণিতক হয় 
// তাহলে নাম্বারের পরিবর্তে “FizzBuzz” প্রিন্ট করাতে হবে৷

function fizzBuzz(n){
    for(let i=1; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }
        else if(i % 5 === 0){
            console.log('Buzz');
        }
        else if(i % 3 === 0){
            console.log('Fizz');
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz(115)