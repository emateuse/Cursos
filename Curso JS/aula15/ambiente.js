let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) //para encontrar a posição
console.log(`O valor8 está na posição ${pos}`)
pos = num.indexOf(4) //quando não encontra ele retorna -1
console.log(`O valor8 está na posição ${pos}`)
