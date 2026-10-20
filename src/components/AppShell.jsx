// Casca do app (cabeçalho + menu inferior) ficam nesta tarefa só em versão
// mínima — a tarefa do AppShell cuida do visual completo.
export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="app-header__orgao">SEDUC · SERGIPE</span>
      </header>
      <main className="app-main">{children}</main>
    </div>
  )
}
