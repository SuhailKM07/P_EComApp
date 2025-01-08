import { Image, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SizeConfig } from '../../component/SizeConfig'
import { componentStyles } from './Styles'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import SubMenuScreen from './SubMenuScreen'
import NormalSlider from './NormalSlider'
import FeatureProducts from './FeatureProducts'
import Recommended from './Recommended'
import TopCollection from './TopCollection'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function HomeScreen() {
    const [subMenuIndex, setSubMenuIndex] = useState<number>(0);
    const subMenuData = [
        { img: require('../../assets/images/Home/women.png'), lable: 'Women' },
        { img: require('../../assets/images/Home/men.png'), lable: 'Men' },
        { img: require('../../assets/images/Home/accessories.png'), lable: 'Accessories' },
        { img: require('../../assets/images/Home/beauty.png'), lable: 'Beauty' },
    ]

    return (
        <SafeAreaView style={[styles.superComp]}>
            <StatusBar
                translucent
                backgroundColor="rgba(255, 255, 255, 0)"
                barStyle={'dark-content'}
            />

            <GestureHandlerRootView >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                    stickyHeaderIndices={[0]}
                >


                    <View>


                        <View style={[styles.headderComp, componentStyles.paddingHorizontalStyle]}>
                            <Image
                                source={require('../../assets/images/Home/menu.png')}
                                style={styles.menuImgStyle}
                            />
                            <Text style={styles.brandName}>
                                GemStore
                            </Text>
                            <Image
                                source={require('../../assets/images/Home/notfication.png')}
                                style={styles.notificationIcon}
                            />
                        </View>
                    </View>

                    <View style={[styles.subMenuStyle, componentStyles.paddingHorizontalStyle]} >
                        {
                            subMenuData.map((data, index) => (
                                <SubMenuScreen
                                    key={index}
                                    data={data}
                                    index={index}
                                    subMenuIndex={subMenuIndex}
                                    setSubMenuIndex={setSubMenuIndex}
                                />
                            ))
                        }
                    </View>
                    <NormalSlider />
                    <FeatureProducts />
                    <Image
                        source={require('../../assets/images/Home/midBanner.png')}
                        style={{
                            width: '100%',
                            height: SizeConfig.height * 28,
                            resizeMode: 'center',
                        }}
                    />
                    <Recommended />
                    <TopCollection />

                </ScrollView>
            </GestureHandlerRootView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    superComp: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: SizeConfig.height * 2,
    },
    headderComp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: SizeConfig.height * 7,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    menuImgStyle: {
        resizeMode: 'cover',
        width: SizeConfig.width * 5,
        height: SizeConfig.width * 5,
    },
    brandName: {
        textAlign: 'center',
        fontSize: SizeConfig.fontSize * 5,
        color: 'black',
        fontFamily: 'RedHatDisplay-Bold',
        width: SizeConfig.width * 35
    },
    notificationIcon: {
        resizeMode: 'cover',
        width: SizeConfig.width * 7,
        height: SizeConfig.width * 7,
    },
    subMenuStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: SizeConfig.height * 13,
        // backgroundColor : 'red'

    }
})