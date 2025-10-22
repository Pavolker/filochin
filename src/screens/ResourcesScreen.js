import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { bookData } from '../data/bookData';

const { width } = Dimensions.get('window');

const ResourcesScreen = ({ navigation }) => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Dados simulados dos recursos
  const resourcesData = {
    glossario: {
      id: 'glossario',
      titulo: 'Glossário',
      subtitulo: '45 termos fundamentais',
      icone: '📚',
      cor: '#3498db',
      total: 45,
      termos: [
        {
          id: 'tianxia',
          termo: '天下 (tiānxià)',
          traducao: 'Tudo sob o Céu',
          definicao: 'Conceito central da filosofia política chinesa que designa uma ordem mundial inclusiva, onde nenhum povo fica "fora do céu". Proposto por Zhao Tingyang como alternativa à ordem westfaliana.',
          filosofo_principal: 'zhao_tingyang',
          hipotese_relacionada: 'hipotese_4',
          categoria: 'política'
        },
        {
          id: 'ren',
          termo: '仁 (rén)',
          traducao: 'Benevolência',
          definicao: 'Virtude suprema confucionista - amor, compaixão e respeito pelos outros. Base da ética relacional chinesa.',
          filosofo_principal: 'mou_zongsan',
          hipotese_relacionada: 'hipotese_2',
          categoria: 'ética'
        },
        {
          id: 'dao',
          termo: '道 (dào)',
          traducao: 'O Caminho',
          definicao: 'Princípio fundamental que governa o universo. Fonte de toda existência e padrão para toda ação.',
          filosofo_principal: null,
          hipotese_relacionada: null,
          categoria: 'metafísica'
        },
        {
          id: 'xin_rujia',
          termo: '新儒家 (Xīn Rújiā)',
          traducao: 'Novo Confucionismo',
          definicao: 'Movimento de revitalização e modernização do confucionismo em resposta aos desafios da modernidade ocidental.',
          filosofo_principal: 'mou_zongsan',
          hipotese_relacionada: 'hipotese_3',
          categoria: 'movimento'
        },
        {
          id: 'wusiyundong',
          termo: '五四运动 (Wǔsì Yùndòng)',
          traducao: 'Movimento de 4 de Maio',
          definicao: 'Mobilização estudantil de 1919 que marcou virada cultural na China. Defendeu ciência, democracia e crítica ao confucionismo tradicional.',
          filosofo_principal: null,
          hipotese_relacionada: 'hipotese_1',
          categoria: 'história'
        }
      ]
    },
    cronologia: {
      id: 'cronologia',
      titulo: 'Cronologia',
      subtitulo: '48 eventos históricos',
      icone: '📅',
      cor: '#e74c3c',
      total: 48,
      eventos: [
        {
          ano: 1919,
          titulo: 'Movimento de 4 de Maio',
          descricao: 'Mobilização estudantil que marcou virada cultural na China',
          impacto_filosofico: 'Marco fundador da filosofia contemporânea chinesa',
          e_marco_fundador: true,
          categoria: 'política'
        },
        {
          ano: 1949,
          titulo: 'Fundação da República Popular da China',
          descricao: 'Estabelecimento do regime comunista',
          impacto_filosofico: 'Marxismo como ideologia oficial',
          e_marco_fundador: false,
          categoria: 'política'
        },
        {
          ano: 1966,
          titulo: 'Início da Revolução Cultural',
          descricao: 'Movimento político que perseguiu intelectuais',
          impacto_filosofico: 'Destruição do patrimônio cultural e filosófico',
          e_marco_fundador: false,
          categoria: 'política'
        },
        {
          ano: 1978,
          titulo: 'Reformas de Deng Xiaoping',
          descricao: 'Abertura econômica e intelectual',
          impacto_filosofico: 'Reabertura do debate filosófico',
          e_marco_fundador: false,
          categoria: 'política'
        },
        {
          ano: 2005,
          titulo: 'Zhao Tingyang publica teoria Tianxia',
          descricao: 'Primeira proposta filosófica chinesa com impacto global',
          impacto_filosofico: 'China entra no debate filosófico internacional',
          e_marco_fundador: false,
          categoria: 'filosofia'
        }
      ]
    },
    bibliografia: {
      id: 'bibliografia',
      titulo: 'Bibliografia',
      subtitulo: '45 obras essenciais',
      icone: '📖',
      cor: '#2ecc71',
      total: 45,
      obras: [
        {
          id: 'mou_critica',
          titulo: 'Crítica da Consciência Moral',
          autor: 'Mou Zongsan',
          ano: 1968,
          categoria: 'filosofia',
          importancia: 'alta',
          resumo: 'Síntese entre moralidade kantiana e confucionismo'
        },
        {
          id: 'tu_selfhood',
          titulo: 'Confucian Thought: Selfhood as Creative Transformation',
          autor: 'Tu Weiming',
          ano: 1985,
          categoria: 'filosofia',
          importancia: 'alta',
          resumo: 'Humanismo confuciano como ética global'
        },
        {
          id: 'zhao_tianxia',
          titulo: 'The Tianxia System: An Introduction to the Philosophy of a World Institution',
          autor: 'Zhao Tingyang',
          ano: 2005,
          categoria: 'política',
          importancia: 'alta',
          resumo: 'Teoria do Tianxia como ordem mundial inclusiva'
        },
        {
          id: 'li_beauty',
          titulo: 'The Path of Beauty',
          autor: 'Li Zehou',
          ano: 1988,
          categoria: 'estética',
          importancia: 'alta',
          resumo: 'Estética como fundamento filosófico'
        },
        {
          id: 'chen_tradition',
          titulo: 'Ancient Chinese Thought, Modern Chinese Philosophy',
          autor: 'Chen Lai',
          ano: 2002,
          categoria: 'hermenêutica',
          importancia: 'média',
          resumo: 'Hermenêutica confuciana e reconstrução da tradição'
        }
      ]
    }
  };

  const ResourceCard = ({ resource }) => (
    <TouchableOpacity
      style={[styles.resourceCard, { borderColor: resource.cor }]}
      onPress={() => setSelectedResource(resource)}
    >
      <LinearGradient
        colors={[`${resource.cor}22`, `${resource.cor}55`]}
        style={styles.resourceGradient}
      >
        <View style={styles.resourceHeader}>
          <Text style={styles.resourceIcon}>{resource.icone}</Text>
          <View style={styles.resourceInfo}>
            <Text style={styles.resourceTitle}>{resource.titulo}</Text>
            <Text style={styles.resourceSubtitle}>{resource.subtitulo}</Text>
          </View>
        </View>
        <Text style={styles.resourceDescription}>
          {resource.id === 'glossario' && 'Termos fundamentais com definições detalhadas'}
          {resource.id === 'cronologia' && 'Eventos históricos que moldaram a filosofia chinesa'}
          {resource.id === 'bibliografia' && 'Obras essenciais dos principais filósofos'}
        </Text>
        <View style={styles.resourceFooter}>
          <Text style={styles.resourceTotal}>{resource.total} itens</Text>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const GlossarioModal = ({ resource }) => (
    <Modal
      visible={selectedResource?.id === 'glossario'}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{resource.titulo}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedResource(null)}
          >
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.modalContent}>
          {resource.termos
            .filter(termo => 
              searchQuery === '' || 
              termo.termo.toLowerCase().includes(searchQuery.toLowerCase()) ||
              termo.traducao.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((termo) => (
              <View key={termo.id} style={styles.termoCard}>
                <View style={styles.termoHeader}>
                  <Text style={styles.termoTermo}>{termo.termo}</Text>
                  <Text style={styles.termoCategoria}>{termo.categoria}</Text>
                </View>
                <Text style={styles.termoTraducao}>{termo.traducao}</Text>
                <Text style={styles.termoDefinicao}>{termo.definicao}</Text>
                {termo.filosofo_principal && (
                  <Text style={styles.termoFilosofo}>
                    Filósofo: {bookData.filosofos.find(f => f.id === termo.filosofo_principal)?.nome}
                  </Text>
                )}
              </View>
            ))}
        </ScrollView>
      </View>
    </Modal>
  );

  const CronologiaModal = ({ resource }) => (
    <Modal
      visible={selectedResource?.id === 'cronologia'}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{resource.titulo}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedResource(null)}
          >
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.modalContent}>
          {resource.eventos.map((evento) => (
            <View key={evento.ano} style={styles.eventoCard}>
              <View style={styles.eventoHeader}>
                <Text style={styles.eventoAno}>{evento.ano}</Text>
                {evento.e_marco_fundador && (
                  <Text style={styles.eventoMarco}>⭐ Marco</Text>
                )}
              </View>
              <Text style={styles.eventoTitulo}>{evento.titulo}</Text>
              <Text style={styles.eventoDescricao}>{evento.descricao}</Text>
              <Text style={styles.eventoImpacto}>
                <Text style={styles.eventoImpactoLabel}>Impacto Filosófico:</Text> {evento.impacto_filosofico}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );

  const BibliografiaModal = ({ resource }) => (
    <Modal
      visible={selectedResource?.id === 'bibliografia'}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{resource.titulo}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedResource(null)}
          >
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.modalContent}>
          {resource.obras.map((obra) => (
            <View key={obra.id} style={styles.obraCard}>
              <View style={styles.obraHeader}>
                <Text style={styles.obraTitulo}>{obra.titulo}</Text>
                <Text style={styles.obraAno}>{obra.ano}</Text>
              </View>
              <Text style={styles.obraAutor}>{obra.autor}</Text>
              <Text style={styles.obraCategoria}>{obra.categoria}</Text>
              <Text style={styles.obraResumo}>{obra.resumo}</Text>
              <View style={styles.obraImportancia}>
                <Text style={styles.obraImportanciaLabel}>Importância:</Text>
                <Text style={[
                  styles.obraImportanciaValor,
                  obra.importancia === 'alta' && styles.obraImportanciaAlta
                ]}>
                  {obra.importancia}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📚 Recursos</Text>
        <Text style={styles.headerSubtitle}>
          Glossário, cronologia e bibliografia essenciais
        </Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {Object.values(resourcesData).map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}

        {/* Quick Stats */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>📊 Estatísticas</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>45</Text>
              <Text style={styles.statLabel}>Termos no Glossário</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>48</Text>
              <Text style={styles.statLabel}>Eventos Históricos</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>45</Text>
              <Text style={styles.statLabel}>Obras Essenciais</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Filósofos Principais</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            💡 <Text style={styles.footerBold}>Dica:</Text> Use o glossário para 
            entender conceitos-chave, a cronologia para contextualizar historicamente 
            e a bibliografia para aprofundar seus estudos.
          </Text>
        </View>
      </ScrollView>

      {/* Modals */}
      {selectedResource?.id === 'glossario' && (
        <GlossarioModal resource={selectedResource} />
      )}
      {selectedResource?.id === 'cronologia' && (
        <CronologiaModal resource={selectedResource} />
      )}
      {selectedResource?.id === 'bibliografia' && (
        <BibliografiaModal resource={selectedResource} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  content: {
    flex: 1,
  },
  resourceCard: {
    margin: 16,
    borderRadius: 16,
    borderWidth: 2,
    overflow: 'hidden',
  },
  resourceGradient: {
    padding: 20,
  },
  resourceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  resourceIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  resourceInfo: {
    flex: 1,
  },
  resourceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  resourceSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  resourceDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 16,
  },
  resourceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resourceTotal: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  statsSection: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: (width - 48) / 2,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    textAlign: 'center',
  },
  footerBold: {
    fontWeight: 'bold',
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 8,
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
  termoCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  termoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  termoTermo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  termoCategoria: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  termoTraducao: {
    fontSize: 14,
    color: '#D32F2F',
    fontWeight: '600',
    marginBottom: 8,
  },
  termoDefinicao: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 8,
  },
  termoFilosofo: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  eventoCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  eventoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventoAno: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  eventoMarco: {
    fontSize: 12,
    color: '#D32F2F',
    backgroundColor: '#FFE0E0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  eventoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  eventoDescricao: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 8,
  },
  eventoImpacto: {
    fontSize: 13,
    color: '#666',
  },
  eventoImpactoLabel: {
    fontWeight: 'bold',
  },
  obraCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  obraHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  obraTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  obraAno: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  obraAutor: {
    fontSize: 14,
    color: '#D32F2F',
    fontWeight: '600',
    marginBottom: 4,
  },
  obraCategoria: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  obraResumo: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 8,
  },
  obraImportancia: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  obraImportanciaLabel: {
    fontSize: 12,
    color: '#666',
    marginRight: 8,
  },
  obraImportanciaValor: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  obraImportanciaAlta: {
    color: '#D32F2F',
    backgroundColor: '#FFE0E0',
  },
});

export default ResourcesScreen;
