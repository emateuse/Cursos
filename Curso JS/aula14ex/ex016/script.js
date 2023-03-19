function contar(){
    var inicio = window.document.getElementById("inicio")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var msg = window.document.getElementById("msg")
    msg.innerHTML=""
    if(inicio.value == "" || fim.value == "" || passo.value == "")
    {
        alert("Todas as informações precisam ser preenchidas")
    }
    else if (passo.value== 0){
        alert("Utilizando passo 1 para a contagem")
        for(var c=inicio.value;c<=fim.value;c++){
            msg.innerHTML+=`${c} `
        }     
    }
    else{
        alert("Caiu aqui")
        var x = 10
        var y = 20
        var z = 2
        for(var c=x;c<=y;c+=z){
            msg.innerHTML+=`${c} `
        }    
    }
}