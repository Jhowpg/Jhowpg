function logar(){
    var login = document.getElementsByName('usuario')[0].value
    var senha = document.getElementsByName('senha')[0].value
    console.log(login)

    if(login == "professor" && senha == 123){
        alert('Bem vindo a sua area de trabalho, professor!')
        location.href = "index-professor.html"
    }else if(login == "aluno" && senha == 456){
        alert('Bem vindo a sua area de estudo, aluno!')
        location.href = "index-aluno.html"
    }else{
        alert('Usuario ou senha incorreto')
    }

}