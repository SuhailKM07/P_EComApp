import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-basic-elements'
import { SizeConfig } from '../../../component/SizeConfig'
import { componentStyles } from '../styles'
import DiscriptionSectionScreen from './DiscriptionSectionScreen'
import Reviews from './Ratings/Reviews'
import SimilarProduct from './SimilerProduts/SimilarProduct'

export default function Details() {

    const [selectColor, setSelectColor] = useState(0)
    const [selectSize, setSelectSize] = useState(0);

    const Color = [
        '#E7C0A7',
        '#050302',
        '#EE6969'
    ]
    return (
        <View style={[componentStyles.horizontalPadding]}>
            <View style={styles.productHeadderCom}>
                <View style={styles.productTittleComp}>
                    <Text style={styles.productTittle}>
                        Sportwear Set
                    </Text>
                    <Text style={styles.productPrice}>
                        $ 80.00
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }} >
                    {
                        <View style={styles.rattingSubComp}>
                            {
                                Array(5).fill(0).map((_, index) => (
                                    <Icon
                                        key={index}
                                        name="star"
                                        type="FontAwesome"
                                        size={SizeConfig.width * 5}
                                        color={"#508A7B"}
                                    />
                                ))
                            }
                        </View>
                    }
                    <Text style={styles.rattingCount}>
                        (83)
                    </Text>
                </View>
            </View>

            <View style={styles.selectVarietyComp}>
                {/* Color Section */}
                <View style={styles.selectVarietyCompOne}>
                    <Text style={styles.selectVarietyCompOneTitle}>
                        Color
                    </Text>
                    <View style={{ flexDirection: 'row', gap: SizeConfig.width * 2 }}>
                        {Color.map((color, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    setSelectColor(index)
                                }}
                                style={[styles.selectColorComp, { borderWidth: selectColor == index ? 0.1 : 0 }]}
                            >
                                <View
                                    style={[styles.selectColorInnerComp, {
                                        backgroundColor: color
                                    }]}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Size Section */}
                <View style={{ justifyContent: 'center', width: SizeConfig.width * 38 }}>
                    <Text style={styles.selectSizeVarietyComp}>
                        Size
                    </Text>
                    <View style={styles.selectSizeVarietyDataComp}>
                        {['S', 'M', 'L'].map((size, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    setSelectSize(index)
                                }}
                                style={[styles.selectSizeVarietyDataMainComp, {
                                    backgroundColor: selectSize == index ? '#515151' : '#FAFAFA'
                                }]}
                            >
                                <Text style={[styles.selectSizeVarietyTextComp, { color: selectSize == index ? 'white' : '#333' }]}>
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>

            <DiscriptionSectionScreen />

            <Reviews />

            <SimilarProduct />



        </View>
    )
}

const styles = StyleSheet.create({
    productHeadderCom: {
        gap: SizeConfig.height * 2,
        borderBottomColor: '#F3F3F6',
        borderBottomWidth: 1,
        height: SizeConfig.height * 10
    },
    productTittleComp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productTittle: {
        fontSize: SizeConfig.fontSize * 5.5,
        color: 'black',
        fontFamily: 'RedHatDisplay-Medium'
    },
    productPrice: {
        fontSize: SizeConfig.fontSize * 6,
        color: 'black',
        fontFamily: 'RedHatDisplay-Bold'
    },
    rattingSubComp: {
        flexDirection: 'row',
        gap: SizeConfig.width * 2
    },
    rattingCount: {
        color: '#1D1F22',
        fontFamily: 'RedHatDisplay-Light',
        marginLeft: SizeConfig.width * 2
    },
    selectVarietyComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: SizeConfig.height * 15,
        borderBottomColor: '#F3F3F6',
        borderBottomWidth: 1
    },
    selectVarietyCompOne: {
        justifyContent: 'center',
        width: SizeConfig.width * 40
    },
    selectVarietyCompOneTitle: {
        color: '#777E90',
        fontSize: SizeConfig.fontSize * 4.5,
        fontFamily: 'RedHatDisplay-Medium',
        marginBottom: 8
    },
    selectColorComp: {
        width: SizeConfig.width * 11,
        height: SizeConfig.width * 11,
        borderRadius: SizeConfig.width * 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    selectColorInnerComp: {
        width: SizeConfig.width * 8,
        height: SizeConfig.width * 8,
        borderRadius: SizeConfig.width * 100,
    },
    selectSizeVarietyComp: {
        color: '#777E90',
        fontSize: SizeConfig.fontSize * 4.5,
        fontFamily: 'RedHatDisplay-Medium',
        marginBottom: 8
    },
    selectSizeVarietyDataComp: {
        flexDirection: 'row',
        gap: SizeConfig.width * 2
    },
    selectSizeVarietyDataMainComp: {
        width: SizeConfig.width * 11,
        height: SizeConfig.width * 11,
        borderRadius: SizeConfig.width * 11 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    selectSizeVarietyTextComp: {
        fontSize: SizeConfig.fontSize * 3.5,
        fontFamily: 'RedHatDisplay-Regular'
    }
})
