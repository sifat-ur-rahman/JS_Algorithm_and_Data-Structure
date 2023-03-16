
// // একটা নাম্বার দেওয়া হবে, 
// নাম্বারটা উল্টো করে আবার নাম্বার আকারেই রিটার্ন করতে হবে৷
// কিন্তু নাম্বারটা যদি নেগেটিভ হয়, তাহলে সেটা নেগেটিভই থাকবে৷ 
// আর যদি পজিটিভ হয় তাহলে পজিটিভই থাকবে।

function numberRevers(number) {
    const reversString = number.toString().split('').reverse().join('')
   return parseInt(reversString)*Math.sign(number)
}

console.log(numberRevers(-123));