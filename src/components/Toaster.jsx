import { useEffect, useState } from "react"
import { Check, AlertCircle } from "lucide-react"
import { assinarToasts } from "@/lib/toast"

// Notificações rápidas no topo-centro. Uma única instância no App.
export default function Toaster() {
  const [toasts, setToasts] = useState([])

  useEffect(() => assinarToasts(setToasts), [])

  return (
    <div className="toaster" role="status" aria-live="polite" aria-atomic="false">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast--${t.tipo}`}>
          <span className="toast__icone" aria-hidden="true">
            {t.tipo === "success" ? <Check size={16} /> : <AlertCircle size={16} />}
          </span>
          <span>{t.mensagem}</span>
        </div>
      ))}
    </div>
  )
}
