function calcular(){
    let n = document.getElementById(`numero`)
    let tabuada = document.getElementById(`seltab`)
    if(n.value.length == 0){
        alert("Digitar um número")
    }
    else{
        let c = 0
        tabuada.innerHTML = ("")
        for (c; c <=10; c++){
            let calc = c * Number(n.value)
            let item = document.createElement('option')
            item.text = `${c} X ${n.value} = ${calc}`
            tabuada.appendChild(item)
        }
    }
}