import { Image, StatusBar, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
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
import { Icon } from 'react-native-basic-elements';

// Define the props for WelcomeScreen
type WelcomeScreenProps = NativeStackScreenProps<NavigationTypeChecking, 'SignUpScreen'>;

const SignUpScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {

  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [conPassword, onChangeConPassword] = useState('');

  return (

    <SafeAreaView
      style={componentStyles.layoutAlign}
    >
      <StatusBar
        translucent
        backgroundColor="white"
        barStyle={'dark-content'}
      />

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
        <View style={styles.textContainer} >
          <Text style={styles.textContainerText}>
            Create{"\n"}
            your account
          </Text>
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              height: SizeConfig.height * 4
            }}
            onPress={() => {
              navigation.navigate('BottomTabBar')
            }}
          >
            <Text style={{ color: '#0c8ce9', }} >
              Skip

            </Text>
            <Icon
              type='Feather'
              name='chevrons-right'
              color={'black'}
              size={20}
            />
          </Pressable>
        </View>

        <View style={{
          marginVertical: SizeConfig.height * 2
        }} >

          <Inputcust
            inputStyle={styles.inputStyle}
            onChangeFun={onChangeName}
            placeholder="Enter your name"
            keyboardType="default"
            value={name}
          />


          <Inputcust
            inputStyle={styles.inputStyle}
            onChangeFun={onChangeEmail}
            placeholder="Email address"
            keyboardType="email-address"
            value={email}
          />


          <Inputcust
            inputStyle={styles.inputStyle}
            onChangeFun={onChangePassword}
            placeholder="Password"
            keyboardType="default"
            value={password}
          />


          <Inputcust
            inputStyle={styles.inputStyle}
            onChangeFun={onChangeConPassword}
            placeholder="Confirm password"
            keyboardType="default"
            value={conPassword}
          />

        </View>

        <View
          style={styles.bottomContainer}
        >

          <BtnCust
            buttonContent='SIGN UP'
            buttonStyle={styles.btnContainer}
            buttonTextStyle={styles.btnText}
            onPushFun={() => {
              if (!(name.length > 0 && email.length > 0 && password.length > 0 && conPassword.length > 0)) {
                CustomSnackBar('Please fill all the details !!!', 'red')
              }
              else {
                CustomSnackBar('Your Account Successfuly Created', 'green')
              }
            }}
          />

          <View
            style={styles.bottomSubContainer}
          >
            <Text
              style={styles.bottomSubContainerText}
            >
              or sign up with
            </Text>
            <View>
              <SocialImgLinks />
            </View>
            <View style={styles.navigationBottomContainer} >
              <Text style={styles.navigationBottomContainerText}
                onPress={() => {
                  navigation.navigate('LogInScreen')
                }}
              >
                Already have account? {' '}
                <Text style={styles.navigationBottomContainerLink}>
                  Log In
                </Text>
              </Text>

            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  textContainer: {
    justifyContent: 'space-between',
    gap: SizeConfig.height * 1.5,
    flexDirection: 'row',
  },
  textContainerText: {
    fontSize: SizeConfig.fontSize * 7,
    fontFamily: 'RedHatDisplay-Bold',
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: SizeConfig.height * 2.5,
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
  btnContainer: {
    backgroundColor: '#2D201C',
    height: SizeConfig.height * 6,
    width: SizeConfig.width * 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SizeConfig.width * 9
  },
  btnText: {
    color: 'white',
    fontFamily: 'RedHatDisplay-SemiBold',
    fontSize: SizeConfig.width * 3.5
  },
  bottomSubContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: SizeConfig.height * 25,

  },
  bottomSubContainerText: {
    textAlign: 'center',
    color: '#666666',
    fontFamily: 'RedHatDisplay-Light',
    fontSize: SizeConfig.fontSize * 2.9
  },
  webLinks: {
    flexDirection: 'row',
    gap: SizeConfig.width * 5
  },
  navigationBottomContainer: {
    marginTop: SizeConfig.height * 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navigationBottomContainerText: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: SizeConfig.fontSize * 4,
  },
  navigationBottomContainerLink: {
    textDecorationLine: 'underline',
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: SizeConfig.fontSize * 3.5,
    textDecorationStyle: 'dashed',
  }
})

export default SignUpScreen
