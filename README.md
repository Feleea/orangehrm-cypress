# OrangeHRM - Testes E2E com Cypress + CI no GitHub Actions
Automação de testes end-to-end com Cypress, integração contínua configurada no GitHub Actions e utilizando o projeto https://github.com/orangehrm

Este repositório faz parte do meu portfólio e tem como objetivo demonstrar boas práticas em testes automatizados, organização de projeto e execução em pipeline CI.

### Objetivo

O objetivo deste projeto é demonstrar:

* ✅ Conhecimento prático em Cypress
* ✅ Estruturação de testes E2E com boas práticas
* ✅ Uso de comandos customizados
* ✅ Separação de responsabilidades (Page Objects ou organização modular)
* ✅ Execução automatizada via GitHub Actions
* ✅ Geração de evidências (screenshots e vídeos)
* ✅ Pipeline de CI validando testes a cada push ou pull request

### Tecnologias Utilizadas

* Node.js
* Cypress
* JavaScript
* GitHub Actions

### Estrutura do Projeto
```
cypress/
 ├── e2e/              # Casos de teste
 ├── fixtures/         # Massa de dados (Ainda será implementado)
 ├── support/          # Comandos customizados e configurações
 ├── screenshots/      # Evidências em caso de falha
 └── videos/           # Vídeos da execução
.github/
 └── workflows/
      └── ci.yml       # Pipeline de integração contínua
cypress.config.js
package.json
```

### Como Instalar
1️⃣ Clonar o repositório
```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2️⃣ Instalar dependências
```
npm install
```

### Como Executar os Testes
Executar no modo interativo (GUI)
```
npx cypress open
```

Executar em modo headless
```
npx cypress run
```

### Integração Contínua (CI)
Este projeto possui pipeline configurada no GitHub Actions, que:
* Instala dependências
* Executa os testes em ambiente headless
* Gera artefatos (vídeos e screenshots)
* Falha o build caso algum teste falhe

A execução acontece automaticamente em:
* Push para branch principal
* Pull Requests

Arquivo de configuração:
```
.github/workflows/ci.yml
```

### Resultados

Durante a execução:
* ✔️ Testes passam → Build aprovado
* ❌ Testes falham → Build reprovado
* 📸 Screenshots são geradas automaticamente em falhas
* 🎥 Vídeos são gravados para análise posterior
Os artefatos podem ser visualizados diretamente na aba Actions do GitHub.
