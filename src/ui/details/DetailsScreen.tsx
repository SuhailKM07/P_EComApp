import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import { SizeConfig } from '../../component/SizeConfig';
import { Gesture, GestureHandlerRootView, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, runOnJS } from 'react-native-reanimated';
import { Icon } from 'react-native-basic-elements';

export default () => {
  const animatedHeight = useSharedValue(SizeConfig.height * 50);
  const [gestureRecognize, setGestureRecognize] = useState(true);
  let isInitial = useSharedValue(0)


  const panGesture = Gesture.Pan()
    .onEnd((e) => {
      isInitial.value = e.translationY >= 0 ? 0 : 1
    })
    .onUpdate((e) => {
      let targetHeight = e.translationY >= 0 ? SizeConfig.height * 50 : SizeConfig.height * 90;
      if (isInitial.value > 0) {
        e.translationY >= 0 ? runOnJS(setGestureRecognize)(true) : runOnJS(setGestureRecognize)(false)
      }
      animatedHeight.value = withTiming(targetHeight, { duration: 300 });
    })
    .enabled(gestureRecognize);
  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ position: 'relative', flex: 1}}>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.header, animatedHeaderStyle]}>
            <ScrollView
              onScroll={(event) => {
                const contentOffsetY = event.nativeEvent.contentOffset.y;
                setGestureRecognize(contentOffsetY === 0);
              }}
            >
              <View style={styles.contentContainer}>
                <Text style={styles.text}>
                  Histor, Purpose and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  Histor, Purpose and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  Histor, Purpose and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  Histor, Purpose and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  Histor, Purpose and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  Histor, Purpose and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  Histor, Purpose and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  Histor, Purpose and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  Histor, Purpose and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  Histor, Purpose and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  History, Purpose, and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  History, Purpose, and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  History, Purpose, and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  History, Purpose, and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  History, Purpose, and Usage History, Purpose, and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  History, Purpose, and Usage
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                  History, Purpose, and Usage
                </Text>
              </View>
              <Text style={styles.headerText}>Animated Header</Text>
            </ScrollView>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 16,

  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
});


