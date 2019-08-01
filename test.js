let bigArr = [...Array(1000).keys()]
let batchSize = 100
let nBatches = bigArr.length / batchSize
console.log(bigArr)

for(let b = 0; b < nBatches; b++){
    for(let i = 0 + b * batchSize; i < batchSize + b * batchSize; i++){
        console.log(bigArr[i] + 'hello' + b)
    }
}
