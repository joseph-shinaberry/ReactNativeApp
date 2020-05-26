import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title='Go to components Demo' />
        <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
          <Text>Got To List Demo</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;
