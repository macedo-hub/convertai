const seletorOrigem = document.getElementById('escala-origem');
const seletorDestino = document.getElementById('escala-destino');
const inputValor = document.getElementById('valor-origem');
const outputResultado = document.getElementById('valor-destino');

function converterTemperatura(valor, origem, destino) {
    if (origem === destino) return valor;

    let celsius;

    switch (origem) {
        case 'celsius': celsius = valor; break;
        case 'fahrenheit': celsius = (valor - 32) * 5/9; break;
        case 'kelvin': celsius = valor - 273.15; break;
    }

    switch (destino) {
        case 'celsius': return celsius;
        case 'fahrenheit': return (celsius * 9/5) + 32;
        case 'kelvin': return celsius + 273.15;
    }
}

function atualizarResultado() {
    const valor = parseFloat(inputValor.value);
    const origem = seletorOrigem.value;
    const destino = seletorDestino.value;

    if (isNaN(valor)) {
        outputResultado.textContent = 'Digite um número válido';
        outputResultado.className = 'campo-texto campo-resultado';
        return;
    }

    // Verificar se a temperatura é menor que o zero absoluto
    const limitesMinimos = {
        celsius: -273.15,
        fahrenheit: -459.67,
        kelvin: 0
    };

    if (valor < limitesMinimos[origem]) {
        outputResultado.textContent = 'Erro: menor que o zero absoluto!';
        outputResultado.className = 'campo-texto campo-resultado';
        return;
    }

    const resultado = converterTemperatura(valor, origem, destino);
    outputResultado.textContent = `${resultado.toFixed(2)}° ${destino.charAt(0).toUpperCase() + destino.slice(1)}`;

    outputResultado.className = 'campo-texto campo-resultado';
    outputResultado.classList.add(destino);
}



inputValor.addEventListener('input', atualizarResultado);
seletorOrigem.addEventListener('change', atualizarResultado);
seletorDestino.addEventListener('change', atualizarResultado);
