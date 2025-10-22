// Estado da aplicação
let currentTab = 'home';
let currentView = 'grid';
let currentModal = null;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupViewToggle();
    loadHomeContent();
    setupModal();
}

// Navegação
function setupNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab[data-tab]');
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Remove active de todas as tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Adiciona active na tab selecionada
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');

    currentTab = tabName;

    // Carrega conteúdo específico da tab
    switch(tabName) {
        case 'home':
            loadHomeContent();
            break;
        case 'hypotheses':
            loadHypothesesContent();
            break;
        case 'philosophers':
            loadPhilosophersContent();
            break;
        case 'chapters':
            loadChaptersContent();
            break;
        case 'resources':
            loadResourcesContent();
            break;
        case 'journey':
            loadJourneyContent();
            break;
    }
}

// View Toggle
function setupViewToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            setView(view);
        });
    });
}

function setView(view) {
    currentView = view;
    
    // Remove active de todos os botões
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Adiciona active no botão selecionado
    document.querySelector(`[data-view="${view}"]`).classList.add('active');
    
    // Recarrega conteúdo com nova view
    switch(currentTab) {
        case 'hypotheses':
            loadHypothesesContent();
            break;
        case 'philosophers':
            loadPhilosophersContent();
            break;
    }
}

// Carregamento de Conteúdo
function loadHomeContent() {
    loadHomeHypotheses();
    loadHomePhilosophers();
}

function loadHomeHypotheses() {
    const container = document.getElementById('home-hypotheses');
    if (!container) return;

    container.innerHTML = '';
    
    bookData.hipoteses.forEach(hipotese => {
        const card = createHypothesisCard(hipotese, true);
        container.appendChild(card);
    });
}

function loadHomePhilosophers() {
    const container = document.getElementById('home-philosophers');
    if (!container) return;

    container.innerHTML = '';
    
    bookData.filosofos.forEach(filosofo => {
        const card = createPhilosopherCard(filosofo, true);
        container.appendChild(card);
    });
}

function loadHypothesesContent() {
    const container = document.getElementById('hypotheses-container');
    if (!container) return;

    container.innerHTML = '';
    
    if (currentView === 'grid') {
        container.className = 'hypotheses-grid';
        bookData.hipoteses.forEach(hipotese => {
            const card = createHypothesisCard(hipotese, false);
            container.appendChild(card);
        });
    } else {
        container.className = 'hypotheses-list';
        bookData.hipoteses.forEach(hipotese => {
            const card = createHypothesisListItem(hipotese);
            container.appendChild(card);
        });
    }
}

function loadPhilosophersContent() {
    const container = document.getElementById('philosophers-container');
    if (!container) return;

    container.innerHTML = '';
    
    if (currentView === 'grid') {
        container.className = 'philosophers-grid';
        bookData.filosofos.forEach(filosofo => {
            const card = createPhilosopherCard(filosofo, false);
            container.appendChild(card);
        });
    } else {
        container.className = 'philosophers-list';
        bookData.filosofos.forEach(filosofo => {
            const card = createPhilosopherListItem(filosofo);
            container.appendChild(card);
        });
    }
}

function loadChaptersContent() {
    const container = document.getElementById('chapters-container');
    if (!container) return;

    const chapters = Object.entries(bookData.capitulos)
        .filter(([id]) => id !== 'prefacio')
        .map(([id, ch]) => ({ id, ...ch }))
        .sort((a, b) => (a.numero || 0) - (b.numero || 0));

    const getSummary = (ch) => {
        if (ch.resumo && ch.resumo.trim()) return ch.resumo.trim();
        const md = ch.conteudo || '';
        const text = md
            .replace(/```[\s\S]*?```/g, '')
            .replace(/!\[[^\]]*\]\([^\)]*\)/g, '')
            .replace(/\[[^\]]*\]\([^\)]*\)/g, '')
            .replace(/[#*_>`~-]/g, '')
            .replace(/\n{2,}/g, '\n')
            .trim();
        const firstMeaningful = text.split('\n').find(line => line && !/^\s*Cap[ií]tulo/.test(line));
        const base = firstMeaningful || text;
        return base.slice(0, 200) + (base.length > 200 ? '…' : '');
    };

    const allChaptersGrid = `
        <div class="chapters-list">
            <h3>📚 Todos os Capítulos</h3>
            <div class="quick-chapters-grid">
                ${chapters.map(ch => `
                    <button class="quick-chapter-btn" onclick="openModal('chapter', '${ch.id}')">
                        <span class="quick-chapter-icon">📖</span>
                        <span class="quick-chapter-title">Capítulo ${ch.numero ?? ''} — ${ch.titulo}</span>
                        <span class="quick-chapter-subtitle">${ch.subtitulo || getSummary(ch)}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    container.innerHTML = `
        <div class="chapters-intro">
            <h3>📖 Estrutura do Livro</h3>
            <p>O livro está organizado em 5 partes com 24 capítulos, culminando no Capítulo 19 com as 7 Hipóteses centrais.</p>
        </div>
        
        <div class="chapters-quick-access">
            <h3>⚡ Acesso Rápido</h3>
            <div class="quick-chapters-grid">
                <button class="quick-chapter-btn" onclick="openModal('chapter', 'prefacio')">
                    <span class="quick-chapter-icon">🌏</span>
                    <span class="quick-chapter-title">Prefácio</span>
                    <span class="quick-chapter-subtitle">A China como Força Gravitacional</span>
                </button>
                <button class="quick-chapter-btn" onclick="openModal('chapter', 'cap_01')">
                    <span class="quick-chapter-icon">📚</span>
                    <span class="quick-chapter-title">Capítulo 1</span>
                    <span class="quick-chapter-subtitle">Introdução</span>
                </button>
                <button class="quick-chapter-btn" onclick="openModal('chapter', 'cap_19')">
                    <span class="quick-chapter-icon">🔑</span>
                    <span class="quick-chapter-title">Capítulo 19</span>
                    <span class="quick-chapter-subtitle">7 Hipóteses (Núcleo)</span>
                </button>
            </div>
        </div>
        ${allChaptersGrid}
    `;
}

