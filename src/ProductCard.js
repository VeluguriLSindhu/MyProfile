import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductsCard = ({ product }) => (
  <View style={styles.card}>
    <Image style={styles.image} source={product.imageUrl} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#555',
  },
});

export default ProductsCard;
