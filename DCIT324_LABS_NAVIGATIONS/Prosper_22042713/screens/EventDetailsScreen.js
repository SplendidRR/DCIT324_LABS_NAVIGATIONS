import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EventDetailsScreen({ route, navigation }) {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.desc}>{event.description}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  date: { color: '#888', marginBottom: 16 },
  desc: { fontSize: 15, marginBottom: 30 },
});
