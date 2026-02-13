<p align="center">
    <img src="./resources/images/docs/logotypes/auth-system.png" width="200" alt="Logotipo — Auth System" />
</p>

<div align="center">

![Maintenance](https://img.shields.io/maintenance/yes/2026?style=for-the-badge)
![License MIT](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-Concluído-brightgreen?style=for-the-badge)
![Java 25](https://img.shields.io/badge/Java-25-blue.svg?style=for-the-badge&logo=openjdk)
![Spring Boot 4.0.2](https://img.shields.io/badge/Spring%20Boot-4.0.2-6db33f.svg?style=for-the-badge&logo=spring)
![Build com Maven](https://img.shields.io/badge/build-Maven-red.svg?style=for-the-badge&logo=apachemaven)

</div>

## Auth System

## 💻 Sobre o Projeto <a name="sobre-projeto"></a>

Este repositório contém um sistema completo de autenticação dividido em dois projetos principais:

- **api/**: Backend em Spring Boot com MongoDB
- **web/**: Frontend em Angular

## 📦 Estrutura do Projeto

```
./
├── api/   # Backend (Spring Boot)
└── web/   # Frontend (Angular)
```

## 🚀 Tecnologias Utilizadas <a name="tecnologias"></a>

<table align="center">
  <thead>
    <tr>
      <th>Logo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><img src="./resources/images/docs/logotypes/spring-boot.png" height="60"></td>
      <td><b>Spring Boot 4.0.2:</b> Framework para agilidade e produtividade.</td>
    </tr>
        <tr>
      <td align="center">
        <img src="./resources/images/docs/logotypes/angular.png" height="50">
      </td>
      <td>
        <b>Angular 21:</b> Framework front-end moderno para construção de interfaces reativas e escaláveis.
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="./resources/images/docs/logotypes/mongodb.svg" height="50">
      </td>
      <td>
        <b>MongoDB:</b> Banco de dados NoSQL orientado a documentos para armazenamento flexível e escalável.
      </td>
    </tr>
  </tbody>
</table>

## 🛡️ API (Spring Boot)

### Descrição

API REST para autenticação de usuários, desenvolvida com Spring Boot e MongoDB. Permite cadastro e login de usuários.

### Principais Tecnologias

- Java 25
- Spring Boot 4.0.2
- Spring Data MongoDB
- Lombok
- spring-dotenv (variáveis de ambiente)

### Configuração

1. **Variáveis de ambiente:**
   - Copie `.env.example` para `.env` e preencha com as credenciais do MongoDB.
2. **Arquivo de propriedades:**
   - Veja `src/main/resources/application.properties` para detalhes de configuração.

### Executando a API

```bash
cd api
./mvnw spring-boot:run
```

A API estará disponível em `http://localhost:8080/api`.

### Endpoints

- `POST /api/usuarios/cadastro` — Cadastro de usuário
- `POST /api/usuarios/login` — Login de usuário

#### Exemplo de Payload

Cadastro:

```json
{
  "name": "Nome do Usuário",
  "email": "email@exemplo.com",
  "password": "senha123"
}
```

Login:

```json
{
  "email": "email@exemplo.com",
  "password": "senha123"
}
```

### Estrutura do Usuário

- `id`: string
- `name`: string
- `email`: string
- `password`: string

### Observações

- O endpoint de cadastro retorna mensagem de sucesso ou erro de e-mail já cadastrado.
- O login retorna o usuário autenticado ou `null` se falhar.

---

## 💻 Web (Angular)

### Descrição

Frontend moderno em Angular para cadastro e login de usuários, consumindo a API REST.

### Principais Tecnologias

- Angular 21
- RxJS
- SCSS
- FontAwesome

### Instalação e Execução

```bash
cd web
npm install
ng dev
```

Acesse em `http://localhost:4200`.

### Funcionalidades

- Tela de login e cadastro com validação de formulário
- Armazenamento do usuário logado no `localStorage`
- Redirecionamento para página inicial após login
- Página inicial com terminal animado simulando boot do sistema

### Estrutura de Pastas

- `src/app/pages/auth/` — Tela de autenticação
- `src/app/pages/home/` — Tela inicial pós-login
- `src/app/services/auth-service.ts` — Serviço de autenticação

### Configuração do Serviço

O serviço `AuthService` faz requisições para a API em `http://localhost:8080/api/usuarios`.

## 👤 Sobre o Desenvolvedor <a name="sobre-o-desenvolvedor"></a>

<table align="center">
  <tr>
    <td align="center">
        <br>
        <a href="https://github.com/0nF1REy" target="_blank">
          <img src="./resources/images/docs/developer/alan-ryan.jpg" height="160" alt="Foto — Alan Ryan">
        </a>
        </p>
        <a href="https://github.com/0nF1REy" target="_blank">
          <strong>Alan Ryan</strong>
        </a>
        </p>
        ☕ Peopleware | Tech Enthusiast | Code Slinger ☕
        <br>
        Apaixonado por código limpo, arquitetura escalável e experiências digitais envolventes
        </p>
          Conecte-se comigo:
        </p>
        <a href="https://www.linkedin.com/in/alan-ryan-b115ba228" target="_blank">
          <img src="https://img.shields.io/badge/LinkedIn-Alan_Ryan-0077B5?style=flat&logo=linkedin" alt="LinkedIn">
        </a>
        <a href="https://gitlab.com/alanryan619" target="_blank">
          <img src="https://img.shields.io/badge/GitLab-@0nF1REy-FCA121?style=flat&logo=gitlab" alt="GitLab">
        </a>
        <a href="mailto:alanryan619@gmail.com" target="_blank">
          <img src="https://img.shields.io/badge/Email-alanryan619@gmail.com-D14836?style=flat&logo=gmail" alt="Email">
        </a>
        </p>
    </td>
  </tr>
</table>

</div>

---

## 📜 Licença <a name="licenca"></a>

Este projeto está sob a **licença MIT**. Consulte o arquivo **[LICENSE](LICENSE)** para obter mais detalhes.

> ℹ️ **Aviso de Licença:** &copy; 2026 Alan Ryan da Silva Domingues. Este projeto está licenciado sob os termos da licença MIT. Isso significa que você pode usá-lo, copiá-lo, modificá-lo e distribuí-lo com liberdade, desde que mantenha os avisos de copyright.

⭐ Se este repositório foi útil para você, considere dar uma estrela!
