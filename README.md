# Como compilar e executar o programa.

**1ª Parte: calculadora.js**
	Abrir o arquivo no https://replit.com/ ou em algum editor de código-fonte;
	Apertar no botão Run;
	Digitar o valor que deverá ser investido;
	Receber as informações através do console.

**2ª Parte: cadastrarAnuncios.html**
	Primeiramente baixar todas as pastas existentes nesse projeto, incluindo o arquivo cadastrarAnuncios.html;
	Após a verificação se todas as pastas e arquivos foram baixados, abrir o arquivo cadastrarAnuncios.html;
	Com isso, a página web irá abrir através do seu navegador sendo necessário preencher o formulário com: nome do anúncio, nome do cliente, investimento diário em R$, data do anúncio (inicial e final), clicar no botão cadastrar e observar as resolução da projeção aproximada.
___________________________________________________________________________________
**Documentação - cadastrarAnuncios.html**

## Sistema de Anúncios Online - Agência Divulga Tudo

Responsáveis 
Esta seção do documento apresenta informações sobre o prestador de serviços Cap. Brasil e o cliente solicitante do projeto, Agência Divulga Tudo. 
 
1. Prestador do Serviço: Cap. Brasil

Projeto e Codificação 
Cap. Brasil 
E-mail: brasil@cap.com
 
2. Cliente: Agência Divulga Tudo 
Sistema de Anúncios Online 
Agência Divulga Tudo
E-mail: divulgatudo@agencia.com

Documento de Visão do Sistema

1. Objetivo
O propósito deste documento é coletar, analisar e definir as necessidades e 
características do Sistema de Anúncios Online, focando nas 
potencialidades requeridas pelos desenvolvedores e usuários-alvo e como estes 
requisitos foram abordados no sistema. 
A visão do sistema documenta o ambiente geral de processos desenvolvidos para o 
sistema, fornecendo a todos os envolvidos uma descrição compreensível deste e suas 
macro-funcionalidades.

2. Descrição do Produto
O Sistema de Anúncios Online é um projeto direcionado para área de cadastro de anúncios, que além de organiza-los também irá conceder ao cliente projeções aproximadas através de parâmetros como os dias investidos e investimento por dia.
Oferece campos de formulário para adicionar informações como o nome que o anúncio irá receber, o nome do cliente que está cadastrando o anúncio, a data de início, a data de término e o investimento por dia. Além disso, após o depósito dessas informações nos campos requeridos e o clique no botão cadastrar da tela, o que será exibido ao usuário será exatamente a projeção aproximada que conta com os seguintes itens: valor total investido, quantidade máxima de visualizações, quantidade máxima de cliques, quantidade máxima de compartilhamentos.
Os parametros citados acima são calculados através de dados analisados em anúncios anteriores, sendo eles:
	1) A cada 30 pessoas que visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
	2) A cada 100 pessoas que visualizam o anúncio 12 clicam nele.
	3) A cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
Onde o valor total investido é a quantidade de dias a ser investido (sendo essa a difereça entre a data término e a data inicial) multiplicado pelo investimento diário que o cliente informou, o máximo visualizações é o valor total investido multiplicado por 30 (sendo o 30 o primero dado informado acima), o máximo de cliques é o resultado do máximo de visualizações multiplicado pela porcentagem de 12% (sendo 12% o segundo dado informado acima) e o máximo de compartilhamentos que é o resultado do máximo de cliques dividido por 20 e multiplicado por 3 (sendo essa divisão por 20 e multiplicação por 3 o terceiro dado informado acima).

3. Requisitos de Negócio 
3.1. Abrangência Complementar a Descrição
O Sistema de Anúncios Online foi concebido para o uso da Agência Divulga Tudo da forma que melhor lhe servir, tendo em vista que será utilizado com os clientes que usufruirem desse serviço da empresa. Para o total funcionamento do sistema perante ao cliente, é necessário que ele disponha de internet para utilizar o serviço de forma satisfatória através de navegadores web.
3.2 Valor Provido ao Cliente 
Além de realizar o cadastro do anúncio, esse sistema tem o objetivo de facilitar a visão que o cliente terá ao contratar o serviço por determinado tempo e com determinado investimento. Trazendo consequentemente, mais segurança e satisfação ao cliente no quesito informações sobre parâmetros que agragam ao seu conhecimento, podendo até ser o fator determinante para o fechamento do contrato.

4. Escopo e Limitações 
4.1 Escopo do Release
O objetivo inicial é a simplicidade que trará ações intuitivas do cliente perante ao cenário e também a boa funcionalidade do sistema para facilitar a conclusão do cadastro.
Na tela principal deverá existir a sequência de parâmetros e seus respectivos campos: 
	Nome do Anúncio;
	Nome do Cliente;
	Investimento Diário em R$;
	Data do Anúncio (de Data Inicial até Data Término);
	Botão cadastrar, onde após sua solicitação deverá cadastrar o anúncio e transmitir as informações necessárias.

4.2 Limitações e Exclusões
Não poderá existir no sistema botões que não funcionam.

5. Contexto do Negócio 
5.1 Prioridades de Projeto
A maior prioridade do projeto é levar satisfação e ótima funcionalidade ao sistema que o cliente pediu. Atendendo suas expectativas e sempre mantendo contato para pedir o 
seu feedback, encaixando o produto nas especificações necessárias. 
Sua maior restrição é não fazer algo que o cliente não tenha pedido, mudar o sentido 
do projeto/sistema sem a autorização do cliente é a maior restrição pré-determinada 
nesse documento.