function loadResourcesContent() {
    const container = document.getElementById('resources-container');
    if (!container) return;

    container.innerHTML = '';
    
    Object.values(bookData.recursos).forEach(recurso => {
        const card = createResourceCard(recurso);
        container.appendChild(card);
    });
}

function loadJourneyContent() {
    const container = document.getElementById('journey-container');
    if (!container) return;

    container.innerHTML = '';
    
    bookData.jornadas_tematicas.forEach(jornada => {
        const card = createJourneyCard(jornada);
        container.appendChild(card);
    });
}

// Criação de Cards
function createHypothesisCard(hipotese, isHome = false) {
    const card = document.createElement('div');
    card.className = 'hypothesis-card';
    card.style.borderColor = hipotese.cor_tema;
    card.onclick = () => openModal('hypothesis', hipotese.id);
    
    card.innerHTML = `
        <div class="card-header">
            <span class="card-icon">${hipotese.icone}</span>
            <span class="card-ideogram" style="color: ${hipotese.cor_tema}">${hipotese.ideograma.caracteres}</span>
        </div>
        <div class="card-pinyin">${hipotese.ideograma.pinyin}</div>
        <div class="card-title">${hipotese.numero}. ${hipotese.titulo_curto}</div>
        <div class="card-description">${hipotese.titulo_completo}</div>
        <div class="card-footer">
            <span class="card-keyword">#${hipotese.palavra_chave}</span>
            <span class="card-philosophers">${hipotese.filosofos_principais.length} filósofo(s)</span>
        </div>
    `;
    
    return card;
}

function createHypothesisListItem(hipotese) {
    const item = document.createElement('div');
    item.className = 'hypothesis-list-item';
    item.onclick = () => openModal('hypothesis', hipotese.id);
    
    item.innerHTML = `
        <div class="list-item-header">
            <span class="list-item-icon">${hipotese.icone}</span>
            <span class="list-item-ideogram" style="color: ${hipotese.cor_tema}">${hipotese.ideograma.caracteres}</span>
            <div class="list-item-info">
                <div class="list-item-title">${hipotese.numero}. ${hipotese.titulo_curto}</div>
                <div class="list-item-pinyin">${hipotese.ideograma.pinyin}</div>
            </div>
        </div>
        <div class="list-item-description">${hipotese.titulo_completo}</div>
        <div class="list-item-footer">
            <span class="list-item-keyword">#${hipotese.palavra_chave}</span>
            <span class="list-item-arrow">→</span>
        </div>
    `;
    
    return item;
}

function createPhilosopherCard(filosofo, isHome = false) {
    const card = document.createElement('div');
    card.className = 'philosopher-card';
    card.style.borderColor = filosofo.cor_tema;
    card.onclick = () => openModal('philosopher', filosofo.id);
    
    card.innerHTML = `
        <div class="card-header">
            <span class="card-icon">${filosofo.icone_representativo}</span>
            <div class="card-info">
                <div class="card-name">${filosofo.nome}</div>
                <div class="card-characters" style="color: ${filosofo.cor_tema}">${filosofo.caracteres}</div>
                <div class="card-years">${filosofo.anos}</div>
            </div>
        </div>
        <div class="card-description">${filosofo.contribuicao_essencial}</div>
        <div class="card-quote">"${filosofo.frase_iconica}"</div>
        <div class="card-footer">
            <span class="card-movement">${filosofo.movimento}</span>
            <span class="card-hypotheses">${filosofo.hipoteses_relacionadas.length} hipótese(s)</span>
        </div>
    `;
    
    return card;
}

