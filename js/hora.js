function tempo(){
    let msg = document.getElementById("msg");
    let data = new Date();
    let hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} Horas`
}