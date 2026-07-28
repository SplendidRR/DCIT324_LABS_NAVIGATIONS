import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const announcements = [
  { id: 1, title: 'Semester Registration Open', date: '2025-01-10', text: 'All students should register for the upcoming semester courses.' },
  { id: 2, title: 'Exam Timetable Released', date: '2025-01-15', text: 'The end-of-semester exam timetable has been published on the portal.' },
  { id: 3, title: 'Library Extended Hours', date: '2025-01-18', text: 'The main library will be open until midnight during exam period.' },
  { id: 4, title: 'Sports Day 2025', date: '2025-01-22', text: 'Annual sports day will be held at the UG Sports Stadium. All are welcome.' },
  { id: 5, title: 'Fee Payment Deadline', date: '2025-01-25', text: 'Final deadline for semester fee payment is January 31st. Avoid late penalties.' },
];

export default function AnnouncementsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Announcements</Text>
      {announcements.map(a => (
        <View key={a.id} style={styles.card}>
          <Text style={styles.title}>{a.title}</Text>
          <Text style={styles.date}>{a.date}</Text>
          <Text>{a.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: { marginBottom: 16, padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 6 },
  title: { fontWeight: 'bold', fontSize: 16 },
  date: { color: '#888', marginBottom: 4 },
});
