# Deploy no Netlify

Este aplicativo está configurado para deploy no Netlify.

## Configuração Atual

- **Diretório de publicação**: Raiz do projeto (`.`)
- **Comando de build**: Nenhum (site estático)
- **Redirects**: Configurado via `_redirects` para SPA

## Como fazer o deploy

### Opção 1: Deploy via GitHub (Recomendado)

1. Faça push do código para um repositório GitHub
2. Acesse [Netlify](https://www.netlify.com/)
3. Clique em "Add new site" > "Import an existing project"
4. Conecte com sua conta GitHub
5. Selecione o repositório
6. O Netlify detectará automaticamente a configuração:
   - **Build command**: (deixe vazio)
   - **Publish directory**: `.` (raiz)
7. Clique em "Deploy site"

### Opção 2: Deploy via Netlify CLI

```bash
# Instalar Netlify CLI globalmente
npm install -g netlify-cli

# Login no Netlify
netlify login

# Deploy do site
netlify deploy --prod
```

### Opção 3: Deploy via Drag and Drop

1. Acesse [Netlify Drop](https://app.netlify.com/drop)
2. Arraste a pasta raiz do projeto para a área indicada
3. Aguarde o deploy automático

## Arquivos de Configuração

- `netlify.toml`: Configurações de build, headers e cache
- `_redirects`: Redirecionamentos para SPA (todas as rotas → index.html)

## Headers Configurados

O arquivo `netlify.toml` já inclui:
- Headers de segurança (XSS, Clickjacking, etc.)
- Cache otimizado para assets estáticos (JS, CSS, imagens)
- Sem cache para HTML (para sempre ter versão mais recente)

## Assets Necessários

Certifique-se de que os seguintes arquivos estão na raiz:
- `index.html`
- `App.js`
- `data.js`
- `styles.css`
- `filo chi capa.png`

## Domínio Personalizado

Após o deploy:
1. Vá em Site settings > Domain management
2. Clique em "Add custom domain"
3. Siga as instruções para configurar seu domínio

## Observações

- O site não precisa de build (é estático HTML/CSS/JS)
- Todos os caminhos de assets estão relativos à raiz
- O arquivo `_redirects` garante que todas as rotas funcionem (SPA)

