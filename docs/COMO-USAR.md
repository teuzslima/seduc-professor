# Como usar o prompt base (explicação pro time)

Este documento explica, parte por parte, o que tem no [PROMPT-BASE.md](./PROMPT-BASE.md) e o
**porquê** de cada regra. Use-o para alinhar a galera.

## 🎯 Pra que serve
É um **padrão único de geração de telas**. Em vez de cada um começar do zero e inventar cores,
estrutura e organização de arquivos, todo mundo cola o prompt e preenche só o que muda de tela
pra tela. Resultado: telas **consistentes** e **sem quebrar o que já existe**.

## 🧱 Stack (não mudar)
Diz **quais bibliotecas o projeto usa**. Se cada um trouxer uma lib diferente (Tailwind, shadcn,
sonner), vira salada: padrões diferentes, conflito no `package.json`, projeto mais pesado. Fixar o
stack garante que todo mundo fala a mesma língua.

## 🎨 Design System — Paleta B (tokens)
As cores são **tokens** (`--primaria`, `--ink`, `--alerta-limite`…) e **nunca** hex direto no
componente. Assim, trocar uma cor é num lugar só (`index.css`), ninguém usa um "azul quase igual"
diferente, e o `--primaria` (azul forte) fica **só em 1–2 ações por tela** — se tudo for destaque,
nada é destaque.

## 🏗️ Estrutura (reutilize, não recrie)
Peças prontas pra ninguém refazer:
- **AppShell** — cabeçalho, barra de baixo e rodapé já prontos.
- **useDados** — o "carregador" de dados (dá `carregando`, `erro`, `recarregar` de graça).
- **simularRequisicao / mockUtils** — finge o back-end; `?estado=` na URL liga os estados de teste.
- **EstadoErro / Skeleton** — as telinhas de erro e de carregando, iguais em todo lugar.
- **toast** — notificações de sucesso/erro.
- **datas** — funções prontas, evitando o bug clássico de `new Date("2026-09-14")` (o fuso muda o dia).

Reaproveitar isso deixa a tela rápida, igual às outras e sem recriar bug já resolvido.

## 📐 Convenções de código (regras de ouro)
- **Hooks no topo**, antes de qualquer `return` — regra do React; senão quebra a tela.
- **Função de busca e constantes fora do componente** — senão o `useDados` entra em loop.
- **Imutabilidade** (`{...obj}`, `[...lista]`, nunca `push`) — o React só re-renderiza com objeto novo.
- **Acessibilidade** (`aria-label`, `aria-pressed`, foco visível) — teclado e leitor de tela.
- **Arquivos em comum: `git pull` e não duplicar** — o mais importante pro time: antes de criar um
  arquivo compartilhado (mocks, service…), puxa o que existe e **só acrescenta**. Evita conflito.

## 🧭 Rota
Onde registrar a tela nova (`App.jsx`) — padronizado, pra não ter gente mexendo no mesmo lugar sem saber.

## ✅ Critérios de aceite (pronto é pronto)
- `build` passa e `lint` sem erro (não entrega código quebrado).
- Os 3 estados funcionam (carregando/erro/vazio).
- Funciona em 360px e 390px sem cortar nome grande.
- Zero hex nos componentes.
- Commits como **teuzslima**, sem atribuição de IA.

## 📝 TELA A GERAR (o que muda por tela)
O **único bloco que você preenche** a cada tarefa: nome/rota, objetivo, elementos, dados,
comportamento e o que fica de fora. Todo o resto do prompt é fixo.

---

**Resumo de uma frase:** é um molde que já define nossa stack, nossas cores (via tokens), as peças
reutilizáveis e as regras de código — assim toda tela sai no mesmo padrão, roda no celular, passa
no build/lint e não dá conflito no Git. Só preenche o bloco **TELA A GERAR**.
