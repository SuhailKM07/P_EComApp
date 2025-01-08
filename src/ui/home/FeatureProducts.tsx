import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SizeConfig } from '../../component/SizeConfig'
import { componentStyles } from './Styles'

export default function FeatureProducts() {

    const productData = [
        {
            id: '1',
            img: require('../../assets/images/Home/dress3.png'),
            lable: 'Turtleneck Sweater',
            price: '39.99'
        },
        {
            id: '2',
            img: require('../../assets/images/Home/dress2.png'),
            lable: 'Long Sleeve Dress',
            price: '45.00'
        },
        {
            id: '3',
            img: require('../../assets/images/Home/dress3.png'),
            lable: 'Sportwear Set',
            price: '80.00'
        },
    ]

    return (
        <View>
            <View style={[componentStyles.paddingHorizontalStyle, styles.textComp]}>
                <Text style={styles.subText}>FeatureProducts</Text>
                <Text style={styles.subShowAllText}>Show all</Text>
            </View>
            <FlatList
                data={productData}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: SizeConfig.width * 7, paddingRight: SizeConfig.width * 4, gap: SizeConfig.width * 3 }}
                renderItem={
                    (({ item }) => {

                        return (
                            <View style={styles.renderItemComp}>
                                <Image
                                    source={item?.img}
                                    style={styles.imgStyle}
                                />
                                <Text style={styles.lableText}>
                                    {item?.lable}
                                </Text>
                                <Text style={styles.priceText}>$ {item?.price}</Text>
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
        marginTop: SizeConfig.height * 3
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
        width: SizeConfig.width * 39,
        justifyContent: 'center',
        marginRight: 2
    },
    imgStyle: {
        width: SizeConfig.width * 37,
        height: SizeConfig.height * 28,
        resizeMode: 'contain',
    },
    lableText: {
        fontSize: SizeConfig.fontSize * 3.6,
        width: SizeConfig.width * 40,
        color: 'black',
        fontFamily: 'RedHatDisplay-Bold'
    },
    priceText: {
        fontSize: SizeConfig.fontSize * 5,
        color: 'black',
        fontFamily: 'RedHatDisplay-Bold'
    }
})
