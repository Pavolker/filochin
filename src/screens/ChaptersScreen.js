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
import bookJson from '../../filosofia-chinesa-json.json';

const { width } = Dimensions.get('window');

const ChaptersScreen = ({ navigation }) => {
  const [selectedPart, setSelectedPart] = useState(null);

  // Deriva partes e capítulos do JSON, mantendo icone/descricao do bookData quando disponíveis
  const { partes: partesJson, capitulos } = bookJson;
  const partesMetaById = Object.fromEntries(bookData.partes.map(p => [p.id, p]));
  const partes = partesJson.map(p => ({
    ...p,
    icone: partesMetaById[p.id]?.icone,
    descricao: partesMetaById[p.id]?.descricao,
    capitulos: capitulos.filter(c => c.parte_id === p.id).map(c => c.id),
  }));
  const chaptersById = Object.fromEntries(capitulos.map(c => [c.id, c]));

  const PartCard = ({ parte }) => (
    <TouchableOpacity
      style={[styles.partCard, { borderColor: parte.cor_tema }]}
      onPress={() => setSelectedPart(selectedPart?.id === parte.id ? null : parte)}
    >
      <LinearGradient
        colors={[`${parte.cor_tema}22`, `${parte.cor_tema}55`]}
        style={styles.partGradient}
      >
        <View style={styles.partHeader}>
          <Text style={styles.partIcon}>{parte.icone || '📘'}</Text>
          <View style={styles.partInfo}>
            <Text style={styles.partNumber}>Parte {parte.numero}</Text>
            <Text style={styles.partTitle}>{parte.titulo}</Text>
            <Text style={styles.partSubtitle}>{parte.subtitulo}</Text>
          </View>
        </View>
        <Text style={styles.partDescription}>{parte.descricao || `Inclui ${parte.capitulos.length} capítulos`}</Text>
        <View style={styles.partFooter}>
          <Text style={styles.partDuration}>{parte.duracao_total}</Text>
          <Text style={styles.partChapters}>{parte.capitulos.length} capítulos</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const ChapterCard = ({ chapterId, parte }) => {
    const chapter = chaptersById[chapterId];
    if (!chapter) return null;

    return (
      <TouchableOpacity
        style={styles.chapterCard}
        onPress={() => navigation.navigate('ChapterReader', { 
          chapterId,
          title: chapter.titulo,
          subtitle: chapter.subtitulo
        })}
      >
        <View style={styles.chapterHeader}>
          <Text style={styles.chapterTitle}>{chapter.titulo}</Text>
          <View style={styles.chapterMeta}>
            <Text style={styles.chapterDuration}>{chapter.duracao_leitura}</Text>
            {chapter.dificuldade && (
              <Text style={styles.chapterDifficulty}>{chapter.dificuldade}</Text>
            )}
            {chapter.e_capitulo_nucleo && (
              <Text style={styles.chapterNucleo}>⭐ Núcleo</Text>
            )}
          </View>
        </View>
        <Text style={styles.chapterSubtitle}>{chapter.subtitulo || ''}</Text>
        {/* Conteúdo markdown não é carregado aqui; preview usa subtítulo */}
        {/* <Text style={styles.chapterPreview} numberOfLines={3}>
          {chapter.conteudo?.split('\n')[0]}
        </Text> */}
        <View style={styles.chapterFooter}>
          <Text style={styles.chapterConcepts}>
            {(chapter.conceitos_chave?.length || 0)} conceitos-chave
          </Text>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📖 Capítulos</Text>
        <Text style={styles.headerSubtitle}>
          Explore o conteúdo completo do livro
        </Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {partes.map((parte) => (
          <View key={parte.id} style={styles.partSection}>
            <PartCard parte={parte} />
            
            {selectedPart?.id === parte.id && (
              <View style={styles.chaptersContainer}>
                <Text style={styles.chaptersTitle}>Capítulos desta Parte</Text>
                {parte.capitulos.map((chapterId) => (
                  <ChapterCard 
                    key={chapterId} 
                    chapterId={chapterId} 
                    parte={parte}
                  />
                ))}
              </View>
            )}
          </View>
        ))}

        {/* Quick Access */}
        <View style={styles.quickAccessSection}>
          <Text style={styles.sectionTitle}>⚡ Acesso Rápido</Text>
          <View style={styles.quickAccessGrid}>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('ChapterReader', { 
                chapterId: 'cap_19',
                title: '7 Hipóteses',
                subtitle: 'Sete Chaves para Compreender a Filosofia Chinesa Contemporânea'
              })}
            >
              <Text style={styles.quickAccessIcon}>🔑</Text>
              <Text style={styles.quickAccessTitle}>7 Hipóteses</Text>
              <Text style={styles.quickAccessSubtitle}>Capítulo Núcleo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('ChapterReader', { 
                chapterId: 'prefacio',
                title: 'Prefácio',
                subtitle: 'A China como Força Gravitacional Global'
              })}
            >
              <Text style={styles.quickAccessIcon}>🌏</Text>
              <Text style={styles.quickAccessTitle}>Prefácio</Text>
              <Text style={styles.quickAccessSubtitle}>Introdução</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('ChapterReader', { 
                chapterId: 'cap_01',
                title: 'Introdução',
                subtitle: 'O Que é Filosofia Contemporânea Chinesa?'
              })}
            >
              <Text style={styles.quickAccessIcon}>📚</Text>
              <Text style={styles.quickAccessTitle}>Capítulo 1</Text>
              <Text style={styles.quickAccessSubtitle}>Fundamentos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => navigation.navigate('Journey')}
            >
              <Text style={styles.quickAccessIcon}>🚀</Text>
              <Text style={styles.quickAccessTitle}>Jornadas</Text>
              <Text style={styles.quickAccessSubtitle}>Trilhas Temáticas</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            💡 <Text style={styles.footerBold}>Dica:</Text> Comece pelo Prefácio e 
            Capítulo 1 para entender o contexto, depois explore as 7 Hipóteses 
            no Capítulo 19.
          </Text>
        </View>
      </ScrollView>
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
  partSection: {
    margin: 16,
  },
  partCard: {
    borderRadius: 16,
    borderWidth: 2,
    overflow: 'hidden',
    marginBottom: 16,
  },
  partGradient: {
    padding: 20,
  },
  partHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  partIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  partInfo: {
    flex: 1,
  },
  partNumber: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
    marginBottom: 4,
  },
  partTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  partSubtitle: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  partDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 12,
  },
  partFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  partDuration: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  partChapters: {
    fontSize: 12,
    color: '#666',
  },
  chaptersContainer: {
    marginTop: 8,
    paddingLeft: 16,
  },
  chaptersTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  chapterCard: {
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
  chapterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  chapterMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chapterDuration: {
    fontSize: 11,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  chapterDifficulty: {
    fontSize: 11,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  chapterNucleo: {
    fontSize: 11,
    color: '#D32F2F',
    backgroundColor: '#FFE0E0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  chapterSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  chapterPreview: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
    marginBottom: 12,
  },
  chapterFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chapterConcepts: {
    fontSize: 12,
    color: '#666',
  },
  quickAccessSection: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickAccessCard: {
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
  quickAccessIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  quickAccessTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  quickAccessSubtitle: {
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
});

export default ChaptersScreen;
