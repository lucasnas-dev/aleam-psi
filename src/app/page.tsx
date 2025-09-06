"use client";

// Estrutura hierárquica dos tópicos e subitópicos
const topicosGerais = [
  {
    titulo: "Língua Portuguesa",
    subitens: [
      "Interpretação e compreensão de textos",
      "Tipologia e gêneros textuais",
      "Ortografia oficial e acentuação",
      "Emprego das classes de palavras",
      "Crase",
      "Sintaxe da oração e do período",
      "Pontuação",
      "Concordância (nominal e verbal)",
      "Regência (nominal e verbal)",
      "Significação das palavras",
      "Colocação pronominal",
      "Figuras de linguagem",
      "Redação Oficial: conforme Manual de Redação da Presidência da República",
    ],
  },
  {
    titulo: "Raciocínio Lógico e Matemático",
    subitens: [
      "Estruturas lógicas",
      "Argumentação lógica: analogias, inferências, deduções e conclusões",
      "Lógica proposicional: proposições simples e compostas",
      "Tabelas-verdade, equivalências lógicas e Leis de De Morgan",
      "Operações com conjuntos",
      "Probabilidade básica",
      "Estatística descritiva (média, moda, mediana, desvio padrão)",
      "Porcentagem, regra de três, razão e proporção",
    ],
  },
  {
    titulo: "Noções de Informática",
    subitens: [
      "Conceitos básicos de TI",
      "Windows e Linux",
      "Word, Excel e PowerPoint",
      "Internet: navegação, conceitos de URL, links, mecanismos de busca",
      "E-mail",
      "Segurança da informação: vírus, worms, phishing, firewall, criptografia",
      "Armazenamento em nuvem",
      "Noções de redes",
    ],
  },
  {
    titulo: "Legislação do Estado do Amazonas",
    subitens: [
      "Constituição do Estado do Amazonas",
      "Regimento Interno da ALEAM",
      "Lei nº 1.762/1986 – Regime Jurídico Único dos Servidores Públicos Civis do Estado do Amazonas",
      "Lei nº 2.607/2000 – PCCR da ALEAM",
      "Lei nº 12.527/2011 – Lei de Acesso à Informação",
      "Lei nº 8.429/1992 – Lei de Improbidade Administrativa",
    ],
  },
];

const topicosEspecificos = [
  {
    titulo: "Diagnóstico Psicológico",
    subitens: [
      "Conceituação e objetivos",
      "Avaliação psicológica",
      "Entrevista psicológica",
      "Elaboração de laudos e documentos psicológicos",
    ],
  },
  {
    titulo: "Técnicas de Intervenção Psicológica",
    subitens: [
      "Atendimentos individuais e em grupo (psicoterapia breve, aconselhamento, intervenção em crise)",
      "Técnicas centradas na pessoa, psicodinâmicas, cognitivas e comportamentais",
      "Intervenções em clínica, hospital, escola, comunidade, organizações e justiça",
      "Mediação de conflitos e grupos terapêuticos",
      "Promoção de saúde mental e prevenção",
      "Intervenções em urgência e emergência psicológica (crise, risco de suicídio)",
    ],
  },
  {
    titulo: "Psicopatologia",
    subitens: [
      "Natureza e causa dos distúrbios",
      "Psicopatologia e justiça",
      "Dependência química (álcool e drogas)",
      "Psicopatologia da criança e do adolescente",
      "Psicopatologia do idoso",
    ],
  },
  {
    titulo: "Psicologia Social",
    subitens: [
      "Histórico e correntes (europeia, americana e latino-americana)",
      "Teoria das Representações Sociais (Moscovici)",
      "Identidade social e psicologia das massas",
      "Relação indivíduo–sociedade",
      "Atitudes, preconceito e estereótipos",
      "Processos de influência social (conformidade, obediência, persuasão)",
      "Dinâmica de grupos (liderança, coesão, papéis sociais)",
      "Cultura, subjetividade e ideologia",
      "Psicologia comunitária: empoderamento, participação e redes sociais",
      "Questões sociais no Brasil: violência, pobreza, desigualdade, direitos humanos, saúde coletiva",
    ],
  },
  {
    titulo: "Grupo social e familiar",
    subitens: ["O indivíduo e o grupo", "Transformações da família"],
  },
  {
    titulo: "Saúde Mental",
    subitens: [
      "Princípios da luta antimanicomial",
      "Promoção e proteção da saúde mental",
    ],
  },
  {
    titulo: "Psicologia e Justiça",
    subitens: ["Compromisso social da psicologia", "Ética e direitos humanos"],
  },
  {
    titulo: "Psicologia Jurídica",
    subitens: [
      "Adoção, infância e juventude, idoso, família",
      "Adolescente em conflito com a lei",
      "Violência doméstica e familiar",
      "Violência contra a mulher",
      "Área criminal",
      "Abuso sexual e interfaces com a psicologia",
    ],
  },
  {
    titulo: "Psicodinâmica do Trabalho",
    subitens: [
      "Processos de trabalho e subjetividade",
      "Saúde mental e trabalho",
      "Prazer, sofrimento e adoecimento relacionados ao trabalho",
    ],
  },
  {
    titulo: "Legislação e Normas",
    subitens: [
      "Estatuto da Criança e do Adolescente (ECA)",
      "Estatuto do Idoso",
      "Lei nº 12.010/2009 – Lei da Adoção",
      "Lei nº 11.340/2006 – Lei Maria da Penha",
      "Código de Ética do Psicólogo e resoluções do CFP",
      "Lei da Alienação Parental",
    ],
  },
];

