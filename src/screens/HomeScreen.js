import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (

    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to components Demo' />
      <Button
        onPress={() => navigation.navigate('List')}
        title='Go to List Demo' />
        <Button
        onPress={() => navigation.navigate('Images')}
        title='Go to Images Demo' />
        <Button
        onPress={() => navigation.navigate('Counter')}
        title='Go to Counter Demo' />
        <Button
        onPress={() => navigation.navigate('ColorScreen')}
        title='Go to Color Screen Demo' />
        
    </View>
  );
  

};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;
