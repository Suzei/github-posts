# Github Posts

Github Posts segue a linha dos desafios propostos na plataforma da Rocketseat, especificamente do #3 da trilha Ignite

## Como rodar o projeto

1 - Clone este repositório com `git clone https://github.com/Suzei/github-posts.git`

2 - Em seguida, entre no repositório com `cd github-posts`

3 - Dentro da pasta local, execute o comando `npm install`

4 - Após ter feito a instalação dos pacotes, finalmente rode o projeto com um
`npm run dev`

5 - Após executar o comando, verifique a rota que o aplicativo está rodando. A padrão é no seu localhost:5173.

## Bibliotecas usadas

Para formatação de datas, nas diferenças entre um post e outro, foi usado o date-fns, especificamente a função <b>formatDistance</b>.

Na formatação do body da issue em si, utilizei o react-markdown para ler todo o conteúdo, assim como utilizei o plugin react-syntax-highligther para destacar qualquer linha de código presente no body em questão.
