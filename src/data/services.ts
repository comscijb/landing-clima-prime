import type { Service } from "@/types/service"

export const services: Service[] = [
  {
    id: "instalacao-split",
    title: "Instalação de ar-condicionado split",
    description: "Instalação com posicionamento adequado, acabamento limpo, teste de funcionamento e orientação básica de uso.",
    iconName: "installation",
  },
  {
    id: "higienizacao",
    title: "Higienização completa",
    description: "Limpeza técnica para remover sujeira, reduzir odores e melhorar a qualidade do ar no ambiente.",
    iconName: "cleaning",
  },
  {
    id: "manutencao-preventiva",
    title: "Manutenção preventiva",
    description: "Verificação periódica para reduzir falhas, preservar desempenho e evitar paradas inesperadas.",
    iconName: "maintenance",
  },
  {
    id: "vazamentos",
    title: "Correção de vazamentos",
    description: "Avaliação de pingos, drenos, conexões e sinais de perda de eficiência no equipamento.",
    iconName: "leak",
  },
  {
    id: "carga-gas",
    title: "Carga de gás",
    description: "Análise técnica antes da reposição para evitar solução temporária em problema não identificado",
    iconName: "gas",
  },
  {
    id: "empresas",
    title: "Atendimento para empresas",
    description: "Suporte para comércios, clínicas, escritórios, restaurantes e ambientes corporativos que não podem parar.",
    iconName: "business",
  },
  {
    id: "contrato-recorrente",
    title: "Contrato de manutenção recorrente",
    description: "Rotina planejada para empresas que precisam manter os aparelhos funcionando com previsibilidade.",
    iconName: "contract",
  },
]
