let valores = [8, 1, 7, 4, 2, 9]
//forma de mostrar vetores
/*
for(let c = 0; c < valores.length; c++){
    console.log(`A psoição ${c} tem o valor ${valores[c]}`)
}
*/
//forma de mostrar vetores simplificado
for(let pos in valores){
    console.log(`A psoição ${pos} tem o valor ${valores[pos]}`)
}