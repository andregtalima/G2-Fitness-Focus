const $ = document.querySelector.bind(document);

const cadBtn = $('#cad-btn');
const logBtn = $('#log-btn');

const nome = $('#nome');
const labelNome = $('#labelNome');
let valideNome = false;

const email = $('#email');
const labelEmail = $('#labelEmail');
let valideEmail = false;

const confEmail = $('#confirme-email');
const labelConfEmail = $('#labelConfEmail');
let valideConfEmail = false;


const senha = $('#senha');
const labelSenha = $('#labelSenha');
let valideSenha = false;

const confSenha = $('#confirme-senha');
const labelConfSenha = $('#labelConfSenha');
let valideConfSenha = false;

const msgError = $('#msgError');
const msgSuccess = $('#msgSuccess');
const sair = $('#sair');
const logado = $('#logado');
const naoLogado = $('#nao-logado');
const evolucao = $('#evolucao');

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 4) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Insira no mínino 5 caracteres'
        nome.setAttribute('style', 'border-color: red');
        valideNome = false;     
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome';
        nome.setAttribute('style', 'border-color: green');
        valideNome = true;       
    }
      
});

email.addEventListener('keyup', () => {
    if(email.value.length <= 6) {
        labelEmail.setAttribute('style', 'color: red');
        labelEmail.innerHTML = 'Email *Insira no mínino 7 caracteres'
        email.setAttribute('style', 'border-color: red');
        valideEmail = false;       
    } else {
        labelEmail.setAttribute('style', 'color: green');
        labelEmail.innerHTML = 'Email';
        email.setAttribute('style', 'border-color: green');
        valideEmail = true;       
    }
});

confEmail.addEventListener('keyup', () => {
    if(email.value != confEmail.value) {
        labelConfEmail.setAttribute('style', 'color: red');
        labelConfEmail.innerHTML = 'Confirme seu Email *Os emails não conferem'
        confEmail.setAttribute('style', 'border-color: red');
        valideConfEmail = false;        
    } else {
        labelConfEmail.setAttribute('style', 'color: green');
        labelConfEmail.innerHTML = 'Confirme seu Email';
        confEmail.setAttribute('style', 'border-color: green');
        valideConfEmail = true;
    }
});

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Insira no mínino 6 caracteres'
        senha.setAttribute('style', 'border-color: red');
        valideSenha = false;              
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: green');  
        valideSenha = true;              
    }
});

confSenha.addEventListener('keyup', () => {
    if(senha.value != confSenha.value) {
        labelConfSenha.setAttribute('style', 'color: red');
        labelConfSenha.innerHTML = 'Confirme sua Senha *As Senhas não conferem'
        confSenha.setAttribute('style', 'border-color: red');
        valideConfSenha = false;             
    } else {
        labelConfSenha.setAttribute('style', 'color: green');
        labelConfSenha.innerHTML = 'Confirme sua Senha';
        confSenha.setAttribute('style', 'border-color: green');
        valideConfSenha = true;        
    }
});

function cadastrar() {

    if(valideNome && valideEmail && valideConfEmail && valideSenha && valideConfSenha) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push({
            nomeCad: nome.value,
            emailCad: email.value,
            senhaCad: senha.value
        });

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);

    } else {
        msgError.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display:  none');
    }
}

if(localStorage.getItem('token') != null) {
    logado.setAttribute('style', 'display: block');
    naoLogado.setAttribute('style', 'display: none');
} else {
    logado.setAttribute('style', 'display: none');
    naoLogado.setAttribute('style', 'display: block');
}

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

cadBtn.addEventListener('click', () => {
    cadastrar();
});

logBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});
