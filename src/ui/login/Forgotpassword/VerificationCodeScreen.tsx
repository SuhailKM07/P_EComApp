import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationTypeChecking } from '../../../routs/NavigationTypes';
import { SizeConfig } from '../../../component/SizeConfig';
import { componentStyles } from '../Styles';

type VerificationCodeScreenProps = NativeStackScreenProps<NavigationTypeChecking, 'VerificationCodeScreen'>

const VerificationCodeScreen: React.FC<VerificationCodeScreenProps> = ({ navigation }) => {
  const [otp, setOtp] = useState([['', false], ['', false], ['', false], ['', false]]);
  const [borderColor, setBorderColor] = useState(false);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleInputChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const updatedOtp = [...otp];
      updatedOtp[index][0] = text;
      updatedOtp[index][1] = true;
      setOtp(updatedOtp);


      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (text === '') {
      const updatedOtp = [...otp];
      updatedOtp[index][0] = '';
      updatedOtp[index][1] = false;
      setOtp(updatedOtp);
    }
  };
  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && otp[index][0] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join('');
    if (code.length === otp.length) {
      console.log('OTP Submitted:', code);
    }
  };

  useEffect(() => {
    if (
      !otp.some((ele, index) => {
        return ele[0] == ''
      })
    )
      navigation.navigate('CreatePassword')

  }, [otp])

  return (
    <SafeAreaView style={[styles.container, componentStyles.layoutAlign]} >
      <StatusBar
        translucent
        backgroundColor="rgba(255, 255, 255, 0)"
        barStyle={'dark-content'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1
        }}>
        <View
          style={styles.subContainer}
        >

          <View
            style={styles.headderContainer}
          >
            <View
              style={styles.headderSubContainer}
            >
              <Text
                style={styles.headderHeadText}
              >
                Verification code
              </Text>
              <Text
                style={styles.headderbottomText}
              >
                Please enter the verification code we sent to your email address.
              </Text>
            </View>

            <View
              style={styles.verificationCodeInp}
            >
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  value={typeof value[0] === 'string' ? value[0] : ''}
                  onChangeText={(text) => {
                    handleInputChange(text, index);
                    setBorderColor(true)
                    console.log(text)
                  }}
                  onKeyPress={({ nativeEvent: { key } }) =>
                    handleKeyPress(key, index)
                  }
                  maxLength={1}
                  keyboardType="numeric"
                  style={[styles.verificationInpStyle, { borderColor: value[1] ? 'black' : '#a5a7ac' }]}
                />
              ))}
            </View>
          </View>


          <Text
            style={styles.timerContainerText}
          >
            Resend in 00:10
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  verificationInpStyle: {
    borderColor: '#a5a7ac',
    borderWidth: 1.5,
    width: SizeConfig.width * 17,
    height: SizeConfig.width * 17,
    borderRadius: SizeConfig.width * 50,
    textAlign: 'center',
    fontSize: SizeConfig.width * 5,
  },
  subContainer: {
    justifyContent: 'space-between',
    height: SizeConfig.height * 40,
    // backgroundColor : 'green'
  },
  btnContainer: {
    backgroundColor: 'white',
    width: SizeConfig.width * 8,
    height: SizeConfig.width * 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SizeConfig.width * 50,
    elevation: 2,
    marginTop: SizeConfig.height * 2
  },
  headderContainer: {
    height: SizeConfig.height * 33,
    justifyContent: 'space-around',
    // backgroundColor : 'gray'
  },
  headderHeadText: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: SizeConfig.width * 7,
  },
  headderSubContainer: {
    gap: SizeConfig.height * 2,
    height: SizeConfig.height * 18,
    paddingTop: SizeConfig.height * 1,
  },
  headderbottomText: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: SizeConfig.width * 4,
  },
  verificationCodeInp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timerContainer: {
    height: SizeConfig.height * 10,
    justifyContent: 'center',
  },
  timerContainerText: {
    fontFamily: 'RedHatDisplay-Light',
    fontSize: SizeConfig.width * 3.8,
    color: '#88898f',
  }
});

export default VerificationCodeScreen