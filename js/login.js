const $ = document.querySelector.bind(document);

const entrarBtn = $('#entrar-btn')
const cadBtn =  $('#cad-btn');
const sair = $('#sair');

const logado = $('#logado');
const naoLogado = $('#nao-logado');
const evolucao = $('#evolucao');

function entrar() {

    let labelEmail = document.querySelector('#label-email');
    let email = document.querySelector('#email');
    let senha = document.querySelector('#senha');
    let labelSenha = document.querySelector('#label-senha');
    let msgError = document.querySelector('#msgError');

    let listaUser = [];

    let userValid = {
        nome: '',
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    if(listaUser == null) {
        labelEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        labelSenha.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Usuário não cadastrado</strong>'
        
        setTimeout(() => {
            window.location.href = 'cadastro.html'
        }, 1500)
    }
    
    listaUser.forEach((item) => {
        if(email.value == item.emailCad && senha.value == item.senhaCad) {

            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }

    });

   if((email.value == userValid.email && senha.value == userValid.senha) && (email.value != '' || senha.value != '')) {
    
        window.location.href='index.html';

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

        localStorage.setItem('token', token);

   } else {

        labelEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        labelSenha.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');
        msgError.setAttribute('style', 'display: block');
        email.focus();
   }

}

if(localStorage.getItem('token') != null) {
    logado.setAttribute('style', 'display: block');
    naoLogado.setAttribute('style', 'display: none');
} else {
    logado.setAttribute('style', 'display: none');
    naoLogado.setAttribute('style', 'display: block');
}

entrarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    entrar();
});

cadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'cadastro.html';
});

evolucao.addEventListener('click', (e) => {
    e.preventDefault();
    if(localStorage.getItem('token') != null) {
        window.location.href = 'evolucao.html';
    } else {
        Swal.fire({
            title: 'Você não está logado!',
            text: 'Necessário realizar o login ou se cadastrar',
            icon: 'info',
            confirmButtonText: 'OK'
          });
    }
});

sair.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href = 'login.html';
});
