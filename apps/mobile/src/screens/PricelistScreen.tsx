import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { mockServices } from '../../../../packages/shared/src/mocks';
import type { ServiceCategory } from '../../../../packages/shared/src/types';
import { theme } from '../theme';

const CATEGORY_ORDER: ServiceCategory[] = [
  'waxing',
  'face',
  'derma',
  'madero',
  'massage',
  'body',
  'nails',
  'gift',
  'other',
];

const labels: Record<ServiceCategory, string> = {
  waxing: 'Uklanjanje dlačica / Waxing',
  face: 'Tretmani lica / Facials',
  derma: 'Dermaroller',
  madero: 'Madero-terapija',
  massage: 'Masaže tijela',
  body: 'Tretmani za tijelo',
  nails: 'Nokti',
  gift: 'Poklon bonovi',
  other: 'Ostalo',
};

const eurFmt = new Intl.NumberFormat('hr-HR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatEur(n: number): string {
  return eurFmt.format(n);
}

export function PricelistScreen() {
  const grouped = mockServices.reduce<Map<ServiceCategory, typeof mockServices>>((acc, s) => {
    const list = acc.get(s.category) ?? [];
    list.push(s);
    acc.set(s.category, list);
    return acc;
  }, new Map());

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Cjenik</Text>
      {CATEGORY_ORDER.map((cat) => {
        const items = grouped.get(cat);
        if (!items?.length) return null;
        const isWaxing = cat === 'waxing';

        return (
          <View key={cat} style={styles.block}>
            <Text style={styles.cat}>{labels[cat]}</Text>
            {isWaxing && (
              <View style={[styles.row, styles.waxHead]}>
                <Text style={[styles.name, styles.flex1]}>Usluga</Text>
                <Text style={styles.waxCol}>M</Text>
                <Text style={styles.waxCol}>Ž</Text>
              </View>
            )}
            {items.map((s) => (
              <View key={s.id} style={styles.row}>
                <View style={styles.flex1}>
                  <Text style={styles.name}>{s.name}</Text>
                  {s.description ? <Text style={styles.desc}>{s.description}</Text> : null}
                </View>
                {isWaxing ? (
                  <>
                    <Text style={[styles.priceWax, styles.waxCol]}>
                      {s.priceEurMen === undefined ? '—' : formatEur(s.priceEurMen)}
                    </Text>
                    <Text style={[styles.priceWax, styles.waxCol]}>{formatEur(s.priceEur)}</Text>
                  </>
                ) : (
                  <View style={styles.meta}>
                    {s.durationMin > 0 ? <Text style={styles.metaText}>{s.durationMin} min</Text> : null}
                    <Text style={styles.price}>
                      {s.category === 'gift' && s.priceEur === 0 ? '—' : formatEur(s.priceEur)}
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        );
      })}
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
    alignItems: 'flex-start',
  },
  waxHead: { backgroundColor: theme.card },
  flex1: { flex: 1 },
  waxCol: { width: 76, textAlign: 'right' },
  name: { color: theme.text, fontWeight: '600' },
  desc: { color: theme.muted, fontSize: 13, marginTop: 4 },
  meta: { alignItems: 'flex-end' },
  metaText: { color: theme.muted, fontSize: 12 },
  price: { color: theme.accentSoft, fontWeight: '700', marginTop: 4 },
  priceWax: { color: theme.accentSoft, fontWeight: '700' },
});
