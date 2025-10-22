# Filosofia Chinesa Contemporânea - App Interativo

## 🌟 Visão Geral

Este é um aplicativo web interativo baseado no livro "A Filosofia Contemporânea Chinesa" que apresenta as **7 Hipóteses Centrais** através de uma experiência de navegação não-linear e envolvente.

## 🚀 Características Principais

### ✨ **7 Hipóteses Centrais**
- **Hipótese 1**: Universalidade em Disputa (普遍)
- **Hipótese 2**: O Nó Ético-Político (道德)
- **Hipótese 3**: Modernidade da Comunidade (社群)
- **Hipótese 4**: Tianxia: O Mundo como Ordem (天下)
- **Hipótese 5**: O Dilema da Autonomia (自主)
- **Hipótese 6**: A Estética do Pensamento (美学)
- **Hipótese 7**: Cosmopolitismo Ferido (世界主义)

### 👤 **5 Filósofos Principais**
- **Mou Zongsan** (牟宗三) - Síntese kantiana-confucionista
- **Tu Weiming** (杜维明) - Humanismo confuciano global
- **Li Zehou** (李泽厚) - Filosofia estética
- **Zhao Tingyang** (赵汀阳) - Teoria do Tianxia
- **Chen Lai** (陈来) - Hermenêutica confuciana

### 🎯 **Funcionalidades Interativas**
- **Navegação Não-Linear**: Explore por hipóteses, filósofos ou temas
- **Modais Detalhados**: Informações completas sobre cada conceito
- **Jornadas Temáticas**: Trilhas estruturadas de aprendizado
- **Recursos Complementares**: Glossário completo (45 termos), cronologia (48 eventos) e bibliografia (45 obras)
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Estrutura do Livro**: Visualização completa das 5 partes e 24 capítulos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design responsivo com tema oriental
- **JavaScript Vanilla**: Interatividade e navegação
- **Google Fonts**: Tipografia Noto Sans e Noto Serif SC
- **Deploy**: Netlify (estático)

## 📱 Design e UX

### 🎨 **Tema Oriental**
- Paleta de cores inspirada na tradição chinesa
- Tipografia com suporte a caracteres chineses
- Ícones e elementos visuais temáticos
- Layout limpo e minimalista

### 📱 **Responsividade**
- Design mobile-first
- Navegação adaptativa
- Modais otimizados para diferentes telas
- Performance otimizada

## 🚀 Deploy no Netlify

### **Opção 1: Deploy Manual**
1. Acesse [netlify.com](https://netlify.com)
2. Faça login ou crie uma conta
3. Clique em "Add new site" → "Deploy manually"
4. Arraste a pasta do projeto ou faça upload dos arquivos
5. O site estará disponível em uma URL automática

### **Opção 2: Deploy via GitHub**
1. Crie um repositório no GitHub
2. Faça upload dos arquivos do projeto
3. No Netlify, conecte com o GitHub
4. Configure o build (não é necessário para sites estáticos)
5. Deploy automático a cada push

### **Opção 3: Netlify CLI**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod --dir .
```

### **Configuração do Netlify**
Este projeto inclui `netlify.toml` para publicar diretamente do diretório raiz:

```toml
[build]
command = ""
publish = "."
```

## 📁 Estrutura do Projeto

```
filosofia-chinesa-app/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── App.js              # Lógica JavaScript
├── data.js             # Dados estruturados completos
└── README.md           # Documentação
```

## 🎯 Como Usar

### **Navegação Principal**
- **Início**: Visão geral com estatísticas e acesso rápido
- **Hipóteses**: Explore as 7 hipóteses centrais
- **Filósofos**: Conheça os 5 pensadores principais
- **Capítulos**: Acesso ao conteúdo do livro com estrutura completa
- **Recursos**: Glossário, cronologia e bibliografia
- **Jornadas**: Trilhas temáticas de aprendizado

### **Interatividade**
- **Clique nos cards** para abrir modais detalhados
- **Navegue entre abas** para explorar diferentes seções
- **Use os filtros** para alternar entre visualizações
- **Explore as jornadas** para aprendizado estruturado

## 🌟 Destaques do Conteúdo

### **Hipóteses com Ideogramas**
Cada hipótese apresenta:
- Ideogramas chineses com pinyin
- Significado etimológico
- Análise sintética
- Crítica construtiva
- Filósofos relacionados

### **Perfis dos Filósofos**
Informações completas sobre:
- Biografia e contexto histórico
- Contribuições essenciais
- Obras principais
- Diálogo com pensadores ocidentais
- Legado e influência

### **Recursos Complementares**
- **Glossário**: 45 termos fundamentais com definições detalhadas
- **Cronologia**: 48 eventos históricos que moldaram a filosofia chinesa
- **Bibliografia**: 45 obras essenciais dos principais filósofos

### **Estrutura do Livro**
- **5 Partes**: Organização temática completa
- **24 Capítulos**: Conteúdo estruturado e navegável
- **Prefácio**: Metáfora da China como força gravitacional
- **Capítulo 19**: Núcleo com as 7 hipóteses centrais

## 🔧 Personalização

### **Cores das Hipóteses**
```css
--hypothesis-1: #FF6B6B;  /* Universalidade */
--hypothesis-2: #4ECDC4;  /* Ético-Político */
--hypothesis-3: #95E1D3;  /* Comunidade */
--hypothesis-4: #F38181;  /* Tianxia */
--hypothesis-5: #AA96DA;  /* Autonomia */
--hypothesis-6: #FCBAD3;  /* Estética */
--hypothesis-7: #FFFFD2;  /* Cosmopolitismo */
```

### **Cores dos Filósofos**
```css
--philosopher-mou: #3498db;   /* Mou Zongsan */
--philosopher-tu: #2ecc71;    /* Tu Weiming */
--philosopher-li: #e74c3c;    /* Li Zehou */
--philosopher-zhao: #f39c12;  /* Zhao Tingyang */
--philosopher-chen: #9b59b6;  /* Chen Lai */
```

## 📊 Estatísticas do Projeto

- **7 Hipóteses** centrais
- **5 Filósofos** principais
- **24 Capítulos** do livro
- **5 Partes** temáticas
- **45 Termos** no glossário
- **48 Eventos** na cronologia
- **45 Obras** na bibliografia
- **2 Jornadas** temáticas

## 🎓 Público-Alvo

- **Estudantes** de filosofia e estudos asiáticos
- **Pesquisadores** em filosofia comparada
- **Interessados** em pensamento chinês contemporâneo
- **Educadores** buscando recursos interativos
- **Público geral** curioso sobre filosofia chinesa

## 🔮 Próximos Passos

### **Melhorias Futuras**
- [ ] Adicionar mais conteúdo dos capítulos restantes
- [ ] Implementar sistema de progresso
- [ ] Adicionar exercícios interativos
- [ ] Criar versão em inglês
- [ ] Adicionar áudio para pronúncia chinesa
- [ ] Implementar busca avançada

### **Expansões Possíveis**
- [ ] Adaptar para outros livros filosóficos
- [ ] Criar versão mobile nativa
- [ ] Adicionar sistema de comentários
- [ ] Implementar gamificação
- [ ] Integrar com redes sociais

## 📞 Suporte

Para dúvidas, sugestões ou problemas:
- **Issues**: Abra uma issue no repositório
- **Email**: Entre em contato via email
- **Documentação**: Consulte este README

## 📄 Licença

Este projeto é de uso educacional e acadêmico. Respeite os direitos autorais do livro original.

---

**🌟 Explore a filosofia chinesa contemporânea de forma interativa e envolvente!**