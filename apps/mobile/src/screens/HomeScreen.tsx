import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mockServices } from '../../../../packages/shared/src/mocks';
import { deepblueBrand } from '../../../../packages/shared/src/brand.deepblue';
import { theme } from '../theme';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const featured = mockServices.slice(0, 3);

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>Kozmetički studio</Text>
      <Text style={styles.title}>{deepblueBrand.name}</Text>
      <Text style={styles.tag}>{deepblueBrand.tagline}</Text>
      <Text style={styles.lead}>
        Mobilna aplikacija dijeli mock podatke s webom (`packages/shared`). API: isti REST endpointi.
      </Text>

      <View style={styles.navRow}>
        <Pressable style={styles.btn} onPress={() => navigation.navigate('Booking')}>
          <Text style={styles.btnText}>Rezervacije</Text>
        </Pressable>
        <Pressable style={styles.btnGhost} onPress={() => navigation.navigate('Pricelist')}>
          <Text style={styles.btnGhostText}>Cjenik</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Istaknute usluge</Text>
      {featured.map((s) => (
        <View key={s.id} style={styles.card}>
          <Text style={styles.cardTitle}>{s.name}</Text>
          <Text style={styles.cardMeta}>
            {s.durationMin} min · {s.priceEur} €
          </Text>
          <Text style={styles.cardDesc}>{s.description}</Text>
        </View>
      ))}

      <View style={styles.navRow}>
        <Pressable style={styles.link} onPress={() => navigation.navigate('Gallery')}>
          <Text style={styles.linkText}>Galerija & recenzije →</Text>
        </Pressable>
        <Pressable style={styles.link} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.linkText}>Profil →</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.bg },
  content: { padding: 20, paddingBottom: 40, gap: 12 },
  eyebrow: { color: theme.accentSoft, letterSpacing: 3, fontSize: 11, textTransform: 'uppercase' },
  title: { color: theme.text, fontSize: 32, fontWeight: '700' },
  tag: { color: theme.muted, fontSize: 15 },
  lead: { color: theme.muted, fontSize: 14, marginTop: 4, lineHeight: 20 },
  navRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginVertical: 8 },
  btn: {
    backgroundColor: theme.accent,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  btnText: { color: '#f4fffb', fontWeight: '700' },
  btnGhost: {
    borderWidth: 1,
    borderColor: theme.line,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  btnGhostText: { color: theme.text, fontWeight: '600' },
  sectionTitle: { color: theme.text, fontSize: 20, fontWeight: '700', marginTop: 16 },
  card: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: theme.line,
  },
  cardTitle: { color: theme.text, fontSize: 16, fontWeight: '700' },
  cardMeta: { color: theme.accentSoft, marginTop: 4, fontSize: 13 },
  cardDesc: { color: theme.muted, marginTop: 8, fontSize: 14 },
  link: { paddingVertical: 8 },
  linkText: { color: theme.accentSoft, fontWeight: '600' },
});
