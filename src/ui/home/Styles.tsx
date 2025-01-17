import { StyleSheet } from "react-native"
import { SizeConfig } from "../../component/SizeConfig"

export const componentStyles = StyleSheet.create({
    layoutAlign: {
        paddingHorizontal: SizeConfig.width * 7,
        paddingVertical: SizeConfig.height * 2,
        flex: 1
    },
    paddingHorizontalStyle: {
        paddingHorizontal: SizeConfig.width * 7,
    },
    paddingVerticalStyle: {
        paddingVertical: SizeConfig.height * 2,
    },
    bannerOneComp: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8FA',
        borderRadius: SizeConfig.width * 3
    },
    bannerOneTextComp: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
        gap: SizeConfig.height * 2,
        paddingLeft: SizeConfig.width * 5
    },
    bannerOneTextOne: {
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 3.6,
        color: '#777E90'
    },
    bannerOneTextTwo: {
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 5.5,
        color: '#777E90'
    },
    bannerOneImgComp: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bannerOneDiskComp: {
        backgroundColor: '#ECECEC',
        width: SizeConfig.width * 25,
        height: SizeConfig.width * 25,
        borderRadius: 50,
        position: 'absolute',
        left: SizeConfig.width * 6,
    },
    bannerOneImg: {
        resizeMode: 'cover',
        height: SizeConfig.height * 20,
        width: SizeConfig.width * 27,
        overflow: 'hidden',
        borderRadius: SizeConfig.width * 3
    },
    topCollectionComp: {
        gap: SizeConfig.height * 2,
        marginTop: SizeConfig.height * 3,
        marginBottom: SizeConfig.height * 2
    },

    thirdBannerComp: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: SizeConfig.width * 5,
    },
    thirdSubOneComp: {
        flexDirection: 'row',
        borderRadius: SizeConfig.width * 5,
        width: SizeConfig.width * 40,
        backgroundColor: '#F8F8FA',
        // backgroundColor : 'red',
        paddingRight: SizeConfig.width * 2
    },
    thirdSubImg: {
        resizeMode: 'cover',
        height: SizeConfig.height * 25,
        width: SizeConfig.width * 20,
        overflow: 'hidden',
        borderRadius: SizeConfig.width * 3
    },
    thirdSubComp: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: SizeConfig.height * 2
    },
    thirdSubTextOne: {
        fontFamily: 'RedHatDisplay-Light',
        color: '#737680',
        fontSize: SizeConfig.fontSize * 5
    },
    thirdSubTextTwo: {
        fontFamily: 'RedHatDisplay-Light',
        color: 'black',
        fontSize: SizeConfig.fontSize * 5
    },
    bannerSecondCompTextTwo: {
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: SizeConfig.fontSize * 5.5,
        color: 'black'
    },
    ThirdBannerMainComp: {
        flexDirection: 'row',
        flex: 1,
        borderRadius: SizeConfig.width * 5,
        backgroundColor: '#F8F8FA',
    },
    ThirdBannerSubComp: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: SizeConfig.height * 2,
        marginBottom: SizeConfig.height * 2.5,
        paddingLeft: SizeConfig.width * 2
    },
    superComp: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: SizeConfig.height * 2,
    },
    headderComp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: SizeConfig.height * 7,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    menuImgStyle: {
        resizeMode: 'cover',
        width: SizeConfig.width * 5,
        height: SizeConfig.width * 5,
    },
    brandName: {
        textAlign: 'center',
        fontSize: SizeConfig.fontSize * 5,
        color: 'black',
        fontFamily: 'RedHatDisplay-Bold',
        width: SizeConfig.width * 35
    },
    notificationIcon: {
        resizeMode: 'cover',
        width: SizeConfig.width * 7,
        height: SizeConfig.width * 7,
    },
    subMenuStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: SizeConfig.height * 13,
        width: '100%',
    },

    renderItemComp: {
        width: SizeConfig.width * 39,
        justifyContent: 'center',
    },
    imgStyle: {
        width: SizeConfig.width * 37,
        height: SizeConfig.height * 28,
        resizeMode: 'contain',
    },
    lableText: {
        fontSize: SizeConfig.fontSize * 3.6,
        width: SizeConfig.width * 40,
        color: 'black',
        fontFamily: 'RedHatDisplay-Bold'
    },
    priceText: {
        fontSize: SizeConfig.fontSize * 5,
        color: 'black',
        fontFamily: 'RedHatDisplay-Bold'
    },
    containerStyle: {
        paddingLeft: SizeConfig.width * 7,
        paddingRight: SizeConfig.width * 4,
        gap: SizeConfig.width * 3
    },
    textComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subText: {
        fontSize: SizeConfig.fontSize * 5.5,
        fontFamily: 'RedHatDisplay-Bold',
        color: '#000000',
        width: SizeConfig.width * 48,
    },
    subShowAllText: {
        fontSize: SizeConfig.fontSize * 3.7,
        textAlign: 'right',
        fontFamily: 'RedHatDisplay-SemiBold',
        color: '#9B9B9B',
        width: SizeConfig.width * 20,
    },
    renderItemMainComp: {
        width: SizeConfig.width * 55,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: SizeConfig.width * 3,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#f9f9f9',
        gap: 5
    },
    renderItemImgStyle: {
        width: SizeConfig.width * 15,
        height: SizeConfig.height * 7,
        resizeMode: 'center',
        borderRadius: SizeConfig.width * 3
    },
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
        marginTop: SizeConfig.height * 2
    },
    image: {
        width: SizeConfig.width * 87,
        height: SizeConfig.height * 23,
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: SizeConfig.height * 2
    },
    paginationDot: {
        width: SizeConfig.width * 1.5,
        height: SizeConfig.width * 1.5,
        borderRadius: SizeConfig.width * 50,
        borderWidth: 1,
        borderColor: "#D6D6D6",
        marginHorizontal: SizeConfig.width * 1.2,
    },
    activeDot: {
        backgroundColor: "white",
        width: SizeConfig.width * 2,
        height: SizeConfig.width * 2,
    },
    pressableContainer: {
        width: SizeConfig.width * 13,
        height: SizeConfig.width * 13,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 50,
    },
    animatedView: {
        width: SizeConfig.width * 11,
        height: SizeConfig.width * 11,
        borderRadius: SizeConfig.width * 50,
        gap: SizeConfig.height * 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        resizeMode: 'center',
        width: SizeConfig.width * 6,
        height: SizeConfig.width * 6,
    },
    menuLable: {
        textAlign: 'center',
        fontFamily: 'RedHatDisplay-Medium',
        marginTop: SizeConfig.height * 1,
    }
})