import React from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SizeConfig } from "../../../component/SizeConfig";
import { images } from "../Components/Data";
import { GestureHandlerRootView } from "react-native-gesture-handler";


function NormalProductImgSlider() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    return (

        <View style={styles.container}>
            <Carousel
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                    failOffsetY: [-5, 5],
                }}
                loop={true}
                width={SizeConfig.width * 100}
                height={SizeConfig.height * 50}
                autoPlay
                scrollAnimationDuration={1000}
                autoPlayInterval={3000}
                data={images}
                style={{ overflow: 'hidden', backgroundColor: 'white' }}
                onProgressChange={(_, absoluteProgress) =>
                    setCurrentIndex(Math.round(absoluteProgress))
                }
                renderItem={({ item }) => (
                    <View
                        style={styles.sliderElementComp}
                    >
                        <View
                            style={styles.sliderProductBesideImg}
                        />
                        <Animated.Image
                            source={item}
                            style={styles.sliderProductImg}
                        />
                    </View>
                )}
            />
            {/* Pagination Dots */}
            <View style={styles.paginationContainer}>
                {images.map((_, index) => {
                    return (
                        <View key={index+'E'} style={(currentIndex == 3 ? 0 : currentIndex) === index && styles.activeDotOuter}>
                            <View
                                style={[styles.paginationDots, (currentIndex == 3 ? 0 : currentIndex) === index && styles.paginationDot]}
                            />
                        </View>
                    )
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
    },
    image: {
        width: SizeConfig.width * 87,
        height: SizeConfig.height * 23,
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: -SizeConfig.height * 45,
        left: 0,
        right: 0,
        gap: SizeConfig.width * 2,
    },

    paginationDot: {
        width: SizeConfig.width * 1.4,
        height: SizeConfig.width * 1.4,
        backgroundColor: '#4F4F4F',
        borderRadius: SizeConfig.width * 0.52,
    },
    activeDotOuter: {
        width: SizeConfig.width * 3,
        height: SizeConfig.width * 3,
        borderWidth: 1,
        borderColor: '#4F4F4F',
        borderRadius: SizeConfig.width * 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderProductBesideImg: {
        position: "absolute",
        width: SizeConfig.width * 70,
        height: SizeConfig.width * 70,
        borderRadius: SizeConfig.width * 35,
        backgroundColor: "#EACAB7",
        top: SizeConfig.height * 9,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.2,
    },
    sliderProductImg: {
        width: SizeConfig.width * 70,
        height: SizeConfig.height * 70,
        position: "absolute",
        top: -SizeConfig.height * 0,
    },
    paginationDots: {
        width: SizeConfig.width * 1.5,
        height: SizeConfig.width * 1.5,
        backgroundColor: '#4F4F4F',
        borderRadius: SizeConfig.width * 0.75
    },
    sliderElementComp: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default NormalProductImgSlider;

