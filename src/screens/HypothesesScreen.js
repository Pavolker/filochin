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

const HypothesesScreen = ({ navigation }) => {
  const [selectedHypothesis, setSelectedHypothesis] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'

  const { hipoteses } = bookData;

  const HypothesisCard = ({ hipotese }) => (
    <TouchableOpacity
      style={[styles.hypothesisCard, { borderColor: hipotese.cor_tema }]}
      onPress={() => setSelectedHypothesis(hipotese)}
    >
      <LinearGradient
        colors={[`${hipotese.cor_tema}22`, `${hipotese.cor_tema}55`]}
        style={styles.cardGradient}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>{hipotese.icone}</Text>
          <Text style={[styles.cardIdeogram, { color: hipotese.cor_tema }]}>
            {hipotese.ideograma.caracteres}
          </Text>
        </View>
        <Text style={styles.cardPinyin}>{hipotese.ideograma.pinyin}</Text>
        <Text style={styles.cardTitle}>
          {hipotese.numero}. {hipotese.titulo_curto}
        </Text>
        <Text style={styles.cardDescription} numberOfLines={3}>
          {hipotese.titulo_completo}
        </Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardKeyword}>#{hipotese.palavra_chave}</Text>
          <Text style={styles.cardPhilosophers}>
            {hipotese.filosofos_principais.length} filósofo(s)
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const HypothesisDetailModal = ({ hipotese }) => (
    <Modal
      visible={selectedHypothesis !== null}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedHypothesis(null)}
          >
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.modalContent}>
          <View style={styles.detailHeader}>
            <Text style={styles.detailIcon}>{hipotese.icone}</Text>
            <View style={styles.detailTitleContainer}>
              <Text style={[styles.detailIdeogram, { color: hipotese.cor_tema }]}>
                {hipotese.ideograma.caracteres}
              </Text>
              <Text style={styles.detailPinyin}>{hipotese.ideograma.pinyin}</Text>
            </View>
          </View>

          <Text style={styles.detailTitle}>
            Hipótese {hipotese.numero}: {hipotese.titulo_curto}
          </Text>

          <View style={[styles.detailBox, { borderLeftColor: hipotese.cor_tema }]}>
            <Text style={styles.detailBoxTitle}>📝 Enunciado</Text>
            <Text style={styles.detailBoxText}>{hipotese.titulo_completo}</Text>
          </View>

          <View style={[styles.detailBox, { borderLeftColor: hipotese.cor_tema }]}>
            <Text style={styles.detailBoxTitle}>🔍 Análise</Text>
            <Text style={styles.detailBoxText}>{hipotese.analise_sintetica}</Text>
          </View>

          <View style={[styles.detailBox, { borderLeftColor: hipotese.cor_tema }]}>
            <Text style={styles.detailBoxTitle}>⚠️ Crítica</Text>
            <Text style={styles.detailBoxText}>{hipotese.critica_sintetica}</Text>
          </View>

          <View style={styles.philosophersSection}>
            <Text style={styles.sectionTitle}>🧑‍🏫 Filósofos Principais</Text>
            {hipotese.filosofos_principais.map((filosofoId) => {
              const filosofo = bookData.filosofos.find(f => f.id === filosofoId);
              return (
                <TouchableOpacity
                  key={filosofoId}
                  style={styles.philosopherItem}
                  onPress={() => {
                    setSelectedHypothesis(null);
                    navigation.navigate('PhilosopherDetail', { filosofo });
                  }}
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
          </View>

          <View style={styles.actionsSection}>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: hipotese.cor_tema }]}
              onPress={() => {
                setSelectedHypothesis(null);
                // Navegar para capítulos relacionados
                navigation.navigate('Capítulos');
              }}
            >
              <Ionicons name="book" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Ler Capítulos Relacionados</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButtonSecondary}
              onPress={() => setSelectedHypothesis(null)}
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
        <Text style={styles.headerTitle}>🌟 As 7 Hipóteses</Text>
        <Text style={styles.headerSubtitle}>
          O coração conceitual da filosofia chinesa contemporânea
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
            {hipoteses.map((hipotese) => (
              <HypothesisCard key={hipotese.id} hipotese={hipotese} />
            ))}
          </View>
        ) : (
          <View style={styles.listContainer}>
            {hipoteses.map((hipotese) => (
              <TouchableOpacity
                key={hipotese.id}
                style={styles.listItem}
                onPress={() => setSelectedHypothesis(hipotese)}
              >
                <View style={styles.listItemHeader}>
                  <Text style={styles.listItemIcon}>{hipotese.icone}</Text>
                  <Text style={[styles.listItemIdeogram, { color: hipotese.cor_tema }]}>
                    {hipotese.ideograma.caracteres}
                  </Text>
                  <View style={styles.listItemInfo}>
                    <Text style={styles.listItemTitle}>
                      {hipotese.numero}. {hipotese.titulo_curto}
                    </Text>
                    <Text style={styles.listItemPinyin}>{hipotese.ideograma.pinyin}</Text>
                  </View>
                </View>
                <Text style={styles.listItemDescription} numberOfLines={2}>
                  {hipotese.titulo_completo}
                </Text>
                <View style={styles.listItemFooter}>
                  <Text style={styles.listItemKeyword}>#{hipotese.palavra_chave}</Text>
                  <Ionicons name="chevron-forward" size={16} color="#666" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Modal */}
      {selectedHypothesis && (
        <HypothesisDetailModal hipotese={selectedHypothesis} />
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
  hypothesisCard: {
    width: (width - 48) / 2,
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 2,
    overflow: 'hidden',
  },
  cardGradient: {
    padding: 16,
    minHeight: 200,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  cardIdeogram: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Noto Serif SC',
  },
  cardPinyin: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 12,
    color: '#555',
    lineHeight: 16,
    flex: 1,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  cardKeyword: {
    fontSize: 11,
    color: '#666',
    fontStyle: 'italic',
  },
  cardPhilosophers: {
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
    fontSize: 24,
    marginRight: 12,
  },
  listItemIdeogram: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Noto Serif SC',
    marginRight: 12,
  },
  listItemInfo: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  listItemPinyin: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 2,
  },
  listItemDescription: {
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
  listItemKeyword: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
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
  detailIdeogram: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Noto Serif SC',
  },
  detailPinyin: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 4,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
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
  philosophersSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  philosopherItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  philosopherIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  philosopherInfo: {
    flex: 1,
  },
  philosopherName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  philosopherCharacters: {
    fontSize: 14,
    color: '#D32F2F',
    fontFamily: 'Noto Serif SC',
    marginTop: 2,
  },
  philosopherContribution: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
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

export default HypothesesScreen;
