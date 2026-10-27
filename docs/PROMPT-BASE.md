# Prompt base — geração de telas (seduc-professor)

Cole o bloco abaixo no topo de cada tarefa de tela e preencha só o bloco **"TELA A GERAR"**.
Ele fixa o stack, o design system (Paleta B) e as convenções do projeto, para que toda tela
saia no mesmo padrão, rode no celular, passe no build/lint e não gere conflito no Git.

> Para entender cada parte, veja [COMO-USAR.md](./COMO-USAR.md).

---

Gere a tela descrita em "TELA A GERAR" dentro do projeto **seduc-professor** (Squad 60),
seguindo EXATAMENTE o stack, o design system e as convenções abaixo. Não introduza
bibliotecas novas (nada de Tailwind/shadcn/sonner): este projeto usa CSS puro com tokens.

## Stack (não mudar)
- **Vite 6 · React 19 · React Router 7** (imports de `"react-router"`, ex.: `useSearchParams`)
- **lucide-react** para ícones SVG (sem emojis/unicode como ícone)
- **CSS puro** com design tokens em `src/index.css`; alias `@/` → `src`
- Dados **mocados** em `src/mocks/*.json` + serviço assíncrono em `src/services/`

## Design System — Paleta B (tokens em src/index.css; NUNCA hex nos componentes)
- `--fundo:#dadad9` · `--superficie:#ffffff` · `--branco:#ffffff`
- `--ink:#011638` (header, tab bar, rodapé) · `--sobre-ink:#ffffff`
- `--primaria:#0d21a1` (ação principal — **só 1–2 por tela**) · `--sobre-primaria:#ffffff`
- `--secundaria:#5e807f` (status positivo)
- `--texto:#141414` · `--texto-suave:#5b616e` · `--borda:#e3e4e3` · `--pilula-fundo:#eef0f2`
- Cor por turma: `--turma-1`(ink) · `--turma-2`(secundaria) · `--turma-3:#b8c2c2`
- Alertas de frequência: `--alerta-atencao:#f1892d` · `--alerta-limite:#e22b2b`
- Espaçamento (múltiplos de 4): `--e-1`…`--e-6` (4→24px) · Raios: `--raio-badge:8` `--raio-card-sm:12` `--raio-card:16` `--raio-pill:100`
- Sombra: `--sombra-card` · Fonte: **Poppins**
- Se precisar de uma cor nova, **crie o token** no `:root` do index.css e use `var(--...)`.

## Estrutura (o que já existe — reutilize, não recrie)
- **AppShell** já cuida do cabeçalho ("SEDUC · SERGIPE" + voltar + título), da **tab bar**
  (Início/Solicitações/Registros) e do rodapé "©2026 Desenvolvido por SQUAD 60". Não faça header/menu.
- `hooks/useDados.js` → `useDados(buscar)` retorna `{ dados, carregando, erro, recarregar }`.
- `lib/mockUtils.js` → `simularRequisicao(obterDados, opcoes?)`. Lê `?estado=` da URL:
  `carregando` (nunca resolve), `erro` (rejeita no carregamento). Escritas podem passar
  `{ erroEm: "erro-envio", mensagemErro }` para falhar só na ação (ex.: envio).
- `components/EstadoErro.jsx` (`aoTentar`) e `components/Skeleton.jsx` para os estados.
- Toast próprio: `import { toast } from "@/lib/toast"` (`toast.success/error`); `<Toaster />` já está no App.
- Datas são strings `"AAAA-MM-DD"`; use `lib/datas.js` (nunca `new Date("AAAA-MM-DD")`).

## Convenções de código (obrigatórias)
- **Todos os hooks no topo** do componente, antes de qualquer `return`.
- A função de busca e constantes (ex.: `const AULA_ATUAL_ID`) ficam **fora do componente**
  (ou em `useCallback` se dependerem de props).
- **Imutabilidade**: `{ ...obj, [id]: v }`, `[...lista, x]` — nunca `push`/mutação direta.
- Nome de classe em kebab-case; **nenhuma cor em hex** nos componentes.
- Acessibilidade: botões com `aria-label`/`aria-pressed` quando fizer sentido; foco visível.
- **Arquivos em comum** (mocks, service, lib, CardDataAula…): dê `git pull`, e se já existir,
  **só acrescente** o que falta — não duplique.

## Rota
Adicione a rota em `src/App.jsx` dentro de `<Routes>`, importando a página de `@/pages/professor/...`.

## Critérios de aceite (todas as telas)
- `npm run build` passa e `npm run lint` não acusa erro nos arquivos criados.
- Estados **carregando / erro / vazio** funcionando (`?estado=carregando`, `?estado=erro`
  e, para ações, `?estado=erro-envio`).
- Funciona em **360px e 390px**, sem cortar textos longos; **nenhum hex** nos componentes.
- Commits como **teuzslima** (`mateusdelipee@gmail.com`), **SEM** `Co-Authored-By`/atribuição de IA.

---

## TELA A GERAR
- **Nome / rota:** [ex.: Diário Eletrônico — /professor/diario]
- **Objetivo:** [o que o professor faz nessa tela]
- **Elementos / campos / ações:** [cards, listas, botões, inputs...]
- **Dados (mock/service):** [o que precisa em mocks/*.json e quais funções do service]
- **Comportamento:** [interações, modos, validações, toasts, estados]
- **Fora do escopo:** [o que NÃO fazer agora]
- **Issue (Taiga):** [#ID, se houver]
