import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { componentStyles } from './Styles'
import { SizeConfig } from '../../component/SizeConfig'
import { getPathFromState } from '@react-navigation/native'

export default function TopCollection() {
    return (
        <View style={[componentStyles.paddingHorizontalStyle, styles.topCollectionComp]}>
            <View style={styles.textComp}>
                <Text style={styles.subText}>Top Collection</Text>
                <Text style={styles.subShowAllText}>Show all</Text>
            </View>
            <View style={{ gap: SizeConfig.height * 2 }}>

                <View style={styles.bannerOneComp}>
                    <View style={styles.bannerOneTextComp}>
                        <Text style={styles.bannerOneTextOne}>
                            I Sale up to 40%
                        </Text>
                        <Text style={styles.bannerOneTextTwo}>
                            FOR SLIM {'\n'}
                            & BEAUTY
                        </Text>
                    </View>
                    <View style={styles.bannerOneImgComp}>
                        <View style={styles.bannerOneDiskComp} />
                        <Image
                            source={require('../../assets/images/Home/topcoll1.png')}
                            style={styles.bannerOneImg}
                        />
                    </View>
                </View>


                <View style={[styles.bannerOneComp, { paddingVertical: SizeConfig.height * 2 }]}>
                    <View style={styles.bannerOneTextComp}>
                        <Text style={styles.bannerOneTextOne}>
                            I Summer Collection 2021
                        </Text>
                        <Text style={{
                            fontFamily: 'RedHatDisplay-Bold',
                            fontSize: SizeConfig.fontSize * 5.5,
                            color: 'black'
                        }}>
                            Most sexy {'\n'}
                            & fabulous {'\n'}
                            design
                        </Text>
                    </View>
                    <View style={styles.bannerOneImgComp}>
                        <View style={styles.bannerOneDiskComp} />
                        <Image
                            source={require('../../assets/images/Home/topcoll2.png')}
                            style={[styles.bannerOneImg]}
                        />
                    </View>
                </View>

                <View style={styles.thirdBannerComp}>
                    <View style={styles.thirdSubOneComp}>
                        <Image
                            source={require('../../assets/images/Home/topcoll31.png')}
                            style={styles.thirdSubImg}
                        />
                        <View style={styles.thirdSubComp}>
                            <Text style={styles.thirdSubTextOne}>
                                T-Shirts
                            </Text>
                            <Text style={styles.thirdSubTextTwo}>
                                The {'\n'}
                                Office {'\n'}
                                Life
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, borderRadius: SizeConfig.width * 5, backgroundColor: '#F8F8FA', }}>

                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: SizeConfig.height * 2, marginBottom: SizeConfig.height * 2.5, paddingLeft: SizeConfig.width * 2 }}>
                            <Text style={{ fontFamily: 'RedHatDisplay-Light', color: '#737680', fontSize: SizeConfig.fontSize * 5 }}>
                                Dresses
                            </Text>
                            <Text style={{ fontFamily: 'RedHatDisplay-Light', color: 'black', fontSize: SizeConfig.fontSize * 5 }}>
                                Elegant{'\n'}
                                Design
                            </Text>
                        </View>
                        <Image
                            source={require('../../assets/images/Home/topcoll32.png')}
                            style={{
                                resizeMode: 'cover',
                                height: SizeConfig.height * 25,
                                width: SizeConfig.width * 20,
                                overflow: 'hidden',
                                borderRadius: SizeConfig.width * 3
                            }}
                        />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topCollectionComp: {
        gap: SizeConfig.height * 2,
        marginTop: SizeConfig.height * 3,
        marginBottom: SizeConfig.height * 2
    },
    textComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subText: {
        fontSize: SizeConfig.fontSize * 5.5,
        fontFamily: 'RedHatDisplay-Bold',
        color: '#000000',
        width: SizeConfig.width * 48,
    },
    subShowAllText: {
        fontSize: SizeConfig.fontSize * 3.7,
        textAlign: 'right',
        fontFamily: 'RedHatDisplay-SemiBold',
        color: '#9B9B9B', width: SizeConfig.width * 20,
    },
    bannerOneComp: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8FA',
        borderRadius: SizeConfig.width * 3
    },
    bannerOneTextComp: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
        gap: SizeConfig.height * 2,
        paddingLeft: SizeConfig.width * 5
    },
    bannerOneTextOne: {
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 3.6,
        color: '#777E90'
    },
    bannerOneTextTwo: {
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 5.5,
        color: '#777E90'
    },
    bannerOneImgComp: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bannerOneDiskComp: {
        backgroundColor: '#ECECEC',
        width: SizeConfig.width * 25,
        height: SizeConfig.width * 25,
        borderRadius: 50,
        position: 'absolute',
        left: SizeConfig.width * 6,
    },
    bannerOneImg: {
        resizeMode: 'cover',
        height: SizeConfig.height * 20,
        width: SizeConfig.width * 27,
        overflow: 'hidden',
        borderRadius: SizeConfig.width * 3
    },
    thirdBannerComp: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        gap: SizeConfig.width * 5,
        // backgroundColor: '#F8F8FA',
        // borderRadius: SizeConfig.width * 5
    },
    thirdSubOneComp: {
        flexDirection: 'row',
        borderRadius: SizeConfig.width * 5,
        flex: 1,
        backgroundColor: '#F8F8FA',
        paddingRight: SizeConfig.width * 2
    },
    thirdSubImg: {
        resizeMode: 'cover',
        height: SizeConfig.height * 25,
        width: SizeConfig.width * 20,
        overflow: 'hidden',
        borderRadius: SizeConfig.width * 3
    },
    thirdSubComp: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: SizeConfig.height * 2
    },
    thirdSubTextOne: {
        fontFamily: 'RedHatDisplay-Light',
        color: '#737680',
        fontSize: SizeConfig.fontSize * 5
    },
    thirdSubTextTwo: {
        fontFamily: 'RedHatDisplay-Light',
        color: 'black',
        fontSize: SizeConfig.fontSize * 5
    },
})