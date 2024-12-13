import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';

const App = () => {
  // State untuk menyimpan data pribadi dan status loading
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [userData, setUserData] = useState(null);

  // Lifecycle method menggunakan useEffect untuk memuat data
  useEffect(() => {
    // Fungsi untuk mengambil data pribadi
    const fetchData = async () => {
      try {
        // Simulasi pengambilan data pribadi (misalnya dari API)
        const data = {
          name: "Amelia fitri",
          age: 21,
          profession: "Software Engineer",
          location: "Pekanbaru, Riau"
        };
        // Menyimpan data ke state dan mengubah status loading
        setUserData(data);
        setIsDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();  // Memanggil fungsi fetchData untuk mendapatkan data
  }, []); // Hanya dijalankan sekali saat komponen dipasang (mounting)

  return (
    <SafeAreaView style={styles.container}>
      {isDataLoaded ? (
        // Jika data sudah dimuat, tampilkan informasi pribadi
        <View style={styles.card}>
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.details}>Age: {userData.age}</Text>
          <Text style={styles.details}>Profession: {userData.profession}</Text>
          <Text style={styles.details}>Location: {userData.location}</Text>
          <Button title="Log Out" onPress={() => alert("Logging Out...")} />
        </View>
      ) : (
        // Menampilkan loading text jika data masih dimuat
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    marginBottom: 20,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 16,
    color: '#666',
  },
});

export default App;
