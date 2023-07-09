const sexo = $('#sexo');
const idade = $('#idade');
const altura = $('#altura');
const peso = $('#peso');
const consumoAgua = $('#consumo-agua');
const objetivo = $('#objetivo');
const atividade = $('#atividade');

const tmb = $('#taxa-basal');
const tdee = $('#tdee');
const imc = $('#IMC');
const pesoIdeal = $('#peso-ideal');
const proteina = $('#proteina');
const gordura = $('#gordura');
const carboidrato = $('#carboidrato');
const quantidadeAgua = $('#quantidade-agua');

function taxaMetabolicaBasalHomem() {

    let tmb = (10 * peso.value) + (6.25 * altura.value) - (5 * idade.value) + 5;

    return tmb.toFixed(2);
}

function taxaMetabolicaBasalMulher() {

    let tmb = (10 * peso.value) + (6.25 * altura.value) - (5 * idade.value) - 161;

    return tmb.toFixed(2);
}

function tdeeHomenSedentario() {

    let tdee = taxaMetabolicaBasalHomem() * 1.2;

    return tdee.toFixed(2);
}

function tdeeHomenLevementeAtivo() {

    let tdee = taxaMetabolicaBasalHomem() * 1.375;

    return tdee.toFixed(2);
}

function tdeeHomenModeradamenteAtivo() {

    let tdee = taxaMetabolicaBasalHomem() * 1.55;

    return tdee.toFixed(2);
}

function tdeeHomenMuitoAtivo() {

    let tdee = taxaMetabolicaBasalHomem() * 1.725;

    return tdee.toFixed(2);
}

function tdeelMulherSedentario() {

    let tdee = taxaMetabolicaBasalMulher() * 1.2;

    return tdee.toFixed(2);
}

function tdeeMulherLevementeAtivo() {

    let tdee = taxaMetabolicaBasalMulher() * 1.375;

    return tdee.toFixed(2);
}

function tdeeMulherModeradamenteAtivo() {

    let tdee = taxaMetabolicaBasalMulher() * 1.55;

    return tdee.toFixed(2);
}

function tdeeMulherMuitoAtivo() {

    let tdee = taxaMetabolicaBasalMulher() * 1.725;

    return tdee.toFixed(2);
}

function calculaImc() {

    let IMC = (peso.value) / ((altura.value * altura.value) / 10000);
    let resultado = '';

    if (IMC < 18.5) {
        resultado = IMC.toFixed(2) + ' (Abaixo do peso)';
    } else if (IMC <= 24.9) {
        resultado = IMC.toFixed(2) + ' (Peso adequado)';
    } else if (IMC <= 29.9) {
        resultado = IMC.toFixed(2) + ' (Sobrepeso)';
    } else {
        resultado = IMC.toFixed(2) + ' (Obesidade)';
    }

    return resultado;
}

function pesoIdealHomem() {

    let pesoIdeal = 52 + (0.75 * (altura.value - 152.4));

    return pesoIdeal.toFixed(2) + 'kg';
}

function pesoIdealMulher() {

    let pesoIdeal = 52 + (0.67 * (altura.value - 152.4));

    return pesoIdeal.toFixed(2) + 'kg';
}

function calculaProteina() {
    
    let proteina = (0.3 * parseInt(tdee.value)) / 4;

    return proteina.toFixed(0) + 'g';
}

function calculaGordura() {

    let gordura = (0.35 * parseInt(tdee.value)) / 9;

    return gordura.toFixed(0) + 'g';
}

function calculaCarbo() {

    let carbo = (0.35 * parseInt(tdee.value)) / 4;

    return carbo.toFixed(0) + 'g';
}

function consumoDiarioDeAgua() {

    let consumo = 0.035 * peso.value;

    if(consumoAgua.value > 0) {
        return consumo.toFixed(2) + ' litro(s)';
    } else {
        return 'Informa seu consumo diário de água';
    } 
}

function caloriasParaEmagrecer() {

    let msgResultado = document.querySelector('#msgResultado'); 
    let objetivoEmagrecer = (0.85 * parseInt(tdee.value)).toFixed(0);
    msgResultado.setAttribute('style', 'display: block');
    msgResultado.innerHTML = `<h3 class="fw-bold">Você precisa de ${objetivoEmagrecer} para emagrecer</h3>`;
}

function caloriasParaManter() {

    let msgResultado = document.querySelector('#msgResultado'); 
    let objetivoEmagrecer = parseInt(tdee.value).toFixed(0);
    msgResultado.setAttribute('style', 'display: block');
    msgResultado.innerHTML = `<h3 class="fw-bold">Você precisa de ${objetivoEmagrecer} para manter</h3>`;
}

function caloriasParaGanhar() {

    let msgResultado = document.querySelector('#msgResultado'); 
    let objetivoEmagrecer = (1.2 * parseInt(tdee.value)).toFixed(0);
    msgResultado.setAttribute('style', 'display: block');
    msgResultado.innerHTML = `<h3 class="fw-bold">Você precisa de ${objetivoEmagrecer} para ganhar</h3>`
}
