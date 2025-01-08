import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SizeConfig } from '../../component/SizeConfig'
import { componentStyles } from './Styles'

export default function Recommended() {

    const productData = [
        {
            id: '1',
            img: require('../../assets/images/Home/recommended2.png'),
            lable: 'Turtleneck Sweater',
            price: '39.99'
        },
        {
            id: '2',
            img: require('../../assets/images/Home/recommended1.png'),
            lable: 'Long Sleeve Dress',
            price: '45.00'
        },
        {
            id: '3',
            img: require('../../assets/images/Home/recommended1.png'),
            lable: 'Sportwear Set',
            price: '80.00'
        },
    ]

    return (
        <View style={{ gap: SizeConfig.height * 2 }}>
            <View style={[componentStyles.paddingHorizontalStyle, styles.textComp]}>
                <Text style={styles.subText}>Recommended</Text>
                <Text style={styles.subShowAllText}>Show all</Text>
            </View>
            <FlatList
                data={productData}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[componentStyles.paddingHorizontalStyle, { gap: SizeConfig.width * 3 }]}
                renderItem={
                    (({ item }) => {

                        return (
                            <View style={styles.renderItemComp}>
                                <Image
                                    source={item?.img}
                                    style={styles.imgStyle}
                                />
                                <View>
                                    <Text style={styles.lableText}>
                                        {item?.lable}
                                    </Text>
                                    <Text style={styles.priceText}>$ {item?.price}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            />
        </View >
    )
}

const styles = StyleSheet.create({
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
    renderItemComp: {
        width: SizeConfig.width * 55,
        justifyContent: 'center',
        marginRight: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: SizeConfig.width * 3,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#f9f9f9',
        gap : 5
    },
    imgStyle: {
        width: SizeConfig.width * 15,
        height: SizeConfig.height * 7,
        resizeMode: 'center',
        borderRadius : SizeConfig.width * 3
    },
    lableText: {
        fontSize: SizeConfig.fontSize * 3,
        width: SizeConfig.width * 40,
        color: 'black',
        fontFamily: 'RedHatDisplay-Bold'
    },
    priceText: {
        fontSize: SizeConfig.fontSize * 4,
        color: 'black',
        fontFamily: 'RedHatDisplay-Bold'
    }
})
