import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      {item.Image && (
        <Image source={{ uri: item.Image }} style={styles.image} />
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.Description}</Text>
      <Text style={styles.price}>${item.Price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  image: { width: "100%", height: 250, borderRadius: 12, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  description: { fontSize: 16, color: "#555", marginBottom: 15 },
  price: { fontSize: 20, fontWeight: "600", color: "green" },
});

export default DetailScreen;
