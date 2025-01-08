import React, { useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SizeConfig } from '../../component/SizeConfig';

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
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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
                        source={data.img}
                        style={[
                            styles.imageStyle,
                            {
                                tintColor: subMenuIndex === index ? 'white' : '#9D9D9D',
                            },
                        ]}
                    />

                </Animated.View>
            </Pressable>
            <Text style={[styles.menuLable, { color: subMenuIndex === index ? '#3A2C27' : '#9D9D9D' }]}>
                {data.lable}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    pressableContainer: {
        width: SizeConfig.width * 13,
        height: SizeConfig.width * 13,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 50,
    },
    animatedView: {
        width: SizeConfig.width * 11,
        height: SizeConfig.width * 11,
        borderRadius: SizeConfig.width * 50,
        gap: SizeConfig.height * 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        resizeMode: 'center',
        width: SizeConfig.width * 6,
        height: SizeConfig.width * 6,
    },
    menuLable: {
        textAlign: 'center',
        fontFamily: 'RedHatDisplay-Medium',
        marginTop: SizeConfig.height * 1,
    }
});
