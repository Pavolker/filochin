// Dados completos do livro "A Filosofia Contemporânea Chinesa"
const bookData = {
  // Informações gerais do livro
  livro: {
    titulo: "A Filosofia Contemporânea Chinesa",
    subtitulo: "Sete chaves para compreender o pensamento chinês atual",
    autor: "Autor do Livro",
    ano: "2025",
    total_capitulos: 24,
    total_paginas: "~300",
    idioma_original: "Português",
    tema_central: "Filosofia chinesa contemporânea através de 5 filósofos e 7 hipóteses"
  },

  // Estrutura do livro
  estrutura: {
    prefacio: "A China como Força Gravitacional Global",
    introducao: "O Que é Filosofia Contemporânea Chinesa?",
    partes: [
      {
        numero: 1,
        titulo: "Contexto Histórico e Tradições",
        capitulos: ["cap_02", "cap_03", "cap_04"],
        descricao: "Fundamentos históricos e tradições clássicas"
      },
      {
        numero: 2,
        titulo: "Correntes Filosóficas Contemporâneas",
        capitulos: ["cap_05", "cap_06", "cap_07", "cap_08"],
        descricao: "Novo Confucionismo, Marxismo Chinês e outras correntes"
      },
      {
        numero: 3,
        titulo: "Questões Éticas e Sociais",
        capitulos: ["cap_09", "cap_10", "cap_11", "cap_12"],
        descricao: "Ética, política, cultura e identidade"
      },
      {
        numero: 4,
        titulo: "Os Cinco Filósofos",
        capitulos: ["cap_13", "cap_14", "cap_15", "cap_16", "cap_17", "cap_18"],
        descricao: "Perfis detalhados dos pensadores centrais"
      },
      {
        numero: 5,
        titulo: "Síntese e Perspectivas",
        capitulos: ["cap_19", "cap_20", "cap_21", "cap_22", "cap_23", "cap_24"],
        descricao: "As 7 hipóteses e recursos complementares"
      }
    ]
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
  ],

  // Capítulos completos do livro
  capitulos: {
    prefacio: {
      id: "prefacio",
      titulo: "Prefácio",
      subtitulo: "A China como Força Gravitacional Global",
      numero: 0,
      duracao_leitura: "15min",
      dificuldade: "intermediário",
      e_prefacio: true,
      conteudo: `# Prefácio: A China como Força Gravitacional Global

## Uma Metáfora Poderosa

Assim como a massa curva o espaço segundo Einstein, a China curva o espaço cultural, político e econômico global. Apesar disso, apenas 0,051% das teses brasileiras abordam a China.

### O Paradoxo da Presença Chinesa

A China representa:
- 18% da população mundial
- 2ª maior economia global
- Líder no índice CINC desde 2007

Mas no Brasil:
- Apenas 561 trabalhos sobre China em 1.079.212 teses
- Desproporcional ao peso global

### A Tradição Intelectual Chinesa

Desde as inscrições oraculares (séc. XIV a.C.) até a Grande Enciclopédia Yongle (1408), a China construiu uma tradição intelectual de 5 milênios.

### Reflexão

Se a China é uma 'massa' que curva o espaço cultural global, que tipo de 'órbitas' ela cria para outros países?`,
      conceitos_chave: [
        {
          termo: "Curvatura do espaço-tempo (metáfora)",
          definicao: "A China como massa que deforma o espaço global",
          caracteres: null
        },
        {
          termo: "CINC",
          definicao: "Índice Composto de Capacidade Nacional",
          caracteres: null
        },
        {
          termo: "Yongle Dadian",
          definicao: "Grande Enciclopédia Yongle (11mil volumes)",
          caracteres: "永乐大典"
        }
      ]
    },
    cap_01: {
      id: "cap_01",
      titulo: "Introdução",
      subtitulo: "O Que é Filosofia Contemporânea Chinesa?",
      numero: 1,
      duracao_leitura: "12min",
      dificuldade: "iniciante",
      conteudo: `# Capítulo 1: O Que é Filosofia Contemporânea Chinesa?

## Definição

A filosofia chinesa contemporânea emerge no século XX, respondendo aos desafios da modernidade ocidental enquanto mantém diálogo com tradições milenares.

### Marco Fundador: Movimento de 4 de Maio (1919)

Mobilização estudantil que marcou virada cultural na China:
- Defendeu ciência e democracia
- Crítica ao confucionismo tradicional
- Marco do início do período contemporâneo

### Os 4 Eixos Centrais

1. **Novo Confucionismo** (新儒家)
2. **Marxismo Chinês** (中国马克思主义)
3. **Relação filosofia-ciência**
4. **Questões ético-políticas**

### Desafios Metodológicos

#### O Problema da Tradução
Muitos termos filosóficos chineses não possuem equivalentes diretos:
- 仁 (rén) = benevolência? humanidade? amor universal?

#### Diversidade e Fragmentação
A filosofia chinesa moderna é composta por variedade de correntes com visões conflitantes.`,
      conceitos_chave: [
        {
          termo: "中国当代哲学",
          pinyin: "Zhōngguó dāngdài zhéxué",
          definicao: "Filosofia contemporânea chinesa",
          caracteres: "中国当代哲学"
        },
        {
          termo: "Novo Confucionismo",
          pinyin: "Xīn Rújiā",
          definicao: "Revitalização moderna da tradição confucionista",
          caracteres: "新儒家"
        },
        {
          termo: "Movimento de 4 de Maio",
          pinyin: "Wǔsì Yùndòng",
          definicao: "Marco da renovação cultural chinesa (1919)",
          caracteres: "五四运动"
        }
      ]
    },
    cap_02: {
      id: "cap_02",
      titulo: "Breve História da Filosofia Chinesa Clássica",
      subtitulo: "As três escolas fundamentais: Confucionismo, Taoismo e Budismo",
      numero: 2,
      duracao_leitura: "20min",
      dificuldade: "iniciante",
      conteudo: `# Capítulo 2: Breve História da Filosofia Chinesa Clássica

## As Três Escolas Fundamentais

As três principais correntes que moldaram o pensamento chinês ao longo dos séculos são o Confucionismo (儒家, Rújiā), o Taoismo (道家, Dàojiā) e o Budismo (佛教, Fójiào).

### 2.1 Confucionismo (儒家, Rújiā)

Fundado por Confúcio (孔子, Kǒngzǐ, 551-479 a.C.), enfatiza a ordem social, harmonia familiar e cultivo moral.

**Conceitos principais:**
- 仁 (rén): Benevolência, humanidade, compaixão
- 义 (yì): Justiça, retidão, senso de dever
- 礼 (lǐ): Rituais, etiqueta, normas sociais
- 智 (zhì): Sabedoria, conhecimento, discernimento
- 信 (xìn): Lealdade, honestidade, confiabilidade

### 2.2 Taoismo (道家, Dàojiā)

Atribuído a Lao Tzu (老子, Lǎozǐ), enfatiza viver em harmonia com o Tao.

**Conceitos principais:**
- 道 (dào): O Caminho, princípio fundamental
- 德 (dé): Virtude, poder, capacidade
- 无为 (wúwéi): Não-ação, espontaneidade
- 自然 (zìrán): Natureza, espontaneidade
- 阴阳 (yīnyáng): Forças complementares

### 2.3 Budismo (佛教, Fójiào)

Introduzido na China no século I d.C., adaptou-se à cultura chinesa.

**Conceitos principais:**
- 空 (kōng): Vazio, impermanência
- 缘起 (yuánqǐ): Originação dependente
- 慈悲 (cíbēi): Compaixão e misericórdia
- 智慧 (zhìhuì): Sabedoria transcendente`,
      conceitos_chave: [
        {
          termo: "儒家",
          pinyin: "Rújiā",
          definicao: "Confucionismo - escola filosófica fundada por Confúcio",
          caracteres: "儒家"
        },
        {
          termo: "道家",
          pinyin: "Dàojiā",
          definicao: "Taoismo - filosofia baseada no Tao",
          caracteres: "道家"
        },
        {
          termo: "佛教",
          pinyin: "Fójiào",
          definicao: "Budismo - religião e filosofia introduzida na China",
          caracteres: "佛教"
        }
      ]
    },
    cap_03: {
      id: "cap_03",
      titulo: "A Influência das Tradições Clássicas",
      subtitulo: "Como as escolas clássicas influenciam o pensamento contemporâneo",
      numero: 3,
      duracao_leitura: "18min",
      dificuldade: "iniciante",
      conteudo: `# Capítulo 3: A Influência das Tradições Clássicas no Pensamento Contemporâneo

## Continuidade e Relevância

As três escolas filosóficas clássicas continuam a exercer influência significativa no pensamento contemporâneo chinês.

### Novo Confucionismo

O Novo Confucionismo busca revitalizar e modernizar a tradição confucionista:
- Reafirmação dos valores confucionistas universais
- Ênfase na subjetividade e experiência moral
- Diálogo com o pensamento ocidental
- Preocupação com a modernização da China

### Taoismo Contemporâneo

O Taoismo continua a inspirar muitos chineses:
- Prática do Tai Chi Chuan e Qigong
- Busca por harmonia com a natureza
- Cultivo da saúde e equilíbrio interior

### Budismo Moderno

O Budismo permanece importante na China:
- Milhões de seguidores
- Vasta rede de templos e mosteiros
- Prática da meditação
- Busca pela iluminação

## Contribuições para o Mundo Moderno

Os conceitos clássicos oferecem insights valiosos sobre:
- Ética e responsabilidade social
- Sustentabilidade ambiental
- Interdependência e impermanência
- Diálogo intercultural`,
      conceitos_chave: [
        {
          termo: "新儒家",
          pinyin: "Xīn Rújiā",
          definicao: "Novo Confucionismo - revitalização moderna da tradição",
          caracteres: "新儒家"
        },
        {
          termo: "太极拳",
          pinyin: "Tàijíquán",
          definicao: "Tai Chi Chuan - arte marcial baseada no Taoismo",
          caracteres: "太极拳"
        },
        {
          termo: "气功",
          pinyin: "qìgōng",
          definicao: "Qigong - prática de cultivo da energia vital",
          caracteres: "气功"
        }
      ]
    },
    cap_14: {
      id: "cap_14",
      titulo: "Mou Zongsan",
      subtitulo: "Síntese kantiana-confucionista e fundador do Novo Confucionismo",
      numero: 14,
      duracao_leitura: "30min",
      dificuldade: "avançado",
      e_capitulo_filosofo: true,
      filosofo_dedicado: "mou_zongsan",
      conteudo: `# Capítulo 14: Mou Zongsan (牟宗三, 1909–1995)

## Dados Biográficos Essenciais

Mou Zongsan nasceu em Shandong, em 1909, e faleceu em 1995, em Taipé. Formou-se em filosofia na Universidade de Pequim e viveu o período conturbado da guerra contra o Japão, da Revolução Comunista e da diáspora intelectual que levou muitos pensadores chineses a Taiwan e Hong Kong.

## Contexto Histórico e Cultural

A trajetória de Mou Zongsan é inseparável da história da China do século XX. Depois de 1949, a vitória comunista colocou a filosofia tradicional em posição marginal, considerada "feudal" e "reacionária". Nos territórios de Taiwan e Hong Kong, pensadores como Mou puderam dar continuidade à reflexão sobre a tradição confuciana.

## Obra Principal e Temas Centrais

Mou Zongsan deixou uma obra imensa, composta por dezenas de volumes, abrangendo metafísica, ética, epistemologia e filosofia política.

### Temas Centrais:
- **Moralidade como essência da filosofia**: A convicção de que a tradição chinesa tem como núcleo a moralidade
- **Liberdade e autonomia moral**: Inspirando-se em Kant, desenvolve uma interpretação em que o confucionismo sustenta uma noção forte de liberdade
- **Integração entre metafísica e ética**: A filosofia deve unir o "céu" (tian) e a humanidade
- **"Intelectualização da intuição"**: Conceito que busca explicar como o ser humano tem acesso direto a verdades morais universais

## Diálogo com a Filosofia Ocidental

Mou Zongsan teve um intenso diálogo com Kant. Ele considerava que a filosofia crítica kantiana havia atingido o ápice do pensamento moral ocidental, mas que havia deixado incompleta a possibilidade de conhecer a realidade moral em si mesma.

Para Mou, o confucionismo poderia superar Kant, porque a tradição chinesa não separa radicalmente fenômeno e númeno, mas permite uma intuição intelectual da realidade moral.

## Contribuições Específicas

- Reposicionou o confucionismo como filosofia viva
- Formulou um sistema filosófico que busca responder aos dilemas da modernidade chinesa
- Lançou as bases teóricas para os desenvolvimentos posteriores do Novo Confucionismo

## Legado e Influência

Mou Zongsan é considerado um fundador da filosofia chinesa contemporânea. Sua obra inspirou diretamente Tu Weiming, Chen Lai e toda uma geração de pensadores dedicados a atualizar o confucionismo.`,
      conceitos_chave: [
        {
          termo: "生命的学问",
          pinyin: "Shēngmìng de Xuéwèn",
          definicao: "O Esplendor da Vida e da Sabedoria - obra principal de Mou Zongsan",
          caracteres: "生命的学问"
        },
        {
          termo: "智的直觉",
          pinyin: "zhì de zhíjué",
          definicao: "Intuição intelectual - acesso direto à realidade moral",
          caracteres: "智的直觉"
        },
        {
          termo: "道德形而上学",
          pinyin: "dàodé xíngérshàngxué",
          definicao: "Metafísica moral - síntese entre Kant e Confúcio",
          caracteres: "道德形而上学"
        }
      ]
    },
    cap_04: {
      id: "cap_04",
      titulo: "O Impacto do Ocidente e a Modernização",
      subtitulo: "Transformações drásticas e crise de identidade",
      numero: 4,
      duracao_leitura: "22min",
      dificuldade: "intermediário",
      conteudo: `# Capítulo 4: O Impacto do Ocidente e a Modernização da China

## Transformações do Século XIX

O século XIX marcou um período de transformações drásticas para a China, impulsionadas pelo crescente contato com o Ocidente.

### Guerras do Ópio e Tratados Desiguais
- **Guerras do Ópio** (鸦片战争, Yāpiàn Zhànzhēng)
- **Tratados desiguais** (不平等条约, Bù Píngděng Tiáoyuē)
- Revelaram a fragilidade do Império Qing

### Introdução do Pensamento Ocidental
Intelectuais como **Yan Fu** e **Liang Qichao** introduziram:
- Iluminismo e liberalismo
- Socialismo e darwinismo
- Conceitos de liberdade individual
- Democracia e constitucionalismo

## Movimentos de Modernização

### Movimento de Auto-Fortalecimento (自强运动)
- Iniciado na década de 1860
- Modernização das forças armadas
- Importação de tecnologia ocidental

### Movimento de Reforma dos Cem Dias (百日维新)
- Liderado por Kang Youwei e Liang Qichao
- Reformas políticas e educacionais
- Inspirado no modelo japonês

### Movimento de Quatro de Maio (五四运动)
- Ponto de virada em 1919
- Nacionalismo e modernização
- Crítica da cultura tradicional
- Defesa da ciência e democracia

## Respostas Filosóficas

### Novo Confucionismo
- Revitalização dos valores confucionistas
- Diálogo entre Oriente e Ocidente
- Adaptação à modernidade

### Marxismo
- Análise científica da história
- Guia para sociedade socialista
- Adaptação ao contexto chinês

### Liberalismo e Nacionalismo
- Liberdade individual e democracia
- Fortalecimento da identidade cultural
- Resistência à influência ocidental`,
      conceitos_chave: [
        {
          termo: "鸦片战争",
          pinyin: "Yāpiàn Zhànzhēng",
          definicao: "Guerras do Ópio - conflitos que marcaram a abertura forçada da China",
          caracteres: "鸦片战争"
        },
        {
          termo: "五四运动",
          pinyin: "Wǔsì Yùndòng",
          definicao: "Movimento de Quatro de Maio - marco da modernização chinesa",
          caracteres: "五四运动"
        },
        {
          termo: "新文化运动",
          pinyin: "Xīn Wénhuà Yùndòng",
          definicao: "Movimento de Nova Cultura - transformação cultural radical",
          caracteres: "新文化运动"
        }
      ]
    },
    cap_05: {
      id: "cap_05",
      titulo: "O Novo Confucionismo",
      subtitulo: "Revitalização da tradição confucionista para a modernidade",
      numero: 5,
      duracao_leitura: "22min",
      dificuldade: "intermediário",
      conteudo: `# Capítulo 5: O Novo Confucionismo (新儒家)

## Introdução

O Novo Confucionismo (新儒家, Xīn Rújiā), também conhecido como Neo-Confucionismo do século XX, é uma corrente filosófica que surgiu na China no início do século XX e se desenvolveu ao longo do século, principalmente em Taiwan e Hong Kong. Ele representa uma tentativa de revitalizar e modernizar a tradição confucionista em face dos desafios impostos pela modernidade, pela ocidentalização e pelo marxismo.

O termo "Novo Confucionismo" foi cunhado por Zhang Junmai (张君劢, Zhāng Jūnmài) na década de 1920, mas o movimento já havia começado a tomar forma antes disso, com as obras de pensadores como Xiong Shili (熊十力, Xióng Shílì) e Liang Shuming (梁漱溟, Liáng Shùmíng). Esses intelectuais buscavam resgatar os valores e as ideias do Confucionismo, adaptando-os às novas realidades do mundo moderno.

## Características Principais

1. **Reafirmação dos valores confucionistas**: Os novos confucionistas defendem a relevância contínua dos valores confucionistas, como a benevolência (仁, rén), a justiça (义, yì), a礼 (lǐ) e a sabedoria (智, zhì), para a construção de uma sociedade justa e harmoniosa. Eles argumentam que esses valores são universais e podem contribuir para a solução dos problemas do mundo moderno.

2. **Ênfase na subjetividade e na experiência moral**: Os novos confucionistas valorizam a experiência moral individual e a importância do cultivo pessoal (修身, xiūshēn) como um caminho para a realização da virtude e da sabedoria. Eles enfatizam a importância da intuição moral e da capacidade de discernir o bem e o mal.

3. **Diálogo com o pensamento ocidental**: Os novos confucionistas buscam estabelecer um diálogo construtivo com o pensamento ocidental, incorporando ideias e conceitos da filosofia, da ciência e da cultura ocidental em sua própria visão de mundo. Eles argumentam que o Confucionismo pode se beneficiar do contato com o Ocidente, e que o Ocidente pode se beneficiar do contato com o Confucionismo.

4. **Preocupação com a modernização da China**: Os novos confucionistas se preocupam com a modernização da China e com a necessidade de construir uma sociedade forte, próspera e justa. Eles defendem a importância da educação, da ciência e da tecnologia, mas também alertam para os perigos do materialismo e do individualismo excessivo.

5. **Defesa da cultura chinesa**: Os novos confucionistas defendem a importância de preservar e promover a cultura chinesa, incluindo a língua, a literatura, a arte e as tradições. Eles argumentam que a cultura chinesa possui valores e ideias únicas que podem enriquecer o mundo e contribuir para a construção de um futuro melhor.

## Figuras Centrais

O Novo Confucionismo foi desenvolvido por uma série de figuras-chave, cada uma com sua própria perspectiva e contribuição. Entre os mais importantes, destacam-se Xiong Shili, Feng Youlan e Mou Zongsan.

### Xiong Shili (熊十力, Xióng Shílì, 1885-1968)
Considerado um dos fundadores do Novo Confucionismo. Sua filosofia é caracterizada por uma metafísica idealista e uma ênfase na importância da intuição e da experiência pessoal. Sua obra principal é Novo Tratado sobre o Isolamento da Consciência (新唯识论, Xīn Wéishì Lùn), na qual ele desenvolve uma teoria da consciência baseada na filosofia budista Yogacara e no Confucionismo. Xiong Shili argumentava que a realidade última é a Consciência Pura (真如, Zhēnrú), que é a fonte de toda a existência. Ele defendia a importância do cultivo pessoal e da meditação como um caminho para a realização da Consciência Pura e a superação do sofrimento.

### Feng Youlan (冯友兰, Féng Yǒulán, 1895-1990)
Um dos mais importantes filósofos chineses do século XX. Sua obra é caracterizada por uma tentativa de sintetizar o Confucionismo com a filosofia ocidental, especialmente o idealismo alemão. Sua obra principal é História da Filosofia Chinesa (中国哲学史, Zhōngguó Zhéxué Shǐ), na qual ele oferece uma interpretação sistemática e abrangente da história do pensamento chinês. Feng Youlan defendia a importância da razão e da lógica, mas também reconhecia o valor da intuição e da experiência moral. Ele argumentava que a filosofia deve buscar a verdade, o bem e a beleza, e que esses valores são universais e podem ser descobertos através da razão e da experiência.

### Mou Zongsan (牟宗三, Mù Zōngsān, 1909-1995)
Um dos mais importantes filósofos do Novo Confucionismo. Sua obra é caracterizada por uma defesa da autonomia da moralidade e uma crítica do cientificismo e do materialismo. Sua obra principal é O Esplendor da Vida e da Sabedoria (生命的学问, Shēngmìng de Xuéwèn), na qual ele desenvolve uma teoria da moralidade baseada na filosofia de Kant e no Confucionismo. Mou Zongsan argumentava que a moralidade é autônoma e não pode ser reduzida à ciência ou à utilidade. Ele defendia a importância do cultivo da virtude e da prática do bem como um caminho para a realização da liberdade e da dignidade humana.

## Diversidade Interna

O Novo Confucionismo não é um movimento monolítico, mas sim um campo de debate e de diversidade de opiniões. Dentro do movimento, existem diferentes vertentes e diferentes interpretações do Confucionismo. Uma das principais divisões dentro do Novo Confucionismo é entre os "idealistas" e os "realistas". Os idealistas, como Xiong Shili, enfatizam a importância da consciência e da experiência subjetiva, enquanto os realistas, como Feng Youlan, enfatizam a importância da razão e da objetividade.

Outra divisão importante é entre os que defendem uma interpretação mais tradicional do Confucionismo e os que defendem uma interpretação mais moderna e adaptada aos desafios do mundo contemporâneo. Alguns novos confucionistas defendem a importância de preservar as tradições e os rituais confucionistas, enquanto outros argumentam que é necessário adaptar o Confucionismo às novas realidades sociais e políticas.

## Conclusão

O Novo Confucionismo é um movimento complexo e multifacetado, que reflete a diversidade e a riqueza do pensamento chinês moderno. Ao estudar as diferentes vertentes e os debates dentro do Novo Confucionismo, podemos obter uma compreensão mais profunda e abrangente da filosofia chinesa contemporânea.`,
      conceitos_chave: [
        {
          termo: "新儒家",
          pinyin: "Xīn Rújiā",
          definicao: "Novo Confucionismo - movimento de revitalização da tradição confucionista",
          caracteres: "新儒家"
        },
        {
          termo: "仁",
          pinyin: "rén",
          definicao: "Benevolência - virtude central do confucionismo",
          caracteres: "仁"
        },
        {
          termo: "修身",
          pinyin: "xiūshēn",
          definicao: "Cultivo pessoal - prática fundamental do confucionismo",
          caracteres: "修身"
        }
      ]
    },
    cap_06: {
      id: "cap_06",
      titulo: "O Marxismo Chinês",
      subtitulo: "Adaptação às condições específicas da China",
      numero: 6,
      duracao_leitura: "26min",
      dificuldade: "intermediário",
      conteudo: `# Capítulo 6: O Marxismo Chinês e suas Interpretações

## Contexto Histórico

A adoção do marxismo na China foi moldada por um contexto único:
- Sociedade predominantemente agrária
- Economia feudal em declínio
- Sistema político imperial fragilizado
- Humilhação nas Guerras do Ópio

## Pioneiros do Marxismo Chinês

### Li Dazhao (李大钊)
- Um dos primeiros a introduzir o marxismo
- Enfatizou o papel do campesinato
- Análise das desigualdades sociais

### Chen Duxiu (陈独秀)
- Fundador do Partido Comunista Chinês
- Defensor da modernização
- Ciência e democracia

## Adaptações Principais

### Ênfase no Campesinato
- **Mao Zedong**: Campesinato como força motriz
- Guerra popular prolongada
- Táticas de guerrilha
- Mobilização das massas

### Incorporação da Cultura Chinesa
- Síntese marxismo-tradição chinesa
- Valores de harmonia social
- Respeito à autoridade
- Importância da família

## Mao Zedong e suas Contribuições

### Nova Democracia
- Fase intermediária antes do socialismo
- Aliança de classes
- Compartilhamento do poder

### Contradição como Força Motriz
- Luta entre forças opostas
- Resolução leva ao progresso
- Desenvolvimento dialético

### Contato com as Massas
- Partido serve ao povo
- Aprender com experiências populares
- Serviço ao bem comum

## Evolução do Marxismo Chinês

### Período Maoísta (1949-1976)
- Interpretação dogmática
- Luta de classes
- Revolução contínua
- Coletivização da economia

### Reformas de Deng Xiaoping
- "Socialismo com características chinesas"
- Economia de mercado
- Abertura ao investimento estrangeiro
- Pragmatismo econômico

### Marxismo Contemporâneo
- Ideologia oficial flexível
- Incorporação de nacionalismo
- Elementos confucionistas
- Legitimação do poder`,
      conceitos_chave: [
        {
          termo: "马克思主义",
          pinyin: "Mǎkèsī Zhǔyì",
          definicao: "Marxismo - ideologia adaptada ao contexto chinês",
          caracteres: "马克思主义"
        },
        {
          termo: "新民主主义",
          pinyin: "Xīn Mínzhǔ Zhǔyì",
          definicao: "Nova Democracia - fase intermediária proposta por Mao",
          caracteres: "新民主主义"
        },
        {
          termo: "中国特色社会主义",
          pinyin: "Zhōngguó Tèsè Shèhuìzhǔyì",
          definicao: "Socialismo com características chinesas - conceito de Deng Xiaoping",
          caracteres: "中国特色社会主义"
        }
      ]
    },
    cap_07: {
      id: "cap_07",
      titulo: "Filosofia e Ciência na China Contemporânea",
      subtitulo: "Diálogo entre tradição, ciência e tecnologia",
      numero: 7,
      duracao_leitura: "24min",
      dificuldade: "intermediário",
      resumo: "Examina como ciência, tecnologia e tradição filosófica se entrelaçam na China atual.",
      conteudo: `# Capítulo 7: Filosofia e Ciência na China Contemporânea\n\nEste capítulo apresenta as relações entre filosofia, ciência e tecnologia na China de hoje, explorando debates sobre modernização, racionalidade e inovação.\n\n- Ciência (科学, kēxué) e filosofia\n- Tecnologia (技术, jìshù) e ética\n- Pesquisa, universidades e políticas científicas`,
      conceitos_chave: [
        { termo: "科学", pinyin: "kēxué", definicao: "Ciência, eixo do debate contemporâneo", caracteres: "科学" },
        { termo: "技术", pinyin: "jìshù", definicao: "Tecnologia e modernização", caracteres: "技术" }
      ]
    },
    cap_08: {
      id: "cap_08",
      titulo: "Outras Correntes e Pensadores Relevantes",
      subtitulo: "Panorama de vozes e tendências contemporâneas",
      numero: 8,
      duracao_leitura: "22min",
      dificuldade: "intermediário",
      resumo: "Mapeia correntes filosóficas além do confucionismo e marxismo, destacando debates recentes.",
      conteudo: `# Capítulo 8: Outras Correntes e Pensadores Relevantes\n\nPanorama de escolas e pensadores que complementam o cenário contemporâneo.\n\n- Daoismo (道家) e releituras modernas\n- Budismo (佛教) e diálogo filosófico\n- Pragmatismo (实用主义) e influências ocidentais`,
      conceitos_chave: [
        { termo: "道家", pinyin: "dàojiā", definicao: "Daoismo como tradição filosófica", caracteres: "道家" },
        { termo: "佛教", pinyin: "fójiào", definicao: "Budismo e suas interações com a filosofia chinesa", caracteres: "佛教" }
      ]
    },
    cap_09: {
      id: "cap_09",
      titulo: "Ética e Moralidade na Sociedade Chinesa Moderna",
      subtitulo: "Valores, virtudes e dilemas éticos na modernidade",
      numero: 9,
      duracao_leitura: "26min",
      dificuldade: "intermediário",
      resumo: "Analisa a ética confuciana na sociedade moderna e suas tensões com individualismo e direitos.",
      conteudo: `# Capítulo 9: Ética e Moralidade na Sociedade Chinesa Moderna\n\nDiscussão sobre virtudes, deveres e responsabilidade social na China contemporânea.\n\n- 仁 (ren) e cuidado humano\n- 义 (yi) e justiça moral\n- 礼 (li) e normas sociais`,
      conceitos_chave: [
        { termo: "仁", pinyin: "rén", definicao: "Humanidade / benevolência", caracteres: "仁" },
        { termo: "义", pinyin: "yì", definicao: "Justiça / retidão", caracteres: "义" },
        { termo: "礼", pinyin: "lǐ", definicao: "Rito / etiqueta / norma", caracteres: "礼" }
      ]
    },
    cap_10: {
      id: "cap_10",
      titulo: "Política e Justiça Social na China Contemporânea",
      subtitulo: "Instituições, justiça e governança na China atual",
      numero: 10,
      duracao_leitura: "25min",
      dificuldade: "intermediário",
      resumo: "Debate justiça social, direitos e governança sob influências tradicionais e modernas.",
      conteudo: `# Capítulo 10: Política e Justiça Social na China Contemporânea\n\nExamina a relação entre filosofia, política e justiça social na China.\n\n- Governança e legitimidade\n- Direito e moralidade\n- Comunidade e bem comum`,
      conceitos_chave: [
        { termo: "政治", pinyin: "zhèngzhì", definicao: "Política e governança", caracteres: "政治" },
        { termo: "正义", pinyin: "zhèngyì", definicao: "Justiça social e moral", caracteres: "正义" }
      ]
    },
    cap_11: {
      id: "cap_11",
      titulo: "Cultura e Identidade na China Globalizada",
      subtitulo: "Tradicionalidade, globalização e identidade cultural",
      numero: 11,
      duracao_leitura: "23min",
      dificuldade: "intermediário",
      resumo: "Explora formação de identidade em contexto global, diáspora e mídia.",
      conteudo: `# Capítulo 11: Cultura e Identidade na China Globalizada\n\nAnalisa cultura, mídia e construção de identidades na China atual.\n\n- Tradição e modernidade\n- Globalização e hibridismos\n- Identidade cultural (文化认同)`,
      conceitos_chave: [
        { termo: "文化认同", pinyin: "wénhuà rèntóng", definicao: "Identidade cultural", caracteres: "文化认同" }
      ]
    },
    cap_12: {
      id: "cap_12",
      titulo: "Perspectivas da Filosofia Chinesa",
      subtitulo: "Caminhos futuros e direções de pesquisa",
      numero: 12,
      duracao_leitura: "21min",
      dificuldade: "intermediário",
      resumo: "Identifica agendas de pesquisa e perspectivas para a filosofia chinesa.",
      conteudo: `# Capítulo 12: Perspectivas da Filosofia Chinesa\n\nAponta tendências e questões abertas para investigações futuras.\n\n- Modernidade (现代性) em debate\n- Ética aplicada e tecnologia\n- Diálogo intercultural e tradução filosófica`,
      conceitos_chave: [
        { termo: "现代性", pinyin: "xiàndàixìng", definicao: "Modernidade", caracteres: "现代性" }
      ]
    },
    cap_13: {
      id: "cap_13",
      titulo: "Os Filósofos — Introdução",
      subtitulo: "Introdução aos cinco filósofos centrais",
      numero: 13,
      duracao_leitura: "20min",
      dificuldade: "intermediário",
      resumo: "Panorama inicial de Mou, Tu, Li, Zhao e Chen com temas-chave.",
      conteudo: `# Capítulo 13: Os Filósofos — Introdução\n\nApresenta os cinco pensadores centrais abordados na obra:\n\n- Mou Zongsan (牟宗三)\n- Tu Weiming (杜维明)\n- Li Zehou (李泽厚)\n- Zhao Tingyang (赵汀阳)\n- Chen Lai (陈来)`,
      conceitos_chave: [
        { termo: "哲学家", pinyin: "zhéxuéjiā", definicao: "Filósofo / pensador", caracteres: "哲学家" }
      ]
    },
    cap_15: {
      id: "cap_15",
      titulo: "Tu Weiming",
      subtitulo: "Humanismo confuciano e modernidade intercultural",
      numero: 15,
      duracao_leitura: "24min",
      dificuldade: "intermediário",
      e_capitulo_filosofo: true,
      filosofo_dedicado: "tu_weiming",
      resumo: "Apresenta a obra de Tu Weiming e sua visão de confucionismo global.",
      conteudo: `# Capítulo 15: Tu Weiming\n\nExplora o humanismo confuciano, espiritualidade e diálogo intercultural na obra de Tu Weiming.\n\n- Confucionismo como tradição viva\n- Ética relacional e responsabilidade\n- Modernidade múltipla e interculturalidade`,
      conceitos_chave: [
        { termo: "人文", pinyin: "rénwén", definicao: "Humanidades / humanismo", caracteres: "人文" }
      ]
    },
    cap_16: {
      id: "cap_16",
      titulo: "Li Zehou",
      subtitulo: "Estética, emoção e sedimentação cultural",
      numero: 16,
      duracao_leitura: "25min",
      dificuldade: "intermediário",
      e_capitulo_filosofo: true,
      filosofo_dedicado: "li_zehou",
      resumo: "Sintetiza a filosofia estética de Li Zehou e sua crítica à razão instrumental.",
      conteudo: `# Capítulo 16: Li Zehou\n\nApresenta a teoria estética e a filosofia prática de Li Zehou.\n\n- Emoção e racionalidade\n- Sedimentação cultural e história\n- Crítica à razão instrumental`,
      conceitos_chave: [
        { termo: "美学", pinyin: "měixué", definicao: "Estética / filosofia da arte", caracteres: "美学" }
      ]
    },
    cap_17: {
      id: "cap_17",
      titulo: "Zhao Tingyang",
      subtitulo: "Tianxia e filosofia política global",
      numero: 17,
      duracao_leitura: "30min",
      dificuldade: "avançado",
      e_capitulo_filosofo: true,
      filosofo_dedicado: "zhao_tingyang",
      conteudo: `# Capítulo 17: Zhao Tingyang (赵汀阳, 1961–)

## Dados Biográficos Essenciais

Zhao Tingyang nasceu em 1961, na província de Shaanxi. Doutorou-se em filosofia na Academia Chinesa de Ciências Sociais, onde se tornou pesquisador sênior. Sua formação é em filosofia ocidental e história da filosofia, mas sua obra ganhou notoriedade por trazer à cena internacional uma reformulação criativa do conceito clássico de Tianxia.

## Contexto Histórico e Cultural

Zhao escreve em um período marcado pela ascensão da China como potência global e pelo deslocamento do eixo econômico e político mundial para o Pacífico. Seu pensamento é inseparável da tentativa de formular uma filosofia política chinesa para o mundo.

## Obra Principal e Temas Centrais

### Tianxia como Sistema Político Global
Inspirado no conceito clássico, Zhao propõe uma visão de governança planetária que supere os limites do Estado-nação.

### Crítica ao Sistema Internacional Moderno
Considera o modelo westfaliano de soberania nacional como fonte de conflitos permanentes.

### Ética da Inclusão Universal
A política global deve ser organizada de modo a não deixar nenhum povo ou nação "fora do céu".

### Filosofia Relacional
Propõe que as relações, e não apenas as entidades individuais, sejam o fundamento da ordem política.

## Diálogo com a Tradição Chinesa

Zhao retoma o conceito clássico de Tianxia, usado na antiguidade para descrever a ordem imperial, mas o reconstrói filosoficamente para o século XXI. Em vez de uma hierarquia imperial, ele propõe uma concepção cosmopolita inclusiva.

## Diálogo com a Filosofia Ocidental

### Debates Principais
- **Kant**: Compara seu projeto com a ideia kantiana de "paz perpétua"
- **Rawls**: Crítica a teoria da justiça internacional por excluir povos não liberais
- **Carl Schmitt**: Discute a noção de inimigo e soberania
- **Cosmopolitismo**: Oferece solução ancorada em conceitos chineses

## Contribuições Específicas

- **Reformulação do Tianxia**: Conceito clássico como filosofia política contemporânea
- **Crítica do Estado-nação**: Proposta de alternativa ao sistema westfaliano
- **Ética global inclusiva**: Filosofia política para o mundo multipolar
- **Filosofia relacional**: Fundamentos relacionais da ordem política

## Legado e Influência

Zhao Tingyang representa a face mais internacional e cosmopolita da filosofia chinesa contemporânea, oferecendo uma alternativa chinesa aos problemas da governança global.`,
      conceitos_chave: [
        {
          termo: "天下",
          pinyin: "tiānxià",
          definicao: "Tianxia - conceito de ordem mundial inclusiva",
          caracteres: "天下"
        },
        {
          termo: "天下体系",
          pinyin: "tiānxià tǐxì",
          definicao: "Sistema Tianxia - proposta de governança global",
          caracteres: "天下体系"
        },
        {
          termo: "关系理性",
          pinyin: "guānxì lǐxìng",
          definicao: "Racionalidade relacional - fundamento da ordem política",
          caracteres: "关系理性"
        }
      ]
    },
    cap_18: {
      id: "cap_18",
      titulo: "Chen Lai",
      subtitulo: "Hermenêutica confuciana e modernidade com raízes",
      numero: 18,
      duracao_leitura: "28min",
      dificuldade: "intermediário",
      e_capitulo_filosofo: true,
      filosofo_dedicado: "chen_lai",
      conteudo: `# Capítulo 18: Chen Lai (陈来, 1952–)

## Dados Biográficos Essenciais

Chen Lai nasceu em 1952, na província de Hunan. Doutorou-se em filosofia na Universidade de Pequim, onde hoje é professor e diretor do Instituto de Filosofia Chinesa. É considerado um dos mais importantes representantes do Novo Confucionismo de terceira geração dentro da China continental.

## Contexto Histórico e Cultural

Chen pertence a uma geração que cresceu durante a Revolução Cultural, quando o confucionismo foi perseguido como símbolo de "feudalismo". A partir dos anos 1980, dedicou-se à recuperação da tradição confuciana em um ambiente intelectual que buscava reconstruir a identidade cultural chinesa.

## Obra Principal e Temas Centrais

### Reinterpretação do Confucionismo Clássico
Foco em Confúcio, Mêncio e Zhu Xi, buscando a coerência e profundidade da tradição textual.

### Hermenêutica Filosófica
Uso de métodos interpretativos para atualizar a tradição sem perder sua especificidade.

### Ética Confuciana na Modernidade
Debate sobre como princípios tradicionais (ren, li, yi) podem dialogar com os valores contemporâneos.

### Modernidade com Raízes
A ideia de que o futuro chinês só pode ser construído a partir de um núcleo cultural enraizado na tradição.

## Diálogo com a Tradição Chinesa

Chen é um dos mais importantes exegetas contemporâneos dos clássicos confucianos. Para ele, o confucionismo não é apenas um recurso cultural, mas uma fonte normativa para o presente.

## Diálogo com a Filosofia Ocidental

Chen dialoga sobretudo com a tradição hermenêutica ocidental (Gadamer, Ricoeur), defendendo que o estudo da tradição deve ser compreendido como processo de interpretação histórica e não mera repetição.

## Contribuições Específicas

- **Hermenêutica confuciana**: Estabeleceu as bases para uma hermenêutica confuciana contemporânea
- **Modernização enraizada**: Reforçou a ideia de que a modernização chinesa deve ter como eixo a tradição cultural
- **Fortalecimento institucional**: Contribuiu para o fortalecimento do estudo da filosofia chinesa dentro da China
- **Exegese rigorosa**: Trabalho filológico e hermenêutico de alta qualidade

## Legado e Influência

Chen Lai representa a face acadêmica e institucional da filosofia chinesa contemporânea, consolidando o estudo da tradição confuciana dentro da própria China continental.`,
      conceitos_chave: [
        {
          termo: "诠释学",
          pinyin: "quánshì xué",
          definicao: "Hermenêutica - método interpretativo da tradição",
          caracteres: "诠释学"
        },
        {
          termo: "有根的现代性",
          pinyin: "yǒu gēn de xiàndàixìng",
          definicao: "Modernidade com raízes - desenvolvimento baseado na tradição",
          caracteres: "有根的现代性"
        },
        {
          termo: "文化认同",
          pinyin: "wénhuà rèntóng",
          definicao: "Identidade cultural - reconstrução da identidade chinesa",
          caracteres: "文化认同"
        }
      ]
    },
  },

  recursos: {
    glossario: {
      id: "glossario",
      titulo: "Glossário",
      subtitulo: "45 termos fundamentais",
      icone: "📚",
      cor: "#3498db",
      total: 45,
      termos: [
        {
          id: "tianxia",
          termo: "天下 (tiānxià)",
          traducao: "Tudo sob o Céu",
          definicao: "Conceito central da filosofia política chinesa que designa uma ordem mundial inclusiva, onde nenhum povo fica 'fora do céu'. Proposto por Zhao Tingyang como alternativa à ordem westfaliana.",
          filosofo_principal: "zhao_tingyang",
          hipotese_relacionada: "hipotese_4",
          categoria: "política"
        },
        {
          id: "ren",
          termo: "仁 (rén)",
          traducao: "Benevolência",
          definicao: "Virtude suprema confucionista - amor, compaixão e respeito pelos outros. Base da ética relacional chinesa.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_2",
          categoria: "ética"
        },
        {
          id: "dao",
          termo: "道 (dào)",
          traducao: "O Caminho",
          definicao: "Princípio fundamental que governa o universo. Fonte de toda existência e padrão para toda ação.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "metafísica"
        },
        {
          id: "fengshui",
          termo: "风水 (fēngshuǐ)",
          traducao: "Geomancia",
          definicao: "A arte de harmonizar os edifícios e os espaços com o ambiente natural, a fim de promover a saúde, a prosperidade e a felicidade.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "prática"
        },
        {
          id: "yinyang",
          termo: "阴阳 (yīnyáng)",
          traducao: "Yin e Yang",
          definicao: "Os dois princípios complementares que representam a dualidade e a interdependência de todas as coisas no universo. Yin é passivo e feminino, enquanto Yang é ativo e masculino.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "metafísica"
        },
        {
          id: "ziran",
          termo: "自然 (zìrán)",
          traducao: "Natureza, Espontaneidade",
          definicao: "O estado natural das coisas, livre de interferência humana. Um ideal taoista de vida em harmonia com o mundo.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "taoismo"
        },
        {
          id: "jing",
          termo: "经 (jīng)",
          traducao: "Clássico, Escritura",
          definicao: "Os textos fundamentais das diferentes escolas filosóficas chinesas, como o I Ching, o Tao Te Ching e os Analectos de Confúcio.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "texto"
        },
        {
          id: "li_ritual",
          termo: "礼 (lǐ)",
          traducao: "Ritual, Etiqueta",
          definicao: "As normas sociais, rituais e práticas que regulam as interações humanas e promovem a ordem social. Essenciais para o Confucionismo.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_2",
          categoria: "ética"
        },
        {
          id: "li_principio",
          termo: "理 (lǐ)",
          traducao: "Princípio",
          definicao: "No Neo-Confucionismo, refere-se à ordem racional e aos princípios morais que governam o universo e a sociedade. É a estrutura subjacente que dá sentido à realidade.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_1",
          categoria: "metafísica"
        },
        {
          id: "qi",
          termo: "气 (qì)",
          traducao: "Energia vital, Força vital",
          definicao: "Essencial na filosofia e medicina chinesa, representa a força que anima o universo e o corpo humano. Seu equilíbrio é crucial para a saúde e a harmonia.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "metafísica"
        },
        {
          id: "zhengming",
          termo: "正名 (zhèngmíng)",
          traducao: "Retificação dos nomes",
          definicao: "A doutrina confucionista de que a linguagem deve ser usada com precisão e que os nomes devem corresponder à realidade.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_2",
          categoria: "linguagem"
        },
        {
          id: "gewu_zhizhi",
          termo: "格物致知 (géwù zhìzhī)",
          traducao: "Investigação das coisas para estender o conhecimento",
          definicao: "Um princípio neo-confucionista que enfatiza a importância da observação e da experiência para a compreensão do mundo.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_1",
          categoria: "epistemologia"
        },
        {
          id: "zhi",
          termo: "智 (zhì)",
          traducao: "Sabedoria, Conhecimento",
          definicao: "A capacidade de discernir a verdade, tomar decisões corretas e agir de forma sábia. Valorizada em todas as escolas filosóficas chinesas.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "virtude"
        },
        {
          id: "wuwei",
          termo: "无为 (wúwéi)",
          traducao: "Não-ação, Ação sem esforço",
          definicao: "Um princípio taoista que se refere à ação que está em harmonia com o Tao, que não é forçada ou artificial.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "taoismo"
        },
        {
          id: "wu",
          termo: "无 (wú)",
          traducao: "Não ser, Vazio",
          definicao: "Um conceito taoista que se refere ao vazio primordial, à ausência de forma e à fonte de toda a criação. Essencial para a compreensão do Tao.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "taoismo"
        },
        {
          id: "xing",
          termo: "性 (xìng)",
          traducao: "Natureza humana",
          definicao: "A qualidade inata de cada indivíduo, vista de diferentes formas pelas escolas filosóficas. Confucionistas acreditam que é inerentemente boa, enquanto outras correntes divergem.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_5",
          categoria: "antropologia"
        },
        {
          id: "xin",
          termo: "心 (xīn)",
          traducao: "Coração-mente",
          definicao: "Refere-se à faculdade cognitiva e emocional humana, essencial para o autoconhecimento e a prática moral. No Confucionismo, cultivar o 'xin' é fundamental para a virtude.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_6",
          categoria: "psicologia"
        },
        {
          id: "de",
          termo: "德 (dé)",
          traducao: "Virtude, Poder",
          definicao: "A manifestação do Tao em cada indivíduo e em cada coisa. A capacidade de viver de acordo com o Tao e de influenciar o mundo de forma positiva.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_2",
          categoria: "virtude"
        },
        {
          id: "xiaoren",
          termo: "小人 (xiǎorén)",
          traducao: "Homem inferior, Pessoa pequena",
          definicao: "O oposto do jūnzǐ, um indivíduo egoísta, ignorante e sem princípios morais.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_3",
          categoria: "ética"
        },
        {
          id: "xiao",
          termo: "孝 (xiào)",
          traducao: "Piedade filial, Devoção filial",
          definicao: "O respeito, a obediência e o cuidado com os pais e ancestrais. Uma virtude central no Confucionismo, que sustenta a estrutura familiar e social.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_3",
          categoria: "virtude"
        },
        {
          id: "taiji",
          termo: "太极 (tàijí)",
          traducao: "O Grande Extremo",
          definicao: "O princípio que dá origem ao Yin e ao Yang, representando a unidade primordial do universo.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "metafísica"
        },
        {
          id: "tian",
          termo: "天 (tiān)",
          traducao: "Céu",
          definicao: "Mais do que o firmamento, representa a ordem cósmica, a vontade divina e a fonte da moralidade. O Imperador era considerado o 'Filho do Céu' (天子, Tiānzǐ).",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_4",
          categoria: "metafísica"
        },
        {
          id: "ming",
          termo: "命 (mìng)",
          traducao: "Destino, Mandato",
          definicao: "A força que governa a vida humana, que pode ser influenciada pela virtude e pela ação correta.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "metafísica"
        },
        {
          id: "junzi",
          termo: "君子 (jūnzǐ)",
          traducao: "Cavalheiro, Homem superior",
          definicao: "O ideal confucionista de um indivíduo virtuoso, culto e socialmente responsável.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_3",
          categoria: "ética"
        },
        {
          id: "wuxing",
          termo: "五行 (wǔxíng)",
          traducao: "Cinco Elementos/Fases",
          definicao: "Madeira, fogo, terra, metal e água, que representam as forças dinâmicas que interagem e transformam o mundo. Usados para explicar fenômenos naturais e sociais.",
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: "metafísica"
        },
        {
          id: "yi",
          termo: "义 (yì)",
          traducao: "Justiça",
          definicao: "Outra virtude confucionista fundamental, que se refere à retidão moral, ao senso de dever e à obrigação de agir de forma correta.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_2",
          categoria: "virtude"
        },
        {
          id: "zhongyong",
          termo: "中庸 (zhōngyōng)",
          traducao: "Doutrina do Meio, Moderação",
          definicao: "O princípio confucionista de evitar os extremos e buscar o equilíbrio em todas as coisas. Promove a moderação e a harmonia.",
          filosofo_principal: "mou_zongsan",
          hipotese_relacionada: "hipotese_2",
          categoria: "virtude"
        }
      ]
    },
    cronologia: {
      id: "cronologia",
      titulo: "Cronologia",
      subtitulo: "48 eventos históricos",
      icone: "📅",
      cor: "#e74c3c",
      total: 48,
      eventos: [
        {
          ano: 1839,
          titulo: "Primeira Guerra do Ópio",
          descricao: "A China é derrotada pela Grã-Bretanha, marcando o início da influência ocidental",
          impacto_filosofico: "Crise do sistema imperial chinês e início da modernização",
          e_marco_fundador: true,
          categoria: "política"
        },
        {
          ano: 1860,
          titulo: "Movimento de Auto-Fortalecimento",
          descricao: "Tentativa de modernizar a China através da adoção de tecnologia ocidental",
          impacto_filosofico: "Primeiro esforço sistemático de síntese cultural",
          e_marco_fundador: false,
          categoria: "política"
        },
        {
          ano: 1898,
          titulo: "Movimento de Reforma dos Cem Dias",
          descricao: "Tentativa de reformar o sistema político e educacional chinês",
          impacto_filosofico: "Renovação intelectual e educacional",
          e_marco_fundador: false,
          categoria: "política"
        },
        {
          ano: 1905,
          titulo: "Abolição do sistema de exames imperiais",
          descricao: "Fim do sistema de seleção baseado no conhecimento dos clássicos confucionistas",
          impacto_filosofico: "Ruptura com a tradição educacional confucionista",
          e_marco_fundador: true,
          categoria: "educação"
        },
        {
          ano: 1911,
          titulo: "Revolução de Xinhai",
          descricao: "Derrubada da Dinastia Qing e Proclamação da República da China",
          impacto_filosofico: "Fim do sistema imperial e início da república",
          e_marco_fundador: true,
          categoria: "política"
        },
        {
          ano: 1915,
          titulo: "Fundação da revista 'Nova Juventude'",
          descricao: "Marco do início do Movimento da Nova Cultura",
          impacto_filosofico: "Renovação cultural e crítica ao confucionismo tradicional",
          e_marco_fundador: true,
          categoria: "cultura"
        },
        {
          ano: 1919,
          titulo: "Movimento de 4 de Maio",
          descricao: "Protestos estudantis contra o Tratado de Versalhes",
          impacto_filosofico: "Marco fundador da filosofia contemporânea chinesa",
          e_marco_fundador: true,
          categoria: "política"
        },
        {
          ano: 1921,
          titulo: "Fundação do Partido Comunista Chinês",
          descricao: "Criação do PCC por Chen Duxiu e Li Dazhao",
          impacto_filosofico: "Marxismo como força política organizada",
          e_marco_fundador: true,
          categoria: "política"
        },
        {
          ano: 1920,
          titulo: "Surgimento do Novo Confucionismo",
          descricao: "Movimento filosófico que busca revitalizar a tradição confucionista",
          impacto_filosofico: "Renovação do confucionismo para a modernidade",
          e_marco_fundador: true,
          categoria: "filosofia"
        },
        {
          ano: 1937,
          titulo: "Guerra Sino-Japonesa",
          descricao: "Conflito entre a China e o Japão",
          impacto_filosofico: "Crise nacional e reflexão sobre identidade chinesa",
          e_marco_fundador: false,
          categoria: "política"
        },
        {
          ano: 1949,
          titulo: "Fundação da República Popular da China",
          descricao: "Estabelecimento do regime comunista por Mao Zedong",
          impacto_filosofico: "Marxismo como ideologia oficial",
          e_marco_fundador: true,
          categoria: "política"
        },
        {
          ano: 1957,
          titulo: "Campanha Antidireitista",
          descricao: "Perseguição de intelectuais críticos ao regime",
          impacto_filosofico: "Repressão ao pensamento independente",
          e_marco_fundador: false,
          categoria: "política"
        },
        {
          ano: 1958,
          titulo: "Grande Salto Adiante",
          descricao: "Campanha para acelerar o desenvolvimento econômico",
          impacto_filosofico: "Crise do modelo de desenvolvimento",
          e_marco_fundador: false,
          categoria: "economia"
        },
        {
          ano: 1966,
          titulo: "Revolução Cultural",
          descricao: "Campanha para purgar elementos 'burgueses' da sociedade",
          impacto_filosofico: "Destruição da tradição intelectual e cultural",
          e_marco_fundador: true,
          categoria: "política"
        },
        {
          ano: 1976,
          titulo: "Morte de Mao Zedong",
          descricao: "Fim da Revolução Cultural",
          impacto_filosofico: "Início da abertura e reforma",
          e_marco_fundador: true,
          categoria: "política"
        },
        {
          ano: 1978,
          titulo: "Política de Reforma e Abertura",
          descricao: "Início das reformas econômicas de Deng Xiaoping",
          impacto_filosofico: "Retorno gradual da filosofia tradicional",
          e_marco_fundador: true,
          categoria: "economia"
        },
        {
          ano: 1989,
          titulo: "Protestos da Praça Tiananmen",
          descricao: "Movimento estudantil por democracia",
          impacto_filosofico: "Reflexão sobre democracia e direitos humanos",
          e_marco_fundador: false,
          categoria: "política"
        },
        {
          ano: 1992,
          titulo: "Viagem de Deng Xiaoping ao Sul",
          descricao: "Aceleração das reformas econômicas",
          impacto_filosofico: "Consolidação do modelo de desenvolvimento chinês",
          e_marco_fundador: false,
          categoria: "economia"
        },
        {
          ano: 1995,
          titulo: "Morte de Mou Zongsan",
          descricao: "Falecimento do fundador do Novo Confucionismo",
          impacto_filosofico: "Transição para nova geração de filósofos",
          e_marco_fundador: false,
          categoria: "filosofia"
        },
        {
          ano: 1997,
          titulo: "Retorno de Hong Kong à China",
          descricao: "Fim do colonialismo britânico em Hong Kong",
          impacto_filosofico: "Integração de diferentes tradições intelectuais",
          e_marco_fundador: false,
          categoria: "política"
        },
        {
          ano: 2001,
          titulo: "Entrada da China na OMC",
          descricao: "Integração da China na economia global",
          impacto_filosofico: "Globalização e identidade cultural chinesa",
          e_marco_fundador: false,
          categoria: "economia"
        },
        {
          ano: 2005,
          titulo: "Zhao Tingyang publica teoria Tianxia",
          descricao: "Primeira proposta filosófica chinesa com impacto global",
          impacto_filosofico: "China entra no debate filosófico internacional",
          e_marco_fundador: true,
          categoria: "filosofia"
        },
        {
          ano: 2008,
          titulo: "Jogos Olímpicos de Pequim",
          descricao: "China se apresenta ao mundo como potência moderna",
          impacto_filosofico: "Confiança cultural e projeção internacional",
          e_marco_fundador: false,
          categoria: "cultura"
        },
        {
          ano: 2012,
          titulo: "Xi Jinping assume a presidência",
          descricao: "Nova liderança chinesa",
          impacto_filosofico: "Renovação do discurso sobre valores chineses",
          e_marco_fundador: false,
          categoria: "política"
        },
        {
          ano: 2013,
          titulo: "Iniciativa Cinturão e Rota",
          descricao: "Projeto de infraestrutura global liderado pela China",
          impacto_filosofico: "Projeção do modelo de desenvolvimento chinês",
          e_marco_fundador: false,
          categoria: "economia"
        },
        {
          ano: 2020,
          titulo: "Pandemia de COVID-19",
          descricao: "Crise global e resposta chinesa",
          impacto_filosofico: "Reflexão sobre governança global e valores",
          e_marco_fundador: false,
          categoria: "saúde"
        },
        {
          ano: 2021,
          titulo: "Morte de Li Zehou",
          descricao: "Falecimento do filósofo da estética",
          impacto_filosofico: "Fim de uma era na filosofia chinesa contemporânea",
          e_marco_fundador: false,
          categoria: "filosofia"
        }
      ]
    },
    bibliografia: {
      id: "bibliografia",
      titulo: "Bibliografia",
      subtitulo: "45 obras essenciais",
      icone: "📖",
      cor: "#2ecc71",
      total: 45,
      obras: [
        {
          id: "mou_critica",
          titulo: "Crítica da Consciência Moral",
          autor: "Mou Zongsan",
          ano: 1968,
          categoria: "filosofia",
          importancia: "alta",
          resumo: "Síntese entre moralidade kantiana e confucionismo"
        },
        {
          id: "tu_selfhood",
          titulo: "Confucian Thought: Selfhood as Creative Transformation",
          autor: "Tu Weiming",
          ano: 1985,
          categoria: "filosofia",
          importancia: "alta",
          resumo: "Humanismo confuciano como ética global"
        },
        {
          id: "zhao_tianxia",
          titulo: "The Tianxia System: An Introduction to the Philosophy of a World Institution",
          autor: "Zhao Tingyang",
          ano: 2005,
          categoria: "política",
          importancia: "alta",
          resumo: "Teoria do Tianxia como ordem mundial inclusiva"
        },
        {
          id: "li_beauty",
          titulo: "The Path of Beauty",
          autor: "Li Zehou",
          ano: 1988,
          categoria: "estética",
          importancia: "alta",
          resumo: "Estética como fundamento filosófico"
        },
        {
          id: "chen_tradition",
          titulo: "Ancient Chinese Thought, Modern Chinese Philosophy",
          autor: "Chen Lai",
          ano: 2015,
          categoria: "filosofia",
          importancia: "alta",
          resumo: "Hermenêutica confuciana e reconstrução da tradição"
        },
        {
          id: "mou_intuition",
          titulo: "Intuição Intelectual e Filosofia Chinesa",
          autor: "Mou Zongsan",
          ano: 1971,
          categoria: "filosofia",
          importancia: "alta",
          resumo: "Epistemologia moral no confucionismo"
        },
        {
          id: "tu_centrality",
          titulo: "Centrality and Commonality",
          autor: "Tu Weiming",
          ano: 1976,
          categoria: "filosofia",
          importancia: "alta",
          resumo: "Confucionismo como filosofia central"
        },
        {
          id: "zhao_world",
          titulo: "Redefining a Philosophy for World Governance",
          autor: "Zhao Tingyang",
          ano: 2019,
          categoria: "política",
          importancia: "alta",
          resumo: "Filosofia política global"
        },
        {
          id: "li_history",
          titulo: "A History of Ancient Chinese Thought",
          autor: "Li Zehou",
          ano: 1985,
          categoria: "história",
          importancia: "alta",
          resumo: "História do pensamento chinês antigo"
        },
        {
          id: "chen_modernity",
          titulo: "Tradition and Modernity",
          autor: "Chen Lai",
          ano: 2018,
          categoria: "filosofia",
          importancia: "alta",
          resumo: "Tradição e modernidade no confucionismo"
        }
      ]
    }
  }
};
