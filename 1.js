var usuarios = []
var contador = 0

function adicionarUsuario(nome, idade, email) {
   let usuarioNovo = {
    nome: nome,
   idade: idade,
   email: email,
    }
    {
    
        if  (idade < 18) {
            console.log("A idade inserida por ", nome, " é invalida. Tente novamento com uma idade valida!")
        } else if ((nome == undefined)&&(email == undefined)) {
            console.log("Os dados de determinado usuario nao foram inseridos de forma correta. Tente novamente")
        } else {
            usuarios.push(usuarioNovo);
            
        }
    }
}

function listarUsuarios() {
    usuarios.forEach((element, index) => console.log("USUARIO", index + 1, element))
}


let gabriel = new adicionarUsuario("Gabriel de Espindola", 18, "gabrieldeespindola@gmail.")
let bignott = new adicionarUsuario("Gabriel Bignott", 16, "gabrielbigoDao316@gmail.com")
let mcqueen = new adicionarUsuario("Relampago Mcqueen", 95, "kathcau_vrumm@gmail.com")
let larissa = new adicionarUsuario()
let marcio = new adicionarUsuario("Marcio de Oliveira", 42, "Marcio@gmail.com")

listarUsuarios(usuarios)


