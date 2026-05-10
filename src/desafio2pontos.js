/* 
    Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: 
    id, nome, email, senha e expirado (boleano, pode ser true ou false). 
    Adicione ao menos um dos usuarios como expirado sendo true.
*/
const usuarios = [
    {
        id: 1, 
        nome: 'Amora Alves',
        email: 'amora@gmail.com', 
        senha: 'amora123',
        expirado: true
    },
    {
        id: 2, 
        nome: 'Luna Alves',
        email: 'Luna@gmail.com', 
        senha: 'Luna123',
        expirado: true
    },
    {
        id: 3, 
        nome: 'Perola Alves',
        email: 'perola@gmail.com', 
        senha: 'perola123',
        expirado: false
    },
    {
        id: 4, 
        nome: 'Dalila Alves',
        email: 'dalila@gmail.com', 
        senha: 'dalila123',
        expirado: false
    },
    {
        id: 5, 
        nome: 'Dominique Alves',
        email: 'dominique@gmail.com', 
        senha: 'Dominique123',
        expirado: false
    }
];

/*
    Construa uma função de para realizar login. 
    Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. 
    A função deve dizer que as credenciais expiraram caso expirado for true.
    A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.
*/
export function fazerLogin(email, senha) {

    // faz a busca dentro da lista de usuarios
    var usuarioLogado = usuarios.find(user => user.email == email);

    // Se o usuario informado existir na lista retorna sucesso, se não fracasso.
    if(usuarioLogado != null && usuarioLogado != undefined){

        if(usuarioLogado.expirado === true){
            return 'Credenciais expiradas. Renove suas credenciais.';
        } else {
            if(usuarioLogado.senha === senha){
                return 'Login realizado com sucesso.';
            } else {
                return 'Senha incorreta para o usuário encontrado.';
            }
        }

    } else {
        return 'e-mail incorreto, usuário não encontrado.';
    }
}