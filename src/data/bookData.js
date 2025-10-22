export const bookData = {
  livro: {
    id: "filosofia-contemporanea-chinesa",
    titulo: "A Filosofia Contemporânea Chinesa",
    subtitulo: "Uma Introdução aos Pensadores que Redesenham o Mundo",
    autor: "Seu Nome",
    versao: "1.0",
    data_publicacao: "2025",
    idioma: "pt-BR",
    total_capitulos: 24,
    duracao_total_leitura: "420min",
    
    tema_visual: {
      cor_primaria: "#D32F2F",
      cor_secundaria: "#FFC107",
      fonte_titulos: "Noto Serif SC",
      fonte_corpo: "Noto Sans",
      estilo: "minimalista_oriental"
    }
  },

  hipoteses: [
    {
      id: "hipotese_1",
      numero: 1,
      titulo_curto: "Universalidade em Disputa",
      titulo_completo: "O conjunto da obra dos cinco filósofos aponta para uma filosofia global de 'raízes múltiplas', que desafia a pretensão ocidental de universalidade homogênea.",
      ideograma: {
        caracteres: "普遍",
        pinyin: "pǔbiàn",
        significado: "Universalidade - o ideograma une o traço do 'comum' e do 'amplo', sugerindo não apenas o que se espalha, mas aquilo que se torna horizonte compartilhado."
      },
      cor_tema: "#FF6B6B",
      icone: "🌐",
      filosofos_principais: ["mou_zongsan", "tu_weiming", "zhao_tingyang"],
      capitulos_relacionados: ["prefacio", "cap_01", "cap_05", "cap_14", "cap_15", "cap_17"],
      analise_sintetica: "Esta é a hipótese mais abrangente, pois sintetiza o espírito da filosofia chinesa contemporânea: propor uma filosofia verdadeiramente global que não parte da homogeneização ocidental, mas de uma pluralidade enraizada em tradições distintas.",
      critica_sintetica: "O risco é ser interpretado como relativismo cultural. Entretanto, a proposta chinesa não nega universalidade, mas defende sua construção policêntrica.",
      palavra_chave: "pluralidade"
    },
    {
      id: "hipotese_2",
      numero: 2,
      titulo_curto: "O Nó Ético-Político",
      titulo_completo: "A filosofia chinesa contemporânea reabre o debate sobre a relação entre moralidade e política, unindo Kant, Confúcio e Tianxia numa síntese ainda inconclusa.",
      ideograma: {
        caracteres: "道德",
        pinyin: "dàodé",
        significado: "Moralidade - literalmente, 'o Caminho e a Virtude'. Não é a moral como código imposto, mas como percurso existencial."
      },
      cor_tema: "#4ECDC4",
      icone: "⚖️",
      filosofos_principais: ["mou_zongsan", "zhao_tingyang"],
      capitulos_relacionados: ["cap_05", "cap_10", "cap_14", "cap_17"],
      analise_sintetica: "Mostra o esforço sistemático dos filósofos chineses para superar o abismo entre ética e política — tema central do Ocidente desde Maquiavel.",
      critica_sintetica: "A síntese proposta é de difícil viabilidade, porque as tradições possuem pressupostos ontológicos distintos. Ainda assim, esse esforço é criativo e ousado.",
      palavra_chave: "síntese"
    },
    {
      id: "hipotese_3",
      numero: 3,
      titulo_curto: "Modernidade da Comunidade",
      titulo_completo: "O humanismo confuciano, em suas variações de Tu, Chen e Mou, desafia o Ocidente a pensar uma modernidade não individualista, mas comunitária e relacional.",
      ideograma: {
        caracteres: "社群",
        pinyin: "shèqún",
        significado: "Comunidade - o ideograma traz o radical de 'altar' e 'grupo', evocando tanto o espaço ritual quanto a coletividade que nele se reúne."
      },
      cor_tema: "#95E1D3",
      icone: "👥",
      filosofos_principais: ["tu_weiming", "chen_lai", "mou_zongsan"],
      capitulos_relacionados: ["cap_02", "cap_03", "cap_09", "cap_15", "cap_18"],
      analise_sintetica: "A hipótese mostra como o confucionismo é atualizado como alternativa ao individualismo exacerbado do liberalismo ocidental.",
      critica_sintetica: "O perigo é que essa ênfase no comunitário seja vista como coletivismo que sufoca a autonomia. No entanto, os filósofos defendem uma dialética de 'indivíduo na comunidade'.",
      palavra_chave: "relacionalidade"
    },
    {
      id: "hipotese_4",
      numero: 4,
      titulo_curto: "Tianxia: O Mundo como Ordem",
      titulo_completo: "A proposta Tianxia de Zhao Tingyang coloca em choque o universalismo kantiano e o realismo político ocidental, emergindo como uma alternativa inclusiva que é vista, ao mesmo tempo, como cosmopolitismo ético e como possível legitimação de hegemonia chinesa.",
      ideograma: {
        caracteres: "天下",
        pinyin: "tiānxià",
        significado: "Tianxia - 'Tudo sob o Céu'. Palavra de ressonância antiga, que no pensamento contemporâneo ganha nova força: imaginar o mundo não como soma de fronteiras, mas como casa comum."
      },
      cor_tema: "#F38181",
      icone: "☁️",
      filosofos_principais: ["zhao_tingyang"],
      capitulos_relacionados: ["cap_10", "cap_17"],
      analise_sintetica: "Zhao é o pensador chinês mais visível internacionalmente porque propõe uma alternativa estrutural à ordem internacional. Sua visão de Tianxia critica a lógica westfaliana e sugere uma governança inclusiva global.",
      critica_sintetica: "A ambiguidade de Tianxia é um problema: pode ser lida como cosmopolitismo ou como justificativa de hegemonia. Esse duplo sentido explica tanto seu fascínio quanto suas resistências no debate internacional.",
      palavra_chave: "ordem_global"
    },
    {
      id: "hipotese_5",
      numero: 5,
      titulo_curto: "O Dilema da Autonomia",
      titulo_completo: "A filosofia confuciana de Tu Weiming e Chen Lai revela um paradoxo: enquanto o Ocidente radicalizou o individualismo, a China oferece uma ética relacional que pode corrigir excessos liberais, mas que também tensiona valores universais de autonomia.",
      ideograma: {
        caracteres: "自主",
        pinyin: "zìzhǔ",
        significado: "Autonomia - literalmente, 'ser senhor de si'. Mas o ideograma sugere mais: indica a capacidade de assumir responsabilidade própria dentro de um tecido coletivo."
      },
      cor_tema: "#AA96DA",
      icone: "🎭",
      filosofos_principais: ["tu_weiming", "chen_lai", "mou_zongsan"],
      capitulos_relacionados: ["cap_09", "cap_14", "cap_15", "cap_18"],
      analise_sintetica: "Esse paradoxo é vital porque expõe a fronteira do diálogo entre Confucionismo e Liberalismo. Ao mesmo tempo que corrige o individualismo, a ética relacional pode colidir com princípios de autonomia e direitos individuais.",
      critica_sintetica: "Resolver esse paradoxo exige uma hermenêutica comparativa cuidadosa. Se não for bem trabalhado, pode se reduzir a estereótipos empobrecedores.",
      palavra_chave: "paradoxo"
    },
    {
      id: "hipotese_6",
      numero: 6,
      titulo_curto: "A Estética do Pensamento",
      titulo_completo: "A filosofia de Li Zehou recoloca estética e emoção como dimensões estruturais do pensamento, desafiando a primazia ocidental da razão instrumental e evidenciando a lacuna da filosofia política ocidental em integrar emoção e razão.",
      ideograma: {
        caracteres: "美学",
        pinyin: "měixué",
        significado: "Estética - o 'estudo do belo'. Para Li Zehou, não se trata apenas de arte ou gosto, mas da fundação mesma do humano: emoção e beleza como modos de conhecer o mundo."
      },
      cor_tema: "#FCBAD3",
      icone: "🎨",
      filosofos_principais: ["li_zehou"],
      capitulos_relacionados: ["cap_07", "cap_11", "cap_16"],
      analise_sintetica: "Li Zehou propõe que estética e emoção não são acessórios, mas fundamentos do pensar e do agir. Essa visão desloca a centralidade da razão abstrata e conecta a filosofia à vida sensível e cultural.",
      critica_sintetica: "O risco é duplo: que sua ênfase na estética seja interpretada como subjetivismo; e que a tradução de suas categorias para o vocabulário filosófico ocidental gere incomunicabilidade.",
      palavra_chave: "sensibilidade"
    },
    {
      id: "hipotese_7",
      numero: 7,
      titulo_curto: "Cosmopolitismo Ferido",
      titulo_completo: "A emergência de Zhao Tingyang evidencia a tensão entre cosmopolitismo ético e hegemonia política, ampliando a crítica à ordem internacional de base westfaliana.",
      ideograma: {
        caracteres: "世界主义",
        pinyin: "shìjiè zhǔyì",
        significado: "Cosmopolitismo - 'Doutrina do mundo'. A ideia de que somos cidadãos do mundo inteiro, mas não sob uma bandeira única: um cosmopolitismo ferido, que vive entre o ideal ético e o risco de hegemonia."
      },
      cor_tema: "#FFFFD2",
      icone: "🌍",
      filosofos_principais: ["zhao_tingyang", "tu_weiming"],
      capitulos_relacionados: ["cap_12", "cap_17"],
      analise_sintetica: "Essa tese é mais específica, mas mostra a relevância política de Zhao. Ele coloca em pauta um problema incontornável: toda proposta cosmopolita corre o risco de mascarar interesses hegemônicos.",
      critica_sintetica: "O problema não é exclusivo da China: qualquer projeto universal (mesmo os ocidentais) enfrentam essa crítica. A força da tese de Zhao está em explicitar essa tensão, não em resolvê-la.",
      palavra_chave: "ambiguidade"
    }
  ],

  filosofos: [
    {
      id: "mou_zongsan",
      nome: "Mou Zongsan",
      caracteres: "牟宗三",
      pinyin: "Mù Zōngsān",
      anos: "1909-1995",
      pais_origem: "China (Shandong)",
      local_atuacao: "Taiwan, Hong Kong",
      movimento: "Novo Confucionismo (fundador)",
      contribuicao_essencial: "Síntese entre moralidade kantiana e confucionismo",
      frase_iconica: "O confucionismo pode superar Kant porque permite uma intuição intelectual da realidade moral.",
      capitulo_dedicado: "cap_14",
      cor_tema: "#3498db",
      icone_representativo: "📚",
      hipoteses_relacionadas: ["hipotese_1", "hipotese_2", "hipotese_5"],
      obras_principais: [
        "Crítica da Consciência Moral",
        "Intuição Intelectual e Filosofia Chinesa"
      ],
      dialogo_ocidental: ["Kant", "Hegel", "Husserl"],
      legado: "Base teórica do Novo Confucionismo; inspirou Tu Weiming e Chen Lai"
    },
    {
      id: "tu_weiming",
      nome: "Tu Weiming",
      caracteres: "杜维明",
      pinyin: "Dù Wéimíng",
      anos: "1940-presente",
      pais_origem: "China (Yunnan)",
      local_atuacao: "EUA (Harvard), China (Pequim)",
      movimento: "Novo Confucionismo (3ª geração)",
      contribuicao_essencial: "Humanismo confuciano como ética global",
      frase_iconica: "O confucionismo é um humanismo espiritual que pode dialogar com todas as civilizações.",
      capitulo_dedicado: "cap_15",
      cor_tema: "#2ecc71",
      icone_representativo: "🌏",
      hipoteses_relacionadas: ["hipotese_1", "hipotese_3", "hipotese_5", "hipotese_7"],
      obras_principais: [
        "Confucian Thought: Selfhood as Creative Transformation",
        "Centrality and Commonality"
      ],
      dialogo_ocidental: ["Habermas", "Charles Taylor", "Hans Küng"],
      legado: "Embaixador global do confucionismo; mediador intercultural"
    },
    {
      id: "li_zehou",
      nome: "Li Zehou",
      caracteres: "李泽厚",
      pinyin: "Lǐ Zéhòu",
      anos: "1930-2021",
      pais_origem: "China (Hunan)",
      local_atuacao: "China continental (até 1989), EUA (exílio)",
      movimento: "Filosofia Estética Chinesa",
      contribuicao_essencial: "Estética como fundamento filosófico; sedimentação cultural",
      frase_iconica: "A emoção e a estética são a base da ética, não apenas a razão.",
      capitulo_dedicado: "cap_16",
      cor_tema: "#e74c3c",
      icone_representativo: "🎭",
      hipoteses_relacionadas: ["hipotese_6"],
      obras_principais: [
        "The Path of Beauty",
        "A History of Ancient Chinese Thought"
      ],
      dialogo_ocidental: ["Kant (estética)", "Marx", "Hegel"],
      legado: "Reintroduziu estética como centro do pensamento filosófico chinês"
    },
    {
      id: "zhao_tingyang",
      nome: "Zhao Tingyang",
      caracteres: "赵汀阳",
      pinyin: "Zhào Tīngyáng",
      anos: "1961-presente",
      pais_origem: "China (Shaanxi)",
      local_atuacao: "China (Academia Chinesa de Ciências Sociais)",
      movimento: "Filosofia Política Chinesa",
      contribuicao_essencial: "Teoria do Tianxia (天下) - ordem mundial inclusiva",
      frase_iconica: "Tianxia não é império, mas uma ordem onde nenhum povo fica 'fora do céu'.",
      capitulo_dedicado: "cap_17",
      cor_tema: "#f39c12",
      icone_representativo: "☁️",
      hipoteses_relacionadas: ["hipotese_1", "hipotese_2", "hipotese_4", "hipotese_7"],
      obras_principais: [
        "The Tianxia System: An Introduction to the Philosophy of a World Institution",
        "Redefining a Philosophy for World Governance"
      ],
      dialogo_ocidental: ["Kant (paz perpétua)", "Rawls", "Carl Schmitt"],
      legado: "Filósofo chinês mais traduzido e debatido globalmente; voz da China na filosofia política internacional"
    },
    {
      id: "chen_lai",
      nome: "Chen Lai",
      caracteres: "陈来",
      pinyin: "Chén Lái",
      anos: "1952-presente",
      pais_origem: "China (Hunan)",
      local_atuacao: "China (Universidade de Pequim)",
      movimento: "Novo Confucionismo (3ª geração)",
      contribuicao_essencial: "Hermenêutica confuciana; reconstrução da tradição",
      frase_iconica: "A modernização chinesa deve ter como eixo a tradição cultural e filosófica própria.",
      capitulo_dedicado: "cap_18",
      cor_tema: "#9b59b6",
      icone_representativo: "📜",
      hipoteses_relacionadas: ["hipotese_3", "hipotese_5"],
      obras_principais: [
        "Ancient Chinese Thought, Modern Chinese Philosophy",
        "Tradition and Modernity"
      ],
      dialogo_ocidental: ["Gadamer", "Ricoeur (hermenêutica)"],
      legado: "Guardião hermenêutico da tradição; consolidou a filosofia chinesa como campo acadêmico autônomo"
    }
  ],

  partes: [
    {
      id: "parte_1",
      numero: 1,
      titulo: "Contextualização",
      subtitulo: "China: Força Gravitacional do Século XXI",
      descricao: "Por que a filosofia chinesa importa agora",
      ordem: 1,
      cor_tema: "#E3F2FD",
      icone: "🌏",
      duracao_total: "75min",
      capitulos: ["prefacio", "cap_01", "cap_02", "cap_03", "cap_04"],
      objetivo_aprendizado: "Compreender o contexto histórico e cultural que moldou a filosofia chinesa contemporânea"
    },
    {
      id: "parte_2",
      numero: 2,
      titulo: "Correntes Filosóficas",
      subtitulo: "Os Caminhos do Pensamento Moderno",
      descricao: "Novo Confucionismo, Marxismo e outras vozes",
      ordem: 2,
      cor_tema: "#FFF3E0",
      icone: "🧭",
      duracao_total: "85min",
      capitulos: ["cap_05", "cap_06", "cap_07", "cap_08"],
      objetivo_aprendizado: "Identificar as principais correntes filosóficas que definiram a China moderna"
    },
    {
      id: "parte_3",
      numero: 3,
      titulo: "Questões Contemporâneas",
      subtitulo: "Dilemas da China do Século XXI",
      descricao: "Ética, política, cultura e identidade",
      ordem: 3,
      cor_tema: "#F3E5F5",
      icone: "⚖️",
      duracao_total: "90min",
      capitulos: ["cap_09", "cap_10", "cap_11", "cap_12"],
      objetivo_aprendizado: "Analisar como a filosofia chinesa aborda os desafios éticos, políticos e culturais atuais"
    },
    {
      id: "parte_4",
      numero: 4,
      titulo: "Os Filósofos",
      subtitulo: "5 Vozes que Redesenham o Mundo",
      descricao: "Mou, Tu, Li, Zhao e Chen",
      ordem: 4,
      cor_tema: "#E8F5E9",
      icone: "👤",
      duracao_total: "110min",
      capitulos: ["cap_13", "cap_14", "cap_15", "cap_16", "cap_17", "cap_18"],
      objetivo_aprendizado: "Conhecer os pensadores que definem a filosofia chinesa contemporânea e suas contribuições únicas"
    },
    {
      id: "parte_5",
      numero: 5,
      titulo: "Síntese",
      subtitulo: "7 Chaves para o Pensamento Chinês",
      descricao: "Hipóteses e reflexão final",
      ordem: 5,
      cor_tema: "#FFEBEE",
      icone: "🔑",
      duracao_total: "60min",
      capitulos: ["cap_19", "cap_20"],
      objetivo_aprendizado: "Integrar todo o conhecimento em um mapa conceitual coerente das 7 hipóteses centrais",
      e_capitulo_nucleo: true
    }
  ],

  jornadas_tematicas: [
    {
      id: "jornada_7_dias",
      titulo: "Jornada de 7 Dias",
      subtitulo: "Uma hipótese por dia",
      descricao: "Explore as 7 hipóteses centrais em uma semana de reflexão",
      duracao_total: "7 dias",
      dificuldade: "intermediário",
      icone: "📅",
      dias: [
        {
          dia: 1,
          hipotese: "hipotese_1",
          atividades: ["Ler prefácio", "Capítulo 1", "Reflexão sobre universalidade"],
          duracao: "45min"
        },
        {
          dia: 2,
          hipotese: "hipotese_2",
          atividades: ["Capítulo 5", "Exercício ético-político", "Debate"],
          duracao: "50min"
        },
        {
          dia: 3,
          hipotese: "hipotese_3",
          atividades: ["Capítulo 2", "Capítulo 15", "Reflexão comunitária"],
          duracao: "55min"
        },
        {
          dia: 4,
          hipotese: "hipotese_4",
          atividades: ["Capítulo 17", "Análise Tianxia", "Comparação internacional"],
          duracao: "60min"
        },
        {
          dia: 5,
          hipotese: "hipotese_5",
          atividades: ["Capítulo 14", "Capítulo 18", "Dilema autonomia"],
          duracao: "50min"
        },
        {
          dia: 6,
          hipotese: "hipotese_6",
          atividades: ["Capítulo 16", "Exercício estético", "Reflexão sensorial"],
          duracao: "45min"
        },
        {
          dia: 7,
          hipotese: "hipotese_7",
          atividades: ["Capítulo 19", "Síntese final", "Auto-avaliação"],
          duracao: "60min"
        }
      ]
    },
    {
      id: "trilha_iniciante",
      titulo: "Trilha do Iniciante",
      subtitulo: "Primeiros passos na filosofia chinesa",
      descricao: "Introdução suave aos conceitos fundamentais",
      duracao_total: "2 horas",
      dificuldade: "iniciante",
      icone: "🌱",
      etapas: [
        {
          etapa: 1,
          titulo: "Contexto",
          atividades: ["Prefácio", "Capítulo 1"],
          duracao: "30min"
        },
        {
          etapa: 2,
          titulo: "Tradições",
          atividades: ["Capítulo 2", "Glossário básico"],
          duracao: "40min"
        },
        {
          etapa: 3,
          titulo: "Filósofos",
          atividades: ["Capítulo 13", "Perfis resumidos"],
          duracao: "30min"
        },
        {
          etapa: 4,
          titulo: "Síntese",
          atividades: ["Capítulo 19 (versão simplificada)", "Reflexão"],
          duracao: "20min"
        }
      ]
    }
  ]
};
