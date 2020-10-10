import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import BasicForm from './BasicForm'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView>
        <View style={styles.containerComp}>
          <Text style={styles.title}>Basic Form</Text>
          <BasicForm />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  containerComp: {
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center"
  }
});
