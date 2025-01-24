import { View, Text, ScrollView, Image, Pressable, ViewStyle, TextStyle } from "react-native"
import { OrderScreenStyle } from "../Styles"
import { PressableIcons } from "../../../../component/PressableIcons"
import * as React from 'react'
import { SizeConfig } from "../../../../component/SizeConfig"
import { Icon } from "react-native-basic-elements"
import { AddToCartProductDataType, productDataType } from "./Data"



export const AddToCartProductCard = ({ totalAddToCartProduct, setTotalAddToCartProduct }:
    {
        totalAddToCartProduct: AddToCartProductDataType[],
        setTotalAddToCartProduct: React.Dispatch<React.SetStateAction<AddToCartProductDataType[]>>;
    }) => {

    const removerDuplicatesIncrement = (item: AddToCartProductDataType) => {
        setTotalAddToCartProduct((prev: AddToCartProductDataType[]) => {
            const existingIndex = prev.findIndex((product: AddToCartProductDataType) => product.id === item.id);

            if (existingIndex !== -1) {
                const updatedProducts = [...prev];
                updatedProducts[existingIndex] = {
                    ...updatedProducts[existingIndex],
                    count: updatedProducts[existingIndex].count + 1,
                };
                return updatedProducts;
            } else {
                return [
                    ...prev,
                    { ...item, count: 1 },
                ];
            }
        });
    };


    const removerDuplicatesDecrement = (item: AddToCartProductDataType) => {
        setTotalAddToCartProduct((prev) => {
            const existingIndex = prev.findIndex((product: AddToCartProductDataType) => product.id === item.id);
            console.log(existingIndex)

            if (existingIndex !== -1) {
                const updatedProducts = [...prev];
                updatedProducts[existingIndex] = {
                    ...updatedProducts[existingIndex],
                    count: updatedProducts[existingIndex].count > 1 ? updatedProducts[existingIndex].count - 1 : updatedProducts[existingIndex].count,
                };
                return updatedProducts
            } else {
                return [
                    ...prev,
                    { ...item, count: 1 },
                ];
            }
        });
    };

    const DisableAnProduct = (item: AddToCartProductDataType) => {
        setTotalAddToCartProduct((prev) => {
            const existingIndex = prev.findIndex((product: AddToCartProductDataType) => product.id === item.id);
            console.log(existingIndex)

            if (existingIndex !== -1) {
                const updatedProducts = [...prev];
                updatedProducts[existingIndex] = {
                    ...updatedProducts[existingIndex],
                    active: updatedProducts[existingIndex].active == true ? false : true,
                };
                return updatedProducts
            } else {
                return [
                    ...prev,
                    { ...item, count: 1 },
                ];
            }
        });
    };

    return (
        <View
            style={{
                height: SizeConfig.height * 55,
                width: '100%',
                paddingVertical: SizeConfig.height * 2,
            }}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={OrderScreenStyle.ProductCollectionComp}>
                    {
                        totalAddToCartProduct?.map((item: AddToCartProductDataType, index: number) => (

                            <View
                                key={index}
                                style={OrderScreenStyle.ProductMainComp}>
                                <View style={OrderScreenStyle.ImgComp}>
                                    <Image
                                        source={item.img}
                                        style={OrderScreenStyle.ImgStyle}
                                    />
                                </View>
                                <View style={OrderScreenStyle.ProductInforSectionComp}>
                                    <View style={OrderScreenStyle.ProductInfoSectionOne}>
                                        <Text style={OrderScreenStyle.ProductInfoSectionOneText} >
                                            {item.productName}
                                        </Text>
                                        <Pressable
                                            onPress={() => {
                                                DisableAnProduct(item)
                                            }}
                                            style={[
                                                OrderScreenStyle.ProductInfoSectionOneCheckBox,
                                                { backgroundColor: item.active ? '#508A7B' : 'gray' }
                                            ]}>
                                            <Image
                                                source={require('../../../../assets/images/Order/tick.png')}
                                                style={OrderScreenStyle.ProductInfoSectionOneCheckBoxImg}
                                            />
                                        </Pressable>
                                    </View>
                                    <Text style={OrderScreenStyle.ProductInfoPrice} >
                                        $ {item.price}
                                    </Text>
                                    <View style={OrderScreenStyle.ProductInfoSectionThree}>
                                        <Text style={OrderScreenStyle.ProductInfoSectionThreeSize} >
                                            Size: {item.size}  |  Color: {item.color}
                                        </Text>
                                        <View style={OrderScreenStyle.ProductControlerSection}>
                                            <Pressable
                                                onPress={() => removerDuplicatesDecrement(item)}
                                                hitSlop={30}
                                                style={OrderScreenStyle.ProductcontrolerBtn}
                                            >
                                                <Icon
                                                    type={'Entypo'}
                                                    name={'minus'}
                                                    size={SizeConfig.width * 4}
                                                    color={'#8A8A8F'}
                                                    style={OrderScreenStyle.ProductcontrolerBtnIcon}
                                                />
                                            </Pressable>
                                            <Text style={OrderScreenStyle.CountSection} >
                                                {item?.count}
                                            </Text>
                                            <Pressable
                                                style={OrderScreenStyle.ProductcontrolerBtn}
                                                hitSlop={30}
                                                onPress={() => removerDuplicatesIncrement(item)}
                                            >
                                                <Icon
                                                    type={'Entypo'}
                                                    name={'plus'}
                                                    size={SizeConfig.width * 4}
                                                    color={'#8A8A8F'}
                                                    style={OrderScreenStyle.ProductcontrolerBtnIcon}
                                                />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export const BillingSection = ({
    lable,
    value,
    mainContentStyle,
    lableTextStyle,
    valueCompStyle
}: {
    lable: string;
    value: string | number;
    mainContentStyle: ViewStyle;
    lableTextStyle: TextStyle;
    valueCompStyle: TextStyle;
}) => {
    return (
        <View style={mainContentStyle}>
            <Text style={lableTextStyle}>
                {lable}
            </Text>
            <Text style={valueCompStyle}>
                {value}
            </Text>
        </View>
    )
}