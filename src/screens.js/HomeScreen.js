import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';  // Import ProfileCard

const HomeScreen = ({ userData }) => {
  return (
    <View style={styles.container}>
      <ProfileCard userData={userData} />
      <Button title="Log Out" onPress={() => alert("Logging Out...")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default HomeScreen;
