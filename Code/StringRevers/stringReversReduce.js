
function stringRevers(string) {
  return  string.split("").reduce((reversed, character) => character + reversed, '')
}

console.log(stringRevers('cba'));