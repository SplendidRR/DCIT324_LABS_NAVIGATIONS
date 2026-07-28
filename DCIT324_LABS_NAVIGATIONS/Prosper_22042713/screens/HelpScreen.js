import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const faqs = [
  { q: 'How do I register for courses?', a: 'Log in to the student portal and navigate to Course Registration under the Academics menu.' },
  { q: 'Where can I check my exam results?', a: 'Results are published on the UG student portal under the Results section after grading is complete.' },
  { q: 'How do I contact my academic advisor?', a: 'Visit your department office or email your assigned advisor through the portal messaging system.' },
  { q: 'What do I do if I miss an exam?', a: 'Submit a medical or emergency report to the Examinations Office within 48 hours of the missed exam.' },
];

export default function HelpScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Help & Support</Text>
      {faqs.map((item, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.question}>Q: {item.q}</Text>
          <Text>A: {item.a}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: { marginBottom: 16, padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 6 },
  question: { fontWeight: 'bold', marginBottom: 4 },
});
