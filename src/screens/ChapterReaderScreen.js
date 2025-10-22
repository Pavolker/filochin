import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Markdown from 'react-native-markdown-display';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import bookJson from '../../filosofia-chinesa-json.json';
import { chapterAssetMap } from '../data/chapterAssets';

const { width } = Dimensions.get('window');

const loadMarkdownAsync = async (module) => {
  const asset = Asset.fromModule(module);
  if (!asset.localUri) {
    await asset.downloadAsync();
  }
  const uri = asset.localUri || asset.uri;
  return await FileSystem.readAsStringAsync(uri);
};

const ChapterReaderScreen = ({ route, navigation }) => {
  const { chapterId, title, subtitle } = route.params;
  const [currentSection, setCurrentSection] = useState('content');
  const [reflectionText, setReflectionText] = useState('');
  const [userReflections, setUserReflections] = useState([]);
  const [markdown, setMarkdown] = useState('');

  const chapter = bookJson.capitulos.find((c) => c.id === chapterId) || {
    id: chapterId,
    titulo: title,
    subtitulo: subtitle,
  };

  useEffect(() => {
    let isMounted = true;
    const fetchContent = async () => {
      try {
        const module = chapterAssetMap[chapterId];
        if (!module) {
          setMarkdown('# Conteúdo não encontrado\nO arquivo deste capítulo não foi mapeado.');
          return;
        }
        const md = await loadMarkdownAsync(module);
        if (isMounted) setMarkdown(md);
      } catch (e) {
        if (isMounted) setMarkdown(`# Erro ao carregar conteúdo\n\n${String(e)}`);
      }
    };
    fetchContent();
    return () => { isMounted = false; };
  }, [chapterId]);

  const ConceptCard = ({ conceito }) => (
    <View style={styles.conceptCard}>
      <View style={styles.conceptHeader}>
        <Text style={styles.conceptTerm}>{conceito.termo}</Text>
        {conceito.caracteres && (
          <Text style={styles.conceptCharacters}>{conceito.caracteres}</Text>
        )}
      </View>
      {conceito.pinyin && (
        <Text style={styles.conceptPinyin}>{conceito.pinyin}</Text>
      )}
      <Text style={styles.conceptDefinition}>{conceito.definicao}</Text>
    </View>
  );

  const QuoteCard = ({ citacao }) => (
    <View style={styles.quoteCard}>
      <Text style={styles.quoteText}>"{citacao.texto}"</Text>
      <Text style={styles.quoteAuthor}>— {citacao.autor}</Text>
      <Text style={styles.quoteRelevance}>{citacao.relevancia}</Text>
    </View>
  );

  const ReflectionCard = ({ reflexao }) => (
    <View style={styles.reflectionCard}>
      <Text style={styles.reflectionTitle}>
        {reflexao.tipo === 'pergunta_socratica' ? '🤔 Pergunta Socrática' : '💭 Reflexão'}
      </Text>
      <Text style={styles.reflectionText}>{reflexao.texto}</Text>
      {reflexao.dicas && (
        <View style={styles.reflectionTips}>
          <Text style={styles.reflectionTipsTitle}>💡 Dicas:</Text>
          {reflexao.dicas.map((dica, index) => (
            <Text key={index} style={styles.reflectionTip}>• {dica}</Text>
          ))}
        </View>
      )}
    </View>
  );

  const saveReflection = () => {
    if (reflectionText.trim()) {
      const newReflection = {
        id: Date.now(),
        text: reflectionText.trim(),
        date: new Date().toLocaleDateString('pt-BR'),
        chapterId: chapterId
      };
      setUserReflections([...userReflections, newReflection]);
      setReflectionText('');
      Alert.alert('Sucesso', 'Reflexão salva com sucesso!');
    }
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'content':
        return (
          <ScrollView style={styles.contentContainer}>
            <Markdown style={{ body: styles.contentText }}>
              {markdown || '# Carregando conteúdo...'}
            </Markdown>
          </ScrollView>
        );
      case 'concepts':
        return (
          <ScrollView style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>🔑 Conceitos-Chave</Text>
            {chapter.conceitos_chave?.map((conceito, index) => (
              <ConceptCard key={index} conceito={conceito} />
            ))}
          </ScrollView>
        );
      case 'quotes':
        return (
          <ScrollView style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>💬 Citações em Destaque</Text>
            {chapter.citacoes_destaque?.map((citacao, index) => (
              <QuoteCard key={index} citacao={citacao} />
            ))}
          </ScrollView>
        );
      case 'reflections':
        return (
          <ScrollView style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>🤔 Reflexões Interativas</Text>
            {chapter.reflexoes?.map((reflexao, index) => (
              <ReflectionCard key={index} reflexao={reflexao} />
            ))}
            
            <View style={styles.reflectionInput}>
              <Text style={styles.reflectionInputTitle}>📝 Sua Reflexão</Text>
              <TextInput
                style={styles.reflectionTextInput}
                placeholder="Escreva sua reflexão sobre este capítulo..."
                value={reflectionText}
                onChangeText={setReflectionText}
                multiline
                numberOfLines={4}
              />
              <TouchableOpacity
                style={styles.saveReflectionButton}
                onPress={saveReflection}
              >
                <Text style={styles.saveReflectionText}>Salvar Reflexão</Text>
              </TouchableOpacity>
            </View>

            {userReflections.length > 0 && (
              <View style={styles.userReflections}>
                <Text style={styles.sectionTitle}>📚 Suas Reflexões</Text>
                {userReflections.map((reflection) => (
                  <View key={reflection.id} style={styles.userReflectionCard}>
                    <Text style={styles.userReflectionDate}>{reflection.date}</Text>
                    <Text style={styles.userReflectionText}>{reflection.text}</Text>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
        
        <View style={styles.headerMeta}>
          {chapter?.duracao_leitura && (
            <Text style={styles.headerDuration}>{chapter.duracao_leitura}</Text>
          )}
          {chapter?.dificuldade && (
            <Text style={styles.headerDifficulty}>{chapter.dificuldade}</Text>
          )}
          {chapter?.e_capitulo_nucleo && (
            <Text style={styles.headerNucleo}>⭐ Núcleo</Text>
          )}
        </View>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.tab, currentSection === 'content' && styles.tabActive]}
            onPress={() => setCurrentSection('content')}
          >
            <Ionicons name="document-text" size={20} color={currentSection === 'content' ? '#fff' : '#666'} />
            <Text style={[styles.tabText, currentSection === 'content' && styles.tabTextActive]}>
              Conteúdo
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, currentSection === 'concepts' && styles.tabActive]}
            onPress={() => setCurrentSection('concepts')}
          >
            <Ionicons name="key" size={20} color={currentSection === 'concepts' ? '#fff' : '#666'} />
            <Text style={[styles.tabText, currentSection === 'concepts' && styles.tabTextActive]}>
              Conceitos
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, currentSection === 'quotes' && styles.tabActive]}
            onPress={() => setCurrentSection('quotes')}
          >
            <Ionicons name="chatbubbles" size={20} color={currentSection === 'quotes' ? '#fff' : '#666'} />
            <Text style={[styles.tabText, currentSection === 'quotes' && styles.tabTextActive]}>
              Citações
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, currentSection === 'reflections' && styles.tabActive]}
            onPress={() => setCurrentSection('reflections')}
          >
            <Ionicons name="bulb" size={20} color={currentSection === 'reflections' ? '#fff' : '#666'} />
            <Text style={[styles.tabText, currentSection === 'reflections' && styles.tabTextActive]}>
              Reflexões
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  headerMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerDuration: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  headerDifficulty: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  headerNucleo: {
    fontSize: 12,
    color: '#D32F2F',
    backgroundColor: '#FFE0E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
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
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  conceptCard: {
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
  conceptHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  conceptTerm: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  conceptCharacters: {
    fontSize: 18,
    color: '#D32F2F',
    fontFamily: 'Noto Serif SC',
  },
  conceptPinyin: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  conceptDefinition: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  quoteCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#D32F2F',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quoteText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  quoteAuthor: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
    marginBottom: 4,
  },
  quoteRelevance: {
    fontSize: 12,
    color: '#888',
  },
  reflectionCard: {
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
  reflectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  reflectionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 12,
  },
  reflectionTips: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
  },
  reflectionTipsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  reflectionTip: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 4,
  },
  reflectionInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reflectionInputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  reflectionTextInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#333',
    textAlignVertical: 'top',
    marginBottom: 12,
  },
  saveReflectionButton: {
    backgroundColor: '#D32F2F',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveReflectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  userReflections: {
    marginTop: 20,
  },
  userReflectionCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  userReflectionDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  userReflectionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default ChapterReaderScreen;