function createPhilosopherListItem(filosofo) {
    const item = document.createElement('div');
    item.className = 'philosopher-list-item';
    item.onclick = () => openModal('philosopher', filosofo.id);
    
    item.innerHTML = `
        <div class="list-item-header">
            <span class="list-item-icon">${filosofo.icone_representativo}</span>
            <div class="list-item-info">
                <div class="list-item-name">${filosofo.nome}</div>
                <div class="list-item-characters" style="color: ${filosofo.cor_tema}">${filosofo.caracteres}</div>
                <div class="list-item-years">${filosofo.anos}</div>
            </div>
        </div>
        <div class="list-item-description">${filosofo.contribuicao_essencial}</div>
        <div class="list-item-footer">
            <span class="list-item-movement">${filosofo.movimento}</span>
            <span class="list-item-arrow">→</span>
        </div>
    `;
    
    return item;
}

function createResourceCard(recurso) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.style.borderColor = recurso.cor;
    card.onclick = () => openModal('resource', recurso.id);
    
    card.innerHTML = `
        <div class="card-header">
            <span class="card-icon">${recurso.icone}</span>
            <div class="card-info">
                <div class="card-title">${recurso.titulo}</div>
                <div class="card-subtitle">${recurso.subtitulo}</div>
            </div>
        </div>
        <div class="card-description">
            ${recurso.id === 'glossario' && 'Termos fundamentais com definições detalhadas'}
            ${recurso.id === 'cronologia' && 'Eventos históricos que moldaram a filosofia chinesa'}
            ${recurso.id === 'bibliografia' && 'Obras essenciais dos principais filósofos'}
        </div>
        <div class="card-footer">
            <span class="card-total">${recurso.total} itens</span>
            <span class="card-arrow">→</span>
        </div>
    `;
    
    return card;
}

function createJourneyCard(jornada) {
    const card = document.createElement('div');
    card.className = 'journey-card';
    card.onclick = () => openModal('journey', jornada.id);
    
    card.innerHTML = `
        <div class="journey-icon">${jornada.icone}</div>
        <div class="journey-title">${jornada.titulo}</div>
        <div class="journey-subtitle">${jornada.subtitulo}</div>
        <div class="journey-duration">${jornada.duracao_total}</div>
        <div class="journey-difficulty">Dificuldade: ${jornada.dificuldade}</div>
    `;
    
    return card;
}

// Modal
function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function openModal(type, id) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    currentModal = { type, id };
    
    switch(type) {
        case 'hypothesis':
            const hipotese = bookData.hipoteses.find(h => h.id === id);
            title.textContent = `Hipótese ${hipotese.numero}: ${hipotese.titulo_curto}`;
            body.innerHTML = createHypothesisModalContent(hipotese);
            break;
        case 'philosopher':
            const filosofo = bookData.filosofos.find(f => f.id === id);
            title.textContent = filosofo.nome;
            body.innerHTML = createPhilosopherModalContent(filosofo);
            break;
        case 'resource':
            const recurso = bookData.recursos[id];
            title.textContent = recurso.titulo;
            body.innerHTML = createResourceModalContent(recurso);
            break;
        case 'journey':
            const jornada = bookData.jornadas_tematicas.find(j => j.id === id);
            title.textContent = jornada.titulo;
            body.innerHTML = createJourneyModalContent(jornada);
            break;
        case 'chapter':
            title.textContent = `Capítulo: ${id}`;
            body.innerHTML = createChapterModalContent(id);
            break;
    }
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    currentModal = null;
}

