# Desafio programação - para vaga desenvolvedor Mobile
Por favor leiam este documento do começo ao fim, com muita atenção.
O intuito deste teste é avaliar seus conhecimentos técnicos em desenvolvimento mobile.
Este desafio deve ser feito por você em sua casa. Gaste o tempo que você quiser, porém normalmente você não deve precisar de mais do que algumas horas para finalizar.

# Instruções de entrega do desafio

1. Primeiro, faça um fork deste projeto para sua conta no Github (crie uma se você não possuir).
2. Em seguida, implemente o projeto,tal qual descrito abaixo, utilizando sua linguagem de programação mobile preferida em seu clone local.
3. Por fim, envie via email o projeto ou o fork/link do projeto para seu contato bycoders_.

# Descrição do projeto

1. Tela de login usando (email e senha);
2. Tela home com mapa renderizando um ponto na localização atual do device;
3. Realizar o login utilizando Firebase Auth;
4. Armazenar os dados do usuário na store global;
5. Rastrear login com sucesso e renderização com sucesso com Analytics (enviar um evento com dados considerados primordiais nesses dois casos);
6. Rastrear os erros e envia-los ao Crashlytics;
7. Armazenar na base de dados local (preferência por WatermelonDB, mas pode usar outro banco de dados) o usuário logado e sua última posição no mapa;
8. Testar fluxo de login (unit e e2e);
9. Testar fluxo da home (unit e e2e).

# Avaliação

Seu projeto será avaliado de acordo com os seguintes critérios.

1. Sua aplicação preenche os requerimentos básicos?
2. Você documentou a maneira de configurar o ambiente e rodar sua aplicação?
3. Você seguiu as instruções de envio do desafio?
4. Qualidade e cobertura dos testes unitários.

Adicionalmente, tentaremos verificar a sua familiarização com as bibliotecas padrões (standard libs), bem como sua experiência com programação orientada a objetos a partir da estrutura de seu projeto.


# Como iniciar

1. Clone o repositório.
2. Execute "expo install"
3. Execute "expo build:android" para realizar as primeiras configurações para obter as credenciais.
4. Execute "expo fetch:android:hashes"

# Firebase
-Acessar https://console.firebase.google.com 
-Adicionar novo projeto

-Dentro do console acessar menu lateral 
    -Authentication > Primeiros passos
    -Em Sign-in Method selecionar as opções Email/senha > Editar > Ativar

    -Visão geral do projeto > Configuração do projeto
    -Geral
    -Seus aplicativos
    -Adicione WEB
        -Selecionando WEB:
        -Registre seu app, isso vai gerar as configurações do firebase para seu app.
        -Copie as informações "firebaseConfig" e substitua em "/utils/config.js":
            ex: 
            var firebaseConfig = {
                apiKey: "AIzaSyA2xxxxxxxxxxxx",
                authDomain: "desafio-mobile-xxxxxx.firebaseapp.com",
                projectId: "desafio-mobile-xxxxxx",
                storageBucket: "desafio-mobile-xxxxxx.appspot.com",
                messagingSenderId: "13120000000",
                appId: "1:13120000000:web:d1edaxxxxxxxxxxx",
                measurementId: "G-WXxxxxxxxxx"
            };
    -Adicione IOS
        -registre seu ID do Pacote, "app.json>ios.bundleIdentifier"
        -download do GoogleService-Info.plist na raiz do projeto
        -adicione no app.json "ios.googleServicesFile" apontando para o caminho do arquivo GoogleService-Info.plist
    -Adicione Android
        -registre seu ID do Pacote, "app.json>android.package"
        -download do google-services.json na raiz do projeto
        -adicione no app.json "android.googleServicesFile" apontando para o caminho do arquivo google-services.json
    -App.json:
        -adicione: "android.config.googleMaps.apiKey" = mesma api_key.current_key do google-services.json

# Console Google
1. Em https://console.cloud.google.com/home/dashboard:
    1. Selecione seu projeto (gerado pelo firebase)
    2. Vá até APIs e serviços
    3. Ative Maps SDK for Android
    4. Ative Google Analytics API

# Expo app
1. Execute "expo start"
2. Rode no emulador ou dispositivo
3. Crie sua conta.

# Android app
1. Execute "expo build:android", isso vai gerar um link para download do apk quando terminar.
2. Instale e crie sua conta.
