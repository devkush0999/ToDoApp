import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      {/* today's tasks */}
      <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>
      </View>

      <View style={styles.items}>

      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
    
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    // backgroundColor: 'red'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight:'bold'

  },
  items:{
    
  }
});
