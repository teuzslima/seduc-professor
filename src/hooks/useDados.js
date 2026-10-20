import { useCallback, useEffect, useRef, useState } from "react"

// Busca dados de uma função assíncrona.
// - Mostra "carregando" só na primeira busca; quando a função `buscar` muda,
//   refaz a busca mantendo os dados antigos na tela (sem piscar). Para começar
//   do zero a cada troca, remonte o componente com uma `key`.
// - `recarregar()` força uma nova busca (usado pelo "Tentar novamente").
export function useDados(buscar) {
  const [dados, setDados] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)
  const [tentativa, setTentativa] = useState(0)
  const jaCarregou = useRef(false)

  useEffect(() => {
    let ativo = true
    if (!jaCarregou.current) setCarregando(true)
    setErro(null)

    buscar()
      .then((resposta) => {
        if (!ativo) return
        setDados(resposta)
        jaCarregou.current = true
      })
      .catch((e) => {
        if (ativo) setErro(e)
      })
      .finally(() => {
        if (ativo) setCarregando(false)
      })

    return () => {
      ativo = false
    }
  }, [buscar, tentativa])

  const recarregar = useCallback(() => setTentativa((n) => n + 1), [])

  return { dados, carregando, erro, recarregar }
}
