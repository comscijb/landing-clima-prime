import type { Service } from "@/types/service"

export const services: Service[] = [
  {
    id: "instalacao-split",
    title: "Instalação de ar-condicionado split",
    description: "Instalação cuidadosa, acabamento limpo e teste final do equipamento.",
    iconName: "installation",
  },
  {
    id: "higienizacao",
    title: "Higienização completa",
    description: "Limpeza técnica para reduzir sujeira, odores e acúmulo de impurezas.",
    iconName: "cleaning",
  },
  {
    id: "manutencao-preventiva",
    title: "Manutenção preventiva",
    description: "Verificação periódica para melhorar desempenho e evitar falhas.",
    iconName: "maintenance",
  },
  {
    id: "vazamentos",
    title: "Correção de vazamentos",
    description: "Diagnóstico de pingos, drenos e sinais de perda de eficiência.",
    iconName: "leak",
  },
  {
    id: "carga-gas",
    title: "Carga de gás",
    description: "Avaliação técnica antes da reposição para evitar soluções temporárias.",
    iconName: "gas",
  },
  {
    id: "empresas",
    title: "Atendimento para empresas",
    description: "Suporte para comércios, clínicas, escritórios e ambientes corporativos.",
    iconName: "business",
  },
  {
    id: "contrato-recorrente",
    title: "Contrato de manutenção recorrente",
    description: "Rotina planejada para reduzir paradas e manter o conforto estável.",
    iconName: "contract",
  },
]
