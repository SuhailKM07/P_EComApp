import { StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { SizeConfig } from '../../../../component/SizeConfig';

export default function SimilarProductCard() {
    const productData = [
        {
            id: '1',
            img: require('../../../../assets/images/Home/dress3.png'),
            label: 'Turtleneck Sweater',
            price: '39.99',
        },
        {
            id: '2',
            img: require('../../../../assets/images/Home/dress2.png'),
            label: 'Long Sleeve Dress',
            price: '45.00',
        },
        {
            id: '3',
            img: require('../../../../assets/images/Home/dress3.png'),
            label: 'Sportwear Set',
            price: '80.00',
        },
    ];

    return (
        <View style={styles.container}>
            <BottomSheetFlatList
                data={productData}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
                nestedScrollEnabled
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <Image
                            source={item.img}
                            style={styles.image}
                            accessible
                            accessibilityLabel={`Image of ${item.label}`}
                        />
                        <View>
                            <Text style={styles.labelText}>{item.label}</Text>
                            <Text style={styles.priceText}>${item.price}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    flatListContent: {
        gap: SizeConfig.width * 3,
    },
    cardContainer: {
        width: SizeConfig.width * 39,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: SizeConfig.width * 37,
        height: SizeConfig.height * 25,
        resizeMode: 'contain',
        borderRadius: 8,  
    },
    labelText: {
        fontSize: SizeConfig.fontSize * 3.6,
        color: '#1D1F22',
        fontFamily: 'RedHatDisplay-Bold',
        // textAlign: 'center',
        marginTop: SizeConfig.height * 1,
    },
    priceText: {
        fontSize: SizeConfig.fontSize * 3.5,
        color: '#1D1F22',
        fontFamily: 'RedHatDisplay-Bold',
        // textAlign: 'center',
        marginTop: SizeConfig.height * 0.5,
    },
});
