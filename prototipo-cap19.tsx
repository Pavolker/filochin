import React, { useState } from 'react';

// Dados simulados (em produção viria do JSON)
const hipoteses = [
  {
    id: 1,
    titulo: "Universalidade em Disputa",
    ideograma: "普遍",
    pinyin: "pǔbiàn",
    cor: "#FF6B6B",
    icone: "🌐",
    sintese: "Não há uma única filosofia global: a universalidade deve nascer de muitas raízes.",
    filosofos: ["Mou Zongsan", "Tu Weiming", "Zhao Tingyang"]
  },
  {
    id: 2,
    titulo: "O Nó Ético-Político",
    ideograma: "道德",
    pinyin: "dàodé",
    cor: "#4ECDC4",
    icone: "⚖️",
    sintese: "O futuro da filosofia é religar moralidade e política em um pacto ainda por escrever.",
    filosofos: ["Mou Zongsan", "Zhao Tingyang"]
  },
  {
    id: 3,
    titulo: "Modernidade da Comunidade",
    ideograma: "社群",
    pinyin: "shèqún",
    cor: "#95E1D3",
    icone: "👥",
    sintese: "A modernidade não precisa ser individualista: há força em ser comunidade.",
    filosofos: ["Tu Weiming", "Chen Lai"]
  },
  {
    id: 4,
    titulo: "Tianxia: O Mundo como Ordem",
    ideograma: "天下",
    pinyin: "tiānxià",
    cor: "#F38181",
    icone: "☁️",
    sintese: "O mundo não é feito de fronteiras: 'tudo sob o céu' pode ser uma ordem comum.",
    filosofos: ["Zhao Tingyang"]
  },
  {
    id: 5,
    titulo: "O Dilema da Autonomia",
    ideograma: "自主",
    pinyin: "zìzhǔ",
    cor: "#AA96DA",
    icone: "🎭",
    sintese: "Entre indivíduo e comunidade, a liberdade só existe se for também relacional.",
    filosofos: ["Tu Weiming", "Chen Lai", "Mou Zongsan"]
  },
  {
    id: 6,
    titulo: "A Estética do Pensamento",
    ideograma: "美学",
    pinyin: "měixué",
    cor: "#FCBAD3",
    icone: "🎨",
    sintese: "A filosofia não nasce apenas da razão: emoção e estética também pensam.",
    filosofos: ["Li Zehou"]
  },
  {
    id: 7,
    titulo: "Cosmopolitismo Ferido",
    ideograma: "世界主义",
    pinyin: "shìjiè zhǔyì",
    cor: "#FFFFD2",
    icone: "🌍",
    sintese: "Todo cosmopolitismo é promessa e ameaça: ou ética universal, ou hegemonia disfarçada.",
    filosofos: ["Zhao Tingyang", "Tu Weiming"]
  }
];

