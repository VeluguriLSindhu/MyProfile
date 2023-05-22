import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import NavigationBar from './Navigation';
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/visible_logo_new.png')} style={styles.logo} />
            <View style={styles.line} />
            <View style={styles.profileContainer}>
                <Image source={require('../assets/Sindhu.jpeg')} style={styles.profilePic} />
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Sindhu Veluguri</Text>
                    <Text style={styles.designation}>Engr 1-Software Development</Text>
                </View>
            </View>
            <NavigationBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'flex-end',
        padding: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 10,
    },
    profilePic: {
        width: 160,
        height: 200,
        borderRadius: 50,
        marginRight: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 20,
    },
    logo: {
        width: 150,
        height: 70,
        marginEnd: -30,
    },
    line: {
        height: 3,
        backgroundColor: '#1602F7',
        width: '100%',
    },
    designation: {
        fontSize: 12,
        color: 'gray',
    },
    nameContainer: {
        flexDirection: 'column',
    },
});

export default HomeScreen;