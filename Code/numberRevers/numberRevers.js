
function numberRevers(number) {
    const reversString = number.toString().split('').reverse().join('')
   return parseInt(reversString)*Math.sign(number)
}

console.log(numberRevers(+123));