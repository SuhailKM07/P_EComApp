import { DevToolsSettingsManager, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-basic-elements'
import { SizeConfig } from '../../../../component/SizeConfig'

export default function ReviewContent() {

    const reviewContentData = [
        {
            img: require('../../../../assets/images/Details/review2.png'),
            name: 'Jennifer Rose',
            timing: '5m ago',
            reviewContent: 'I love it.  Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!'
        },
        {
            img: require('../../../../assets/images/Details/review1.png'),
            name: 'Kelly Rihana',
            timing: '9m ago',
            reviewContent: "I'm very happy with order, It was delivered on and good quality. Recommended!"
        }
    ]

    return (
        <View>
            {
                reviewContentData.map((data, index) => (
                    <View key={index} style={styles.reviewContentComp}>
                        <View style={styles.reviewContentHeadderProfileComp}>
                            <View style={styles.reviewContentHeadderProfileSubComp}>
                                <Image
                                    source={data.img}
                                    style={styles.profileImg}
                                />
                                <View style={{ gap: SizeConfig.width * 2 }} >
                                    <Text style={styles.profileName}>
                                        {data.name}
                                    </Text>
                                    {
                                        <View style={styles.starsComp}>
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
                                </View>
                            </View>
                            <Text style={styles.reviewTiming}>
                                {data.timing}
                            </Text>
                        </View>
                        <Text style={styles.reviewContent}>
                            {data.reviewContent}
                        </Text>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    reviewContentComp: {
        marginTop: SizeConfig.height * 5,
    },
    reviewContentHeadderProfileComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    reviewContentHeadderProfileSubComp: {
        flexDirection: 'row',
        gap: SizeConfig.width * 3
    },
    profileImg: {
        width: SizeConfig.width * 12,
        height: SizeConfig.width * 12,
        resizeMode: 'cover',
        borderRadius: SizeConfig.width * 100
    },
    profileName: {
        fontFamily: 'RedHatDisplay-Bold',
        color: 'black',
        fontSize: SizeConfig.fontSize * 5
    },
    starsComp: {
        flexDirection: 'row',
        gap: SizeConfig.width * 2
    },
    reviewTiming: {
        fontSize: SizeConfig.fontSize * 3.5,
        width: SizeConfig.width * 20,
        textAlign: 'right',
        fontFamily: 'RedHatDisplay-Medium',
        color: '#8A8A8F'
    },
    reviewContent: {
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 4,
        marginTop: SizeConfig.height * 2
    },
})