# PROJETO: MEMÓRIA DE DIAGNÓSTICO INDUSTRIAL

## Objetivo

Aplicação voltada para manutenção industrial e processos de transformação de plásticos.

O objetivo principal é criar uma base de conhecimento técnica onde eletricistas, técnicos de manutenção, mecânicos e futuramente técnicos de processo possam registrar ocorrências, diagnósticos e soluções aplicadas nas máquinas da fábrica.

A aplicação deverá servir como memória técnica da empresa, preservando conhecimento adquirido durante intervenções e manutenções.

---

## Tecnologias

- TypeScript
- DDD (Domain Driven Design)
- Clean Architecture

---

## Contexto da Empresa

A empresa possui máquinas industriais utilizadas na fabricação de embalagens plásticas.

Exemplos:

- Injetoras
- Sopradoras
- Máquinas de Extrusão Sopro
- Máquinas Inject Blow
- Nissei ASB
- Tederic
- Outras máquinas industriais

As máquinas são conhecidas internamente pela TAG.

Exemplos:

- IJ-0305
- IJ-0306
- SB-001
- EX-010

A TAG é a principal identificação utilizada pelos técnicos.

---

## Fluxo Inicial

1. Usuário realiza login.
2. Usuário seleciona "Novo Diagnóstico".
3. Sistema solicita a TAG da máquina.
4. Usuário informa a TAG.
5. Sistema busca a máquina cadastrada.
6. Sistema exibe os dados da máquina.
7. Usuário registra o diagnóstico.
8. Sistema salva o histórico.

---

## Perfis de Usuário

### Administrador

Responsável por:

- Cadastrar máquinas
- Editar máquinas
- Inativar máquinas
- Gerenciar usuários

### Técnico

Responsável por:

- Realizar login
- Consultar máquinas
- Registrar diagnósticos
- Consultar históricos

O técnico NÃO altera o cadastro da máquina.

---

## Entidades do Domínio

### Maquina

Representa uma máquina física da empresa.

Propriedades atuais:

- TagMaquina.create
- TipoMaquina
- Marca
- Modelo
- Fornecedor
- DataFabricacao

Exemplo:

Tag: IJ-0305
Tipo: Injetora
Marca: Tederic
Modelo: TRX 188F
Fornecedor: Pavan Zanetti

Observação:

A máquina é cadastrada apenas uma vez por um administrador e depois utilizada pelos diagnósticos.

---

### Diagnostico

Entidade principal do sistema.

Representa uma ocorrência registrada por um técnico.

Cada diagnóstico pertence a uma máquina.

Campos previstos:

- Máquina
- Data
- Problema observado
- Sintomas
- Diagnóstico realizado
- Solução aplicada
- Observações
- Peças trocadas
- Imagens

---

### Usuario

Responsável pela autenticação e autorização.

Campos previstos:

- Nome
- Email
- Senha
- Perfil

Perfis:

- ADMIN
- TECNICO

---

## Value Objects

### TagMaquina.create

Identificador único da máquina.

Exemplos válidos:

- IJ-0305
- SB-001
- EX-010

Responsável por validar formato e unicidade no domínio.

---

## Enums

### TipoMaquina

Exemplos:

- INJETORA
- SOPRADORA
- EXTRUSAO_SOPRO
- INJECT_BLOW
- OUTRO

---

## Visão Futura

Permitir registros não apenas da manutenção elétrica.

Também suportar:

- Processo de injeção
- Processo de sopro
- Qualidade
- Mecânica
- Produção

Exemplos:

- Rebarba excessiva
- Falha de sopro
- Material queimado
- Problema de desmoldagem
- Instabilidade de processo

---

## Objetivo de Longo Prazo

Construir uma base histórica de conhecimento industrial.

O sistema deverá permitir:

- Consultar diagnósticos anteriores
