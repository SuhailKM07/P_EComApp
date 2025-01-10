import React, { useRef } from 'react';
import { ScrollView, Text, Dimensions, Alert, StyleSheet } from 'react-native';

const App = () => {
  const screenHeight = Dimensions.get('window').height;
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;

    if (yOffset > screenHeight / 2) {
      Alert.alert('Scroll Threshold Reached', 'Closing the ScrollView');
      // Perform an action like closing the ScrollView
      // You can also navigate back, reset the state, etc.
      scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true }); // Reset scroll
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.scrollView}
      onScroll={handleScroll}
      scrollEventThrottle={16} // Set a lower value for smoother scrolling events
    >
      <Text style={styles.text}>Scroll down to half the screen to close.</Text>
      {[...Array(50).keys()].map((item) => (
        <Text key={item} style={styles.text}>
          Item {item + 1}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  text: {
    margin: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default App;