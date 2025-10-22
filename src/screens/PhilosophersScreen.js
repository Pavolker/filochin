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

const PhilosophersScreen = ({ navigation }) => {
  const [selectedPhilosopher, setSelectedPhilosopher] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'

  const { filosofos } = bookData;

  const PhilosopherCard = ({ filosofo }) => (
    <TouchableOpacity
      style={[styles.philosopherCard, { borderColor: filosofo.cor_tema }]}
      onPress={() => setSelectedPhilosopher(filosofo)}
    >
      <LinearGradient
        colors={[`${filosofo.cor_tema}22`, `${filosofo.cor_tema}55`]}
        style={styles.cardGradient}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>{filosofo.icone_representativo}</Text>
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>{filosofo.nome}</Text>
            <Text style={[styles.cardCharacters, { color: filosofo.cor_tema }]}>
              {filosofo.caracteres}
            </Text>
            <Text style={styles.cardYears}>{filosofo.anos}</Text>
          </View>
        </View>
        <Text style={styles.cardContribution} numberOfLines={2}>
          {filosofo.contribuicao_essencial}
        </Text>
        <Text style={styles.cardQuote} numberOfLines={2}>
          "{filosofo.frase_iconica}"
        </Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardMovement}>{filosofo.movimento}</Text>
          <Text style={styles.cardHypotheses}>
            {filosofo.hipoteses_relacionadas.length} hipótese(s)
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const PhilosopherDetailModal = ({ filosofo }) => (
    <Modal
      visible={selectedPhilosopher !== null}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedPhilosopher(null)}
          >
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.modalContent}>
          <View style={styles.detailHeader}>
            <Text style={styles.detailIcon}>{filosofo.icone_representativo}</Text>
            <View style={styles.detailTitleContainer}>
              <Text style={styles.detailName}>{filosofo.nome}</Text>
              <Text style={[styles.detailCharacters, { color: filosofo.cor_tema }]}>
                {filosofo.caracteres}
              </Text>
              <Text style={styles.detailPinyin}>{filosofo.pinyin}</Text>
              <Text style={styles.detailYears}>{filosofo.anos}</Text>
            </View>
          </View>

          <View style={[styles.detailBox, { borderLeftColor: filosofo.cor_tema }]}>
            <Text style={styles.detailBoxTitle}>🎯 Contribuição Essencial</Text>
            <Text style={styles.detailBoxText}>{filosofo.contribuicao_essencial}</Text>
          </View>

          <View style={[styles.detailBox, { borderLeftColor: filosofo.cor_tema }]}>
            <Text style={styles.detailBoxTitle}>💬 Frase Icônica</Text>
            <Text style={styles.detailBoxText}>"{filosofo.frase_iconica}"</Text>
          </View>

          <View style={[styles.detailBox, { borderLeftColor: filosofo.cor_tema }]}>
            <Text style={styles.detailBoxTitle}>📍 Localização</Text>
            <Text style={styles.detailBoxText}>
              <Text style={styles.bold}>Origem:</Text> {filosofo.pais_origem}{'\n'}
              <Text style={styles.bold}>Atuação:</Text> {filosofo.local_atuacao}
            </Text>
          </View>

          <View style={[styles.detailBox, { borderLeftColor: filosofo.cor_tema }]}>
            <Text style={styles.detailBoxTitle}>🏛️ Movimento</Text>
            <Text style={styles.detailBoxText}>{filosofo.movimento}</Text>
          </View>

          <View style={styles.hypothesesSection}>
            <Text style={styles.sectionTitle}>🌟 Hipóteses Relacionadas</Text>
            {filosofo.hipoteses_relacionadas.map((hipoteseId) => {
              const hipotese = bookData.hipoteses.find(h => h.id === hipoteseId);
              return (
                <TouchableOpacity
                  key={hipoteseId}
                  style={styles.hypothesisItem}
                  onPress={() => {
                    setSelectedPhilosopher(null);
                    navigation.navigate('HypothesisDetail', { hipotese });
                  }}
                >
                  <Text style={styles.hypothesisIcon}>{hipotese.icone}</Text>
                  <View style={styles.hypothesisInfo}>
                    <Text style={styles.hypothesisTitle}>
                      {hipotese.numero}. {hipotese.titulo_curto}
                    </Text>
                    <Text style={styles.hypothesisIdeogram}>
                      {hipotese.ideograma.caracteres} ({hipotese.ideograma.pinyin})
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#666" />
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.worksSection}>
            <Text style={styles.sectionTitle}>📚 Obras Principais</Text>
            {filosofo.obras_principais.map((obra, index) => (
              <View key={index} style={styles.workItem}>
                <Text style={styles.workTitle}>• {obra}</Text>
              </View>
            ))}
          </View>

          <View style={styles.dialogueSection}>
            <Text style={styles.sectionTitle}>🤝 Diálogo Ocidental</Text>
            <View style={styles.dialogueTags}>
              {filosofo.dialogo_ocidental.map((autor, index) => (
                <View key={index} style={styles.dialogueTag}>
                  <Text style={styles.dialogueTagText}>{autor}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={[styles.detailBox, { borderLeftColor: filosofo.cor_tema }]}>
            <Text style={styles.detailBoxTitle}>🏆 Legado</Text>
            <Text style={styles.detailBoxText}>{filosofo.legado}</Text>
          </View>

          <View style={styles.actionsSection}>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: filosofo.cor_tema }]}
              onPress={() => {
                setSelectedPhilosopher(null);
                navigation.navigate('ChapterReader', { 
                  chapterId: filosofo.capitulo_dedicado,
                  title: `Capítulo dedicado a ${filosofo.nome}`
                });
              }}
            >
              <Ionicons name="book" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Ler Capítulo Dedicado</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButtonSecondary}
              onPress={() => setSelectedPhilosopher(null)}
            >
              <Ionicons name="close" size={20} color="#666" />
              <Text style={styles.actionButtonTextSecondary}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>👤 Os 5 Filósofos</Text>
        <Text style={styles.headerSubtitle}>
          Pensadores que redesenham o mundo
        </Text>
        
        {/* View Mode Toggle */}
        <View style={styles.viewModeToggle}>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'grid' && styles.toggleButtonActive]}
            onPress={() => setViewMode('grid')}
          >
            <Ionicons name="grid" size={20} color={viewMode === 'grid' ? '#fff' : '#666'} />
            <Text style={[styles.toggleText, viewMode === 'grid' && styles.toggleTextActive]}>
              Grid
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'list' && styles.toggleButtonActive]}
            onPress={() => setViewMode('list')}
          >
            <Ionicons name="list" size={20} color={viewMode === 'list' ? '#fff' : '#666'} />
            <Text style={[styles.toggleText, viewMode === 'list' && styles.toggleTextActive]}>
              Lista
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {viewMode === 'grid' ? (
          <View style={styles.gridContainer}>
            {filosofos.map((filosofo) => (
              <PhilosopherCard key={filosofo.id} filosofo={filosofo} />
            ))}
          </View>
        ) : (
          <View style={styles.listContainer}>
            {filosofos.map((filosofo) => (
              <TouchableOpacity
                key={filosofo.id}
                style={styles.listItem}
                onPress={() => setSelectedPhilosopher(filosofo)}
              >
                <View style={styles.listItemHeader}>
                  <Text style={styles.listItemIcon}>{filosofo.icone_representativo}</Text>
                  <View style={styles.listItemInfo}>
                    <Text style={styles.listItemName}>{filosofo.nome}</Text>
                    <Text style={[styles.listItemCharacters, { color: filosofo.cor_tema }]}>
                      {filosofo.caracteres}
                    </Text>
                    <Text style={styles.listItemYears}>{filosofo.anos}</Text>
                  </View>
                </View>
                <Text style={styles.listItemContribution} numberOfLines={2}>
                  {filosofo.contribuicao_essencial}
                </Text>
                <View style={styles.listItemFooter}>
                  <Text style={styles.listItemMovement}>{filosofo.movimento}</Text>
                  <Ionicons name="chevron-forward" size={16} color="#666" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Modal */}
      {selectedPhilosopher && (
        <PhilosopherDetailModal filosofo={selectedPhilosopher} />
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
    marginBottom: 16,
    lineHeight: 20,
  },
  viewModeToggle: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  toggleButtonActive: {
    backgroundColor: '#D32F2F',
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 4,
  },
  toggleTextActive: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  philosopherCard: {
    width: (width - 48) / 2,
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 2,
    overflow: 'hidden',
  },
  cardGradient: {
    padding: 16,
    minHeight: 240,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardCharacters: {
    fontSize: 18,
    fontFamily: 'Noto Serif SC',
    marginTop: 2,
  },
  cardYears: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  cardContribution: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
    marginBottom: 8,
  },
  cardQuote: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    lineHeight: 16,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardMovement: {
    fontSize: 11,
    color: '#666',
    flex: 1,
  },
  cardHypotheses: {
    fontSize: 10,
    color: '#999',
  },
  listContainer: {
    padding: 16,
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  listItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  listItemIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  listItemInfo: {
    flex: 1,
  },
  listItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  listItemCharacters: {
    fontSize: 18,
    fontFamily: 'Noto Serif SC',
    marginTop: 2,
  },
  listItemYears: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  listItemContribution: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 8,
  },
  listItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemMovement: {
    fontSize: 12,
    color: '#666',
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  closeButton: {
    padding: 8,
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  detailIcon: {
    fontSize: 48,
    marginRight: 16,
  },
  detailTitleContainer: {
    flex: 1,
  },
  detailName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  detailCharacters: {
    fontSize: 28,
    fontFamily: 'Noto Serif SC',
    marginTop: 4,
  },
  detailPinyin: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 2,
  },
  detailYears: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  detailBox: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
  },
  detailBoxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  detailBoxText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  hypothesesSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  hypothesisItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  hypothesisIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  hypothesisInfo: {
    flex: 1,
  },
  hypothesisTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  hypothesisIdeogram: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  worksSection: {
    marginTop: 20,
  },
  workItem: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  workTitle: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  dialogueSection: {
    marginTop: 20,
  },
  dialogueTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  actionsSection: {
    marginTop: 30,
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  actionButtonSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  actionButtonTextSecondary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginLeft: 8,
  },
});

export default PhilosophersScreen;
