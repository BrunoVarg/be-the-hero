# Projeto de criação de website + app mobile
- Neste projeto, auxiliado pela Rocketseat, foi criado um website focado em divulgar casos necessitados de ajuda financeira para Ongs. Em que a Ong posta qual o caso necessário, por exemplo: ajuda financeira para uma cachorrinha fazer uma cirurgia.


## Para rodar a aplicação
OBS: pode-se utilizar o gerenciador de pacotes npm ou o yarn para rodar os comandos abaixo

Execute $ npm install $ nas pastas backend, frontend e mobile, para instalar as dependências.

Rode $ npm start $ nas pastas backend e frontend para utilizar a versão web. Acesse via localhost:3000.

Rode $ npm start $ nas pastas backend e mobile, acesse localhost:19002, leia o QR Code no seu celular e utilize o aplicativo rocketseat Expo para rodar a versão mobile no seu smartphone. Ou com algum emulador Android/iOS para rodar no seu computador.

## Website

### Página do Login :
- Na qual usa-se uma ID para entrar de 8 dígitos que foram gerados aleatoriamente para cada ONG.
- O botão de **Não tenho cadastro** redireciona para a página de cadastro.

![Login](https://github.com/BrunoVarg/be-the-hero/blob/master/Login.png)

### Página de Cadastro:
- Ao ser cadastrado, o usuário é retornado com uma ID que é armazenada no Banco de Dados.

![Cadastro](https://github.com/BrunoVarg/be-the-hero/blob/master/Cadastro.png)

### Lista de casos:

- Nessa página é listado todos os casos registrados da ONG

![Lista](https://github.com/BrunoVarg/be-the-hero/blob/master/Lista.png)

### Cadastrar nova ONG
- Nessa página é possível cadastrar um novo caso para que apareça na lista princpial

![Cadastrar novo caso](https://github.com/BrunoVarg/be-the-hero/blob/master/Cadastrar%20novo%20caso.png)


## Mobile

### Splash

- Essa é a splash principal do app

![Splash](https://github.com/BrunoVarg/be-the-hero/blob/master/Splash.png)

### Lista
- A lista funciona parecido com a do Website, porém essa é mostrada apenas aos usuários.
- Com um roll infinito conforme o número de casos.

![Lista mobile](https://github.com/BrunoVarg/be-the-hero/blob/master/Lista%20(1).png)

### Detalhes
- Ao clicar pra ver detalhes de um caso, essa página mostra detalhadente o que está descrito, e também como contatar a ONG.
- Se clicar em Whatsapp, o sistema automaticamente abre o Whastapp em seu celular, e já deixa uma mensagem pré-estabelecida pronta para enviar à ONG.
- Serve para o E-mail também

![Detalhes](https://github.com/BrunoVarg/be-the-hero/blob/master/Detalhes.png)

# Utilizações

- Javascript
- HTML
- CSS
- React
- ReactNative
- Expo
- JSON
- Insomnia
