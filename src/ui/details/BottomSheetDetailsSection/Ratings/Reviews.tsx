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
import ReviewsGrap from './ReviewsGrap';
import ReviewContent from './ReviewContent';

export default function Reviews() {
    const [showDescription, setShowDescription] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;

    const toggleDescription = () => {
        const toValue = showDescription ? 0 : 1;

        Animated.timing(animation, {
            toValue,
            duration: 1000,
            useNativeDriver: false,
        }).start(() => {
            setShowDescription(!showDescription);
        });
    };

    const animatedHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, SizeConfig.height * 70],
    });

    return (
        <View style={{ flex: 1 }}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Reviews</Text>
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
                <View style={styles.ratingHeadderComp} >
                    <View style={styles.ratingHeadderSubComp}>
                        <Text style={styles.noOfRatings} >
                            4.9
                        </Text>
                        <Text style={styles.totalRatings}>
                            OUT OF 5
                        </Text>
                    </View>
                    <View style={styles.starsComp} >
                        {
                            <View style={styles.starsSubComp}>
                                {
                                    Array(5).fill(0).map((_, index) => (
                                        <Icon
                                            key={index}
                                            name="star"
                                            type="FontAwesome"
                                            size={SizeConfig.width * 4}
                                            color={"#508A7B"}
                                        />
                                    ))
                                }
                            </View>
                        }
                        <Text style={styles.totalNumberOfRatings}>
                            83 ratings
                        </Text>
                    </View>
                </View>
                <ReviewsGrap />
                <ReviewContent />
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
        // marginTop: SizeConfig.height * 2.5
    },
    ratingHeadderComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SizeConfig.height * 2
    },
    ratingHeadderSubComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    noOfRatings: {
        fontSize: SizeConfig.fontSize * 9,
        width: SizeConfig.width * 18,
        fontFamily: 'RedHatDisplay-Bold',
        color: 'black'
    },
    totalRatings: {
        fontSize: SizeConfig.fontSize * 3.5,
        width: SizeConfig.width * 25,
        fontFamily: 'RedHatDisplay-Medium',
        color: '#8A8A8F'
    },
    starsComp: {
        alignItems: 'flex-end',
        gap: SizeConfig.width * 2
    },
    starsSubComp: {
        flexDirection: 'row',
        gap: SizeConfig.width * 2
    },
    totalNumberOfRatings: {
        fontFamily: 'RedHatDisplay-Light',
        marginLeft: SizeConfig.width * 2,
        color: '#8A8A8F'
    }

});
