import { StyleSheet } from "react-native";
import { SizeConfig } from "../../../component/SizeConfig";

export const OrderScreenStyle = StyleSheet.create({
    SafeAreaStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    LayoutStyle: {
        paddingHorizontal: SizeConfig.width * 4,
        paddingVertical: SizeConfig.height * 2,
    },
    ProductCollectionComp: {
        gap: SizeConfig.height * 3,
        paddingHorizontal: SizeConfig.width * 1,
        paddingVertical: SizeConfig.height * 1
    },
   
    ProductMainComp: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: SizeConfig.height * 13,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: SizeConfig.width * 6,
        overflow: 'hidden',
        elevation: 2,
    },
    ImgComp: { width: SizeConfig.width * 23 },
    ImgStyle: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    ProductInforSectionComp: {
        paddingLeft: SizeConfig.width * 3,
        paddingVertical: SizeConfig.height * 1,
        paddingRight: SizeConfig.width * 5,
        flex: 1,
        height: '100%',
        justifyContent: 'space-evenly'
    },
    ProductInfoSectionOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ProductInfoSectionOneText: {
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: SizeConfig.fontSize * 3.5,
        color: 'black'
    },
    ProductInfoSectionOneCheckBox: {
        padding: SizeConfig.width * 0.8,
        borderRadius: SizeConfig.width * 1,
        height: SizeConfig.width * 5.5,
        width: SizeConfig.width * 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    ProductInfoSectionOneCheckBoxImg: {
        width: SizeConfig.width * 3,
        height: SizeConfig.width * 3,
        resizeMode: 'contain',
    },
    ProductInfoPrice: {
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: SizeConfig.fontSize * 4,
        color: 'black',
    },
    ProductInfoSectionThree: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ProductInfoSectionThreeSize: {
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: SizeConfig.fontSize * 2.7,
        color: '#8A8A8F',
    },
    ProductControlerSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SizeConfig.width * 3,
        height: SizeConfig.height * 3.5,
        width: SizeConfig.width * 20,
        borderRadius: SizeConfig.width * 10,
        borderColor: '#8A8A8F',
        borderWidth: 1,
    },
    ProductcontrolerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    ProductcontrolerBtnIcon: {
        width: SizeConfig.width * 4,
        height: SizeConfig.width * 4,
    },
    CountSection: {
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: SizeConfig.fontSize * 3.2,
        color: '#8A8A8F'
    },
    BillingSectionLable: {
        borderBottomColor: '#8A8A8F',
        borderBottomWidth: SizeConfig.width * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: SizeConfig.height * 5,
    },
    BillingSectionLableText: {
        color: '#8A8A8F',
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: SizeConfig.fontSize * 4
    },
    BillingSectionValueComp: {
        color: 'black',
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: SizeConfig.fontSize * 4
    },
    SubTotalComp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: SizeConfig.height * 7
    },
    SubTotalCompLable: {
        color: 'black',
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: SizeConfig.fontSize * 4
    },
    SubTotalCompValue: {
        color: 'black',
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: SizeConfig.fontSize * 5.5
    },
    CartBtnComp: {
        backgroundColor: '#343434',
        alignItems: 'center',
        justifyContent: 'center',
        height: SizeConfig.height * 7,
        borderRadius: SizeConfig.width * 10,

    },
    CartBtnTextStyle: {
        color: 'white',
        fontSize: SizeConfig.fontSize * 4,
        fontFamily: 'RedHatDisplay-Bold'
    },
    BillSectionComp: {
        height: SizeConfig.height * 37,
        backgroundColor: 'white',
        elevation: 2,
        borderTopLeftRadius: SizeConfig.width * 5,
        borderTopRightRadius: SizeConfig.width * 5,
        justifyContent: 'space-evenly',
    },
})