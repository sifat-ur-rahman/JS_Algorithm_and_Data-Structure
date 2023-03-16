
function creteCharMap(string) {
    const charMap = {};
    for(let character of string){
        if(charMap[character]){
            charMap[character]++
        }
        else{
            charMap[character]=1
        }
    }
    return charMap
}
function maxCharacter(string) {
    const charMap = creteCharMap(string)
    let max = 0;
    let character;
    for(let char in charMap){
        if(charMap[char] >= max){
            max = charMap[char]
            character = char
        }
    }
    return character
}

console.log(maxCharacter('abcsab'));