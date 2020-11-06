import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ClassList from './ClassList'
import FunctionalList from './FunctionalList';

export default function App() {
  return (
    <View style={styles.container}>
      <ClassList />
      <FunctionalList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
