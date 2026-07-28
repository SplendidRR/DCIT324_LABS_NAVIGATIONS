import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const courses = [
  { code: 'STAT 333', title: ' STATISTIC INFERENCE I', credits: 3 },
  { code: 'DCIT 301', title: 'SOFTWARE ENGINEERING', credits: 3 },
  { code: 'DCIT 315', title: 'DATABASE MANAGEMENT SYSTEMS', credits: 3 },
  { code: 'STAT 334', title: 'STATISTIC INFERENCE 2', credits: 3 },
  { code: 'DCIT 303', title: 'COMPUTER NETWORKS', credits: 3 },
];

export default function CoursesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Courses</Text>
      {courses.map((c, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.code}>{c.code}</Text>
          <Text style={styles.title}>{c.title}</Text>
          <Text>Credit Hours: {c.credits}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: { marginBottom: 12, padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 6 },
  code: { fontWeight: 'bold', fontSize: 15 },
  title: { marginBottom: 4 },
});