const Cap19Prototype = () => {
  const [hipoteseSelecionada, setHipoteseSelecionada] = useState(null);
  const [modoVisualizacao, setModoVisualizacao] = useState('grid'); // 'grid' ou 'rede'

  const HipoteseCard = ({ hipotese }) => (
    <div
      onClick={() => setHipoteseSelecionada(hipotese)}
      style={{
        background: `linear-gradient(135deg, ${hipotese.cor}22 0%, ${hipotese.cor}55 100%)`,
        border: `2px solid ${hipotese.cor}`,
        borderRadius: '16px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: hipoteseSelecionada?.id === hipotese.id ? 'scale(1.05)' : 'scale(1)',
        boxShadow: hipoteseSelecionada?.id === hipotese.id 
          ? `0 8px 32px ${hipotese.cor}44` 
          : '0 4px 12px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = `0 6px 24px ${hipotese.cor}33`;
      }}
      onMouseLeave={(e) => {
        if (hipoteseSelecionada?.id !== hipotese.id) {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        }
      }}
    >
      <div style={{ 
        fontSize: '48px', 
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <span>{hipotese.icone}</span>
        <span style={{ 
          fontSize: '36px', 
          fontFamily: "'Noto Serif SC', serif",
          color: hipotese.cor,
          fontWeight: 'bold'
        }}>
          {hipotese.ideograma}
        </span>
      </div>
      
      <div style={{
        fontSize: '11px',
        color: '#666',
        marginBottom: '8px',
        fontStyle: 'italic'
      }}>
        {hipotese.pinyin}
      </div>
      
      <h3 style={{
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '12px',
        color: '#333'
      }}>
        {hipotese.id}. {hipotese.titulo}
      </h3>
      
      <p style={{
        fontSize: '14px',
        lineHeight: '1.6',
        color: '#555',
        marginBottom: '16px'
      }}>
        {hipotese.sintese}
      </p>
      
      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
        {hipotese.filosofos.map((filosofo, idx) => (
          <span 
            key={idx}
            style={{
              fontSize: '11px',
              padding: '4px 10px',
              background: `${hipotese.cor}33`,
              borderRadius: '12px',
              color: '#333',
              fontWeight: '500'
            }}
          >
            {filosofo}
          </span>
        ))}
      </div>
    </div>
  );

  const HipoteseDetalhada = ({ hipotese }) => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}
    onClick={() => setHipoteseSelecionada(null)}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '24px',
          padding: '40px',
          maxWidth: '700px',
          maxHeight: '80vh',
          overflow: 'auto',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <span style={{ fontSize: '64px' }}>{hipotese.icone}</span>
          <div>
            <div style={{
              fontSize: '48px',
              fontFamily: "'Noto Serif SC', serif",
              color: hipotese.cor,
              fontWeight: 'bold'
            }}>
              {hipotese.ideograma}
            </div>
            <div style={{
              fontSize: '14px',
              color: '#666',
              fontStyle: 'italic'
            }}>
              {hipotese.pinyin}
            </div>
          </div>
        </div>

        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#333'
        }}>
          Hipótese {hipotese.id}: {hipotese.titulo}
        </h2>

        <div style={{
          background: `${hipotese.cor}22`,
          padding: '20px',
          borderRadius: '12px',
          marginBottom: '24px',
          borderLeft: `4px solid ${hipotese.cor}`
        }}>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#333',
            margin: 0
          }}>
            {hipotese.sintese}
          </p>
        </div>

        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '12px',
          color: '#555'
        }}>
          🧑‍🏫 Filósofos Principais
        </h3>

        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '24px'
        }}>
          {hipotese.filosofos.map((filosofo, idx) => (
            <div 
              key={idx}
              style={{
                padding: '12px 20px',
                background: `${hipotese.cor}33`,
                borderRadius: '16px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333'
              }}
            >
              {filosofo}
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex',
          gap: '12px',
          marginTop: '32px'
        }}>
          <button
            style={{
              flex: 1,
              padding: '14px',
              background: hipotese.cor,
              border: 'none',
              borderRadius: '12px',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            📖 Ler Mais
          </button>
          <button
            onClick={() => setHipoteseSelecionada(null)}
            style={{
              flex: 1,
              padding: '14px',
              background: '#eee',
              border: 'none',
              borderRadius: '12px',
              color: '#333',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            ✕ Fechar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
      padding: '40px 20px',
      fontFamily: "'Noto Sans', -apple-system, sans-serif"
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '42px',
          fontWeight: 'bold',
          marginBottom: '12px',
          color: '#222',
          fontFamily: "'Noto Serif SC', serif"
        }}>
          7 Hipóteses 🔑
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto 24px',
          lineHeight: '1.6'
        }}>
          Sete chaves para compreender a filosofia chinesa contemporânea
        </p>
        
        <div style={{
          display: 'inline-flex',
          gap: '12px',
          background: 'white',
          padding: '8px',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <button
            onClick={() => setModoVisualizacao('grid')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '12px',
              background: modoVisualizacao === 'grid' ? '#333' : 'transparent',
              color: modoVisualizacao === 'grid' ? 'white' : '#666',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px'
            }}
          >
            📱 Grid
          </button>
          <button
            onClick={() => setModoVisualizacao('rede')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '12px',
              background: modoVisualizacao === 'rede' ? '#333' : 'transparent',
              color: modoVisualizacao === 'rede' ? 'white' : '#666',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px'
            }}
          >
            🕸️ Rede
          </button>
        </div>
      </div>

      {/* Grid de Hipóteses */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {hipoteses.map(hipotese => (
          <HipoteseCard key={hipotese.id} hipotese={hipotese} />
        ))}
      </div>

      {/* Modal de Detalhes */}
      {hipoteseSelecionada && (
        <HipoteseDetalhada hipotese={hipoteseSelecionada} />
      )}

      {/* Footer */}
      <div style={{
        maxWidth: '1200px',
        margin: '60px auto 0',
        textAlign: 'center',
        padding: '32px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}>
        <p style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: '1.8'
        }}>
          💡 <strong>Dica:</strong> Clique em cada hipótese para explorar em detalhes. 
          As 7 hipóteses formam o <strong>mapa conceitual</strong> de toda a filosofia chinesa contemporânea.
        </p>
      </div>
    </div>
  );
};

export default Cap19Prototype;
