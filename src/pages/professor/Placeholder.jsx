import { useSearchParams } from "react-router"

// Páginas provisórias de Presença e Diário (tarefas próprias). Só mostram
// qual aula veio no ?aula= para dar para testar os atalhos do card.
export default function Placeholder({ titulo }) {
  const [params] = useSearchParams()
  const aula = params.get("aula")

  return (
    <div className="placeholder">
      <h1>{titulo}</h1>
      <p>
        Tela ainda não implementada (outra tarefa). Aula recebida:{" "}
        <code>{aula ?? "nenhuma"}</code>
      </p>
    </div>
  )
}
