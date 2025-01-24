import { FlatList, ScrollView, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OrderInfoScreenStyle } from './Style'
import { StatusBar } from 'react-native-basic-elements'
import { SizeConfig } from '../../../component/SizeConfig'
import { NavHeaderComp } from '../../../component/NavHeaderComp'
import { DeliveryMessageLable, OrderDetails, OrderProductDetails } from './Components/Helper'
import BtnCust from '../../../component/BtnCust'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationTypeChecking } from '../../../routs/NavigationTypes'
import { AddToCartProductDataType } from '../AddToCart/Components/Data'

type OrderInfoTypeProps = NativeStackScreenProps<NavigationTypeChecking, 'OrderInfo'>



const OrderInfo: React.FC<OrderInfoTypeProps> = ({ navigation, route }) => {

    return (
        <SafeAreaView style={OrderInfoScreenStyle.SafeAreaStyle}>
            <StatusBar
                backgroundColor={'white'}
                barStyle='dark-content'
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
                contentContainerStyle={[OrderInfoScreenStyle.LayoutStyle, {
                    gap: SizeConfig.height * 4
                }]}
            >
                <NavHeaderComp
                    Content='Order #1514'
                    navigation={navigation}
                />

                <DeliveryMessageLable />

                <View style={OrderInfoScreenStyle.MainContainer}>
                    <OrderDetails
                        lable='Order number'
                        value='#1514'
                    />
                    <OrderDetails
                        lable='Tracking Number'
                        value='IK987362341'
                    />
                    <OrderDetails
                        lable='Delivery address'
                        value='SBI Building, Software Park'
                    />
                </View>

                <View style={OrderInfoScreenStyle.OrderInfoStyle}>
                    <FlatList
                        data={route?.params?.data?.filter((item: AddToCartProductDataType) => item.active)} // Filter active items
                        contentContainerStyle={OrderInfoScreenStyle.OrderInfoFlatListStyle}
                        keyExtractor={item => item.id}
                        scrollEnabled={false}
                        renderItem={({ item, index }) => {

                            return (
                                <OrderProductDetails
                                    lable={item.productName}
                                    count={'x' + item.count}
                                    value={'$' + item.price}
                                />
                            )

                        }}
                    />
                    <View
                        style={OrderInfoScreenStyle.OrderInfoProductStyle}
                    >
                        <OrderProductDetails
                            lable='Sub Total'
                            value={'$' + route?.params?.totalPrice}
                            priceStyle={OrderInfoScreenStyle.OrderInfoProductTextStyle}
                        />
                        <OrderProductDetails
                            lable='Shipping'
                            value='0.00'
                            priceStyle={OrderInfoScreenStyle.OrderInfoProductTextStyle}
                        />

                        <View style={OrderInfoScreenStyle.TotalProductPriceComp}>
                            <OrderProductDetails
                                lable='Total'
                                value={'$' + route?.params?.totalPrice}
                                priceStyle={OrderInfoScreenStyle.OrderInfoProductTextStyle}
                            />
                        </View>

                    </View>
                </View>

                <View style={OrderInfoScreenStyle.BtnMainComp}>
                    <BtnCust
                        buttonContent='Track Order'
                        buttonStyle={OrderInfoScreenStyle.TrackOrderBtnComp}
                        buttonTextStyle={OrderInfoScreenStyle.TrackOrderBtnText}
                        onPushFun={() => {
                            navigation.navigate('TrackingOrder')
                        }}
                    />
                    <BtnCust
                        buttonContent='Rate'
                        buttonStyle={OrderInfoScreenStyle.RateBtnComp}
                        buttonTextStyle={OrderInfoScreenStyle.RateBtnText}
                        onPushFun={() => {
                            navigation.navigate('RateProductScreen')
                        }}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default OrderInfo