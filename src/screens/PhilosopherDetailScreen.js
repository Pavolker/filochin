import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { bookData } from '../data/bookData';

const { width } = Dimensions.get('window');

const PhilosopherDetailScreen = ({ route, navigation }) => {
  const { filosofo } = route.params;
  const [currentTab, setCurrentTab] = useState('overview');

  const renderOverview = () => (
    <ScrollView style={styles.tabContent}>
      <View style={styles.philosopherHeader}>
        <Text style={styles.philosopherIcon}>{filosofo.icone_representativo}</Text>
        <View style={styles.philosopherInfo}>
          <Text style={styles.philosopherName}>{filosofo.nome}</Text>
          <Text style={[styles.philosopherCharacters, { color: filosofo.cor_tema }]}>
            {filosofo.caracteres}
          </Text>
          <Text style={styles.philosopherPinyin}>{filosofo.pinyin}</Text>
          <Text style={styles.philosopherYears}>{filosofo.anos}</Text>
        </View>
      </View>

      <View style={[styles.descriptionBox, { borderLeftColor: filosofo.cor_tema }]}>
        <Text style={styles.descriptionTitle}>🎯 Contribuição Essencial</Text>
        <Text style={styles.descriptionText}>{filosofo.contribuicao_essencial}</Text>
      </View>

      <View style={[styles.descriptionBox, { borderLeftColor: filosofo.cor_tema }]}>
        <Text style={styles.descriptionTitle}>💬 Frase Icônica</Text>
        <Text style={styles.descriptionText}>"{filosofo.frase_iconica}"</Text>
      </View>

      <View style={[styles.descriptionBox, { borderLeftColor: filosofo.cor_tema }]}>
        <Text style={styles.descriptionTitle}>📍 Localização</Text>
        <Text style={styles.descriptionText}>
          <Text style={styles.bold}>Origem:</Text> {filosofo.pais_origem}{'\n'}
          <Text style={styles.bold}>Atuação:</Text> {filosofo.local_atuacao}
        </Text>
      </View>

      <View style={[styles.descriptionBox, { borderLeftColor: filosofo.cor_tema }]}>
        <Text style={styles.descriptionTitle}>🏛️ Movimento</Text>
        <Text style={styles.descriptionText}>{filosofo.movimento}</Text>
      </View>

      <View style={[styles.descriptionBox, { borderLeftColor: filosofo.cor_tema }]}>
        <Text style={styles.descriptionTitle}>🏆 Legado</Text>
        <Text style={styles.descriptionText}>{filosofo.legado}</Text>
      </View>
    </ScrollView>
  );

  const renderHypotheses = () => (
    <ScrollView style={styles.tabContent}>
      <Text style={styles.sectionTitle}>🌟 Hipóteses Relacionadas</Text>
      {filosofo.hipoteses_relacionadas.map((hipoteseId) => {
        const hipotese = bookData.hipoteses.find(h => h.id === hipoteseId);
        return (
          <TouchableOpacity
            key={hipoteseId}
            style={styles.hypothesisCard}
            onPress={() => navigation.navigate('HypothesisDetail', { hipotese })}
          >
            <Text style={styles.hypothesisIcon}>{hipotese.icone}</Text>
            <View style={styles.hypothesisInfo}>
              <Text style={styles.hypothesisTitle}>
                {hipotese.numero}. {hipotese.titulo_curto}
              </Text>
              <Text style={styles.hypothesisIdeogram}>
                {hipotese.ideograma.caracteres} ({hipotese.ideograma.pinyin})
              </Text>
              <Text style={styles.hypothesisDescription}>
                {hipotese.titulo_completo}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );

  const renderWorks = () => (
    <ScrollView style={styles.tabContent}>
      <Text style={styles.sectionTitle}>📚 Obras Principais</Text>
      {filosofo.obras_principais.map((obra, index) => (
        <View key={index} style={styles.workCard}>
          <Text style={styles.workTitle}>{obra}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>🤝 Diálogo Ocidental</Text>
      <View style={styles.dialogueTags}>
        {filosofo.dialogo_ocidental.map((autor, index) => (
          <View key={index} style={styles.dialogueTag}>
            <Text style={styles.dialogueTagText}>{autor}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderReflection = () => (
    <ScrollView style={styles.tabContent}>
      <Text style={styles.sectionTitle}>🤔 Exercício Reflexivo</Text>
      
      <View style={styles.reflectionCard}>
        <Text style={styles.reflectionTitle}>
          Conectando com {filosofo.nome}
        </Text>
        
        <Text style={styles.reflectionQuestion}>
          {filosofo.id === 'mou_zongsan' && "Como você entende a relação entre moralidade kantiana e tradição confucionista? Mou Zongsan propõe que o confucionismo pode 'superar' Kant. Você concorda?"}
          {filosofo.id === 'tu_weiming' && "Tu Weiming defende um 'humanismo espiritual' confuciano. Como isso se diferencia do humanismo ocidental? Que elementos você considera universais?"}
          {filosofo.id === 'li_zehou' && "Li Zehou coloca estética e emoção como fundamentos do pensamento. Você acredita que a razão pura é suficiente para a filosofia? Dê exemplos."}
          {filosofo.id === 'zhao_tingyang' && "Zhao Tingyang propõe Tianxia como ordem mundial inclusiva. Você vê isso como cosmopolitismo ético ou possível hegemonia chinesa? Justifique."}
          {filosofo.id === 'chen_lai' && "Chen Lai enfatiza a hermenêutica da tradição. Como equilibrar respeito à tradição com necessidade de inovação? Dê exemplos da sua cultura."}
        </Text>

        <View style={styles.reflectionTips}>
          <Text style={styles.reflectionTipsTitle}>💡 Dicas para Reflexão:</Text>
          <Text style={styles.reflectionTip}>• Considere a biografia e contexto histórico do filósofo</Text>
          <Text style={styles.reflectionTip}>• Compare com pensadores ocidentais que você conhece</Text>
          <Text style={styles.reflectionTip}>• Pense nas implicações práticas das ideias</Text>
          <Text style={styles.reflectionTip}>• Explore suas próprias experiências culturais</Text>
        </View>
      </View>
    </ScrollView>
  );

  const renderContent = () => {
    switch (currentTab) {
      case 'overview':
        return renderOverview();
      case 'hypotheses':
        return renderHypotheses();
      case 'works':
        return renderWorks();
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
        <Text style={styles.headerTitle}>{filosofo.nome}</Text>
        <Text style={styles.headerSubtitle}>{filosofo.contribuicao_essencial}</Text>
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
            style={[styles.tab, currentTab === 'hypotheses' && styles.tabActive]}
            onPress={() => setCurrentTab('hypotheses')}
          >
            <Ionicons name="bulb" size={20} color={currentTab === 'hypotheses' ? '#fff' : '#666'} />
            <Text style={[styles.tabText, currentTab === 'hypotheses' && styles.tabTextActive]}>
              Hipóteses
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, currentTab === 'works' && styles.tabActive]}
            onPress={() => setCurrentTab('works')}
          >
            <Ionicons name="book" size={20} color={currentTab === 'works' ? '#fff' : '#666'} />
            <Text style={[styles.tabText, currentTab === 'works' && styles.tabTextActive]}>
              Obras
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, currentTab === 'reflection' && styles.tabActive]}
            onPress={() => setCurrentTab('reflection')}
          >
            <Ionicons name="chatbubbles" size={20} color={currentTab === 'reflection' ? '#fff' : '#666'} />
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
  philosopherHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  philosopherIcon: {
    fontSize: 48,
    marginRight: 20,
  },
  philosopherInfo: {
    flex: 1,
  },
  philosopherName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  philosopherCharacters: {
    fontSize: 28,
    fontFamily: 'Noto Serif SC',
    marginBottom: 4,
  },
  philosopherPinyin: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  philosopherYears: {
    fontSize: 16,
    color: '#666',
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
  bold: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  hypothesisCard: {
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
  hypothesisIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  hypothesisInfo: {
    flex: 1,
  },
  hypothesisTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  hypothesisIdeogram: {
    fontSize: 14,
    color: '#D32F2F',
    fontFamily: 'Noto Serif SC',
    marginBottom: 4,
  },
  hypothesisDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  workCard: {
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
  workTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 22,
  },
  dialogueTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  dialogueTag: {
    backgroundColor: '#D32F2F',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  dialogueTagText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
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

export default PhilosopherDetailScreen;
