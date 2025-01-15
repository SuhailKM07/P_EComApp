import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-basic-elements'
import { SizeConfig } from '../../../../component/SizeConfig'

export default function ReviewsGrap() {

    const ratingsGrapData = [
        {
            stars: '5',
            ratio: 50,
            percentage: '80%'
        },
        {
            stars: '4',
            ratio: 40,
            percentage: '12%'
        },
        {
            stars: '3',
            ratio: 30,
            percentage: '5%'
        },
        {
            stars: '2',
            ratio: 20,
            percentage: '3%'
        },
        {
            stars: '1',
            ratio: 0,
            percentage: '0%'
        },
    ]

    return (

        <View>
            <View style={styles.grapComp}>

                {

                    ratingsGrapData.map((data, index) => {
                        return (
                            <View key={index} style={styles.grapSubComp}>
                                <Text style={styles.grapTotalStars}>{data.stars}</Text>
                                <Icon
                                    name="star"
                                    type="FontAwesome"
                                    size={SizeConfig.width * 4}
                                    color={"#508A7B"}
                                />
                                <View style={styles.grapGrothBarComp}>
                                    <View style={[styles.grapGrothBar, { width: SizeConfig.width * data.ratio }]} />
                                </View>
                                <Text>
                                    {
                                        data.percentage
                                    }
                                </Text>
                            </View>
                        )
                    })

                }
            </View>
            <View style={styles.addReviewComp}>
                <Text style={styles.addTotalReview}>
                    47 Reviews
                </Text>
                <View style={styles.addReviewBtnComp}>
                    <Text style={styles.addReviewBtnText}>
                        WRITE A REVIEW
                    </Text>
                    <Icon
                        type='FontAwesome5'
                        name='pencil-alt'
                        color={'#8A8A8F'}
                        size={SizeConfig.width * 3}

                    />
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    grapComp: {
        gap: SizeConfig.height * 1,
        marginVertical: SizeConfig.height * 2,
    },
    grapSubComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    grapTotalStars: {
        fontSize: SizeConfig.fontSize * 4,
        color: '#8A8A8F'
    },
    grapGrothBarComp: {
        width: SizeConfig.width * 68,
        backgroundColor: '#EFF0F1',
        height: SizeConfig.height * 1,
        borderRadius: SizeConfig.width * 2,
        overflow: 'hidden'
    },
    grapGrothBar: {
        backgroundColor: '#508A7B',
        height: SizeConfig.height * 1,
        borderRadius: SizeConfig.width * 2
    },
    addReviewComp: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addTotalReview: {
        fontSize: SizeConfig.fontSize * 3,
        color: '#8A8A8F',
        fontFamily: 'RedHatDisplay-Light'
    },
    addReviewBtnComp: {
        flexDirection: 'row',
        gap: SizeConfig.width * 2
    },
    addReviewBtnText: {
        fontSize: SizeConfig.fontSize * 3,
        color: '#8A8A8F',
        fontFamily: 'RedHatDisplay-Light'
    },
})