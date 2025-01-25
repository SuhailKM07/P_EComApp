import {

    ScrollView,
    StatusBar,
    View,
} from 'react-native';
import React, { RefObject, MutableRefObject, useCallback, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RateProductStyle } from './Styles';
import { NavHeaderComp } from '../../../component/NavHeaderComp';
import { SizeConfig } from '../../../component/SizeConfig';
import {
    BottomSheetMediaSelector,
    CustomerFeedBackBox,
    MediaSelectors,
    PreviewImgComp,
    RateProductLable,
    StarRatings,
} from './Components/Helper';
import BtnCust from '../../../component/BtnCust';
import RBSheet from 'react-native-raw-bottom-sheet';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationTypeChecking } from '../../../routs/NavigationTypes';

type RateProductScreenProp = NativeStackScreenProps<NavigationTypeChecking, 'RateProductScreen'>

export const RateProductScreen: React.FC<RateProductScreenProp> = ({ navigation, route }) => {
    const [selectedImage, setSelectedImage] = React.useState<string[]>([]);
    const refRBSheet = useRef(null);
    return (
        <SafeAreaView style={RateProductStyle.SafeAreaStyle}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

            <ScrollView>
                <View
                    style={[
                        RateProductStyle.LayoutStyle,
                        { flex: 1, gap: SizeConfig.height * 3 },
                    ]}
                >
                    <NavHeaderComp Content="Rate Product" navigation={navigation} />

                    <RateProductLable />
                    <StarRatings />
                    <CustomerFeedBackBox />

                    <View
                        style={{
                            height: SizeConfig.height * 18,
                            justifyContent: 'center',
                        }}
                    >
                        {
                            selectedImage?.length > 0 ?

                                <PreviewImgComp
                                    selectedImage={selectedImage}
                                    setSelectedImage={setSelectedImage}
                                    refRBSheet={refRBSheet}
                                />
                                :
                                <MediaSelectors selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                        }
                    </View>


                    <BtnCust
                        buttonContent='Submit Review'
                        buttonStyle={RateProductStyle.RateBtnComp}
                        buttonTextStyle={RateProductStyle.RateBtnText}
                    />
                </View>
            </ScrollView>

            <RBSheet
                ref={refRBSheet}
                useNativeDriver={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'transparent',
                    },
                    draggableIcon: {
                        backgroundColor: '#000',
                    },
                    container: {
                        backgroundColor: 'white',
                        elevation: 2,
                        borderRadius: SizeConfig.width * 3
                    }
                }}
                customModalProps={{
                    animationType: 'slide',
                    statusBarTranslucent: true,
                }}
                customAvoidingViewProps={{
                    enabled: false,
                }}
            >

                <BottomSheetMediaSelector
                    refRBSheet={refRBSheet}
                    setSelectedImage={setSelectedImage}
                    selectedImage={selectedImage}
                />
            </RBSheet>

        </SafeAreaView >
    );
}
