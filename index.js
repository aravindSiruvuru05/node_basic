const fs = require('fs')
const dietTxt = fs.readFileSync('./resources/diet.txt','utf-8')
console.log(dietTxt)