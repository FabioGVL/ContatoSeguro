# Escopo do Projeto

O projeto consiste em um CRUD de usuários para um grupo que contém diversas empresas. Os testes abaixo visam garantir a funcionalidade correta da aplicação e a integridade dos dados fornecidos pela API. Todos os testes foram realizados na linguagem JavaScript, utilizando a ferramenta de automação Cypress. Os resultados dos testes serão documentados e utilizados para análise e melhoria contínua do sistema.

---

## Escopo do Teste

### 1. Mapeamento de Features:
- **Formulário de Cadastro de Usuários:** Verificar o correto funcionamento de todos os campos obrigatórios.
- **Listagem de Usuários:** Confirmar a exibição correta dos usuários cadastrados.
- **Edição e Exclusão de Usuário:** Testar as funcionalidades de edição e exclusão e verificar se as alterações são refletidas corretamente.

### 2. Features que serão testadas:
- **Criação de Usuário:** Verificar a capacidade de criar um novo usuário preenchendo todos os campos obrigatórios no formulário.
- **Leitura de Usuário:** Confirmar se os usuários cadastrados são exibidos corretamente na lista.
- **Atualização de Usuário:** Testar a funcionalidade de editar um usuário existente e verificar se as alterações são salvas corretamente.
- **Exclusão de Usuário:** Verificar se é possível excluir um usuário da lista.

### 3. Massa de Dados para Teste:
- Usuários fictícios com diferentes informações (nome, e-mail, telefone, empresa, etc.) para preencher o formulário e realizar os testes de CRUD.
- Cenários de teste variados para validar diferentes situações, como campos obrigatórios não preenchidos, dados inválidos, entre outros.

### 4. Tipos de Testes Utilizados:
- **Testes de Funcionalidade:** Verificar se todas as funcionalidades do formulário e da listagem de usuários estão operando conforme o esperado.
- **Testes de Usabilidade:** Avaliar a facilidade de uso do sistema, navegabilidade entre as páginas e clareza das instruções.
- **Testes de Integração:** Garantir que todas as partes do sistema se integrem corretamente, como o formulário, a listagem de usuários e as operações de CRUD.

---

## Passos para reproduzir o teste

### 5.1 Efetuando o download e descompactando o projeto
- No GitHub, clique em "code".
- Clique em "Download Zip" para fazer o download do arquivo deste teste.
- No seu computador, localize o download efetuado.
- Descompacte o arquivo.

### 5.2 Configurando o ambiente no Docker
- Efetue o download do Docker (Preferencialmente, utilize alguma distribuição Linux para a configuração do ambiente e realização dos testes).
- Dentro da pasta raiz do projeto (arquivo baixado no passo 5.1), clique com o botão direito no corpo da página e clique em abrir terminal.
- Execute o comando `docker-compose up --build -d`.
- Após o comando ser executado o ambiente estará online e será possível acessar o endpoint `localhost:5400` para efetuar os testes.
- Outros Endpoints como port 3400 (MYSQL/BD) e port 8400 (API) também estarão disponíveis.

### 5.3 Configurando o projeto no VSCode e executando o teste
- Abra o VSCode.
- Clique em `Arquivo/File`.
- Clique em `Abrir pasta/Open folder`.
- Escolha a pasta do arquivo descompactado (`Cypress Automation – Contato Seguro`).
- Após o projeto ser aberto no VSCode, navegue até `Cypress > E2E`.
- Os testes estarão dentro das pastas `UI` (FrontEnd) e `Services` (BackEnd).
- No terminal do Cypress digite `npx cypress open`. Caso necessário, instale o Cypress através do comando `npm install cypress`.
- Aguarde o Cypress abrir.
- Selecione a opção `E2E Testing`.
- Na próxima página selecione o navegador desejado.
- Na próxima página selecione o teste que deseja executar e a automação será executada.
- Também é possível executar o teste através do comando `npx cypress run`. O teste rodará dentro do próprio VSCode e serão gerados vídeos dos resultados dos testes. Os vídeos ficarão armazenados no destino `Cypress > Vídeos`.

### 5.4 Executando os testes de API através do POSTMAN

- Abra o POSTMAN.
- Crie uma nova coleção clicando no símbolo de "+" abaixo de "My Workspace" e selecione a opção "Blank Collection".
- Clique em "Add a Request".

#### Requisições:

- **Busca de ID e Listas:**
  - Crie uma requisição de método GET.
  - Para informações de usuários por ID e listas, utilize os endpoints:
    - (http://localhost:8400/api/user/)
    - (http://localhost:8400/api/user/ID)
    - (http://localhost:8400/api/company)
    - (http://localhost:8400/api/company/ID)

- **Criação de Usuários e Empresas:**
  - Crie uma requisição de método POST.
  - Para criar usuários, utilize o endpoint:
    - (http://localhost:8400/api/user/create)
    - Adicione as seguintes informações ao campo Body > Raw > JSON:
      ```json
      {
           "name": "string",
           "e-mail": "string",
           "companies": ["string"]
      }
      ```
  - Para criar empresas, utilize o endpoint:
    - (http://localhost:8400/api/company/create)
    - Adicione as seguintes informações ao campo Body > Raw > JSON:
      ```json
      {
           "name": "string",
           "cnpj": "string",
           "adress": {
               "cep": "string",
               "country": "string",
               "city": "string",
               "street_location": "string",
               "number": "string",
               "district": "string"
          }
      }
      ```

- **Edição de Informações de Usuário e Empresa:**
  - Crie uma requisição de método PATCH.
  - Para atualizar informações de usuários, utilize o endpoint:
    - (http://localhost:8400/api/user/ID/update)
    - Adicione as seguintes informações ao campo Body > Raw > JSON:
      ```json
      {
           "name": "string",
           "e-mail": "string",
           "companies": ["string"]
      }
      ```
  - Para atualizar informações de empresas, utilize o endpoint:
    - (http://localhost:8400/api/company/ID/update)
    - Adicione as seguintes informações ao campo Body > Raw > JSON:
      ```json
      {
           "name": "string",
           "cnpj": "string",
           "adress": {
               "cep": "string",
               "country": "string",
               "state": "string",
               "city": "string",
               "street": "string",
               "number": "string",
               "district": "string"
          }
      }
      ```

- **Deletar Usuários e Empresas:**
  - Crie uma requisição de método DELETE.
  - Para deletar usuários, utilize o endpoint:
    - (http://localhost:8400/api/user/ID/delete)
  - Para deletar empresas, utilize o endpoint:
    - (http://localhost:8400/api/company/ID/delete)

---

## 6. Ferramentas e ambientes utilizados para execução do projeto:
- Cypress v10.11.0
- Node JS v20.15.0
- Docker v26.1.4
- Google Chrome v126.0.6478.126
- Windows 11 v23H2
- Linux/Ubuntu 
- MySQL v8.0.37
- Postman v11.2.0
- GIT
