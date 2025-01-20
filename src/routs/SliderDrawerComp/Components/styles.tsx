import { StyleSheet } from "react-native";
import { SizeConfig } from "../../../component/SizeConfig";

export const drawerCompStyle = StyleSheet.create({
    drawerCompStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    MainNavBtnComp: {
        width: '100%',
        gap: SizeConfig.height * 3,
    },
    MainFlatListCompStyle: {
        gap: SizeConfig.height * 0.5,
        width: '100%',
        justifyContent: 'flex-start'
    },
    drawerDividerText: {
        fontSize: SizeConfig.fontSize * 4,
        paddingHorizontal: SizeConfig.width * 5,
        color: '#777E90',
        fontFamily: 'RedHatDisplay-Bold',
        width: '100%'
    },
    otherNavBtnComp: {
        gap: SizeConfig.height * 1,
        width: '100%',
        justifyContent: 'flex-start'
    },
    otherFlatListCompStyle: {
        gap: SizeConfig.height * 0.5,
        width: '100%',
        justifyContent: 'flex-start'
    },
    ProfileMainComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SizeConfig.width * 5
    },
    profileImg: {
        height: SizeConfig.width * 15,
        width: SizeConfig.width * 15,
        resizeMode: 'cover',
        borderRadius: SizeConfig.width * 8
    },
    profileFirstText: {
        color: 'black',
        fontSize: SizeConfig.fontSize * 4.5,
        fontFamily: 'RedHatDisplay-Bold'
    },
    profileSecondText: {
        color: 'black',
        fontSize: SizeConfig.fontSize * 3,
        fontFamily: 'RedHatDisplay-Bold'
    },
    MainNavBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SizeConfig.width * 5,
        justifyContent: 'flex-start',
        paddingHorizontal: SizeConfig.width * 5,
        // backgroundColor : 'red',
        height: SizeConfig.height * 7,
        borderRadius: SizeConfig.width * 3
    },
    MainNavBtnImg: {
        width: SizeConfig.width * 5,
        height: SizeConfig.width * 5,
        resizeMode: 'center',

    },
    MainNavBtnText: {
        fontSize: SizeConfig.fontSize * 4, fontFamily: 'RedHatDisplay-Bold',
    },
    themBtnMainComp: {
        backgroundColor: '#f4f4f4',
        width: '90%',
        borderRadius: SizeConfig.width * 10,
        flexDirection: 'row',
        height: SizeConfig.height * 5,
        alignItems: 'center',
        paddingHorizontal: SizeConfig.width * 1,
        overflow: 'hidden',
    },
    themBtnLightBtn: {
        gap: SizeConfig.width * 3,
        flexDirection: 'row',
        flex: 1,

        height: SizeConfig.height * 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 10,
    },
    themLightBtnImg: { width: SizeConfig.width * 5, height: SizeConfig.width * 5, resizeMode: 'center', tintColor: '#777E90' },

})