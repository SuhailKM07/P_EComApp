import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SizeConfig } from "../../component/SizeConfig";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const images = [
    require('../../assets/images/Home/slider1.png'),
    require('../../assets/images/Home/slider1.png'),
    require('../../assets/images/Home/slider1.png'),
];

function NormalSlider() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    return (
        // <GestureHandlerRootView style={{ flex: 1 }}>

        <View style={styles.container}>
            <Carousel
                windowSize={3}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10], 
                    failOffsetY: [-5, 5],     
                }}
                loop={true}
                width={SizeConfig.width * 100}
                height={SizeConfig.height * 23}
                autoPlay
                scrollAnimationDuration={300}
                autoPlayInterval={3000}
                data={images}
                // snapEnabled={true}
                style={{ overflow: 'hidden' }}
                onProgressChange={(_, absoluteProgress) =>
                    setCurrentIndex(Math.round(absoluteProgress))
                }
                renderItem={({ item }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Animated.Image
                            source={item}
                            style={styles.image}
                            resizeMode="center"
                        />
                    </View>
                )}
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

            {/* <Text style={{
                    position: 'absolute',
                    right: SizeConfig.width * 10,
                    top: SizeConfig.height * 4,
                    color: 'white',
                    fontFamily: 'RedHatDisplay-Bold',
                    fontSize: SizeConfig.fontSize * 6
                }}>
                    Autumn {'\n'}
                    Collection {'\n'}
                    2022
                </Text> */}

        </View>
      

    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
        marginTop: SizeConfig.height * 2
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
        bottom: SizeConfig.height * 2
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
});

export default NormalSlider;
