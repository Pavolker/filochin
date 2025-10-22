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

const HypothesisDetailScreen = ({ route, navigation }) => {
  const { hipotese } = route.params;
  const [currentTab, setCurrentTab] = useState('overview');

  const renderOverview = () => (
    <ScrollView style={styles.tabContent}>
      <View style={styles.ideogramSection}>
        <Text style={styles.ideogramIcon}>{hipotese.icone}</Text>
        <Text style={[styles.ideogramText, { color: hipotese.cor_tema }]}>
          {hipotese.ideograma.caracteres}
        </Text>
        <Text style={styles.ideogramPinyin}>{hipotese.ideograma.pinyin}</Text>
        <Text style={styles.ideogramMeaning}>{hipotese.ideograma.significado}</Text>
      </View>

      <View style={[styles.descriptionBox, { borderLeftColor: hipotese.cor_tema }]}>
        <Text style={styles.descriptionTitle}>📝 Enunciado</Text>
        <Text style={styles.descriptionText}>{hipotese.titulo_completo}</Text>
      </View>

      <View style={[styles.descriptionBox, { borderLeftColor: hipotese.cor_tema }]}>
        <Text style={styles.descriptionTitle}>🔍 Análise</Text>
        <Text style={styles.descriptionText}>{hipotese.analise_sintetica}</Text>
      </View>

      <View style={[styles.descriptionBox, { borderLeftColor: hipotese.cor_tema }]}>
        <Text style={styles.descriptionTitle}>⚠️ Crítica</Text>
        <Text style={styles.descriptionText}>{hipotese.critica_sintetica}</Text>
      </View>

      <View style={styles.keywordSection}>
        <Text style={styles.keywordLabel}>Palavra-chave:</Text>
        <Text style={[styles.keywordText, { color: hipotese.cor_tema }]}>
          #{hipotese.palavra_chave}
        </Text>
      </View>
    </ScrollView>
  );

  const renderPhilosophers = () => (
    <ScrollView style={styles.tabContent}>
      <Text style={styles.sectionTitle}>🧑‍🏫 Filósofos Principais</Text>
      {hipotese.filosofos_principais.map((filosofoId) => {
        const filosofo = bookData.filosofos.find(f => f.id === filosofoId);
        return (
          <TouchableOpacity
            key={filosofoId}
            style={styles.philosopherCard}
            onPress={() => navigation.navigate('PhilosopherDetail', { filosofo })}
          >
            <Text style={styles.philosopherIcon}>{filosofo.icone_representativo}</Text>
            <View style={styles.philosopherInfo}>
              <Text style={styles.philosopherName}>{filosofo.nome}</Text>
              <Text style={styles.philosopherCharacters}>{filosofo.caracteres}</Text>
              <Text style={styles.philosopherContribution}>
                {filosofo.contribuicao_essencial}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );

  const renderChapters = () => (
    <ScrollView style={styles.tabContent}>
      <Text style={styles.sectionTitle}>📖 Capítulos Relacionados</Text>
      {hipotese.capitulos_relacionados.map((chapterId) => (
        <TouchableOpacity
          key={chapterId}
          style={styles.chapterCard}
          onPress={() => navigation.navigate('ChapterReader', { 
            chapterId,
            title: `Capítulo ${chapterId}`,
            subtitle: 'Conteúdo relacionado à hipótese'
          })}
        >
          <Text style={styles.chapterTitle}>{chapterId.replace('_', ' ').toUpperCase()}</Text>
          <Text style={styles.chapterDescription}>
            Capítulo relacionado à hipótese {hipotese.numero}
          </Text>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderReflection = () => (
    <ScrollView style={styles.tabContent}>
      <Text style={styles.sectionTitle}>🤔 Exercício Reflexivo</Text>
      
      <View style={styles.reflectionCard}>
        <Text style={styles.reflectionTitle}>
          {hipotese.numero === 1 && "Debate: Universalidade Única vs. Múltipla"}
          {hipotese.numero === 2 && "Dilema Ético-Político"}
          {hipotese.numero === 3 && "Posicionamento: Indivíduo vs. Comunidade"}
          {hipotese.numero === 4 && "Análise: Tianxia como Ordem Global"}
          {hipotese.numero === 5 && "Paradoxo: Autonomia Relacional"}
          {hipotese.numero === 6 && "Reflexão: Estética e Razão"}
          {hipotese.numero === 7 && "Tensão: Cosmopolitismo e Hegemonia"}
        </Text>
        
        <Text style={styles.reflectionQuestion}>
          {hipotese.numero === 1 && "A universalidade filosófica deve ser única ou múltipla? Posicione-se em uma escala de 0 (única) a 10 (múltipla) e explique sua escolha."}
          {hipotese.numero === 2 && "Um governante pode mentir para proteger seu povo? Compare as perspectivas de Kant, Confúcio e Maquiavel."}
          {hipotese.numero === 3 && "Onde você se posiciona entre individualismo e comunitarismo? Considere sua criação familiar e cultura."}
          {hipotese.numero === 4 && "Tianxia pode ser uma alternativa viável à ordem internacional atual? Quais os riscos e benefícios?"}
          {hipotese.numero === 5 && "Como equilibrar autonomia individual com responsabilidade comunitária? Dê exemplos práticos."}
          {hipotese.numero === 6 && "A emoção e a estética podem ser fundamentos do pensamento filosófico? Justifique sua resposta."}
          {hipotese.numero === 7 && "Todo cosmopolitismo corre o risco de mascarar hegemonia? Como evitar esse problema?"}
        </Text>

        <View style={styles.reflectionTips}>
          <Text style={styles.reflectionTipsTitle}>💡 Dicas para Reflexão:</Text>
          <Text style={styles.reflectionTip}>• Considere exemplos da sua experiência pessoal</Text>
          <Text style={styles.reflectionTip}>• Compare com outras culturas e tradições</Text>
          <Text style={styles.reflectionTip}>• Pense nas implicações práticas da sua resposta</Text>
          <Text style={styles.reflectionTip}>• Explore as tensões e paradoxos envolvidos</Text>
        </View>
      </View>
    </ScrollView>
  );

  const renderContent = () => {
    switch (currentTab) {
      case 'overview':
        return renderOverview();
      case 'philosophers':
        return renderPhilosophers();
      case 'chapters':
        return renderChapters();
      case 'reflection':
        return renderReflection();
      default:
        return renderOverview();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Hipótese {hipotese.numero}: {hipotese.titulo_curto}
        </Text>
        <Text style={styles.headerSubtitle}>{hipotese.titulo_completo}</Text>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.tab, currentTab === 'overview' && styles.tabActive]}
            onPress={() => setCurrentTab('overview')}
          >
            <Ionicons name="eye" size={20} color={currentTab === 'overview' ? '#fff' : '#666'} />
            <Text style={[styles.tabText, currentTab === 'overview' && styles.tabTextActive]}>
              Visão Geral
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, currentTab === 'philosophers' && styles.tabActive]}
            onPress={() => setCurrentTab('philosophers')}
          >
            <Ionicons name="people" size={20} color={currentTab === 'philosophers' ? '#fff' : '#666'} />
            <Text style={[styles.tabText, currentTab === 'philosophers' && styles.tabTextActive]}>
              Filósofos
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, currentTab === 'chapters' && styles.tabActive]}
            onPress={() => setCurrentTab('chapters')}
          >
            <Ionicons name="book" size={20} color={currentTab === 'chapters' ? '#fff' : '#666'} />
            <Text style={[styles.tabText, currentTab === 'chapters' && styles.tabTextActive]}>
              Capítulos
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, currentTab === 'reflection' && styles.tabActive]}
            onPress={() => setCurrentTab('reflection')}
          >
            <Ionicons name="bulb" size={20} color={currentTab === 'reflection' ? '#fff' : '#666'} />
            <Text style={[styles.tabText, currentTab === 'reflection' && styles.tabTextActive]}>
              Reflexão
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Content */}
      <View style={styles.contentWrapper}>
        {renderContent()}
      </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  tabContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    marginVertical: 8,
  },
  tabActive: {
    backgroundColor: '#D32F2F',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 6,
  },
  tabTextActive: {
    color: '#fff',
  },
  contentWrapper: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    padding: 20,
  },
  ideogramSection: {
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ideogramIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  ideogramText: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Noto Serif SC',
    marginBottom: 8,
  },
  ideogramPinyin: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  ideogramMeaning: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 20,
  },
  descriptionBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  keywordSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  keywordLabel: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  keywordText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  philosopherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  philosopherIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  philosopherInfo: {
    flex: 1,
  },
  philosopherName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  philosopherCharacters: {
    fontSize: 18,
    color: '#D32F2F',
    fontFamily: 'Noto Serif SC',
    marginBottom: 4,
  },
  philosopherContribution: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  chapterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  chapterDescription: {
    fontSize: 13,
    color: '#666',
    flex: 2,
    marginRight: 12,
  },
  reflectionCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reflectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  reflectionQuestion: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 20,
  },
  reflectionTips: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
  },
  reflectionTipsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  reflectionTip: {
    fontSize: 13,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
});

export default HypothesisDetailScreen;
