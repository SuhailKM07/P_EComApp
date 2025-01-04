import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SizeConfig } from '../../../component/SizeConfig'

export default function SocialImgLinks() {
    return (
        <View
            style={styles.webLinks}
        >
            <Image
                source={require('../../../assets/images/Login/apple.png')}
                style={[styles.imgStyle]}
            />
            <Image
                source={require('../../../assets/images/Login/google.png')}
                style={[styles.imgStyle]}
            />
            <Image
                source={require('../../../assets/images/Login/facebook.png')}
                style={[styles.imgStyle]}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    webLinks: {
        flexDirection: 'row',
        gap: SizeConfig.width * 5
    },
    imgStyle: {
        width: SizeConfig.width * 12,
        height: SizeConfig.width * 12
    },
})