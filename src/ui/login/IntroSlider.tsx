import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, StatusBar, ImageBackground } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationTypeChecking } from "../../routs/NavigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import { SizeConfig } from '../../component/SizeConfig';
import CustomButton from "./Component/CustomButton";

type IntroSliderProps = NativeStackScreenProps<NavigationTypeChecking, 'IntroSlider'>;

const IntroSlider: React.FC<IntroSliderProps> = ({ navigation, route }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        require('../../assets/images/Login/one.png'),
        require('../../assets/images/Login/two.png'),
        require('../../assets/images/Login/three.png'),
    ];

    const data = [
        {
            headingText: 'Discover something new',
            subheadingText: 'Special new arrivals just for you',
        },
        {
            headingText: 'Update trendy outfit',
            subheadingText: 'Favorite brands and hottest trends',
        },
        {
            headingText: 'Explore your true style',
            subheadingText: 'Relax and let us bring the style to you',
        },
    ];



    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <StatusBar
                translucent
                backgroundColor="rgba(255, 255, 255, 0)"
                barStyle="dark-content"
            />
            <View style={styles.container}>


                {/* Text Section */}
                <View style={styles.textContainer}>
                    <Text style={styles?.headingText}>{data[currentIndex]?.headingText}</Text>
                    <Text style={styles?.subheadingText}>{data[currentIndex]?.subheadingText}</Text>
                </View>

                <View >
                    {/* Carousel Section */}
                    <View style={styles.carouselContainer}>
                        <Carousel
                            autoPlay
                            autoPlayInterval={3000}
                            data={images}
                            width={SizeConfig.deviceWidth}
                            loop={false}
                            mode="parallax"
                            modeConfig={{
                                parallaxScrollingScale: 0.90,
                                parallaxScrollingOffset: 100,
                                parallaxAdjacentItemScale: 0.70,
                            }}
                            onProgressChange={(_, absoluteProgress) =>
                                setCurrentIndex(Math.round(absoluteProgress))
                            }
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.carouselItem}>
                                        <Animated.Image
                                            source={item}
                                            style={[styles.image]}
                                            resizeMode="contain"
                                        />
                                    </View>
                                );
                            }}
                        />
                        {/* Pagination Dots */}
                        <View style={styles.paginationContainer}>
                            {images.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.paginationDot,
                                        currentIndex === index && styles.activeDot,
                                    ]}
                                />
                            ))}
                        </View>
                    </View>

                    {/* Button Section */}
                    <View style={styles.btnComponent}>
                        <CustomButton pressableStyle={styles.pressableStyle}
                            pressableOnPress={() => {
                                navigation.navigate('SignUpScreen')
                            }}
                            compStyle={styles.viewCompStyle}
                            textStyle={styles.textCompStyle}
                            content="Shopping now"
                        />
                    </View>

                </View>

                {/* Bottom Background Section */}
                <View style={styles.bottomBackground} />

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        position: 'relative',
        paddingVertical: SizeConfig.height * 5
    },
    textContainer: {
        alignItems: "center",
        gap: SizeConfig.height * 1.5,
    },
    headingText: {
        fontSize: SizeConfig.fontSize * 5.8,
        fontFamily: "RedHatDisplay-Bold",
        textAlign: "center",
        color: 'black'
    },
    subheadingText: {
        fontSize: SizeConfig.fontSize * 4.3,
        fontFamily: "RedHatDisplay-Medium",
        textAlign: "center",
        color: 'black'
    },
    carouselContainer: {
        height: SizeConfig.height * 63,
        justifyContent: "center",
    },
    carouselItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: SizeConfig.width * 100,
        height: SizeConfig.height * 52,
        borderRadius: SizeConfig.width * 10,
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: SizeConfig.height * 6,
    },
    paginationDot: {
        width: SizeConfig.width * 1.5,
        height: SizeConfig.width * 1.5,
        borderRadius: SizeConfig.width * 50,
        borderWidth: 1,
        borderColor: "#D6D6D6",
        marginHorizontal: SizeConfig.width * 1.2,
    },
    activeDot: {
        backgroundColor: "white",
        width: SizeConfig.width * 2,
        height: SizeConfig.width * 2,
    },
    bottomBackground: {
        backgroundColor: '#464447',
        height: SizeConfig.height * 48,
        width: '100%',
        position: 'absolute',
        zIndex: -1,
        bottom: 0,
    },
    btnComponent: {
        alignItems: 'center',
        justifyContent: 'center',
        height: SizeConfig.height * 15
    },
    pressableStyle: {
        width: SizeConfig.width * 50,
        height: SizeConfig.height * 7,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: SizeConfig.width * 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'white'
    },
    viewCompStyle: {
        backgroundColor: '#767779',
        position: 'absolute',
        inset: 0,
        opacity: 0.9,
    },
    textCompStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: SizeConfig.fontSize * 4
    }
});

export default IntroSlider;
