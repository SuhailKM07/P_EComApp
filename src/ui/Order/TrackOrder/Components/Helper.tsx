import { Text, View, Image, TextInput, Pressable, FlatList } from "react-native"
import * as React from 'react'
import { SizeConfig } from "../../../../component/SizeConfig"
import { OrderTrackingStepsData } from "./Data"
import { RatingStars } from "../../../../component/RatingStars"
import { TrackingOrderStyle } from "../Styles"


export const OrderDetails = () => {
    return (
        <View style={TrackingOrderStyle.OrderDetailsMainComp}>
            <Text
                style={TrackingOrderStyle.OrderDeliveredText}>
                Delivered on{' '}
                <Text style={{
                    color: 'black'
                }}>
                    15.05.21
                </Text>
            </Text>
            <Text
                style={TrackingOrderStyle.OrderDeliveredText}>
                Tracking Number :
                <Text
                    style={TrackingOrderStyle.OrderIdText}
                >
                    IK287368838
                </Text>
            </Text>
        </View>
    )
}

export const OrderTrackingSteps = () => {
    return (

        <FlatList
            data={OrderTrackingStepsData}
            keyExtractor={item => item.id}
            contentContainerStyle={{
                gap: SizeConfig.height * 1
            }}
            renderItem={({ item, index }) => {
                return (
                    <View style={{ gap: SizeConfig.height * 1 }}>
                        <View style={TrackingOrderStyle.OrderTrackingStepsSubComp} >
                            <View style={TrackingOrderStyle.OrderTrackingDetailsLineComp}>
                                <View style={TrackingOrderStyle.OuterBulletComp}>
                                    <View style={TrackingOrderStyle.InnerBulletSubComp} >
                                        {
                                            item.complete ?

                                                <Image
                                                    source={require('../../../../assets/images/Order/tickmark.png')}
                                                    style={TrackingOrderStyle.CompletedBulletImg}
                                                />
                                                :
                                                ''

                                        }
                                    </View>
                                </View>

                                <Text style={TrackingOrderStyle.OrderTrackingTextLable}>
                                    {item.statusText}
                                </Text>
                            </View>
                            <Text style={TrackingOrderStyle.OrderTrackingTextLable}>
                                {item.date}
                            </Text>
                        </View>
                        {
                            OrderTrackingStepsData.length > index + 1 ?
                                <View style={TrackingOrderStyle.DeviderComp}>
                                    <View style={TrackingOrderStyle.DeviderElements} />
                                    <View style={TrackingOrderStyle.DeviderElements} />
                                    <View style={TrackingOrderStyle.DeviderElements} />
                                </View>
                                :
                                ''
                        }
                    </View>
                )
            }}
        />


    )
}


export const DontForgetToRateLable = () => {
    return (
        <View style={TrackingOrderStyle.DontForgetToRateLablComp}>
            <Image
                source={require('../../../../assets/images/Order/starhand.png')}
                style={TrackingOrderStyle.DontForgetToRateLablImg}
            />
            <View style={{ gap: SizeConfig.height * 0.5 }}>
                <Text
                    style={TrackingOrderStyle.DontForgetToRateLablTextOne}
                >
                    Don’t forget to rate
                </Text>
                <Text
                    style={TrackingOrderStyle.DontForgetToRateLablTextTwo}
                >
                    Rate product to get 5 points for collect.
                </Text>
                <View style={TrackingOrderStyle.DontForgetToRateLablStars}>
                    <RatingStars
                        numberOfStars={5}
                        starColor='#c8c7c6'
                        starSize={SizeConfig.width * 6}
                    />
                </View>
            </View>
        </View>
    )
}