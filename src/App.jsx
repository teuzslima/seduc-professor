import { Routes, Route, Navigate } from "react-router"
import AppShell from "@/components/AppShell"
import MenuProfessor from "@/pages/professor/MenuProfessor"
import AulasHoje from "@/pages/professor/AulasHoje"
import Placeholder from "@/pages/professor/Placeholder"

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Navigate to="/professor" replace />} />
        <Route path="/professor" element={<MenuProfessor />} />
        <Route path="/professor/aulas-hoje" element={<AulasHoje />} />
        <Route
          path="/professor/presenca"
          element={<Placeholder titulo="Lista de Presença" />}
        />
        <Route
          path="/professor/diario"
          element={<Placeholder titulo="Diário Eletrônico" />}
        />
      </Routes>
    </AppShell>
  )
}