// Conteúdo dos Modais
function createHypothesisModalContent(hipotese) {
    return `
        <div class="modal-hypothesis">
            <div class="modal-ideogram-section">
                <span class="modal-ideogram-icon">${hipotese.icone}</span>
                <span class="modal-ideogram-text" style="color: ${hipotese.cor_tema}">${hipotese.ideograma.caracteres}</span>
                <div class="modal-ideogram-pinyin">${hipotese.ideograma.pinyin}</div>
                <div class="modal-ideogram-meaning">${hipotese.ideograma.significado}</div>
            </div>
            
            <div class="modal-description-box" style="border-left-color: ${hipotese.cor_tema}">
                <div class="modal-description-title">📝 Enunciado</div>
                <div class="modal-description-text">${hipotese.titulo_completo}</div>
            </div>
            
            <div class="modal-description-box" style="border-left-color: ${hipotese.cor_tema}">
                <div class="modal-description-title">🔍 Análise</div>
                <div class="modal-description-text">${hipotese.analise_sintetica}</div>
            </div>
            
            <div class="modal-description-box" style="border-left-color: ${hipotese.cor_tema}">
                <div class="modal-description-title">⚠️ Crítica</div>
                <div class="modal-description-text">${hipotese.critica_sintetica}</div>
            </div>
            
            <div class="modal-keyword-section">
                <span class="modal-keyword-label">Palavra-chave:</span>
                <span class="modal-keyword-text" style="color: ${hipotese.cor_tema}">#${hipotese.palavra_chave}</span>
            </div>
            
            <div class="modal-philosophers-section">
                <div class="modal-section-title">🧑‍🏫 Filósofos Principais</div>
                ${hipotese.filosofos_principais.map(filosofoId => {
                    const filosofo = bookData.filosofos.find(f => f.id === filosofoId);
                    return `
                        <div class="modal-philosopher-item" onclick="openModal('philosopher', '${filosofoId}')">
                            <span class="modal-philosopher-icon">${filosofo.icone_representativo}</span>
                            <div class="modal-philosopher-info">
                                <div class="modal-philosopher-name">${filosofo.nome}</div>
                                <div class="modal-philosopher-characters">${filosofo.caracteres}</div>
                                <div class="modal-philosopher-contribution">${filosofo.contribuicao_essencial}</div>
                            </div>
                            <span class="modal-philosopher-arrow">→</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function createPhilosopherModalContent(filosofo) {
    return `
        <div class="modal-philosopher">
            <div class="modal-philosopher-header">
                <span class="modal-philosopher-icon">${filosofo.icone_representativo}</span>
                <div class="modal-philosopher-info">
                    <div class="modal-philosopher-name">${filosofo.nome}</div>
                    <div class="modal-philosopher-characters" style="color: ${filosofo.cor_tema}">${filosofo.caracteres}</div>
                    <div class="modal-philosopher-pinyin">${filosofo.pinyin}</div>
                    <div class="modal-philosopher-years">${filosofo.anos}</div>
                </div>
            </div>
            
            <div class="modal-description-box" style="border-left-color: ${filosofo.cor_tema}">
                <div class="modal-description-title">🎯 Contribuição Essencial</div>
                <div class="modal-description-text">${filosofo.contribuicao_essencial}</div>
            </div>
            
            <div class="modal-description-box" style="border-left-color: ${filosofo.cor_tema}">
                <div class="modal-description-title">💬 Frase Icônica</div>
                <div class="modal-description-text">"${filosofo.frase_iconica}"</div>
            </div>
            
            <div class="modal-description-box" style="border-left-color: ${filosofo.cor_tema}">
                <div class="modal-description-title">📍 Localização</div>
                <div class="modal-description-text">
                    <strong>Origem:</strong> ${filosofo.pais_origem}<br>
                    <strong>Atuação:</strong> ${filosofo.local_atuacao}
                </div>
            </div>
            
            <div class="modal-description-box" style="border-left-color: ${filosofo.cor_tema}">
                <div class="modal-description-title">🏛️ Movimento</div>
                <div class="modal-description-text">${filosofo.movimento}</div>
            </div>
            
            <div class="modal-hypotheses-section">
                <div class="modal-section-title">🌟 Hipóteses Relacionadas</div>
                ${filosofo.hipoteses_relacionadas.map(hipoteseId => {
                    const hipotese = bookData.hipoteses.find(h => h.id === hipoteseId);
                    return `
                        <div class="modal-hypothesis-item" onclick="openModal('hypothesis', '${hipoteseId}')">
                            <span class="modal-hypothesis-icon">${hipotese.icone}</span>
                            <div class="modal-hypothesis-info">
                                <div class="modal-hypothesis-title">${hipotese.numero}. ${hipotese.titulo_curto}</div>
                                <div class="modal-hypothesis-ideogram">${hipotese.ideograma.caracteres} (${hipotese.ideograma.pinyin})</div>
                            </div>
                            <span class="modal-hypothesis-arrow">→</span>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="modal-works-section">
                <div class="modal-section-title">📚 Obras Principais</div>
                ${filosofo.obras_principais.map(obra => `
                    <div class="modal-work-item">• ${obra}</div>
                `).join('')}
            </div>
            
            <div class="modal-dialogue-section">
                <div class="modal-section-title">🤝 Diálogo Ocidental</div>
                <div class="modal-dialogue-tags">
                    ${filosofo.dialogo_ocidental.map(autor => `
                        <span class="modal-dialogue-tag">${autor}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-description-box" style="border-left-color: ${filosofo.cor_tema}">
                <div class="modal-description-title">🏆 Legado</div>
                <div class="modal-description-text">${filosofo.legado}</div>
            </div>
        </div>
    `;
}

function createResourceModalContent(recurso) {
    let content = '';
    
    switch(recurso.id) {
        case 'glossario':
            content = `
                <div class="modal-resource">
                    <div class="modal-resource-intro">
                        <p>45 termos fundamentais com definições detalhadas e conexões com filósofos e hipóteses.</p>
                    </div>
                    ${recurso.termos.map(termo => `
                        <div class="modal-termo-item">
                            <div class="modal-termo-header">
                                <div class="modal-termo-termo">${termo.termo}</div>
                                <div class="modal-termo-categoria">${termo.categoria}</div>
                            </div>
                            <div class="modal-termo-traducao">${termo.traducao}</div>
                            <div class="modal-termo-definicao">${termo.definicao}</div>
                            ${termo.filosofo_principal ? `
                                <div class="modal-termo-filosofo">
                                    Filósofo: ${bookData.filosofos.find(f => f.id === termo.filosofo_principal)?.nome}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
            break;
        case 'cronologia':
            content = `
                <div class="modal-resource">
                    <div class="modal-resource-intro">
                        <p>48 eventos históricos que moldaram a filosofia chinesa contemporânea.</p>
                    </div>
                    ${recurso.eventos.map(evento => `
                        <div class="modal-evento-item">
                            <div class="modal-evento-header">
                                <div class="modal-evento-ano">${evento.ano}</div>
                                ${evento.e_marco_fundador ? '<div class="modal-evento-marco">⭐ Marco</div>' : ''}
                            </div>
                            <div class="modal-evento-titulo">${evento.titulo}</div>
                            <div class="modal-evento-descricao">${evento.descricao}</div>
                            <div class="modal-evento-impacto">
                                <strong>Impacto Filosófico:</strong> ${evento.impacto_filosofico}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            break;
        case 'bibliografia':
            content = `
                <div class="modal-resource">
                    <div class="modal-resource-intro">
                        <p>45 obras essenciais dos principais filósofos e pensadores.</p>
                    </div>
                    ${recurso.obras.map(obra => `
                        <div class="modal-obra-item">
                            <div class="modal-obra-header">
                                <div class="modal-obra-titulo">${obra.titulo}</div>
                                <div class="modal-obra-ano">${obra.ano}</div>
                            </div>
                            <div class="modal-obra-autor">${obra.autor}</div>
                            <div class="modal-obra-categoria">${obra.categoria}</div>
                            <div class="modal-obra-resumo">${obra.resumo}</div>
                            <div class="modal-obra-importancia">
                                <strong>Importância:</strong>
                                <span class="modal-obra-importancia-valor ${obra.importancia === 'alta' ? 'alta' : ''}">${obra.importancia}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            break;
    }
    
    return content;
}

function createJourneyModalContent(jornada) {
    return `
        <div class="modal-journey">
            <div class="modal-journey-intro">
                <p>${jornada.descricao}</p>
            </div>
            
            <div class="modal-journey-stats">
                <div class="modal-journey-stat">
                    <div class="modal-journey-stat-number">${jornada.id === 'jornada_7_dias' ? jornada.dias.length : jornada.etapas.length}</div>
                    <div class="modal-journey-stat-label">${jornada.id === 'jornada_7_dias' ? 'Dias' : 'Etapas'}</div>
                </div>
                <div class="modal-journey-stat">
                    <div class="modal-journey-stat-number">${jornada.duracao_total}</div>
                    <div class="modal-journey-stat-label">Duração</div>
                </div>
                <div class="modal-journey-stat">
                    <div class="modal-journey-stat-number">${jornada.dificuldade}</div>
                    <div class="modal-journey-stat-label">Nível</div>
                </div>
            </div>
            
            <div class="modal-journey-plan">
                <div class="modal-journey-plan-title">${jornada.id === 'jornada_7_dias' ? 'Plano de 7 Dias' : 'Etapas da Trilha'}</div>
                ${jornada.id === 'jornada_7_dias' 
                    ? jornada.dias.map(dia => `
                        <div class="modal-journey-day">
                            <div class="modal-journey-day-header">
                                <div class="modal-journey-day-number">Dia ${dia.dia}</div>
                            </div>
                            <div class="modal-journey-day-hypothesis">
                                <div class="modal-journey-day-hypothesis-title">
                                    Hipótese ${bookData.hipoteses.find(h => h.id === dia.hipotese)?.numero}
                                </div>
                                <div class="modal-journey-day-hypothesis-name">
                                    ${bookData.hipoteses.find(h => h.id === dia.hipotese)?.titulo_curto}
                                </div>
                            </div>
                            <div class="modal-journey-day-activities">${dia.atividades.join(' • ')}</div>
                            <div class="modal-journey-day-duration">${dia.duracao}</div>
                        </div>
                    `).join('')
                    : jornada.etapas.map(etapa => `
                        <div class="modal-journey-day">
                            <div class="modal-journey-day-header">
                                <div class="modal-journey-day-number">Etapa ${etapa.etapa}</div>
                            </div>
                            <div class="modal-journey-day-title">${etapa.titulo}</div>
                            <div class="modal-journey-day-activities">${etapa.atividades.join(' • ')}</div>
                            <div class="modal-journey-day-duration">${etapa.duracao}</div>
                        </div>
                    `).join('')
                }
            </div>
        </div>
    `;
}

function createChapterModalContent(chapterId) {
    const chapterData = {
        prefacio: {
            titulo: "Prefácio",
            subtitulo: "A China como Força Gravitacional Global",
            duracao_leitura: "15min",
            dificuldade: "intermediário",
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
            titulo: "Introdução",
            subtitulo: "O Que é Filosofia Contemporânea Chinesa?",
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
        cap_19: {
            titulo: "7 Hipóteses",
            subtitulo: "Sete Chaves para Compreender a Filosofia Chinesa Contemporânea",
            duracao_leitura: "30min",
            dificuldade: "avançado",
            e_capitulo_nucleo: true,
            conteudo: `# Capítulo 19: 7 Hipóteses

## O Coração do Livro

Após analisar os 5 filósofos (Mou, Tu, Li, Zhao, Chen), este capítulo apresenta 7 hipóteses que sintetizam a essência da filosofia chinesa contemporânea.

### Hipótese 1: Universalidade em Disputa (普遍)

O conjunto da obra dos cinco filósofos aponta para uma filosofia global de 'raízes múltiplas', que desafia a pretensão ocidental de universalidade homogênea.

**Análise:** Esta é a hipótese mais abrangente, pois sintetiza o espírito da filosofia chinesa contemporânea: propor uma filosofia verdadeiramente global que não parte da homogeneização ocidental, mas de uma pluralidade enraizada em tradições distintas.

**Crítica:** O risco aqui é ser interpretado como relativismo cultural, minando valores universais. Entretanto, a proposta chinesa não nega universalidade, mas defende sua construção policêntrica.

### Hipótese 2: O Nó Ético-Político (道德)

A filosofia chinesa contemporânea reabre o debate sobre a relação entre moralidade e política, unindo Kant, Confúcio e Tianxia numa síntese ainda inconclusa.

**Análise:** Essa hipótese mostra o esforço sistemático dos filósofos chineses para superar o abismo entre ética e política — tema central do Ocidente desde Maquiavel.

**Crítica:** A síntese proposta é de difícil viabilidade, porque as tradições possuem pressupostos ontológicos distintos. Ainda assim, esse esforço de compatibilização é um dos pontos mais criativos e ousados da filosofia chinesa contemporânea.`,
            conceitos_chave: [
                {
                    termo: "普遍",
                    pinyin: "pǔbiàn",
                    definicao: "Universalidade - o ideograma une o traço do 'comum' e do 'amplo'",
                    caracteres: "普遍"
                },
                {
                    termo: "道德",
                    pinyin: "dàodé",
                    definicao: "Moralidade - literalmente, 'o Caminho e a Virtude'",
                    caracteres: "道德"
                }
            ]
        }
    };

    const chapter = bookData.capitulos[chapterId] || bookData.capitulos.cap_01;
    
    return `
        <div class="modal-chapter">
            <div class="modal-chapter-header">
                <div class="modal-chapter-title">${chapter.titulo}</div>
                <div class="modal-chapter-subtitle">${chapter.subtitulo}</div>
                <div class="modal-chapter-meta">
                    <span class="modal-chapter-duration">${chapter.duracao_leitura}</span>
                    <span class="modal-chapter-difficulty">${chapter.dificuldade}</span>
                    ${chapter.e_capitulo_nucleo ? '<span class="modal-chapter-nucleo">⭐ Núcleo</span>' : ''}
                </div>
            </div>
            
            <div class="modal-chapter-content">
                <pre class="modal-chapter-text">${chapter.conteudo}</pre>
            </div>
            
            <div class="modal-chapter-concepts">
                <div class="modal-section-title">🔑 Conceitos-Chave</div>
                ${ (chapter.conceitos_chave || []).map(conceito => `
                    <div class="modal-concept-item">
                        <div class="modal-concept-header">
                            <div class="modal-concept-term">${conceito.termo}</div>
                            ${conceito.caracteres ? `<div class="modal-concept-characters">${conceito.caracteres}</div>` : ''}
                        </div>
                        ${conceito.pinyin ? `<div class="modal-concept-pinyin">${conceito.pinyin}</div>` : ''}
                        <div class="modal-concept-definition">${conceito.definicao}</div>
                    </div>
                `).join('') }
            </div>
        </div>
    `;
}

// Funções auxiliares
function openJourney(journeyId) {
    openModal('journey', journeyId);
}

// Adicionar estilos CSS para os elementos criados dinamicamente
const additionalStyles = `
<style>
/* Estilos para elementos criados dinamicamente */
.hypotheses-list, .philosophers-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.hypothesis-list-item, .philosopher-list-item {
    background: white;
    border-radius: 0.75rem;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease;
}

.hypothesis-list-item:hover, .philosopher-list-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.list-item-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
}

.list-item-icon {
    font-size: 1.5rem;
}

.list-item-ideogram {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Noto Serif SC', serif;
}

.list-item-info {
    flex: 1;
}

.list-item-title, .list-item-name {
    font-size: 1rem;
    font-weight: 700;
    color: #333;
}

.list-item-pinyin, .list-item-characters {
    font-size: 0.875rem;
    color: #D32F2F;
    font-family: 'Noto Serif SC', serif;
    margin-top: 0.25rem;
}

.list-item-years {
    font-size: 0.75rem;
    color: #666;
    margin-top: 0.25rem;
}

.list-item-description {
    font-size: 0.875rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 0.5rem;
}

.list-item-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.list-item-keyword, .list-item-movement {
    font-size: 0.75rem;
    color: #666;
    font-style: italic;
}

.list-item-arrow {
    font-size: 0.875rem;
    color: #666;
}

/* Estilos para modais */
.modal-hypothesis, .modal-philosopher, .modal-resource, .modal-journey, .modal-chapter {
    max-height: 70vh;
    overflow-y: auto;
}

.modal-ideogram-section {
    text-align: center;
    margin-bottom: 2rem;
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 1rem;
}

.modal-ideogram-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
}

.modal-ideogram-text {
    font-size: 3rem;
    font-weight: 700;
    font-family: 'Noto Serif SC', serif;
    margin-bottom: 0.5rem;
    display: block;
}

.modal-ideogram-pinyin {
    font-size: 1rem;
    color: #666;
    font-style: italic;
    margin-bottom: 0.5rem;
}

.modal-ideogram-meaning {
    font-size: 0.875rem;
    color: #555;
    line-height: 1.5;
}

.modal-description-box {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 0.75rem;
    margin-bottom: 1rem;
    border-left: 4px solid #D32F2F;
}

.modal-description-title {
    font-size: 1rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
}

.modal-description-text {
    font-size: 0.875rem;
    color: #555;
    line-height: 1.5;
}

.modal-keyword-section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: white;
    padding: 1rem;
    border-radius: 0.75rem;
    margin-bottom: 1.5rem;
}

.modal-keyword-label {
    font-size: 0.875rem;
    color: #666;
}

.modal-keyword-text {
    font-size: 1rem;
    font-weight: 700;
}

.modal-section-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
}

.modal-philosopher-item, .modal-hypothesis-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #f8f9fa;
    padding: 0.75rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.modal-philosopher-item:hover, .modal-hypothesis-item:hover {
    background: #e9ecef;
}

.modal-philosopher-icon, .modal-hypothesis-icon {
    font-size: 1.5rem;
}

.modal-philosopher-info, .modal-hypothesis-info {
    flex: 1;
}

.modal-philosopher-name, .modal-hypothesis-title {
    font-size: 1rem;
    font-weight: 700;
    color: #333;
}

.modal-philosopher-characters, .modal-hypothesis-ideogram {
    font-size: 0.875rem;
    color: #D32F2F;
    font-family: 'Noto Serif SC', serif;
    margin-top: 0.25rem;
}

.modal-philosopher-contribution {
    font-size: 0.75rem;
    color: #666;
    margin-top: 0.25rem;
}

.modal-philosopher-arrow, .modal-hypothesis-arrow {
    font-size: 1rem;
    color: #666;
}

.modal-work-item {
    background: #f8f9fa;
    padding: 0.75rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: #555;
}

.modal-dialogue-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.modal-dialogue-tag {
    background: #D32F2F;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
}

.modal-resource-intro, .modal-journey-intro {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 0.75rem;
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    color: #555;
    line-height: 1.5;
}

.modal-termo-item, .modal-evento-item, .modal-obra-item {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 0.75rem;
    margin-bottom: 1rem;
}

.modal-termo-header, .modal-evento-header, .modal-obra-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.modal-termo-termo, .modal-evento-titulo, .modal-obra-titulo {
    font-size: 1rem;
    font-weight: 700;
    color: #333;
    flex: 1;
}

.modal-termo-categoria, .modal-evento-ano, .modal-obra-ano {
    font-size: 0.75rem;
    color: #666;
    background: #e0e0e0;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

.modal-termo-traducao, .modal-obra-autor {
    font-size: 0.875rem;
    color: #D32F2F;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.modal-termo-definicao, .modal-evento-descricao, .modal-obra-resumo {
    font-size: 0.875rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 0.5rem;
}

.modal-evento-impacto, .modal-obra-importancia {
    font-size: 0.75rem;
    color: #666;
}

.modal-evento-marco {
    font-size: 0.75rem;
    color: #D32F2F;
    background: #FFE0E0;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

.modal-obra-categoria {
    font-size: 0.75rem;
    color: #666;
    margin-bottom: 0.5rem;
}

.modal-obra-importancia-valor {
    font-size: 0.75rem;
    color: #666;
    background: #e0e0e0;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

.modal-obra-importancia-valor.alta {
    color: #D32F2F;
    background: #FFE0E0;
}

.modal-termo-filosofo {
    font-size: 0.75rem;
    color: #666;
    font-style: italic;
}

.modal-journey-stats {
    display: flex;
    justify-content: space-around;
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.modal-journey-stat {
    text-align: center;
}

.modal-journey-stat-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: #D32F2F;
    margin-bottom: 0.25rem;
}

.modal-journey-stat-label {
    font-size: 0.75rem;
    color: #666;
}

.modal-journey-plan-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
}

.modal-journey-day {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 0.75rem;
    margin-bottom: 1rem;
}

.modal-journey-day-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.modal-journey-day-number {
    font-size: 1rem;
    font-weight: 700;
    color: #D32F2F;
}

.modal-journey-day-title {
    font-size: 1rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
}

.modal-journey-day-hypothesis {
    margin-bottom: 0.5rem;
}

.modal-journey-day-hypothesis-title {
    font-size: 0.875rem;
    color: #D32F2F;
    font-weight: 600;
}

.modal-journey-day-hypothesis-name {
    font-size: 1rem;
    font-weight: 700;
    color: #333;
}

.modal-journey-day-activities {
    font-size: 0.875rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 0.5rem;
}

.modal-journey-day-duration {
    font-size: 0.75rem;
    color: #666;
}

.modal-chapter-header {
    margin-bottom: 1.5rem;
}

.modal-chapter-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
}

.modal-chapter-subtitle {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
}

.modal-chapter-meta {
    display: flex;
    gap: 0.75rem;
    align-items: center;
}

.modal-chapter-duration, .modal-chapter-difficulty {
    font-size: 0.75rem;
    color: #666;
    background: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

.modal-chapter-nucleo {
    font-size: 0.75rem;
    color: #D32F2F;
    background: #FFE0E0;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

.modal-chapter-content {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 0.75rem;
    margin-bottom: 1.5rem;
}

.modal-chapter-text {
    font-size: 0.875rem;
    color: #333;
    line-height: 1.6;
    white-space: pre-wrap;
    margin: 0;
    font-family: inherit;
}

.modal-concept-item {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 0.75rem;
    margin-bottom: 1rem;
}

.modal-concept-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.modal-concept-term {
    font-size: 1rem;
    font-weight: 700;
    color: #333;
    flex: 1;
}

.modal-concept-characters {
    font-size: 1rem;
    color: #D32F2F;
    font-family: 'Noto Serif SC', serif;
}

.modal-concept-pinyin {
    font-size: 0.75rem;
    color: #666;
    font-style: italic;
    margin-bottom: 0.5rem;
}

.modal-concept-definition {
    font-size: 0.875rem;
    color: #555;
    line-height: 1.5;
}

/* Estilos para recursos */
.resource-card {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.resource-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.card-total {
    font-size: 0.875rem;
    color: #666;
    font-weight: 600;
}

.card-arrow {
    font-size: 0.875rem;
    color: #666;
}

/* Estilos para jornadas */
.journey-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

/* Estilos para capítulos */
.chapters-intro {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.chapters-intro h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
}

.chapters-intro p {
    font-size: 0.875rem;
    color: #666;
    line-height: 1.5;
}

.chapters-quick-access {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.chapters-quick-access h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
}

.quick-chapters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.quick-chapter-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    background: white;
    border: 2px solid #e0e0e0;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
}

.quick-chapter-btn:hover {
    border-color: #D32F2F;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.quick-chapter-icon {
    font-size: 2rem;
}

.quick-chapter-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: #333;
}

.quick-chapter-subtitle {
    font-size: 0.75rem;
    color: #666;
}

/* Responsividade para modais */
@media (max-width: 768px) {
    .modal-content {
        margin: 1rem;
        max-height: calc(100vh - 2rem);
    }
    
    .modal-journey-stats {
        flex-direction: column;
        gap: 1rem;
    }
    
    .modal-journey-stat {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .modal-journey-stat-number {
        font-size: 1.25rem;
    }
    
    .modal-journey-stat-label {
        font-size: 0.875rem;
    }
}
</style>
`;

// Adicionar estilos ao head
document.head.insertAdjacentHTML('beforeend', additionalStyles);