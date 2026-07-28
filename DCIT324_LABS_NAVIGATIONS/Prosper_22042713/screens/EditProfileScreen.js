import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function EditProfileScreen({ route, navigation }) {
  const { profile, onSave } = route.params;
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [programme, setProgramme] = useState(profile.programme);

  const handleSave = () => {
    onSave({ name, bio, programme });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Profile</Text>
      <Text>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text>Bio</Text>
      <TextInput style={styles.input} value={bio} onChangeText={setBio} />
      <Text>Programme</Text>
      <TextInput style={styles.input} value={programme} onChangeText={setProgramme} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16, borderRadius: 4 },
});
