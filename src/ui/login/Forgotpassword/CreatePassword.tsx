import React, { useRef, useState } from 'react';
import {
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';
import { Icon } from 'react-native-basic-elements';
import Inputcust from '../../../component/Inputcust';
import BtnCust from '../../../component/BtnCust';
import RBSheet from 'react-native-raw-bottom-sheet';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationTypeChecking } from '../../../routs/NavigationTypes';
import { SizeConfig } from '../../../component/SizeConfig';
import { componentStyles } from '../Styles';
import { SafeAreaView } from 'react-native-safe-area-context';

type CreatePasswordProps = NativeStackScreenProps<NavigationTypeChecking, 'CreatePassword'>

const CreatePassword: React.FC<CreatePasswordProps> = () => {
    const [newPassword, onChangeNewPassword] = useState('');
    const [conPassword, onChangeConPassword] = useState('');
    const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
    const [isConfPasswordVisible, setConfPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const refRBSheet = useRef<any>(null);

    const handleGesture = () => {
        refRBSheet.current?.open();
    };

    const handleConfirm = () => {
        if (newPassword !== conPassword) {
            setErrorMessage('Passwords do not match!');
        } else {
            setErrorMessage('');
            console.log('Password successfully changed');
            handleGesture();
        }
    };

    const isButtonEnabled = newPassword.trim() !== '' && conPassword.trim() !== '';

    return (

        <SafeAreaView style={[styles.container, componentStyles.layoutAlign]}>
            <StatusBar
                translucent
                backgroundColor="rgba(255, 255, 255, 0)"
                barStyle={'dark-content'}
            />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                <View style={styles.innerContainer}>
                    {/* Title Section */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Create new password</Text>
                        <Text style={styles.subTitle}>
                            Your new password must be different from the previously used password.
                        </Text>
                    </View>

                    {/* Input Fields */}
                    <View style={styles.inputFieldsContainer}>
                        {/* New Password Input */}
                        <View style={styles.inputContainer}>
                            {newPassword?.length > 0 && <Text style={styles.label}>Password</Text>}
                            <Inputcust
                                inputStyle={[
                                    styles.inputStyle,
                                    (!isNewPasswordVisible && newPassword.length > 0) ? {
                                        fontSize: SizeConfig.fontSize * 5,
                                        fontWeight: '700',
                                        letterSpacing: 2,
                                    } : {
                                        fontSize: SizeConfig.fontSize * 4,
                                    }
                                ]}
                                onChangeFun={onChangeNewPassword}
                                placeholder="New Password"
                                // placeholderColor="black"
                                keyboardType="default"
                                secureTextEntry={!isNewPasswordVisible}
                                value={newPassword}
                            />
                            {newPassword?.length > 0 && (
                                <Pressable
                                    onPress={() => setNewPasswordVisible(!isNewPasswordVisible)}
                                    style={styles.eyeIcon}
                                    hitSlop={30}
                                >
                                    <Image
                                        source={
                                            isNewPasswordVisible
                                                ? require('../../../assets/images/Login/eyeopen.png')
                                                : require('../../../assets/images/Login/eyeclose.png')
                                        }
                                        style={styles.imageStyle}
                                    />
                                </Pressable>
                            )}
                        </View>

                        {/* Confirm Password Input */}
                        <View style={styles.inputContainer}>
                            {conPassword?.length > 0 && <Text style={styles.label}>Confirm Password</Text>}
                            <Inputcust
                                inputStyle={[
                                    styles.inputStyle,
                                    (!isConfPasswordVisible && conPassword.length > 0) ? {
                                        fontSize: SizeConfig.fontSize * 5,
                                        fontWeight: '700',
                                        letterSpacing: 2,
                                    } : {
                                        fontSize: SizeConfig.fontSize * 4,
                                    },
                                ]}
                                onChangeFun={onChangeConPassword}
                                placeholder="Confirm Password"
                                keyboardType="default"
                                secureTextEntry={!isConfPasswordVisible}
                                value={conPassword}
                            />
                            {conPassword?.length > 0 && (
                                <Pressable
                                    onPress={() => setConfPasswordVisible(!isConfPasswordVisible)}
                                    style={styles.eyeIcon}
                                    hitSlop={30}
                                >
                                    <Image
                                        source={
                                            isConfPasswordVisible
                                                ? require('../../../assets/images/Login/eyeopen.png')
                                                : require('../../../assets/images/Login/eyeclose.png')
                                        }
                                        style={styles.imageStyle}
                                    />
                                </Pressable>
                            )}
                        </View>
                        {/* Error Message */}
                        {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}
                    </View>

                    {/* Confirm Button */}
                    <View style={styles.buttonContainer}>
                        <BtnCust
                            buttonContent="Confirm"
                            buttonStyle={{
                                height: SizeConfig.height * 6,
                                width: SizeConfig.width * 35,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SizeConfig.width * 10,
                                backgroundColor: isButtonEnabled ? '#000000' : '#b9b9b9',
                            }}
                            buttonTextStyle={styles.buttonText}
                            onPushFun={isButtonEnabled ? handleConfirm : () => { }}
                        />
                    </View>
                </View>

                {/* Bottom Sheet */}
                <RBSheet
                    ref={refRBSheet}
                    closeOnPressMask={true}
                    customStyles={{
                        wrapper: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        container: {
                            borderTopLeftRadius: SizeConfig.width * 10,
                            borderTopRightRadius: SizeConfig.width * 10,
                            paddingHorizontal: SizeConfig.width * 7,
                            height: SizeConfig.height * 40,
                        },
                        draggableIcon: {
                            backgroundColor: '#8c8e93',
                        },
                    }}
                    dragOnContent={true}
                    // draggable={true}
                    closeDuration={0}

                >
                    <View style={styles.bottomSheetContent}>
                        <View style={styles.successIconContainer}>
                            <Image
                                source={require('../../../assets/images/Login/cngsuccess.png')}
                                style={styles.successIcon}
                            />
                        </View>
                        <View style={{
                            gap: SizeConfig.height * 1.5
                        }}>
                            <Text style={styles.successMessage}>Your password has been changed</Text>
                            <Text style={styles.successSubtitle}>Welcome back! Discover now!</Text>
                        </View>
                        <BtnCust
                            buttonContent="Browse home"
                            buttonStyle={styles.successButton}
                            buttonTextStyle={styles.buttonText}
                            onPushFun={() => console.log('Navigating to home')} // Replace with navigation
                        />
                    </View>
                </RBSheet>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // paddingHorizontal: SizeConfig.width * 7,
        // paddingVertical: SizeConfig.height * 8,
        position: 'relative',
        height: SizeConfig.height * 100
    },
    innerContainer: {
        justifyContent: 'space-around',
        gap: SizeConfig.height * 3,
        // backgroundColor : 'gray'
    },
    backButton: {
        backgroundColor: 'white',
        width: SizeConfig.width * 8,
        height: SizeConfig.width * 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 50,
        elevation: 2,
    },
    titleContainer: {
        gap: SizeConfig.height * 2,
        paddingTop: SizeConfig.height * 3,
        // backgroundColor : 'green'
    },
    title: {
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: SizeConfig.fontSize * 7,
        color: 'black'
    },
    subTitle: {
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 4,
        color: 'black'
    },
    inputFieldsContainer: {
        gap: SizeConfig.width * 5,
        height: SizeConfig.height * 30,
        justifyContent: 'center',
    },
    inputContainer: {
        position: 'relative',
        // alignItems : 'center',
        justifyContent: 'center',
        // backgroundColor : 'red'
    },
    label: {
        color: '#A6ABC4',
        position: 'absolute',
        zIndex: 2,
        top: -10,
    },
    inputStyle: {
        borderBottomColor: '#d6d6d6',
        borderBottomWidth: 1,
        fontFamily: 'ProductSans-Light',
        color: 'black',
        fontSize: SizeConfig.fontSize * 4,
    },
    eyeIcon: {
        position: 'absolute',
        right: 0,
        top: 27,
    },
    imageStyle: {
        width: SizeConfig.width * 4,
        height: SizeConfig.width * 4,
        resizeMode: 'center',
        // backgroundColor : 'red'
    },
    errorMessage: {
        color: 'red',
        fontSize: SizeConfig.fontSize * 3,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: SizeConfig.fontSize * 3.5,
    },
    bottomSheetContent: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: SizeConfig.height * 35
    },
    successIconContainer: {
        backgroundColor: '#FAFAFA',
        width: SizeConfig.width * 20,
        height: SizeConfig.width * 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 50,
    },
    successIcon: {
        width: SizeConfig.width * 12,
        height: SizeConfig.width * 12,
        resizeMode: 'center',
    },
    successMessage: {
        textAlign: 'center',
        fontSize: SizeConfig.fontSize * 4.5,
        color: '#332218',
        fontFamily: 'RedHatDisplay-Medium'
    },
    successSubtitle: {
        textAlign: 'center',
        color: '#332218',
        fontFamily: 'RedHatDisplay-Light',
        fontSize: SizeConfig.fontSize * 4
    },
    successButton: {
        height: SizeConfig.height * 7,
        // width: SizeConfig.width * 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SizeConfig.width * 10,
        backgroundColor: '#000000',
    },
});


export default CreatePassword