import { StyleSheet } from "react-native";
import { SizeConfig } from "../../../component/SizeConfig";

export const RateProductStyle = StyleSheet.create({
    SafeAreaStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    LayoutStyle: {
        paddingHorizontal: SizeConfig.width * 4,
        paddingVertical: SizeConfig.height * 2,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: SizeConfig.width * 80,
    },
    CustomerFeedBackMainComp: {
        backgroundColor: 'white',
        elevation: 2,
        padding: SizeConfig.width * 5,
        borderRadius: SizeConfig.width * 3

    },
    TextAreaComp: {
        // height: SizeConfig.height * 25,
        textAlignVertical: 'top',
        backgroundColor: 'white',
        color: 'black',
        fontFamily: 'RedHatDisplay-Medium',
        fontSize: SizeConfig.fontSize * 3.5,
    },
    TextAreaLable: {
        color: '#5A5A5A',
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 3.5,
        textAlign: 'right'
    },
    starContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: SizeConfig.width * 80,
    },
    RateBtnComp: {
        width: '100%',
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

})