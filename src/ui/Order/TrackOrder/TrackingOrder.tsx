import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon, StatusBar } from 'react-native-basic-elements'
import { NavHeaderComp } from '../../../component/NavHeaderComp'
import { TrackingOrderStyle } from './Styles'
import { SizeConfig } from '../../../component/SizeConfig'
import { DontForgetToRateLable, OrderDetails, OrderTrackingSteps } from './Components/Helper'
import { RatingStars } from '../../../component/RatingStars'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationTypeChecking } from '../../../routs/NavigationTypes'

type TrackingOrder = NativeStackScreenProps<NavigationTypeChecking, 'TrackingOrder'>

export const TrackingOrder: React.FC<TrackingOrder> = ({ navigation, route }) => {
    return (
        <SafeAreaView style={TrackingOrderStyle.SafeAreaStyle}>
            <StatusBar
                backgroundColor={'white'}
                barStyle='dark-content'
            />

            <View style={[TrackingOrderStyle.LayoutStyle, { flex: 1, gap: SizeConfig.height * 3 }]}>

                <NavHeaderComp
                    Content='Track Order'
                    navigation={navigation}
                />

                <OrderDetails />

                <View>
                    <OrderTrackingSteps />
                </View>

                <DontForgetToRateLable />

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})