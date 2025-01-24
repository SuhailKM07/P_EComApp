import { Text, View, Image, TextStyle } from "react-native"
import * as React from 'react'
import { SizeConfig } from "../../../../component/SizeConfig"
import { OrderInfoScreenStyle } from "../Style"


export const DeliveryMessageLable = () => {
    return (
        <View style={OrderInfoScreenStyle.DeliveryMessageLableComp}>
            <View style={{ gap: SizeConfig.height * 2 }}>
                <Text style={OrderInfoScreenStyle.lableText}
                >Your order is delivered</Text>
                <Text
                    style={OrderInfoScreenStyle.RateProductText}
                >Rate product to get 5 points for collect.</Text>
            </View>
            <Image
                source={require('../../../../assets/images/Order/package.png')}
                style={OrderInfoScreenStyle.DeliveryLableImg}
            />
        </View>
    )
}

export const OrderDetails = ({ lable, value }: { lable: string; value: string }) => {
    return (
        <View style={OrderInfoScreenStyle.OrderDetailsComp}>
            <Text
                style={OrderInfoScreenStyle.OrderDetailsLable}
            >
                {lable}
            </Text>
            <Text
                style={OrderInfoScreenStyle.OrderDetailsValue}
            >
                {value}
            </Text>
        </View>
    )
}

export const OrderProductDetails = ({ lable, value, count, priceStyle }: {
    lable: string;
    value: string;
    count?: number | string;
    priceStyle?: TextStyle
}) => {
    return (
        <View style={OrderInfoScreenStyle.OrderProductDetailsComp}>
            <Text
                style={OrderInfoScreenStyle.OrderProductDetailsLable}
                numberOfLines={1}
                ellipsizeMode="tail"
            >
                {lable}
            </Text>
            <View style={OrderInfoScreenStyle.OrderProductDetailsPriceComp}>
                <Text
                    style={OrderInfoScreenStyle.OrderProductDetailsPriceCount}
                >
                    {count}
                </Text>
                <Text
                    style={[OrderInfoScreenStyle.OrderProductDetailsPrice, priceStyle]}
                >
                    {(value).slice(0, 7)}
                </Text>
            </View>
        </View>
    )
}