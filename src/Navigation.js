import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import ProductsCard from './ProductCard';

const NavigationBar = () => {
  
  const data = [
    {
    id: 1,
    name: 'Samsung Galaxy M34 5G',
    price: '₹18999',
    imageUrl: require('../assets/Samsung.jpg'),
    },
    {
      id: 2,
      name: 'Galaxy S23 Ultra',
      price: '₹134999',
      imageUrl: require('../assets/Samsung.jpg'),
    },
  ];

  const [selectedTab, setSelectedTab] = useState(null);
  const handleNavigation = (item) => {
    console.log('Navigating to:', item);
    setSelectedTab(item);
  }

  const renderSelectedTabContent = () => {
    if (selectedTab === 'Products') {
      return (
        <ScrollView contentContainerStyle={styles.productsContainer}>
          {data.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </ScrollView>
      );
    }
    return null;
  };
  return (
    <>
    <ScrollView >
    <ScrollView horizontal style={styles.horizontal}>
      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => handleNavigation('Products')}
      >
        <Text style={styles.buttonText}>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => handleNavigation('My Profile')}
      >
        <Text style={styles.buttonText}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => handleNavigation('My Badges')}
      >
        <Text style={styles.buttonText}>My Badges</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => handleNavigation('My Schedule')}
      >
        <Text style={styles.buttonText}>My Schedule</Text>
      </TouchableOpacity>
      </ScrollView>
      {renderSelectedTabContent()}
    </ScrollView>
    
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: -20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  horizontal: {
    marginBottom: 30,
  },
  buttonContainer: {
    marginRight: 20,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#1602F7'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default NavigationBar;