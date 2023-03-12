
function stringRevers(string) {
    let reversed = ''
    for(let character of string){
        reversed = character + reversed
    }
    return reversed
}

console.log(stringRevers('xyz'));