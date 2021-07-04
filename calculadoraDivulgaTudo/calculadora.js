var valorInvestido = parseFloat(prompt("Digite o valor que você deseja investir:")),
    visualizacaoAnuncio = 30 * valorInvestido,
    porcentagem = 12 / 100,
    cliqueAnuncio = visualizacaoAnuncio * porcentagem,
    compartilhamentoAnuncio = (cliqueAnuncio / 20) * 3,
    novasVisualizacoes = compartilhamentoAnuncio * 40,
    compartilhamentoMaximo = compartilhamentoAnuncio * 4

console.log("\nEssa é a projeção aproximada dos seguintes itens com o investimento de R$ " + valorInvestido + ":\n\n"
    + "Visualização: " + visualizacaoAnuncio
    + "\nClicar no Anuncio: " + cliqueAnuncio
    + "\nCompartilhar o Anuncio: " + compartilhamentoAnuncio
    + "\nNovas Visualizações através de Compartilhamentos: " + novasVisualizacoes
    + "\nCompartilhamento Maximo (sequência de 4x através de cada anúncio): " + compartilhamentoMaximo)
    