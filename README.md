# tRPC demo - end-to-end type safety

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![tRPC](https://img.shields.io/badge/tRPC-%232596BE.svg?style=for-the-badge&logo=tRPC&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

## Introduction

This project is a tRPC demo that showcases end-to-end type safety in a full-stack application. It utilizes various technologies such as Node.js, Express.js, React, React Query, Vite, Prisma, and SQLite. The goal of this project is to demonstrate the power and benefits of using tRPC for building type-safe APIs and ensuring a seamless development experience. By leveraging tRPC, developers can achieve strong typing, automatic code generation, and efficient data fetching between the client and server.

> This is only a simple monorepo setup. If you would like to improve the monorepo experience, please have a look at [Nx](https://nx.dev/) or [pnpm workspaces](https://pnpm.io/workspaces).

You can find a fully implemented solution in the `final` branch.

## Installation

### Prerequisites

- [Node v18+](https://nodejs.org/en)
- [pnpm](https://pnpm.io/installation)

### Server

Navigate to the `server` folder and install all of the server dependencies.

```bash
pnpm install
```

Create a `.env` file based on `.env.example` and start server.

```bash
pnpm start
```

### Client

Navigate to the `client` folder and install all of the client dependencies.

```bash
pnpm install
```

Start client app.

```bash
pnpm start
```
