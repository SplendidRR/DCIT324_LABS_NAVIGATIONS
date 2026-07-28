import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const events = [
  { id: 1, title: 'Freshers Orientation 2025', date: '2025-01-05', description: 'New students are welcomed to the University of Ghana campus with a full-day orientation programme.' },
  { id: 2, title: 'Tech Hackathon', date: '2025-01-12', description: 'A 24-hour hackathon hosted by the Computer Science department. Teams of 4 compete to build innovative solutions.' },
  { id: 3, title: 'Career Fair', date: '2025-01-20', description: 'Top companies visit campus to recruit final-year students. Bring your CV and dress professionally.' },
  { id: 4, title: 'Cultural Festival', date: '2025-02-01', description: 'Annual cultural festival showcasing the diversity of UG students through food, music, and dance.' },
  { id: 5, title: 'Research Symposium', date: '2025-02-10', description: 'Students and faculty present ongoing research projects. Open to all levels.' },
];

export default function FeedScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Campus Feed</Text>
      {events.map((event) => (
        <TouchableOpacity
          key={event.id}
          style={styles.card}
          onPress={() => navigation.navigate('EventDetails', { event })}
        >
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.date}>{event.date}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: { marginBottom: 12, padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 6 },
  title: { fontWeight: 'bold', fontSize: 15 },
  date: { color: '#888' },
});
