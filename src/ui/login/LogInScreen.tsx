import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Inputcust from '../../component/Inputcust';
import BtnCust from '../../component/BtnCust';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationTypeChecking } from '../../routs/NavigationTypes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SizeConfig } from '../../component/SizeConfig';
import { componentStyles } from './Styles';
import SocialImgLinks from './Component/SocialImgLinks';
import CustomSnackBar from '../../component/CustomSnackBar';
import Snackbar from 'react-native-snackbar';

type LogInScreenProps = NativeStackScreenProps<NavigationTypeChecking, 'LogInScreen'>

const LogInScreen: React.FC<LogInScreenProps> = ({ navigation }) => {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <SafeAreaView
            style={componentStyles.layoutAlign}
        >
            <StatusBar
                translucent
                backgroundColor="rgba(255, 255, 255, 0)"
                barStyle={'dark-content'}
            />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                <Text style={styles.headerText}>
                    Log into{"\n"}
                    your account
                </Text>
                <View>
                    <Inputcust
                        inputStyle={[styles.inputStyle, { marginTop: SizeConfig.height * 8 }]}
                        onChangeFun={onChangeEmail}
                        placeholder="Email address"
                        keyboardType="email-address"
                        value={email}
                    />

                    <View
                        style={styles.passwordContainer}
                    >
                        <Inputcust
                            inputStyle={styles.inputStyle}
                            onChangeFun={onChangePassword}
                            placeholder="Password"
                            keyboardType="email-address"
                            value={password}
                        />
                        <Text style={styles.forgotPassword}
                            onPress={() => {
                                navigation.navigate('EnterEmailScreen')
                            }} >
                            Forgot Password?
                        </Text>
                    </View>

                </View>

                <View
                    style={styles.bottomContainer}
                >

                    <View style={styles.bottomSubContainer} >
                        <BtnCust
                            buttonContent='LOG IN'
                            buttonStyle={styles.btnContainer}
                            buttonTextStyle={styles.btnText}
                            onPushFun={() => {
                                if (!(email.length > 0 && password.length > 0)) {
                                    CustomSnackBar('Please fill all the details !!!', 'red')
                                }
                                else {
                                    CustomSnackBar('Welcome to the home screen', 'green')
                                    navigation.navigate('BottomTabBar')
                                }
                            }}
                        />
                        <Text
                            style={styles.dumyText}
                        >
                            or log in with
                        </Text>
                        <View>
                            <View>
                                <SocialImgLinks />
                            </View>
                        </View>
                    </View>

                    <View style={styles.navigationContainer}>
                        <Text style={styles.navigationDumyText} onPress={() => {
                            navigation.navigate('SignUpScreen')
                        }}>
                            Don’t have an account? {''}
                            <Text style={styles.navigationLinkText}

                            >
                                Sign Up
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    headerText: {
        fontSize: SizeConfig.width * 7,
        fontFamily: 'RedHatDisplay-Bold',
        // lineHeight: SizeConfig.height * 6
    },
    passwordContainer: {
        gap: SizeConfig.height * 3,
        marginBottom: SizeConfig.height * 5
    },
    inputStyle: {
        borderBottomColor: '#d6d6d6',
        borderBottomWidth: 1,
        fontFamily: 'ReadHatDisplay-Light',
        marginTop: SizeConfig.height * 2,
        fontSize: SizeConfig.fontSize * 4,
        color: 'black'
    },
    imgStyle: {
        width: SizeConfig.width * 12,
        height: SizeConfig.width * 12
    },
    bottomContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    bottomSubContainer: {
        gap: SizeConfig.height * 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        backgroundColor: '#2D201C',
        height: SizeConfig.height * 6,
        width: SizeConfig.width * 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 10
    },
    btnText: {
        color: 'white',
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: SizeConfig.fontSize * 3.5
    },
    dumyText: {
        textAlign: 'center',
        color: '#666666',
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 2.9
    },
    linkContainer: {
        flexDirection: 'row',
        gap: SizeConfig.width * 5
    },
    navigationContainer: {
        marginTop: SizeConfig.height * 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navigationDumyText: {
        fontFamily: 'RedHatDisplay-Medium',
        fontSize: SizeConfig.fontSize * 4,
    },
    navigationLinkText: {
        textDecorationLine: 'underline',
        fontFamily: 'RedHatDisplay-Medium',
        fontSize: SizeConfig.fontSize * 3.5,
        textAlign: 'center'
    },
    forgotPassword: {
        textAlign: 'right',
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 3.5
    }
})

export default LogInScreen