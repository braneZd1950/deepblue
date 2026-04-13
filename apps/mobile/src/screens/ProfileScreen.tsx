import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { deepblueBrand } from '../../../../packages/shared/src/brand.deepblue';
import { theme } from '../theme';

export function ProfileScreen() {
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Profil</Text>
      <Text style={styles.lead}>
        Mock: nakon JWT prijave ovdje ide povijest termina za {deepblueBrand.domain}.
      </Text>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Niste prijavljeni</Text>
        <Text style={styles.boxText}>Povežite Auth servis i kolekciju `bookings` s korisnikom.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.bg },
  content: { padding: 20, gap: 12, paddingBottom: 40 },
  title: { color: theme.text, fontSize: 26, fontWeight: '700' },
  lead: { color: theme.muted, lineHeight: 20 },
  box: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: theme.line,
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },
  boxTitle: { color: theme.text, fontWeight: '700', marginBottom: 6 },
  boxText: { color: theme.muted },
});
