import { StyleSheet, ViewStyle, StyleProp } from 'react-native';
import React from 'react';
// import { useSkeletonAnimation } from 'react-native-animated-skeleton';
import Animated from 'react-native-reanimated';
interface Props {
  style?: StyleProp<ViewStyle>;
  children?: any
}

const ExampleComponent: React.FC<Props> = ({ style, children }) => {
  // const animatedStyle = useSkeletonAnimation({
  //   speed: 1000,
  // });
  return (
    <Animated.View style={[styles.container, style]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: '#DDDDDD',
  },
});

export default ExampleComponent;