import { useState, useEffect } from "react";

function getTotalSubitens(arr: { titulo: string; subitens: string[] }[]) {
  return arr.reduce((acc, t) => acc + t.subitens.length, 0);
}

export default function Home() {
  // Estado para cada subitem
  const [checkedGerais, setCheckedGerais] = useState<boolean[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("checkedGerais");
      return saved
        ? JSON.parse(saved)
        : Array(getTotalSubitens(topicosGerais)).fill(false);
    }
    return Array(getTotalSubitens(topicosGerais)).fill(false);
  });
  const [checkedEspecificos, setCheckedEspecificos] = useState<boolean[]>(
    () => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("checkedEspecificos");
        return saved
          ? JSON.parse(saved)
          : Array(getTotalSubitens(topicosEspecificos)).fill(false);
      }
      return Array(getTotalSubitens(topicosEspecificos)).fill(false);
    }
  );

  useEffect(() => {
    localStorage.setItem("checkedGerais", JSON.stringify(checkedGerais));
  }, [checkedGerais]);
  useEffect(() => {
    localStorage.setItem(
      "checkedEspecificos",
      JSON.stringify(checkedEspecificos)
    );
  }, [checkedEspecificos]);

  const progresso = Math.round(
    ((checkedGerais.filter(Boolean).length +
      checkedEspecificos.filter(Boolean).length) /
      (getTotalSubitens(topicosGerais) +
        getTotalSubitens(topicosEspecificos))) *
      100
  );

  let idxGeral = 0;
  let idxEspecifico = 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 sm:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">
          Planejador de Estudos ALEAM Psicólogo 2025
        </h1>
        <p className="mb-4 text-gray-700">
          Marque os tópicos e subitópicos estudados e acompanhe seu progresso!
        </p>
        <div className="mb-6">
          <div className="mb-2 font-semibold text-blue-700">
            Progresso geral: {progresso}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all"
              style={{ width: `${progresso}%` }}
            ></div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">
            Conhecimentos Gerais
          </h2>
          {topicosGerais.map((topico, i) => (
            <div key={i} className="mb-4">
              <div className="font-semibold text-blue-700 mb-1">
                {topico.titulo}
              </div>
              <ul className="ml-4">
                {topico.subitens.map((sub, j) => {
                  const idx = idxGeral;
                  idxGeral++;
                  return (
                    <li key={j} className="mb-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={checkedGerais[idx]}
                          onChange={() => {
                            const novo = [...checkedGerais];
                            novo[idx] = !novo[idx];
                            setCheckedGerais(novo);
                          }}
                        />
                        <span>{sub}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">
            Conhecimentos Específicos (Psicologia)
          </h2>
          {topicosEspecificos.map((topico, i) => (
            <div key={i} className="mb-4">
              <div className="font-semibold text-blue-700 mb-1">
                {topico.titulo}
              </div>
              <ul className="ml-4">
                {topico.subitens.map((sub, j) => {
                  const idx = idxEspecifico;
                  idxEspecifico++;
                  return (
                    <li key={j} className="mb-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={checkedEspecificos[idx]}
                          onChange={() => {
                            const novo = [...checkedEspecificos];
                            novo[idx] = !novo[idx];
                            setCheckedEspecificos(novo);
                          }}
                        />
                        <span>{sub}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-gray-500 text-sm">
          Em breve: cronograma, estatísticas e simulados!
        </div>
      </div>
    </div>
  );
}
// ...existing code...
