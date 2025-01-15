import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { withDecay } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SizeConfig } from "../../component/SizeConfig";
const images = [
    require("../../assets/images/Details/detailsBg.png"),
    require("../../assets/images/Details/detailsBg.png"),
    require("../../assets/images/Details/detailsBg.png"),
];

function NormalProductImgSlider() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    return (

        <View style={styles.container}>
            <Carousel
                windowSize={3}
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
                style={{ overflow: 'hidden' }}
                onProgressChange={(_, absoluteProgress) =>
                    setCurrentIndex(Math.round(absoluteProgress))
                }
                renderItem={({ item }) => (
                    <View
                        style={{
                            position: "relative",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <View
                            style={{
                                position: "absolute",
                                width: SizeConfig.width * 70,
                                height: SizeConfig.width * 70,
                                borderRadius: SizeConfig.width * 100,
                                backgroundColor: "#EACAB7",
                                top: SizeConfig.height * 9,
                                alignItems: "center",
                                justifyContent: "center",
                                opacity: 0.2,
                            }}
                        />
                        <Animated.Image
                            source={item}
                            style={{
                                width: SizeConfig.width * 70,
                                height: SizeConfig.height * 70,
                                position: "absolute",
                                top: -SizeConfig.height * 0,
                            }}
                        />
                    </View>
                )}
            />
            {/* Pagination Dots */}
            <View style={styles.paginationContainer}>
                {images.map((_, index) => {
                    console.log('currentIndex', currentIndex)
                    return (
                        <View key={index} style={(currentIndex == 3 ? 0 : currentIndex) === index && styles.activeDotOuter}>
                            <View
                                style={[{
                                    width: SizeConfig.width * 1.5,
                                    height: SizeConfig.width * 1.5,
                                    backgroundColor: '#4F4F4F',
                                    borderRadius: 100
                                }, (currentIndex == 3 ? 0 : currentIndex) === index && styles.paginationDot]}
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
        flex: 1,
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
        bottom: -SizeConfig.height * 48,
        left: 0,
        right: 0,
        gap: SizeConfig.width * 2,
        height: SizeConfig.width * 5,
    },
    paginationDot: {
        width: SizeConfig.width * 1.4,
        height: SizeConfig.width * 1.4,
        backgroundColor: '#4F4F4F',
        borderRadius: 100
    },
    activeDotOuter: {
        width: SizeConfig.width * 3,
        height: SizeConfig.width * 3,
        borderWidth: 1,
        borderColor: '#4F4F4F',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default NormalProductImgSlider;

