import { StyleSheet } from "react-native";
import { SizeConfig } from "../../../component/SizeConfig";

export const OrderInfoScreenStyle = StyleSheet.create({
    SafeAreaStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    LayoutStyle: {
        paddingHorizontal: SizeConfig.width * 4,
        paddingVertical: SizeConfig.height * 2,
    },
    MainContainer: {
        backgroundColor: 'white',
        paddingVertical: SizeConfig.height * 2,
        paddingHorizontal: SizeConfig.width * 3,
        gap: SizeConfig.height * 2,
        borderRadius: SizeConfig.width * 3,
        elevation: 2
    },
    OrderInfoStyle: {
        backgroundColor: 'white',
        paddingVertical: SizeConfig.height * 2,
        paddingHorizontal: SizeConfig.width * 3,
        gap: SizeConfig.height * 5,
        borderRadius: SizeConfig.width * 3,
        elevation: 2
    },
    OrderInfoFlatListStyle: {
        gap: SizeConfig.height * 2,
        borderRadius: SizeConfig.width * 3,
    },
    OrderInfoProductStyle: {
        gap: SizeConfig.height * 2,
        borderRadius: SizeConfig.width * 3,
    },
    OrderInfoProductTextStyle: {
        fontSize: SizeConfig.fontSize * 5,
        fontFamily: 'RedHatDisplay-Bold'
    },
    TotalProductPriceComp: {
        borderTopWidth: 0.5,
        borderTopColor: '#88898f',
        height: SizeConfig.height * 7,
        justifyContent: 'center'
    },
    BtnMainComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    TrackOrderBtnComp: {
        borderWidth: 1,
        borderColor: '#88898f',
        width: SizeConfig.width * 45,
        height: SizeConfig.height * 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 25
    },
    TrackOrderBtnText: {
        fontSize: SizeConfig.fontSize * 4,
        fontFamily: 'RedHatDisplay-Bold',
        color: '#88898f'
    },
    RateBtnComp: {
        width: SizeConfig.width * 35,
        height: SizeConfig.height * 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 25,
        backgroundColor: '#343434'
    },
    RateBtnText: {
        fontSize: SizeConfig.fontSize * 4,
        fontFamily: 'RedHatDisplay-Bold',
        color: 'white'
    },
    DeliveryMessageLableComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#575757',
        borderRadius: SizeConfig.width * 3,
        height: SizeConfig.height * 15
    },
    lableText: {
        fontSize: SizeConfig.fontSize * 5,
        color: 'white',
        fontFamily: 'RedHatDisplay-Bold'
    },
    RateProductText: {
        fontSize: SizeConfig.fontSize * 3,
        color: 'white',
        fontFamily: 'RedHatDisplay-Bold'
    },
    DeliveryLableImg: {
        width: SizeConfig.width * 15,
        height: SizeConfig.width * 15,
        resizeMode: 'contain'
    },
    OrderDetailsComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    OrderDetailsLable: {
        fontSize: SizeConfig.fontSize * 4,
        color: '#88898f',
        fontFamily: 'RedHatDisplay-Medium'
    },
    OrderDetailsValue: {
        fontSize: SizeConfig.fontSize * 4,
        color: 'black',
        fontFamily: 'RedHatDisplay-Medium'
    },
    OrderProductDetailsComp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    OrderProductDetailsLable: {
        fontSize: SizeConfig.fontSize * 4.5,
        color: 'black',
        fontFamily: 'RedHatDisplay-Light',
        width: SizeConfig.width * 40,
    },
    OrderProductDetailsPriceComp: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between'
    },
    OrderProductDetailsPriceCount: {
        fontSize: SizeConfig.fontSize * 4.5,
        color: 'black',
        fontFamily: 'RedHatDisplay-Light'
    },
    OrderProductDetailsPrice: {
        fontSize: SizeConfig.fontSize * 4.5,
        color: 'black',
        fontFamily: 'RedHatDisplay-Medium'
    },
})