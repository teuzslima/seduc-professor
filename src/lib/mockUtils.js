// Simula uma requisição a um "back-end" com um pequeno atraso.
// Para testar estados, lê ?estado= da URL:
//   ?estado=carregando  -> a promessa nunca resolve (fica em "carregando")
//   ?estado=erro        -> a promessa rejeita (mostra o EstadoErro)
const ATRASO_MS = 500

function estadoForcado() {
  if (typeof window === "undefined") return null
  return new URLSearchParams(window.location.search).get("estado")
}

export function simularRequisicao(obterDados) {
  return new Promise((resolve, reject) => {
    const estado = estadoForcado()

    if (estado === "carregando") {
      return // nunca resolve: a tela fica carregando
    }

    if (estado === "erro") {
      setTimeout(
        () => reject(new Error("Não foi possível carregar as aulas.")),
        ATRASO_MS,
      )
      return
    }

    setTimeout(() => resolve(obterDados()), ATRASO_MS)
  })
}
