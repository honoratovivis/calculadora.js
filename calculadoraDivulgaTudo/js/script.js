const dataInicio = document.querySelector('#start'),
    dataTermino = document.querySelector('#end'),
    button = document.querySelector('button'),
    span = document.querySelector('h5 > span')

function calcularDiferencaData() {
    let inicio = dataInicio.value
    let termino = dataTermino.value

    inicio = new Date(inicio)
    termino = new Date(termino)

    let diferencaTempo = Math.abs(termino - inicio)
    let tempoDiario = 1000 * 60 * 60 * 24
    let diferencaDias = diferencaTempo / tempoDiario

    return diferencaDias
}

button.addEventListener('click', (e) => {
    let nomeAnuncio = document.getElementById('nomeAnuncio').value,
        nomeCliente = document.getElementById('nome').value,
        investimentoDiario = document.getElementById('investimentoDiario').value

    const diferencaDias = calcularDiferencaData()
    span.innerHTML = diferencaDias
    let dias = diferencaDias,
        porcentagem = 12 / 100,
        valorTotalInvestido = dias * investimentoDiario,
        maxVisualizacoes = 30 * valorTotalInvestido,
        maxCliques = maxVisualizacoes * porcentagem,
        maxCompartilhamentos = (maxCliques / 20) * 3


    document.getElementById('projecaoAproximada').innerHTML = ("<br><br>"
        + "Essa é a projeção aproximada para o Anúncio " + nomeAnuncio + "  da empresa " + nomeCliente + ", dos seguintes itens com o investimento de R$ " + valorTotalInvestido.toFixed(2) + " durante " + dias + " dia(s):" + "<br><br>" +
        "○ Máximo de Visualizações do Anúncio: " + maxVisualizacoes.toFixed(0) + "<br><br>"
        + "○ Máximo de Cliques no Anúncio: " + maxCliques.toFixed(0) + "<br><br>"
        + "○ Máximo de Compartilhamentos do Anúncio: " + maxCompartilhamentos.toFixed(0)
    )

    e.preventDefault()
})