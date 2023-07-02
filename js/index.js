const $ = document.querySelector.bind(document);
const sair = $('#sair');
const logado = $('#logado');
const naoLogado = $('#nao-logado');

const evolucao = $('#evolucao');
const verMais = $('#ver-mais');

if(localStorage.getItem('token') != null) {
    logado.setAttribute('style', 'display: block');
    naoLogado.setAttribute('style', 'display: none');
} else {
    logado.setAttribute('style', 'display: none');
    naoLogado.setAttribute('style', 'display: block');
}

sair.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href = 'login.html';
})

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

verMais.addEventListener('click', (e) => {
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
