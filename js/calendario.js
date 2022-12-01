const dataCorrente = document.querySelector(".data-corrente");
diaMarcado = document.querySelector(".dias");
proximoDia = document.querySelector(".btn-proximo");
anteriorDia = document.querySelector(".btn-anterior");


let data = new Date();

anoCorrente = data.getFullYear();
mesCorrente = data.getMonth();
const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

const rederizaCalendario = ()=>{
    let primeiroDiadoMes = new Date(anoCorrente,mesCorrente , 1).getDay(),
        ultimaDatadoMes = new Date(anoCorrente,mesCorrente + 1, 0).getDate(),
        ultimaDatadoUltimoMes = new Date(anoCorrente,mesCorrente , 0).getDate(),
        ultimoDiadoMes = new Date(anoCorrente,mesCorrente ,ultimaDatadoMes ).getDay();
        ;

    let liTag = '';
    for (let i= primeiroDiadoMes; i > 0; i--){
        liTag += `<li class="inativa">${ultimaDatadoUltimoMes - i + 1 }</li>` 
    }
    
    for (let i=1; i <= ultimaDatadoMes; i++){
        let hoje = i === data.getDate() && mesCorrente === new Date().getMonth()
        && anoCorrente === new Date().getFullYear() ? 'ativa' : '';
        liTag += `<li class="${hoje}">${i}</li>`
    }
    for (let i= ultimoDiadoMes; i < 6 ; i++){
        liTag += `<li class="inativa">${ i - ultimoDiadoMes+ 1 }`
    }
    
    dataCorrente.innerText = `${meses[mesCorrente]} ${anoCorrente} `
    diaMarcado.innerHTML = ` ${liTag} `

}
rederizaCalendario();
anteriorDia.addEventListener('click',()=>{
    if(mesCorrente<= 11 && mesCorrente > 0){ 
    mesCorrente = mesCorrente -1;
}
else{
    date = new Date();
}
    rederizaCalendario();
})
proximoDia.addEventListener('click',()=>{
    if(mesCorrente< 11 && mesCorrente >= 0){
    mesCorrente = mesCorrente + 1;
    }
    else{
        date = new Date();
    }
    rederizaCalendario();
})