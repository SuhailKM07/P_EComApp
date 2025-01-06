import React, { useEffect } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SizeConfig } from '../../../component/SizeConfig';

export default function SubMenuScreen({
    data,
    index,
    subMenuIndex,
    setSubMenuIndex,
}: {
    data: any;
    index: number;
    subMenuIndex: number;
    setSubMenuIndex: (index: number) => void;
}): React.JSX.Element {
    // Shared value for background color
    const custAnimatedColor = useSharedValue<string>(subMenuIndex === index ? '#3A2C27' : '#F3F3F3');

    // Animated style
    const CustomAnimatedSubMenustyle = useAnimatedStyle(() => ({
        backgroundColor: custAnimatedColor.value,
    }));

    // Update animation on subMenuIndex change
    useEffect(() => {
        custAnimatedColor.value = withTiming(subMenuIndex === index ? '#3A2C27' : '#F3F3F3', { duration: 300 });
    }, [subMenuIndex]);

    return (
        <Pressable
            style={[
                styles.pressableContainer,
                {
                    borderWidth: subMenuIndex === index ? 1 : 0,
                    borderColor: '#3A2C27',
                },
            ]}
            onPress={() => setSubMenuIndex(index)}
        >
            <Animated.View style={[styles.animatedView, CustomAnimatedSubMenustyle]}>
                <Image
                    source={data}
                    style={[
                        styles.imageStyle,
                        {
                            tintColor: subMenuIndex === index ? 'white' : '#9D9D9D',
                        },
                    ]}
                />
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressableContainer: {
        width: SizeConfig.width * 15,
        height: SizeConfig.width * 15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 50,
    },
    animatedView: {
        width: SizeConfig.width * 12,
        height: SizeConfig.width * 12,
        borderRadius: SizeConfig.width * 50,
    },
    imageStyle: {
        resizeMode: 'center',
        width: '100%',
        height: '100%',
    },
});
