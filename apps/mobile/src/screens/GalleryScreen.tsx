import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { mockGallery, mockReviews } from '../../../../packages/shared/src/mocks';
import { theme } from '../theme';

export function GalleryScreen() {
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Galerija</Text>
      {mockGallery.map((g) => (
        <View key={g.id} style={styles.card}>
          <Image source={{ uri: g.imageUrl }} style={styles.img} />
          <Text style={styles.imgTitle}>{g.title}</Text>
          <Text style={styles.caption}>{g.caption}</Text>
        </View>
      ))}

      <Text style={styles.subTitle}>Recenzije</Text>
      {mockReviews.map((r) => (
        <View key={r.id} style={styles.review}>
          <Text style={styles.stars}>{'★'.repeat(r.rating)}</Text>
          <Text style={styles.quote}>“{r.text}”</Text>
          <Text style={styles.footer}>
            — {r.author}, {r.date}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.bg },
  content: { padding: 20, paddingBottom: 40, gap: 14 },
  title: { color: theme.text, fontSize: 26, fontWeight: '700' },
  card: {
    backgroundColor: theme.card,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.line,
  },
  img: { width: '100%', height: 200 },
  imgTitle: { color: theme.text, fontWeight: '700', paddingHorizontal: 12, paddingTop: 12 },
  caption: { color: theme.muted, paddingHorizontal: 12, paddingBottom: 12, paddingTop: 4 },
  subTitle: { color: theme.text, fontSize: 20, fontWeight: '700', marginTop: 12 },
  review: {
    borderWidth: 1,
    borderColor: theme.line,
    borderRadius: 12,
    padding: 12,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  stars: { color: '#fbbf24' },
  quote: { color: theme.text, marginTop: 6 },
  footer: { color: theme.muted, marginTop: 8, fontSize: 12 },
});
