import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const defaultProfile = {
  name: 'Justice Mensah',
  indexNumber: '10912345',
  programme: 'BSc Computer Science',
  level: '300',
  bio: 'Passionate about mobile development.',
};

export default function ProfileScreen({ navigation }) {
  const [profile, setProfile] = useState(defaultProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Profile</Text>
      <Text style={styles.label}>Name</Text>
      <Text style={styles.value}>{profile.name}</Text>
      <Text style={styles.label}>Index Number</Text>
      <Text style={styles.value}>{profile.indexNumber}</Text>
      <Text style={styles.label}>Programme</Text>
      <Text style={styles.value}>{profile.programme}</Text>
      <Text style={styles.label}>Level</Text>
      <Text style={styles.value}>{profile.level}</Text>
      <Text style={styles.label}>Bio</Text>
      <Text style={styles.value}>{profile.bio}</Text>
      <Button
        title="Edit Profile"
        onPress={() =>
          navigation.navigate('EditProfile', {
            profile,
            onSave: (updated) => setProfile((prev) => ({ ...prev, ...updated })),
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  label: { fontWeight: 'bold', marginTop: 10 },
  value: { marginBottom: 4 },
});
