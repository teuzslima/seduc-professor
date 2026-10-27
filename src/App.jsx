import { Routes, Route, Navigate } from "react-router"
import AppShell from "@/components/AppShell"
import Toaster from "@/components/Toaster"
import MenuProfessor from "@/pages/professor/MenuProfessor"
import AulasHoje from "@/pages/professor/AulasHoje"
import ListaPresenca from "@/pages/professor/ListaPresenca"
import Placeholder from "@/pages/professor/Placeholder"

export default function App() {
  return (
    <>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/professor" replace />} />
          <Route path="/professor" element={<MenuProfessor />} />
          <Route path="/professor/aulas-hoje" element={<AulasHoje />} />
          <Route path="/professor/presenca" element={<ListaPresenca />} />
          <Route
            path="/professor/solicitacoes"
            element={<Placeholder titulo="Solicitações" />}
          />
          <Route
            path="/professor/registros"
            element={<Placeholder titulo="Registros" />}
          />
          <Route
            path="/professor/diario"
            element={<Placeholder titulo="Diário Eletrônico" />}
          />
        </Routes>
      </AppShell>
      <Toaster />
    </>
  )
}
