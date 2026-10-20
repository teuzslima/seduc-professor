import { Link } from "react-router"

// Versão mínima do Menu do Professor — só o atalho para Aulas de Hoje.
export default function MenuProfessor() {
  return (
    <div className="menu-professor">
      <h1 className="menu-professor__titulo">Menu do Professor</h1>
      <Link className="menu-professor__atalho" to="/professor/aulas-hoje">
        Aulas de Hoje
      </Link>
    </div>
  )
}
