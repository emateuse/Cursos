function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 22
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >=0 && hora <12){
    img.src="fotomanha.png"
    document.body.style.background = '#2b5b83'
} else if(hora >= 12 && hora <18){
    img.src="fototarde.png"
    document.body.style.background = '#b8ae8b'
} else{
    img.src="fotonoite.png"
    document.body.style.background = '#12151e'
}

}