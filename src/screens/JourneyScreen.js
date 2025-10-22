import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ProgressBarAndroid,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { bookData } from '../data/bookData';

const { width } = Dimensions.get('window');

const JourneyScreen = ({ navigation }) => {
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [currentDay, setCurrentDay] = useState(0);
  const [completedDays, setCompletedDays] = useState([]);

  const { jornadas_tematicas } = bookData;

  const JourneyCard = ({ jornada }) => (
    <TouchableOpacity
      style={styles.journeyCard}
      onPress={() => setSelectedJourney(jornada)}
    >
      <LinearGradient
        colors={['#D32F2F', '#FF6B6B']}
        style={styles.journeyGradient}
      >
        <Text style={styles.journeyIcon}>{jornada.icone}</Text>
        <Text style={styles.journeyTitle}>{jornada.titulo}</Text>
        <Text style={styles.journeySubtitle}>{jornada.subtitulo}</Text>
        <Text style={styles.journeyDuration}>{jornada.duracao_total}</Text>
        <Text style={styles.journeyDifficulty}>Dificuldade: {jornada.dificuldade}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  const DayCard = ({ dia, index, jornada }) => {
    const isCompleted = completedDays.includes(index);
    const isCurrent = currentDay === index;
    const isLocked = currentDay < index;

    return (
      <TouchableOpacity
        style={[
          styles.dayCard,
          isCompleted && styles.dayCardCompleted,
          isCurrent && styles.dayCardCurrent,
          isLocked && styles.dayCardLocked
        ]}
        onPress={() => {
          if (!isLocked) {
            // Navegar para a atividade do dia
            if (jornada.id === 'jornada_7_dias') {
              const hipotese = bookData.hipoteses.find(h => h.id === dia.hipotese);
              navigation.navigate('HypothesisDetail', { hipotese });
            } else {
              navigation.navigate('ChapterReader', { 
                chapterId: dia.atividades[0].toLowerCase().replace(/\s+/g, '_'),
                title: dia.atividades[0],
                subtitle: `Dia ${index + 1} - ${jornada.titulo}`
              });
            }
          }
        }}
      >
        <View style={styles.dayHeader}>
          <Text style={styles.dayNumber}>Dia {index + 1}</Text>
          {isCompleted && <Ionicons name="checkmark-circle" size={24} color="#2ecc71" />}
          {isCurrent && <Ionicons name="play-circle" size={24} color="#D32F2F" />}
          {isLocked && <Ionicons name="lock-closed" size={24} color="#ccc" />}
        </View>

        {jornada.id === 'jornada_7_dias' && (
          <View style={styles.dayHypothesis}>
            <Text style={styles.dayHypothesisTitle}>
              Hipótese {bookData.hipoteses.find(h => h.id === dia.hipotese)?.numero}
            </Text>
            <Text style={styles.dayHypothesisName}>
              {bookData.hipoteses.find(h => h.id === dia.hipotese)?.titulo_curto}
            </Text>
          </View>
        )}

        <Text style={styles.dayActivities}>
          {jornada.id === 'jornada_7_dias' 
            ? dia.atividades.join(' • ')
            : dia.atividades.join(' • ')
          }
        </Text>

        <View style={styles.dayFooter}>
          <Text style={styles.dayDuration}>{dia.duracao}</Text>
          <Text style={styles.dayStatus}>
            {isCompleted ? 'Concluído' : isCurrent ? 'Em andamento' : isLocked ? 'Bloqueado' : 'Disponível'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const JourneyDetail = ({ jornada }) => {
    const progress = jornada.id === 'jornada_7_dias' 
      ? (completedDays.length / jornada.dias.length) * 100
      : (completedDays.length / jornada.etapas.length) * 100;

    return (
      <View style={styles.journeyDetail}>
        <View style={styles.journeyDetailHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedJourney(null)}
          >
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.journeyDetailTitle}>{jornada.titulo}</Text>
        </View>

        <View style={styles.journeyInfo}>
          <Text style={styles.journeyDescription}>{jornada.descricao}</Text>
          
          <View style={styles.progressSection}>
            <Text style={styles.progressTitle}>Progresso</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
            <Text style={styles.progressText}>
              {completedDays.length} de {jornada.id === 'jornada_7_dias' ? jornada.dias.length : jornada.etapas.length} concluídos ({Math.round(progress)}%)
            </Text>
          </View>

          <View style={styles.journeyStats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{jornada.id === 'jornada_7_dias' ? jornada.dias.length : jornada.etapas.length}</Text>
              <Text style={styles.statLabel}>
                {jornada.id === 'jornada_7_dias' ? 'Dias' : 'Etapas'}
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{jornada.duracao_total}</Text>
              <Text style={styles.statLabel}>Duração</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{jornada.dificuldade}</Text>
              <Text style={styles.statLabel}>Nível</Text>
            </View>
          </View>
        </View>

        <ScrollView style={styles.daysContainer}>
          <Text style={styles.daysTitle}>
            {jornada.id === 'jornada_7_dias' ? 'Plano de 7 Dias' : 'Etapas da Trilha'}
          </Text>
          
          {jornada.id === 'jornada_7_dias' 
            ? jornada.dias.map((dia, index) => (
                <DayCard key={index} dia={dia} index={index} jornada={jornada} />
              ))
            : jornada.etapas.map((etapa, index) => (
                <DayCard key={index} dia={etapa} index={index} jornada={jornada} />
              ))
          }
        </ScrollView>

        <View style={styles.journeyActions}>
          <TouchableOpacity
            style={styles.startJourneyButton}
            onPress={() => {
              setCurrentDay(0);
              setCompletedDays([]);
              // Navegar para o primeiro dia
              if (jornada.id === 'jornada_7_dias') {
                const hipotese = bookData.hipoteses.find(h => h.id === jornada.dias[0].hipotese);
                navigation.navigate('HypothesisDetail', { hipotese });
              } else {
                navigation.navigate('ChapterReader', { 
                  chapterId: jornada.etapas[0].atividades[0].toLowerCase().replace(/\s+/g, '_'),
                  title: jornada.etapas[0].atividades[0],
                  subtitle: `Etapa 1 - ${jornada.titulo}`
                });
              }
            }}
          >
            <Ionicons name="play" size={20} color="#fff" />
            <Text style={styles.startJourneyText}>Iniciar Jornada</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {!selectedJourney ? (
        <>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>🚀 Jornadas Temáticas</Text>
            <Text style={styles.headerSubtitle}>
              Explore a filosofia chinesa através de trilhas estruturadas
            </Text>
          </View>

          {/* Content */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {jornadas_tematicas.map((jornada) => (
              <JourneyCard key={jornada.id} jornada={jornada} />
            ))}

            {/* Quick Start */}
            <View style={styles.quickStartSection}>
              <Text style={styles.sectionTitle}>⚡ Início Rápido</Text>
              <View style={styles.quickStartGrid}>
                <TouchableOpacity
                  style={styles.quickStartCard}
                  onPress={() => navigation.navigate('HypothesisDetail', { 
                    hipotese: bookData.hipoteses[0] 
                  })}
                >
                  <Text style={styles.quickStartIcon}>🌟</Text>
                  <Text style={styles.quickStartTitle}>Primeira Hipótese</Text>
                  <Text style={styles.quickStartSubtitle}>Universalidade em Disputa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.quickStartCard}
                  onPress={() => navigation.navigate('PhilosopherDetail', { 
                    filosofo: bookData.filosofos[0] 
                  })}
                >
                  <Text style={styles.quickStartIcon}>👤</Text>
                  <Text style={styles.quickStartTitle}>Primeiro Filósofo</Text>
                  <Text style={styles.quickStartSubtitle}>Mou Zongsan</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.quickStartCard}
                  onPress={() => navigation.navigate('ChapterReader', { 
                    chapterId: 'prefacio',
                    title: 'Prefácio',
                    subtitle: 'A China como Força Gravitacional Global'
                  })}
                >
                  <Text style={styles.quickStartIcon}>📖</Text>
                  <Text style={styles.quickStartTitle}>Prefácio</Text>
                  <Text style={styles.quickStartSubtitle}>Introdução ao Livro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.quickStartCard}
                  onPress={() => navigation.navigate('Recursos')}
                >
                  <Text style={styles.quickStartIcon}>📚</Text>
                  <Text style={styles.quickStartTitle}>Recursos</Text>
                  <Text style={styles.quickStartSubtitle}>Glossário e Cronologia</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                💡 <Text style={styles.footerBold}>Dica:</Text> Comece com a 
                "Trilha do Iniciante" se é sua primeira vez, ou escolha a 
                "Jornada de 7 Dias" para uma experiência completa.
              </Text>
            </View>
          </ScrollView>
        </>
      ) : (
        <JourneyDetail jornada={selectedJourney} />
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
  journeyCard: {
    margin: 16,
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
  },
  journeyGradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  journeyIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  journeyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 4,
  },
  journeySubtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 8,
  },
  journeyDuration: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
    marginBottom: 4,
  },
  journeyDifficulty: {
    fontSize: 11,
    color: '#fff',
    opacity: 0.7,
  },
  quickStartSection: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  quickStartGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickStartCard: {
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
  quickStartIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  quickStartTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  quickStartSubtitle: {
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
  journeyDetail: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  journeyDetailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  journeyDetailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  journeyInfo: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  journeyDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 20,
  },
  progressSection: {
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#D32F2F',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
  },
  journeyStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  daysContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  daysTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  dayCard: {
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
  dayCardCompleted: {
    backgroundColor: '#f0f9f0',
    borderWidth: 1,
    borderColor: '#2ecc71',
  },
  dayCardCurrent: {
    backgroundColor: '#fff5f5',
    borderWidth: 1,
    borderColor: '#D32F2F',
  },
  dayCardLocked: {
    backgroundColor: '#f5f5f5',
    opacity: 0.6,
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dayHypothesis: {
    marginBottom: 8,
  },
  dayHypothesisTitle: {
    fontSize: 14,
    color: '#D32F2F',
    fontWeight: '600',
  },
  dayHypothesisName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dayActivities: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 12,
  },
  dayFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dayDuration: {
    fontSize: 12,
    color: '#666',
  },
  dayStatus: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  journeyActions: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  startJourneyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D32F2F',
    padding: 16,
    borderRadius: 12,
  },
  startJourneyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
});

export default JourneyScreen;
