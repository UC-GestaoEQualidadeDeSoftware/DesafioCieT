# DesafioCI&T

Projeto criado para execução de teste de automação de acordo com instruções passadas através de um desafio.

## Setup

Para executar esse projeto em sua maquina devemos clonar o repositorio [DesafioCieT](https://github.com/UC-GestaoEQualidadeDeSoftware/DesafioCieT).
```shell
$ git clone https://github.com/UC-GestaoEQualidadeDeSoftware/DesafioCieT.git 
```
### Descrição
 <ul>
  <li> Utilizamos o Selenium WebDriver para executar os testes automatizados (O Selenium é uma ferramenta para escrever testes de aceitação e tem suporte a várias linguagens, como Python, Ruby, PHP e o próprio Java). </li>
  <li> Utilizamos o navegador web Google Chrome, porém o Selenium tem suporte a varios navegadores web diferentes, precisando apenas baixar o WebDriver correto destinado ao navegador escolhido. </li>
</ul>

## NetBeans 
Toda essa documentação levará em consideração que você está usando a IDE NetBeans, caso estiver utilizando alguma IDE diferente podem existir outros metodo de executar as mesmas ações.

### Passo a Passo
<ul>
  <li> No NetBeans abrir o projeto DesafioCieT da pasta onde fez o clone. </li>
  <li> Instalar todas os pacotes e bibliotecas do projeto (Ação feita a partir do arquivo pom.xml). </li>
  <li> Após abri o projeto em sua IDE precisamos fazer pequenas configurações de variáveis para que o projeto rode em sua maquina sem nenhum problema. </li>
  <li> 1° troque o import para o seu navegador escolhido import org.openqa.selenium.navegadorEscolhido.NavegadorEscolhidoDriver;</li>
  <li> 2° troque a variavel WEBDRIVER_PATH: "SeuDiscoDeArmazenamento:\\caminho\\driverDoNavegadorEscolhido.exe";</li>
  <li> 3° na função Setup() troque a propriedade para o webDriver do seu navegador escolhido System.setProperty("webdriver.navegadorEscolhido.driver", file.getAbsolutePath());</li>
  <li> 4° em todas as funções de teste troque a instância pelo seu navegador escolhido WebDriver driver = new NavegadorEscolhido();</li>
  <li> Executar os testes. </li>
</ul>

### Imagem para ilustrar as configurações descritas acima.

<img src="https://i.imgur.com/EUseGtx.png" >

## Gherkin 
Arquivos com o codigo Gherkin se encontram no repositorio com os seguintes nomes 
 <ul>
  <li> primeiraParte.feature </li>
  <img src="https://i.imgur.com/3DokUTM.png" >
  <li> segundaParte.feature </li>
  <img src="https://i.imgur.com/Q5Fv0aw.png" >
  <li> terceiraParte.feature </li>
  <img src="https://i.imgur.com/ZUBhn57.png" >
</ul>

## Desafio extra : Teste de Desenvolvimento - Frontend
Repositorio esta na branch master, para visualizar o mesmo devemos clonar o repositorio e trocar para a branch master

## Desenvolvedores 
| <img src="https://avatars.githubusercontent.com/u/89614560?v=4" width=115 > | <img src="https://avatars.githubusercontent.com/u/89555322?v=4" width=115 >
|---|---|
| [Jéssica Amaral](https://github.com/JessicaKAmaral) | [Aline Ferlini](https://github.com/alineferlini) 

| <img src="https://avatars.githubusercontent.com/u/324262?v=4" width=115 > | <img src="https://avatars.githubusercontent.com/u/62044186?v=4" width=115 > | 
|---|---| 
| [Rodrigo Reis](https://github.com/rodrigoreis) | [Lucas Valadares](https://github.com/ldevLucasl)

| <img src="https://avatars.githubusercontent.com/u/74051662?v=4" width=115 > |  |
|---|---| 
| [Nathan_GP](https://github.com/Nathan-GHub) |  |
