const $ = document.querySelector.bind(document);

const adicionar = $('#adicionar');
const limpar = $('#limpar');

const sair = $('#sair');
const logado = $('#logado');
const naoLogado = $('#nao-logado');
const evolucao = $('#evolucao');

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

adicionar.addEventListener('click', (e) => {
    e.preventDefault();
    mostraResultados(); 
    caloriasPorObjetivo();
    salvarResultados();
    limpaFormulario();
});

limpar.addEventListener('click', (e) => {
    e.preventDefault();
    limparResultados();
})

function mostraResultados() {

    let msgError = document.querySelector('#msgError');
    let msgSuccess = document.querySelector('#msgSuccess');
    
    if(idade.value && altura.value && peso.value && consumoAgua.value) {
        tmb.value = `${mostraTMB()} Calorias`;
        tdee.value = `${mostraTdee()} Calorias`;
        imc.value = calculaImc();
        pesoIdeal.value = mostraPesoIdeal();
        proteina.value = calculaProteina();
        gordura.value = calculaGordura();
        carboidrato.value = calculaCarbo();
        quantidadeAgua.value = consumoDiarioDeAgua();
        msgSuccess.setAttribute('style', 'display: block')
    } else {
        msgError.setAttribute('style', 'display: block');
        msgSuccess.setAttribute('style', 'display: none');
    }

    if(sexo.value == 'Selecionar' || objetivo.value == 'Qual o seu objetivo?' || atividade.value == 'Qual seu nível de atividade?') {
        msgError.setAttribute('style', 'display: block');
        msgSuccess.setAttribute('style', 'display: none');
    } 
}

function limpaFormulario() {

    sexo.value = 'Selecionar';
    idade.value = '';
    altura.value = '';
    peso.value = '';
    consumoAgua.value = '';
    objetivo.value = 'Qual o seu objetivo?';
    atividade.value = 'Qual seu nível de atividade?';
}

function salvarResultados() {
    let resultados = JSON.parse(localStorage.getItem('resultados') || '[]');

    resultados.push({
        cadTmb: tmb.value,
        cadTdee: tdee.value,
        cadImc: imc.value,
        cadPesoIdeal: pesoIdeal.value,
        cadProteina: proteina.value,
        cadGordura: gordura.value,
        cadCarboidrato: carboidrato.value,
        cadQuantidadeAgua: quantidadeAgua.value
    });

    localStorage.setItem('resultados', JSON.stringify(resultados));
}

function limparResultados() {
    let msgSuccess = document.querySelector('#msgSuccess');
    msgSuccess.setAttribute('style', 'display: none');

    let msgResultado = document.querySelector('#msgResultado');
    msgResultado.setAttribute('style', 'display: none');
        
    tmb.value = '';
    tdee.value = '';
    imc.value = '';
    pesoIdeal.value = '';
    proteina.value = '';
    gordura.value = '';
    carboidrato.value = '';
    quantidadeAgua.value = '';
}

function mostraTMB() {
     switch(sexo.value) {
        case 'masculino': 
            return taxaMetabolicaBasalHomem();
        case 'feminino':
            return taxaMetabolicaBasalMulher();
        default:
            return '';
     }
}

function mostraTdee() {
    switch(sexo.value) {
        case 'masculino':
            switch(atividade.value) {
                case 'sedentario':
                    return tdeeHomenSedentario();
                case 'levemente-ativo':
                    return tdeeHomenLevementeAtivo();
                case 'moderadamente-ativo':
                    return tdeeHomenModeradamenteAtivo();
                case 'muito-ativo':
                    return tdeeHomenMuitoAtivo();
                default:
                    return '';
            }
        case 'feminino':
            switch(atividade.value) {
                case 'sedentario':
                    return tdeelMulherSedentario();
                case 'levemente-ativo':
                    return tdeeMulherLevementeAtivo();
                case 'moderadamente-ativo':
                    return tdeeMulherModeradamenteAtivo();
                case 'muito-ativo':
                    return tdeeMulherMuitoAtivo();
                default:
                    return '';
            }
        default:
            return '';
    }
}

function mostraPesoIdeal() {
    switch(sexo.value) {
        case 'masculino':
            return pesoIdealHomem();
        case 'feminino':
            return pesoIdealMulher();
        default:
            return '';
    }
}

function caloriasPorObjetivo() {
    switch (objetivo.value) {
        case 'emagrecer':
            return caloriasParaEmagrecer();
        case 'manter':
            return caloriasParaManter();
        case 'ganhar':
            return caloriasParaGanhar();
        default:
            return '';
    }
}
