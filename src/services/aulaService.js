import aulas from "@/mocks/aulas.json"
import { simularRequisicao } from "@/lib/mockUtils"
import { somarDias } from "@/lib/datas"

// Uma aula pelo id (usado por Lista de presença e Diário).
export function encontrarAula(id) {
  return simularRequisicao(() => aulas.find((a) => a.id === id) ?? null)
}

// Aulas de um professor num dia, em ordem de horário.
export function listarAulasDoDia(professorId, data) {
  return simularRequisicao(() =>
    aulas
      .filter((a) => a.professorId === professorId && a.data === data)
      .sort((a, b) => a.horario.localeCompare(b.horario)),
  )
}

// Aulas de segunda a sábado da semana que começa em "segunda" (AAAA-MM-DD)
export function listarAulasDaSemana(professorId, segunda) {
  const sabado = somarDias(segunda, 5)
  return simularRequisicao(() =>
    aulas.filter(
      (a) => a.professorId === professorId && a.data >= segunda && a.data <= sabado,
    ),
  )
}
