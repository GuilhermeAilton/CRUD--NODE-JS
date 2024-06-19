
![220px-Node js_logo svg](https://github.com/GuilhermeAilton/CRUD--NODE-JS/assets/145512980/9774931e-b476-417f-b590-6fd147a96e14)
Projeto CRUD em Node.js


Descrição
Este é um projeto de exemplo que demonstra como implementar operações CRUD (Create, Read, Update, Delete) utilizando Node.js e MongoDB. O projeto inclui uma API simples que permite realizar as operações básicas em um banco de dados MongoDB.

Funcionalidades
Create: Adiciona novos itens ao banco de dados.
Read: Retorna todos os itens existentes no banco de dados.
Update: Atualiza informações de itens existentes no banco de dados.
Delete: Remove itens do banco de dados.
Pré-requisitos
Antes de começar, certifique-se de ter instalado o seguinte:

Node.js (versão 12 ou superior)
MongoDB
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências do projeto:

bash
Copiar código
cd seu-repositorio
npm install
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto.
Adicione as variáveis de ambiente necessárias, como PORT e MONGODB_URI.
Inicie o servidor:

bash
Copiar código
npm start
Acesse a API em http://localhost:8080 (ou outra porta configurada).

Uso
Criar um novo item: Envie uma requisição POST para /api/items com os dados do item.
Listar todos os itens: Envie uma requisição GET para /api/items.
Atualizar um item: Envie uma requisição PUT para /api/items/:id com os dados atualizados.
Remover um item: Envie uma requisição DELETE para /api/items/:id.
