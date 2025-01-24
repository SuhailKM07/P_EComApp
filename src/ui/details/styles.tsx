import { StyleSheet } from "react-native"
import { SizeConfig } from "../../component/SizeConfig"

export const componentStyles = StyleSheet.create({
    layoutAlign: {
        paddingHorizontal: SizeConfig.width * 7,
        paddingVertical: SizeConfig.height * 3.5,
        flex: 1,
        backgroundColor: 'white'
    },
    leftAlignPadding: {
        paddingLeft: SizeConfig.width * 7,
    },
    rightAlignPadding: {
        paddingRight: SizeConfig.width * 7,
    },
    horizontalPadding: {
        paddingHorizontal: SizeConfig.width * 7,
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: SizeConfig.height * 7,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F6',
    },
    headerText: {
        fontSize: SizeConfig.fontSize * 4.5,
        fontFamily: 'RedHatDisplay-SemiBold',
    },
    iconWrapper: {
        width: SizeConfig.width * 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // ReviewContent File

    reviewContentComp: {
        marginTop: SizeConfig.height * 5,
    },
    reviewContentHeadderProfileComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    reviewContentHeadderProfileSubComp: {
        flexDirection: 'row',
        gap: SizeConfig.width * 3
    },
    profileImg: {
        width: SizeConfig.width * 12,
        height: SizeConfig.width * 12,
        resizeMode: 'cover',
        borderRadius: SizeConfig.width * 6
    },
    profileName: {
        fontFamily: 'RedHatDisplay-Bold',
        color: 'black',
        fontSize: SizeConfig.fontSize * 5
    },
    starsComp: {
        flexDirection: 'row',
        gap: SizeConfig.width * 2
    },
    reviewTiming: {
        fontSize: SizeConfig.fontSize * 3.5,
        width: SizeConfig.width * 20,
        textAlign: 'right',
        fontFamily: 'RedHatDisplay-Medium',
        color: '#8A8A8F'
    },
    reviewContent: {
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 4,
        marginTop: SizeConfig.height * 2
    },

    // ReviewsGrap

    grapSubComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    grapTotalStars: {
        fontSize: SizeConfig.fontSize * 4,
        color: '#8A8A8F'
    },
    grapGrothBarComp: {
        width: SizeConfig.width * 68,
        backgroundColor: '#EFF0F1',
        height: SizeConfig.height * 1,
        borderRadius: SizeConfig.width * 2,
        overflow: 'hidden'
    },
    grapGrothBar: {
        backgroundColor: '#508A7B',
        height: SizeConfig.height * 1,
        borderRadius: SizeConfig.width * 2
    },

    // SimilarProductCard

    cardContainer: {
        width: SizeConfig.width * 39,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    image: {
        width: SizeConfig.width * 37,
        height: SizeConfig.height * 25,
        resizeMode: 'cover',
        borderRadius: SizeConfig.width * 2,
    },
    labelText: {
        fontSize: SizeConfig.fontSize * 3.6,
        color: '#1D1F22',
        fontFamily: 'RedHatDisplay-Bold',
        // textAlign: 'center',
        marginTop: SizeConfig.height * 1,
    },
    priceText: {
        fontSize: SizeConfig.fontSize * 3.5,
        color: '#1D1F22',
        fontFamily: 'RedHatDisplay-Bold',
        // textAlign: 'center',
        marginTop: SizeConfig.height * 0.5,
    },


    container: {
        flex: 1,
    },
    SliderMainComp: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        // flex: 1
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: "#eee",
    },
    detailsNavBarCon: {
        width: "100%",
        height: SizeConfig.height * 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: 'absolute',
        zIndex: 1,
        top:  0,
    },
    backBtnCon: {
        elevation: 2,
        backgroundColor: "white",
        width: SizeConfig.width * 10,
        height: SizeConfig.width * 10,
        borderRadius: SizeConfig.width * 5,
        alignItems: "center",
        justifyContent: "center",
    },
    heartBtnCon: {
        elevation: 2,
        backgroundColor: "white",
        width: SizeConfig.width * 10,
        height: SizeConfig.width * 10,
        borderRadius: SizeConfig.width * 5,
        alignItems: "center",
        justifyContent: "center",
    },
    addToCartBtnComp: {
        backgroundColor: '#343434',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: SizeConfig.height * 10,
        zIndex: 10,
        width: '100%',
        borderTopRightRadius: SizeConfig.width * 7,
        borderTopLeftRadius: SizeConfig.width * 7,
        position: 'absolute',
        bottom: 0
    },
    addToCartBtn: {
        fontSize: SizeConfig.fontSize * 4,
        color: 'white',
        fontFamily: 'RedHatDisplay-Bold',
    },

    productHeadderCom: {
        gap: SizeConfig.height * 2,
        borderBottomColor: '#F3F3F6',
        borderBottomWidth: 1,
        height: SizeConfig.height * 10,
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
        borderRadius: SizeConfig.width * 5.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    selectColorInnerComp: {
        width: SizeConfig.width * 8,
        height: SizeConfig.width * 8,
        borderRadius: SizeConfig.width * 4,
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
        borderRadius: SizeConfig.width * 5.5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        backgroundColor : 'green'
    },
    selectSizeVarietyTextComp: {
        fontSize: SizeConfig.fontSize * 3.5,
        fontFamily: 'RedHatDisplay-Regular'
    },

    descriptionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    descriptionText: {
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 4,
        color: '#333',
        lineHeight: SizeConfig.fontSize * 5.5,
    },
    readMoreText: {
        color: '#508A7B',
        fontSize: SizeConfig.fontSize * 3.5,
        textDecorationLine: 'underline',
        textDecorationColor: '#508A7Bs'
    },


    ratingHeadderComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SizeConfig.height * 2
    },
    ratingHeadderSubComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    noOfRatings: {
        fontSize: SizeConfig.fontSize * 9,
        width: SizeConfig.width * 18,
        fontFamily: 'RedHatDisplay-Bold',
        color: 'black'
    },
    totalRatings: {
        fontSize: SizeConfig.fontSize * 3.5,
        width: SizeConfig.width * 25,
        fontFamily: 'RedHatDisplay-Medium',
        color: '#8A8A8F'
    },
    starsSubComp: {
        flexDirection: 'row',
        gap: SizeConfig.width * 2
    },
    totalNumberOfRatings: {
        fontFamily: 'RedHatDisplay-Light',
        marginLeft: SizeConfig.width * 2,
        color: '#8A8A8F'
    },
    grapComp: {
        gap: SizeConfig.height * 1,
        marginVertical: SizeConfig.height * 2,
    },

    addReviewComp: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addTotalReview: {
        fontSize: SizeConfig.fontSize * 3,
        color: '#8A8A8F',
        fontFamily: 'RedHatDisplay-Light'
    },
    addReviewBtnComp: {
        flexDirection: 'row',
        gap: SizeConfig.width * 2
    },
    addReviewBtnText: {
        fontSize: SizeConfig.fontSize * 3,
        color: '#8A8A8F',
        fontFamily: 'RedHatDisplay-Light'
    },
    flatListContent: {
        gap: SizeConfig.width * 3,
        paddingHorizontal: SizeConfig.width * 6
    },
})