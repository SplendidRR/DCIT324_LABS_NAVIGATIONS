import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Campus Connect</Text>
      <Text style={styles.desc}>A simple student companion app for University of Ghana students.</Text>
      <Text style={styles.label}>Developer</Text>
      <Text>Name: Justice</Text>
      <Text>Student ID: 10XXXXXX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  desc: { marginBottom: 20 },
  label: { fontWeight: 'bold', marginBottom: 4 },
});
