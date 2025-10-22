import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { bookData } from '../data/bookData';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const { hipoteses, filosofos, jornadas_tematicas } = bookData;

  const HypothesisCard = ({ hipotese }) => (
    <TouchableOpacity
      style={[styles.hypothesisCard, { borderColor: hipotese.cor_tema }]}
      onPress={() => navigation.navigate('HypothesisDetail', { hipotese })}
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
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const PhilosopherCard = ({ filosofo }) => (
    <TouchableOpacity
      style={[styles.philosopherCard, { borderColor: filosofo.cor_tema }]}
      onPress={() => navigation.navigate('PhilosopherDetail', { filosofo })}
    >
      <View style={styles.philosopherHeader}>
        <Text style={styles.philosopherIcon}>{filosofo.icone_representativo}</Text>
        <View style={styles.philosopherInfo}>
          <Text style={styles.philosopherName}>{filosofo.nome}</Text>
          <Text style={styles.philosopherCharacters}>{filosofo.caracteres}</Text>
          <Text style={styles.philosopherYears}>{filosofo.anos}</Text>
        </View>
      </View>
      <Text style={styles.philosopherContribution} numberOfLines={2}>
        {filosofo.contribuicao_essencial}
      </Text>
    </TouchableOpacity>
  );

  const JourneyCard = ({ jornada }) => (
    <TouchableOpacity
      style={styles.journeyCard}
      onPress={() => navigation.navigate('Journey', { jornada })}
    >
      <LinearGradient
        colors={['#D32F2F', '#FF6B6B']}
        style={styles.journeyGradient}
      >
        <Text style={styles.journeyIcon}>{jornada.icone}</Text>
        <Text style={styles.journeyTitle}>{jornada.titulo}</Text>
        <Text style={styles.journeySubtitle}>{jornada.subtitulo}</Text>
        <Text style={styles.journeyDuration}>{jornada.duracao_total}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={['#D32F2F', '#FF6B6B']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>🔑 7 Hipóteses</Text>
        <Text style={styles.headerSubtitle}>
          Sete chaves para compreender a filosofia chinesa contemporânea
        </Text>
      </LinearGradient>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>7</Text>
          <Text style={styles.statLabel}>Hipóteses</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Filósofos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Capítulos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>7h</Text>
          <Text style={styles.statLabel}>Leitura</Text>
        </View>
      </View>

      {/* Jornadas Temáticas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🚀 Jornadas Temáticas</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {jornadas_tematicas.map((jornada) => (
            <JourneyCard key={jornada.id} jornada={jornada} />
          ))}
        </ScrollView>
      </View>

      {/* 7 Hipóteses */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌟 As 7 Hipóteses Centrais</Text>
        <Text style={styles.sectionDescription}>
          O coração conceitual da filosofia chinesa contemporânea
        </Text>
        <View style={styles.hypothesesGrid}>
          {hipoteses.map((hipotese) => (
            <HypothesisCard key={hipotese.id} hipotese={hipotese} />
          ))}
        </View>
      </View>

      {/* Filósofos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👤 Os 5 Filósofos</Text>
        <Text style={styles.sectionDescription}>
          Pensadores que redesenham o mundo
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filosofos.map((filosofo) => (
            <PhilosopherCard key={filosofo.id} filosofo={filosofo} />
          ))}
        </ScrollView>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚡ Ações Rápidas</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate('Hipóteses')}
          >
            <Ionicons name="bulb" size={24} color="#D32F2F" />
            <Text style={styles.quickActionText}>Explorar Hipóteses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate('Filósofos')}
          >
            <Ionicons name="people" size={24} color="#D32F2F" />
            <Text style={styles.quickActionText}>Conhecer Filósofos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate('Capítulos')}
          >
            <Ionicons name="book" size={24} color="#D32F2F" />
            <Text style={styles.quickActionText}>Ler Capítulos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate('Recursos')}
          >
            <Ionicons name="library" size={24} color="#D32F2F" />
            <Text style={styles.quickActionText}>Recursos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💡 <Text style={styles.footerBold}>Dica:</Text> Explore as hipóteses 
          para entender como a filosofia chinesa contemporânea desafia 
          o pensamento ocidental.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 30,
    paddingTop: 50,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    fontFamily: 'Noto Serif SC',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  section: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  hypothesesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  hypothesisCard: {
    width: (width - 60) / 2,
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
    marginTop: 12,
  },
  cardKeyword: {
    fontSize: 11,
    color: '#666',
    fontStyle: 'italic',
  },
  philosopherCard: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  philosopherHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  philosopherIcon: {
    fontSize: 32,
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
    fontSize: 18,
    color: '#D32F2F',
    fontFamily: 'Noto Serif SC',
    marginTop: 2,
  },
  philosopherYears: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  philosopherContribution: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  journeyCard: {
    width: 200,
    height: 120,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  journeyGradient: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  journeyIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  journeyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 4,
  },
  journeySubtitle: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 4,
  },
  journeyDuration: {
    fontSize: 11,
    color: '#fff',
    opacity: 0.8,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    width: (width - 60) / 2,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#fff',
    margin: 20,
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
});

export default HomeScreen;
