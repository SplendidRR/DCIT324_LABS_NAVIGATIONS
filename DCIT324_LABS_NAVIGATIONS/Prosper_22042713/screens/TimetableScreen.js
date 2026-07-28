import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const timetable = [
  { day: 'Monday', time: '8:00 AM - 10:00 AM', course: 'STAT 333', venue: 'ICT Lab 1' },
  { day: 'Tuesday', time: '10:00 AM - 12:00 PM', course: 'DCIT 301', venue: 'Lecture Hall A' },
  { day: 'Wednesday', time: '2:00 PM - 4:00 PM', course: 'DCIT 315', venue: 'Computer Lab 3' },
  { day: 'Thursday', time: '8:00 AM - 10:00 AM', course: 'STAT 334', venue: 'Science Block 2' },
  { day: 'Friday', time: '12:00 PM - 2:00 PM', course: 'DCIT 303', venue: 'Lecture Hall B' },
];

export default function TimetableScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Timetable</Text>
      {timetable.map((t, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.day}>{t.day}</Text>
          <Text>{t.time}</Text>
          <Text>{t.course}</Text>
          <Text>Venue: {t.venue}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: { marginBottom: 12, padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 6 },
  day: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 },
});
