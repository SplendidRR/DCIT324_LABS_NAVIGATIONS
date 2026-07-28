import React from 'react';
import { View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>Campus Connect</Text>
      <Text style={{ marginBottom: 30 }}>Your UG Student Companion</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}
