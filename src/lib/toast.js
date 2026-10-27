// Toast mínimo (adaptação do sonner para este projeto, sem dependência externa).
// Use toast.success(...) / toast.error(...) nas telas e <Toaster /> uma vez no App.

let proximoId = 0
const ouvintes = new Set()
let toasts = []
const DURACAO_MS = 3500

function emitir() {
  for (const ouvir of ouvintes) ouvir(toasts)
}

function adicionar(tipo, mensagem) {
  const id = ++proximoId
  toasts = [...toasts, { id, tipo, mensagem }]
  emitir()
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id)
    emitir()
  }, DURACAO_MS)
}

export const toast = {
  success: (mensagem) => adicionar("success", mensagem),
  error: (mensagem) => adicionar("error", mensagem),
}

// O <Toaster /> assina para renderizar os toasts atuais.
export function assinarToasts(ouvir) {
  ouvintes.add(ouvir)
  ouvir(toasts)
  return () => ouvintes.delete(ouvir)
}
