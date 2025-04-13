# 🌌 Astro Notification API

Astro Notification API é uma aplicação backend construída com [NestJS](https://nestjs.com/), [Prisma ORM](https://www.prisma.io/), e [Jest](https://jestjs.io/) para testes automatizados. Seu objetivo é oferecer um sistema robusto para envio, cancelamento e consulta de notificações, utilizando boas práticas de engenharia de software como Domain-Driven Design (DDD), Clean Architecture e Design Patterns (Factory, Mapper).

---

## 🚀 Tecnologias

- **NestJS**: Framework Node.js escalável para aplicações backend
- **Prisma**: ORM moderno e intuitivo
- **Jest**: Testes unitários com alta cobertura
- **Typescript**: Tipagem estática e confiável
- **PostgreSQL**: Banco de dados relacional

---

## 📁 Estrutura de Pastas

```bash
src/
├── application/         # Casos de uso da aplicação
│   ├── use-cases/       # Lógica central da aplicação
│   └── factories/       # Fábricas para testes e mocks
├── domain/              # Entidades e lógica de negócio (DDD)
├── infra/               # Implementações externas (ex: Prisma)
│   ├── prisma/          # Migrations, client, schema
│   └── mappers/         # Conversores entre entidades e modelos
├── http/                # Controllers e rotas
├── tests/               # Testes unitários e e2e
├── main.ts              # Ponto de entrada da aplicação
└── app.module.ts        # Módulo principal da aplicação
```
## ⚙️ Instalação
Clone o repositório e instale as dependências:

```bash
git clone https://github.com/luancamposdev/astro-notification-api.git
cd astro-notification-api
npm install
```

## 🔐 Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/astro_notification"
```

## 🧱 Executando Migrations
```bash
npx prisma migrate dev --name init
```
Para abrir a interface visual do banco:
```bash
npx prisma studio
```

## ▶️ Rodando o Projeto
Modo desenvolvimento com hot-reload:
```bash
npm run start:dev
```

Modo produção (build e execução):
```bash
npm run build
npm run start:prod
```

## ✅ Executando Testes
Rodar todos os testes:
```bash
npm run test
```
Rodar testes com cobertura:
```bash
npm run test:cov
```
Assistir testes em tempo real:
```bash
npm run test:watch
```

## 🧠 Design Patterns Aplicados
 - Factory Pattern: Criação de entidades em testes de forma reutilizável.
 - Mapper Pattern: Conversão entre entidades de domínio e modelos do Prisma.
 - DDD (Domain-Driven Design): Separação clara entre camadas de domínio, aplicação, infraestrutura e apresentação.
 - Clean Architecture: Lógica de negócio desacoplada de frameworks e dependências externas.

## 🌐 Endpoints da API
| Método | Rota                                    | Descrição                                        |
|--------|-----------------------------------------|--------------------------------------------------|
| POST   | `/notifications`                        | Envia uma nova notificação                       |
| GET    | `/notifications/:id`                    | Consulta uma notificação por ID                  |
| PATCH  | `/notifications/:id/cancel`             | Cancela uma notificação                          |
| PATCH  | `/notifications/:id/read`               | Marca uma notificação como lida                 |
| PATCH  | `/notifications/:id/unread`             | Marca uma notificação como não lida             |
| GET    | `/notifications/from/:recipientId`      | Lista notificações de um destinatário           |
| GET    | `/notifications/count/from/:recipientId`| Conta quantas notificações o destinatário tem   |

## 🛠 Comandos Úteis
| Comando                        | Descrição                                          |
|---------------------------------|----------------------------------------------------|
| `npm run start:dev`             | Inicia em modo de desenvolvimento                 |
| `npm run start:prod`            | Inicia a versão de produção                       |
| `npm run build`                 | Compila o projeto                                 |
| `npm run test`                  | Executa todos os testes                           |
| `npm run test:cov`              | Executa testes com relatório de cobertura         |
| `npm run test:watch`            | Executa testes em modo observador                 |
| `npx prisma migrate dev`        | Executa as migrations no banco local              |
| `npx prisma generate`           | Gera os tipos do Prisma                           |
| `npx prisma studio`             | Abre a interface gráfica do Prisma                |
| `npm run lint`                  | Verifica formatação e boas práticas               |
| `npm run format`                | Formata o código com Prettier                     |

## 🙋‍♂️ Autor

Feito com 💜 por [Luan Campos](https://github.com/luancamposdev)
