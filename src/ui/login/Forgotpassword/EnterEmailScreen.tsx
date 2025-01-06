import { Pressable, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-basic-elements'
import Inputcust from '../../../component/Inputcust'
import BtnCust from '../../../component/BtnCust'
import { NavigationTypeChecking } from '../../../routs/NavigationTypes'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SizeConfig } from '../../../component/SizeConfig';
import { SafeAreaView } from 'react-native-safe-area-context';
import { componentStyles } from '../Styles'

type EnterEmailScreen = NativeStackScreenProps<NavigationTypeChecking, 'EnterEmailScreen'>

const EnterEmailScreen: React.FC<EnterEmailScreen> = ({ navigation }) => {

    const [rePassword, setRePassword] = useState('');
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        regex.test(rePassword) ? setShowBtn(true) : setShowBtn(false)
    }, [rePassword])

    return (
        <SafeAreaView style={[styles.container, componentStyles.layoutAlign]} >
            <StatusBar
                translucent
                backgroundColor="rgba(255, 255, 255, 0)"
                barStyle={'dark-content'}
            />
            <ScrollView
                style={{
                    flex: 1
                }}
            >

                    <View style={styles.subContainer}>
            

                        <View style={styles.headerContainer}>
                            <Text style={{
                                fontFamily: 'RedHatDisplay-Bold',
                                fontSize: SizeConfig.width * 7
                            }}>
                                Forgot password?
                            </Text>
                            <Text style={{
                                fontFamily: 'RedHatDisplay-Light',
                                fontSize: SizeConfig.width * 4
                            }}>
                                Enter email associated with your account and we’ll send and email with intructions to reset your password
                            </Text>
                        </View>

                        <Inputcust
                            placeholder='enter your email here'
                            placeholderColor='black'
                            onChangeFun={setRePassword}
                            value={rePassword}
                            keyboardType='email-address'
                            prefixIcon={
                                <Icon
                                    name="mail"
                                    type="Feather"
                                    size={SizeConfig.width * 4}
                                    color={'#d6d6d6'}
                                    style={{
                                        width: SizeConfig.width * 5,
                                    }}
                                />
                            }
                            containerStyle={styles.inpContainer}
                            inputStyle={styles.inpText}
                        />


                    </View>

                    <View
                        style={styles.verificationBtn}

                    >
                        <BtnCust
                            buttonContent='Get verification code'
                            buttonStyle={[styles.btnContainer, { backgroundColor: showBtn ? '#000000' : '#b9b9b9', }]}
                            buttonTextStyle={styles.btnTextContainer}
                            onPushFun={() => {
                                showBtn && navigation.navigate('VerificationCodeScreen')
                            }}
                        />
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    subContainer: {
        justifyContent: 'space-between',
        height: SizeConfig.height * 37,
    },
    backBtnContainer: {
        backgroundColor: 'white',
        width: SizeConfig.width * 8,
        height: SizeConfig.width * 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 50,
        elevation: 2,
        // marginTop : SizeConfig.height * 4
    },
    headerContainer: {
        gap: SizeConfig.height * 3,
        height: SizeConfig.height * 20,
        marginTop: SizeConfig.height * 2
    },
    inpContainer: {
        flexDirection: 'row',
        borderBottomColor: '#D6D6D6',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginTop: SizeConfig.height * 3.5
    },
    inpText: {
        fontFamily: 'RedHatDisplay-Light',
        flex: 1,
        fontSize: SizeConfig.fontSize * 4,
        color: 'black',
    },
    verificationBtn: {
        height: SizeConfig.height * 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer: {
        height: SizeConfig.height * 6,
        width: SizeConfig.width * 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 10
    },
    btnTextContainer: {
        color: 'white',
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: SizeConfig.width * 3.5
    }
})

export default EnterEmailScreen