6. Fatores de Sucesso do Produto 
O sucesso do sistema será determinado através do funcionamento do Sistema de Anúncios Online correspondente aos seus requisitos solicitados. Entre eles o procedimento esperado da tela de cadastro, como também a funcionalidade correta do botão "Cadastrar". Sendo observada a impressão dos parâmetros da projeção aproximada de acordo com as informações transmitidas pelo cliente.
____________________________________________________________________________________________

**Documentação - Calculadora.js**

## Calculadora de Anúncios - Agência Divulga Tudo

Responsáveis 
Esta seção do documento apresenta informações sobre o prestador de serviços Cap. Brasil e o cliente solicitante do projeto, Agência Divulga Tudo. 
 
1. Prestador do Serviço: Cap. Brasil

Projeto e Codificação 
Cap. Brasil 
E-mail: brasil@cap.com
 
2. Cliente: Agência Divulga Tudo 
Calculadora de Anúncios
Agência Divulga Tudo
E-mail: divulgatudo@agencia.com

Documento de Visão do Sistema

1. Objetivo
O propósito deste documento é coletar, analisar e definir as necessidades e 
características da Calculadora.js, focando nas 
potencialidades requeridas pelos desenvolvedores e usuários-alvo e como estes 
requisitos foram abordados no sistema. 
A visão do sistema documenta o ambiente geral de processos desenvolvidos para o 
sistema, fornecendo a todos os envolvidos uma descrição compreensível deste e suas 
macro-funcionalidades.

2. Descrição do Produto
A Calculadora.js é um projeto direcionado para área de cálculo com projeções calculadas através dos valores investidos pelo cliente. Oferecendo ao cliente o campo para digitar o valor que deseja investir, onde essas projeções aproximadas oferecem: quantidade de visualizações do anúncio, quantidade de cliques no anúncio, quantidade de compartilhamentos de anúncio, quantidade de novas visualizações através de compartilhamentos, quantidade máxima de compartilhamento.
Os parametros citados acima são calculados através de dados analisados em anúncios anteriores, sendo eles:
	1) 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
	2) a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
	3) a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
	4) cada compartilhamento nas redes sociais gera 40 novas visualizações.
	5) o mesmo anúncio é compartilhado no máximo 4 vezes em sequência.
	Onde o valor investido é correspondente ao que o cliente digitou, a visualização do anúncio é o valor investido multiplicado por 30 (sendo o 30 o primero dado informado acima), os cliques de anúncios é a visualização do anúncio multiplicada pela porcentagem (sendo 12% o segundo dado informado acima), os compartilhamentos do anuncio é o clique do anuncio dividido por 20 e multiplicado por 3 (sendo essa divisão por 20 e multiplicação por 3 o terceiro dado informado acima), as novas visualizações é o compartilhamento do anuncio multiplicado por 40 (sendo essa multiplicação por 40 o quarto dado informado acima) e o compartilhamento máximo é o compartilhamentos do anúncio multiplicado por 4 (sendo essa multiplicação por 4 o quinto dado informado acima).
	
3. Requisitos de Negócio 
3.1. Abrangência Complementar a Descrição
A Calculadora.js foi concebido para o uso da Agência Divulga Tudo da forma que melhor lhe servir, tendo em vista que será utilizado com os clientes que usufruirem desse serviço da empresa.
3.2 Valor Provido ao Cliente 
Além de realizar o cálculo e as projeções aproximadas, esse sistema tem o objetivo de facilitar a visão que o cliente terá ao investir "x" valor. Trazendo consequentemente, mais segurança e satisfação ao cliente no quesito informações sobre parâmetros que agragam ao seu conhecimento, podendo até ser o fator determinante para a decisão de um possível contrato de serviço.

4. Escopo e Limitações 
4.1 Escopo do Release
O objetivo inicial é a simplicidade que trará ações intuitivas do cliente perante ao cenário e também a boa funcionalidade do sistema para facilitar o cálculo.
No cenário principal deverá existir a requisição do valor investido, o cliente deverá digitar esse valor e a sequência de parâmetros como resposta deverá ser: 
	Visualizações;
	Cliques no Anúncio;
	Novas Visualizações através de Compartilhamentos;
	Compartilhamento Máximo.
4.2 Limitações e Exclusões
Não poderá existir no sistema resultados de parâmetros não correspondentes ao cálculo correto.

5. Contexto do Negócio 
5.1 Prioridades de Projeto
A maior prioridade do projeto é levar satisfação e ótima funcionalidade ao sistema que o cliente pediu. Atendendo suas expectativas e sempre mantendo contato para pedir o 
seu feedback, encaixando o produto nas especificações necessárias. 
Sua maior restrição é não fazer algo que o cliente não tenha pedido, mudar o sentido 
do projeto/sistema sem a autorização do cliente é a maior restrição pré-determinada 
nesse documento.

6. Fatores de Sucesso do Produto 
O sucesso do sistema será determinado através do funcionamento da Calculadora.js correspondente aos seus requisitos solicitados. Entre eles o procedimento esperado do cálculo através do valor investidoSendo observada a impressão dos parâmetros da projeção aproximada de acordo com a informação transmitida pelo cliente.
