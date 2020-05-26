import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Joseph Shinaberry';
    return (
        <View>
            <Text style={styles.header}>Getting started with React Native!</Text>
            <Text style={styles.body}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 45
    },
    body: {
        fontSize: 20
    }
});

export default ComponentsScreen;