function calcular() {
    var valor1 = parseFloat(document.getElementById('in1').value);
    var valor2 = parseFloat(document.getElementById('in2').value);
    var valor3 = parseFloat(document.getElementById('in3').value);
    var valor4 = parseFloat(document.getElementById('in4').value);

    var resultado1 = valor2 - valor1;
    var resultado2 = (valor3 / valor4) * resultado1;
    const numero = resultado2.toFixed(2);

    if (isNaN(numero)) {
        alert("Alguns dos valores que você inseriu são inválidos. Por favor, tente novamente!");
    } else {
        document.getElementById('resultado').innerText = "R$ " + numero;
    }
}

function salvar() {
    var valor1 = parseFloat(document.getElementById('in1').value);
    var valor2 = parseFloat(document.getElementById('in2').value);
    var valor3 = parseFloat(document.getElementById('in3').value);
    var valor4 = parseFloat(document.getElementById('in4').value);

    var resultado1 = valor2 - valor1;
    var resultado2 = (valor3 / valor4) * resultado1;
    const numero = resultado2.toFixed(2);

    if (isNaN(numero)) {
        
    } else {
        var valor1 = parseFloat(document.getElementById('in1').value);
        var valor2 = parseFloat(document.getElementById('in2').value);
        var valor3 = parseFloat(document.getElementById('in3').value);
        var valor4 = parseFloat(document.getElementById('in4').value);

        calcular();
        var resultado = parseFloat(document.getElementById('resultado').innerText.split('R$ ')[1]);

        var dataAtual = new Date();
        var dataFormatada = dataAtual.toLocaleString();

        var historicoItem = {
            valor1: valor1,
            valor2: valor2,
            valor3: valor3,
            valor4: valor4,
            resultado: resultado,
            data: dataFormatada
        };

        var historico = JSON.parse(localStorage.getItem('historico')) || [];
        historico.push(historicoItem);
        localStorage.setItem('historico', JSON.stringify(historico));
    }

}

function exibirHistorico() {
    const his = document.getElementById('historico').style.display = 'flex';
    const back = document.getElementById('back').style.display = 'flex';
    const tela = document.getElementById('telinha').style.display = 'none';
    var historico = JSON.parse(localStorage.getItem('historico')) || [];
    var historicoContainer = document.getElementById('historico');
    historicoContainer.innerHTML = '';

    historico.forEach(function (item, index) {
        var exampleCard = document.createElement('div');
        exampleCard.className = 'exampleCard';

        var dataElement = document.createElement('div');
        dataElement.className = 'data';
        dataElement.innerHTML = '<p>' + item.data + '</p>';
        exampleCard.appendChild(dataElement);

        var inputNames = ['mês atual', 'valor da conta', 'kWh', 'resultado']; // Nomes personalizados para cada input
        var inputKeys = ['valor2', 'valor3', 'valor4', 'resultado'];
        var inputClasses = ['inputCard', 'inputCard', 'inputCard', 'inputCardResu']; // Classes correspondentes aos inputs

        for (var i = 0; i < inputNames.length; i++) {
            var inputCard = document.createElement('div');
            inputCard.className = inputClasses[i]; // Define a classe correspondente ao input
            var inputKey = inputKeys[i];
            var inputValue = i === 3 ? 'R$ ' + item[inputKey] : item[inputKey];
            inputCard.innerHTML = '<p>' + inputNames[i] + ': ' + inputValue + '</p>';
            exampleCard.appendChild(inputCard);
        }

        var deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.innerText = 'Excluir';
        deleteButton.addEventListener('click', function () {
            removerDoHistorico(index);
        });
        exampleCard.appendChild(deleteButton);

        historicoContainer.appendChild(exampleCard);
    });
}

function removerDoHistorico(index) {
    var historico = JSON.parse(localStorage.getItem('historico')) || [];
    historico.splice(index, 1);
    localStorage.setItem('historico', JSON.stringify(historico));
    exibirHistorico();
}

function voltar() {
    const tela = document.getElementById('telinha').style.display = 'flex';
    const his = document.getElementById('historico').style.display = 'none';
    const back = document.getElementById('back').style.display = 'none';

}