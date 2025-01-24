import { StyleSheet } from "react-native";
import { SizeConfig } from "../../../component/SizeConfig";

export const TrackingOrderStyle = StyleSheet.create({
    SafeAreaStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    LayoutStyle: {
        paddingHorizontal: SizeConfig.width * 4,
        paddingVertical: SizeConfig.height * 2,
    },
    OrderDetailsMainComp: {
        height: SizeConfig.height * 10,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    },
    OrderDeliveredText: {
        fontFamily: 'RedHatDisplay-Medium',
        fontSize: SizeConfig.fontSize * 4,
        color: '#c8c7c6'
    },
    OrderIdText: {
        color: 'black',
        fontSize: SizeConfig.fontSize * 4.5,
        fontFamily: 'RedHatDisplay-SemiBold',
    },
    OrderTrackingStepsSubComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    OrderTrackingDetailsLineComp: {
        flexDirection: 'row',
        gap: SizeConfig.width * 3
    },
    OuterBulletComp: {
        width: SizeConfig.width * 5,
        height: SizeConfig.width * 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 2.5,
        borderWidth: SizeConfig.width * 0.3,
        borderColor: '#474340'
    },
    InnerBulletSubComp: {
        width: SizeConfig.width * 3,
        height: SizeConfig.width * 3,
        backgroundColor: '#474340',
        borderRadius: SizeConfig.width * 1.5
    },
    CompletedBulletImg: {
        width: SizeConfig.width * 3,
        height: SizeConfig.width * 3,
        backgroundColor: 'white',
        borderRadius: SizeConfig.width * 2,
        resizeMode: 'cover'
    },
    OrderTrackingTextLable: {
        fontSize: SizeConfig.fontSize * 3.5,
        fontFamily: 'RedHatDisplay-Medium',
        color: 'black'
    },
    DeviderComp: {
        gap: SizeConfig.width * 2,
        width: SizeConfig.width * 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    DeviderElements: {
        width: SizeConfig.width * 1.5,
        height: SizeConfig.width * 1.5,
        backgroundColor: '#474340',
        borderRadius: SizeConfig.width * 1
    },
    DontForgetToRateLablComp: {
        backgroundColor: 'white',
        gap: SizeConfig.width * 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: SizeConfig.height * 15,
        borderRadius: SizeConfig.width * 3,
        elevation: 3
    },
    DontForgetToRateLablImg: {
        width: SizeConfig.width * 18,
        height: SizeConfig.width * 18
    },
    DontForgetToRateLablTextOne: {
        color: 'black',
        fontSize: SizeConfig.fontSize * 4,
        fontFamily: 'RedHatDisplay-SemiBold',
    },
    DontForgetToRateLablTextTwo: {
        color: '#c8c7c6',
        fontSize: SizeConfig.fontSize * 3,
        fontFamily: 'RedHatDisplay-SemiBold',
    },
    DontForgetToRateLablStars: {
        flexDirection: 'row',
        gap: SizeConfig.width * 2
    },
})