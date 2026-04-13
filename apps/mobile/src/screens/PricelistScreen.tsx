import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { mockServices } from '../../../../packages/shared/src/mocks';
import type { ServiceCategory } from '../../../../packages/shared/src/types';
import { theme } from '../theme';

const labels: Record<ServiceCategory, string> = {
  face: 'Tretmani lica',
  body: 'Tijelo',
  nails: 'Nokti',
  hair: 'Kosa',
  other: 'Ostalo',
};

export function PricelistScreen() {
  const grouped = mockServices.reduce<Record<ServiceCategory, typeof mockServices>>(
    (acc, s) => {
      acc[s.category] = acc[s.category] ? [...acc[s.category], s] : [s];
      return acc;
    },
    {} as Record<ServiceCategory, typeof mockServices>,
  );

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Cjenik</Text>
      {(Object.keys(grouped) as ServiceCategory[]).map((cat) => (
        <View key={cat} style={styles.block}>
          <Text style={styles.cat}>{labels[cat]}</Text>
          {grouped[cat].map((s) => (
            <View key={s.id} style={styles.row}>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{s.name}</Text>
                <Text style={styles.desc}>{s.description}</Text>
              </View>
              <View style={styles.meta}>
                <Text style={styles.metaText}>{s.durationMin} min</Text>
                <Text style={styles.price}>{s.priceEur} €</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.bg },
  content: { padding: 20, paddingBottom: 40, gap: 16 },
  title: { color: theme.text, fontSize: 26, fontWeight: '700', marginBottom: 8 },
  block: { gap: 8 },
  cat: { color: theme.text, fontSize: 18, fontWeight: '700', marginTop: 8 },
  row: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: theme.line,
  },
  name: { color: theme.text, fontWeight: '600' },
  desc: { color: theme.muted, fontSize: 13, marginTop: 4 },
  meta: { alignItems: 'flex-end' },
  metaText: { color: theme.muted, fontSize: 12 },
  price: { color: theme.accentSoft, fontWeight: '700', marginTop: 4 },
});
