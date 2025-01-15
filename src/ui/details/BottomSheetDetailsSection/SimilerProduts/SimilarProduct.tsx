import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import { Icon } from 'react-native-basic-elements';
import { SizeConfig } from '../../../../component/SizeConfig';
import SimilarProductCard from './SimilarProductCard';

export default function SimilarProduct() {
  const [showDescription, setShowDescription] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleDescription = () => {
    const toValue = showDescription ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      setShowDescription(!showDescription);
    });
  };

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, SizeConfig.height * 32],
  });

  return (
    <View style={{ flex: 1, marginBottom: SizeConfig.height * 11, }}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Similar Product</Text>
        <TouchableOpacity onPress={toggleDescription} style={styles.iconWrapper} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }} >
          <Icon
            type="FontAwesome"
            name={showDescription ? 'chevron-up' : 'chevron-down'}
            size={15}
          />
        </TouchableOpacity>
      </View>

      {/* Animated Description Section */}
      <Animated.View style={[styles.descriptionContainer, { height: animatedHeight }]}>
      <SimilarProductCard />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: SizeConfig.height * 7,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F6',
  },
  headerText: {
    fontSize: SizeConfig.fontSize * 4.5,
    fontFamily: 'RedHatDisplay-SemiBold',
  },
  iconWrapper: {
    width: SizeConfig.width * 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionContainer: {
    overflow: 'hidden',
    marginVertical: SizeConfig.height * 2.5
  },
});
