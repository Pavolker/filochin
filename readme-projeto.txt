# 📱 Filosofia Chinesa Contemporânea - App Interativo

Sistema de "injeção de conteúdo" para transformar livros filosóficos em aplicativos interativos.

---

## 🎯 Visão Geral

Este projeto transforma o livro **"A Filosofia Contemporânea Chinesa"** em um app interativo baseado nas **7 Hipóteses** como núcleo conceitual navegável.

### Diferencial

- ✅ **Não é um PDF digital** - é uma experiência de imersão ativa
- ✅ **Navegação não-linear** - por hipóteses, filósofos, conceitos
- ✅ **Jornadas temáticas** - trilhas de 7 dias, iniciante, política, etc.
- ✅ **Interatividade filosófica** - perguntas socráticas, dilemas, reflexões

---

## 📂 Estrutura do Projeto

```
filosofia-chinesa-app/
├── filosofia-chinesa-contemporanea.json    # ← JSON principal (estrutura do livro)
├── conteudo/
│   ├── prefacio.md
│   ├── cap_01.md
│   ├── cap_02.md
│   └── ... (24 capítulos)
├── recursos/
│   ├── glossario.json                      # ← 45 termos com busca
│   ├── cronologia.json                     # ← 48 eventos (1839-2025)
│   └── bibliografia.json
├── scripts/
│   ├── limpar_markdown.py                  # ← Corrige encoding UTF-8
│   └── gerar_json_de_md.py                 # ← Automatiza extração de metadados
└── README.md
```

---

## 🚀 Como Usar

### **1. Limpar Arquivos Markdown**

Antes de processar, corrigir encoding corrompido:

```bash
python scripts/limpar_markdown.py conteudo/ --backup
```

Isso corrige:
- `â€œ` → `"`
- `Ã¡` → `á`
- `ç­‰` → caracteres chineses corretos

### **2. Gerar JSON Automaticamente**

Extrair metadados dos .md para popular o JSON:

```bash
python scripts/gerar_json_de_md.py conteudo/ filosofia-chinesa-contemporanea.json
```

O script detecta automaticamente:
- ✅ Conceitos-chave (termos em chinês + pinyin)
- ✅ Filósofos mencionados
- ✅ Hipóteses relacionadas
- ✅ Tempo de leitura

### **3. Desenvolver o App**

Use o JSON como fonte de dados:

**Exemplo React Native:**

```javascript
import livro from './filosofia-chinesa-contemporanea.json';

// Buscar capítulo 19 (7 Hipóteses)
const cap19 = livro.capitulos.find(c => c.id === 'cap_19');

// Buscar filósofo Zhao Tingyang
const zhao = livro.mapa_conceitual.filosofos
  .find(f => f.id === 'zhao_tingyang');

// Buscar hipótese "Tianxia"
const tianxia = livro.mapa_conceitual.hipoteses
  .find(h => h.id === 'hipotese_4');

// Navegar por conexões
const caps_relacionados = tianxia.capitulos_relacionados;
```

---

## 🧩 Componentes do Sistema

### **A. JSON Principal** (`filosofia-chinesa-contemporanea.json`)

Estrutura completa do livro com:

```json
{
  "livro": { "titulo", "autor", "versao" },
  "mapa_conceitual": {
    "hipoteses": [7],           // ← Núcleo do app
    "filosofos": [5],
    "escolas_classicas": [3]
  },
  "partes": [5],
  "capitulos": [24],
  "jornadas_tematicas": [...]
}
```

### **B. Glossário** (`recursos/glossario.json`)

45 termos categorizados:

```json
{
  "glossario": {
    "termos": [
      {
        "id": "tianxia",
        "termo": "天下 (tiānxià)",
        "traducao": "Tudo sob o Céu",
        "definicao": "...",
        "filosofo_principal": "zhao_tingyang",
        "hipotese_relacionada": "hipotese_4"
      }
    ]
  }
}
```

### **C. Cronologia** (`recursos/cronologia.json`)

48 eventos (1839-2025):

```json
{
  "cronologia": {
    "eventos": [
      {
        "ano": 1919,
        "titulo": "Movimento de 4 de Maio",
        "e_marco_fundador": true,
        "impacto_filosofico": "..."
      }
    ]
  }
}
```

---

## 🎨 Exemplos de Telas

### **Tela 1: Mapa das 7 Hipóteses**

Visualização tipo constellation map:
- 7 estrelas (hipóteses) com cores únicas
- Ao tocar: zoom + explicação + ideograma chinês
- Conexões entre hipóteses e filósofos

### **Tela 2: Perfil do Filósofo**

Card com:
- Nome + caracteres chineses (赵汀阳)
- Anos de vida, foto/ilustração
- "Superpoder filosófico" (1 frase)
- Hipóteses que ele toca
- Botão "Explorar Obras"

### **Tela 3: Jornada de 7 Dias**

Trilha gamificada:
- Dia 1: Hipótese 1 → Ler prefácio + cap 01
- Dia 2: Hipótese 2 → Ler cap 05 + exercício
- Progresso visual (% completo)
- Badge ao finalizar

---

## 🛠️ Stack Técnico Sugerida

### **Opção A: React Native + Expo**
```bash
npx create-expo-app filosofia-chinesa-app
cd filosofia-chinesa-app
npm install react-navigation @react-navigation/native
```

### **Opção B: Flutter**
```bash
flutter create filosofia_chinesa_app
```

### **Opção C: Web (React)**
```bash
npx create-react-app filosofia-chinesa-web
```

---

## 📊 Sistema de "Injeção de Conteúdo"

Este projeto serve como **template reutilizável** para outros livros:

### **Para adaptar para outro livro:**

1. **Substituir arquivos .md** → seus novos capítulos
2. **Editar `filosofia-chinesa-contemporanea.json`:**
   - Mudar metadados do livro
   - Redefinir partes/capítulos
   - Criar novo "mapa conceitual" (se aplicável)
3. **Rodar scripts** → automação cuida do resto

### **Conceitos reutilizáveis:**

✅ Sistema de jornadas temáticas  
✅ Navegação por conexões  
✅ Glossário interativo  
✅ Cronologia visual  
✅ Reflexões e exercícios por capítulo  

---

## 🎯 Próximos Passos

### **Fase 1: Prototipagem** ✅ (Completo)
- [x] JSON estruturado
- [x] Recursos extras (glossário, cronologia)
- [x] Scripts de automação

### **Fase 2: Desenvolvimento Frontend**
- [ ] Criar tela inicial (Mapa 7 Hipóteses)
- [ ] Implementar navegação por filósofos
- [ ] Sistema de leitura de capítulos
- [ ] Jornadas temáticas funcionando

### **Fase 3: Interatividade**
- [ ] Perguntas socráticas com IA
- [ ] Diário filosófico do usuário
- [ ] Sistema de badges/gamificação
- [ ] Compartilhamento de reflexões

### **Fase 4: Deploy**
- [ ] Build para iOS/Android
- [ ] Publicação nas lojas
- [ ] Analytics de uso

---

## 📝 Licença e Créditos

**Autor do Livro:** [Seu Nome]  
**Sistema de App:** Desenvolvido com Claude (Anthropic)  
**Licença:** [Definir]

---

## 🤝 Contribuições

Para adaptar este sistema para outro livro filosófico, entre em contato!

**Contato:** [seu email]

---

## 📚 Recursos Adicionais

- **Documentação React Native:** https://reactnative.dev/
- **Flutter:** https://flutter.dev/
- **Design Patterns para Apps Educacionais:** [link]

---

**🎉 Transforme conhecimento em experiência interativa!**
