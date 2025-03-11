import Cat from '@/components/Cat';
import { ThemedView } from '@/components/ThemedView';
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native';
function profile() {
  return (
    <ThemedView style={styles.container}>
      <Cat />
    </ThemedView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default profile