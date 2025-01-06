import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SizeConfig } from '../../component/SizeConfig'
import { componentStyles } from './Styles'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import SubMenuScreen from './subMenuComp/SubMenuScreen'

export default function HomeScreen() {
    const [subMenuIndex, setSubMenuIndex] = useState<number>(0);
    const subMenuData = [
        require('../../assets/images/Home/women.png'),
        require('../../assets/images/Home/men.png'),
        require('../../assets/images/Home/accessories.png'),
        require('../../assets/images/Home/beauty.png'),
    ]

    //   subMenu Animation 
    const custAnimatedColor = useSharedValue<string>('#F3F3F3');

    const CustomAnimatedSubMenustyle = useAnimatedStyle(() => ({
        backgroundColor: custAnimatedColor.value
    }));

    useEffect(() => {
        custAnimatedColor.value = withTiming('#3A2C27');
    }, [subMenuIndex])

    return (
        <SafeAreaView style={[styles.superComp, componentStyles.layoutAlign]}>
            <StatusBar
                translucent
                backgroundColor="rgba(255, 255, 255, 0)"
                barStyle={'dark-content'}
            />

            <ScrollView style={{ flex: 1 }}>

                <View style={styles.headderComp}>
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

                <View style={styles.subMenuStyle} >

                    {
                        subMenuData.map((data, index) => (
                            <SubMenuScreen
                                key={index}
                                data={data}
                                index={index}
                                subMenuData={subMenuData}
                                subMenuIndex={subMenuIndex}
                                setSubMenuIndex={setSubMenuIndex}
                            />
                        ))
                    }

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    superComp: {
        flex: 1,
        backgroundColor: 'white'
    },
    headderComp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: SizeConfig.height * 7,
        alignItems: 'center'
    },
    menuImgStyle: {
        resizeMode: 'cover',
        width: SizeConfig.width * 6,
        height: SizeConfig.width * 6,
    },
    brandName: {
        textAlign: 'center',
        fontSize: SizeConfig.fontSize * 5,
        color: 'black',
        fontFamily: 'RedHatDisplay-Bold'
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
        height: SizeConfig.height * 10,
    }
})