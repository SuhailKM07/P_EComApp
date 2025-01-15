import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
} from 'react-native';
import { Icon } from 'react-native-basic-elements';
import { SizeConfig } from '../../../component/SizeConfig';

export default function DescriptionSectionScreen() {
    const [showDescription, setShowDescription] = useState(false);
    const [showMoreDescription, setShowMoreDescription] = useState(false);
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
        outputRange: [0, showMoreDescription ? SizeConfig.height * 33 : SizeConfig.height * 15],
    });

    return (
        <View >
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Description</Text>
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
                <Text style={styles.descriptionText}>
                    Sportswear is no longer under culture, it is no longer indie or cobbled together as it once was. Sport is fashion today. The top is oversized in fit and style, may need to size down.{' '}
                    {
                        showMoreDescription ?
                            <>
                                <Text>
                                    The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum. 
                                </Text>
                                <Text style={styles.readMoreText} onPress={() => setShowMoreDescription(false)} >Read Less</Text>

                            </>
                            :
                            <Text style={styles.readMoreText} onPress={() => setShowMoreDescription(true)} >Read more</Text>
                    }
                </Text>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionText: {
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 4,
        color: '#333',
        lineHeight: SizeConfig.fontSize * 5.5,
    },
    readMoreText: {
        color: '#508A7B',
        fontSize: SizeConfig.fontSize * 3.5,
        textDecorationLine: 'underline',
        textDecorationColor: '#508A7Bs'
    },
});
