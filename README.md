# SEDUC Sergipe · Portal do Professor

App em React (Vite) para o portal do professor. Primeira tela implementada:
**Aulas de Hoje** (`/professor/aulas-hoje`).

## Rodar

```bash
npm install
npm run dev
```

- Build de produção: `npm run build`
- Lint: `npm run lint`

Abre em `/` → redireciona para o Menu do Professor → "Aulas de Hoje".

## Estrutura

```
src/
├── mocks/aulas.json          # dados de exemplo (18 aulas, prof-001, 14–16/09/2026)
├── lib/
│   ├── datas.js              # datas "AAAA-MM-DD" (somarDias, nomeDiaSemana, ...)
│   ├── horarios.js           # HORARIOS_MANHA (turno da manhã + intervalo)
│   ├── turmas.js             # cor por turma (tokens --turma-1/2/3)
│   └── mockUtils.js          # simularRequisicao (+ ?estado=carregando|erro)
├── hooks/useDados.js         # busca assíncrona com carregando/erro/recarregar
├── services/aulaService.js   # listarAulasDoDia / listarAulasDaSemana / encontrarAula
├── components/
│   ├── AppShell.jsx          # casca mínima (fora do escopo da tela)
│   ├── EstadoErro.jsx        # estado de erro mínimo
│   ├── Skeleton.jsx          # carregando
│   └── professor/
│       ├── SeletorDia.jsx    # setas + nome/data do dia
│       ├── ResumoDia.jsx     # card de resumo (pílulas + concluídas/total)
│       └── CardAulaDia.jsx   # card de uma aula (aberto/fechado)
└── pages/professor/
    ├── MenuProfessor.jsx     # atalho mínimo para Aulas de Hoje
    ├── AulasHoje.jsx         # a tela
    └── Placeholder.jsx       # Presença/Diário provisórios (outras tarefas)
```

## Como testar

- O dia fica na URL: `?data=2026-09-15` abre a terça. Setas mudam o dia; o
  Voltar do navegador volta ao dia anterior.
- Abre em `14/09/2026` com "2/6 aulas" e a aula das 08:40 (1ª pendente) aberta.
- Só um card aberto por vez.
- `?estado=carregando` e `?estado=erro` forçam esses estados.

## Observações

As cores nunca vão em hex nos componentes — só tokens `var(--...)` definidos
em `src/index.css`. A cor de cada turma segue a ordem alfabética das turmas
(`--turma-1`, `--turma-2`, `--turma-3`), para bater com Aulas da Semana.
