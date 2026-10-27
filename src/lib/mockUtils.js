// Simula uma requisição a um "back-end" com um pequeno atraso.
// Para testar estados, lê ?estado= da URL:
//   ?estado=carregando  -> a promessa nunca resolve (fica em "carregando")
//   ?estado=erro        -> a promessa rejeita (mostra o EstadoErro no carregamento)
// Uma escrita pode definir um gatilho de erro próprio (opcoes.erroEm), para
// falhar sem derrubar o carregamento — ex.: ?estado=erro-envio só no envio.
const ATRASO_MS = 500

function estadoForcado() {
  if (typeof window === "undefined") return null
  return new URLSearchParams(window.location.search).get("estado")
}

export function simularRequisicao(obterDados, opcoes = {}) {
  const { erroEm, mensagemErro = "Não foi possível carregar as aulas." } = opcoes
  return new Promise((resolve, reject) => {
    const estado = estadoForcado()

    if (estado === "carregando") {
      return // nunca resolve: a tela fica carregando
    }

    if (estado === "erro" || (erroEm && estado === erroEm)) {
      setTimeout(() => reject(new Error(mensagemErro)), ATRASO_MS)
      return
    }

    setTimeout(() => resolve(obterDados()), ATRASO_MS)
  })
}
