import { Link } from "react-router"
import { Calendar, ChevronDown } from "lucide-react"

// Início: atalhos do professor. Versão mínima — só Aulas de Hoje por enquanto.
export default function MenuProfessor() {
  return (
    <div className="menu-professor">
      <p className="menu-professor__titulo">Atalhos</p>

      <Link className="menu-card" to="/professor/aulas-hoje">
        <span className="menu-card__icone">
          <Calendar size={20} aria-hidden="true" />
        </span>
        <span className="menu-card__texto">
          <span className="menu-card__titulo">Aulas de Hoje</span>
          <span className="menu-card__apoio">Presença e diário das aulas do dia</span>
        </span>
        <ChevronDown
          className="menu-card__seta"
          size={20}
          aria-hidden="true"
          style={{ transform: "rotate(-90deg)" }}
        />
      </Link>
    </div>
  )
}
