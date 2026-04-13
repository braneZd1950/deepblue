import { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import { mockServices, mockSlots } from '../../../../packages/shared/src/mocks';
import { theme } from '../theme';

export function BookingScreen() {
  const [serviceId, setServiceId] = useState(mockServices[0]?.id ?? '');
  const [slotId, setSlotId] = useState(mockSlots.find((s) => s.available)?.id ?? '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState<string | null>(null);

  const slots = useMemo(() => mockSlots, []);

  function submit() {
    const slot = slots.find((s) => s.id === slotId);
    if (!serviceId || !slotId || !name || !email) {
      setMsg('Popunite sva polja.');
      return;
    }
    if (slot && !slot.available) {
      setMsg('Odabrani termin nije dostupan.');
      return;
    }
    setMsg('Mock: rezervacija bi otišla na POST /api/bookings (pokrenite API).');
  }

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Rezervacije</Text>
      <Text style={styles.lead}>Odabir usluge i termina — isti model kao na webu.</Text>

      <Text style={styles.label}>Usluga</Text>
      <View style={styles.pills}>
        {mockServices.map((s) => (
          <Pressable
            key={s.id}
            onPress={() => setServiceId(s.id)}
            style={[styles.pill, serviceId === s.id && styles.pillOn]}
          >
            <Text style={[styles.pillText, serviceId === s.id && styles.pillTextOn]}>{s.name}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Termin</Text>
      {slots.map((b) => (
        <Pressable
          key={b.id}
          onPress={() => b.available && setSlotId(b.id)}
          style={[styles.slot, slotId === b.id && styles.slotOn, !b.available && styles.slotOff]}
        >
          <Text style={styles.slotText}>
            {b.date} {b.time} {!b.available ? '(zauzeto)' : ''}
          </Text>
        </Pressable>
      ))}

      <Text style={styles.label}>Ime</Text>
      <TextInput value={name} onChangeText={setName} placeholder="Ana Anić" placeholderTextColor={theme.muted} style={styles.input} />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="ana@primjer.hr"
        placeholderTextColor={theme.muted}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {msg && <Text style={styles.msg}>{msg}</Text>}

      <Pressable style={styles.btn} onPress={submit}>
        <Text style={styles.btnText}>Potvrdi (mock)</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.bg },
  content: { padding: 20, gap: 10, paddingBottom: 40 },
  title: { color: theme.text, fontSize: 26, fontWeight: '700' },
  lead: { color: theme.muted, marginBottom: 8 },
  label: { color: theme.text, fontWeight: '600', marginTop: 8 },
  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  pill: {
    borderWidth: 1,
    borderColor: theme.line,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  pillOn: { backgroundColor: theme.accent, borderColor: theme.accent },
  pillText: { color: theme.muted, fontSize: 13 },
  pillTextOn: { color: '#f4fffb', fontWeight: '600' },
  slot: {
    borderWidth: 1,
    borderColor: theme.line,
    padding: 12,
    borderRadius: 12,
    marginTop: 6,
  },
  slotOn: { borderColor: theme.accentSoft },
  slotOff: { opacity: 0.45 },
  slotText: { color: theme.text },
  input: {
    borderWidth: 1,
    borderColor: theme.line,
    borderRadius: 12,
    padding: 12,
    color: theme.text,
    marginTop: 4,
  },
  msg: { color: theme.accentSoft, marginTop: 8 },
  btn: {
    marginTop: 12,
    backgroundColor: theme.accent,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
  },
  btnText: { color: '#f4fffb', fontWeight: '700' },
});
