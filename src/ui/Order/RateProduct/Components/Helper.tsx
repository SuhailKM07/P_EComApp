import { Text, View, Image,  TextInput,   Pressable } from "react-native"
import * as React from 'react'
import { SizeConfig } from "../../../../component/SizeConfig"
import { Icon } from "react-native-basic-elements"
import { RateProductStyle } from "../Styles"
import Svg, { Rect, Image as SvgImage } from 'react-native-svg';
import { ImageLibraryOptions, launchCamera, launchImageLibrary } from "react-native-image-picker"
import CustomSnackBar from "../../../../component/CustomSnackBar"
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types"


export const RateProductLable = () => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: '#575757',
            height: SizeConfig.height * 10,
            borderRadius: SizeConfig.width * 3
        }}>
            <Icon
                type='Feather'
                name='gift'
                size={SizeConfig.width * 7}
                color={'white'}
            />
            <Text style={{ color: 'white', fontFamily: 'RedHatDisplay-Medium' }}>
                Submit your review to get 5 points
            </Text>
            <Icon
                type='Entypo'
                name='chevron-right'
                size={SizeConfig.width * 7}
                color={'white'}
            />
        </View>
    )
}

export const StarRatings = () => {
    const [starRating, setStarRating] = React.useState<number>(0);

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={RateProductStyle.starContainer}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                        key={index}
                        name="star"
                        type="FontAwesome"
                        size={SizeConfig.width * 10}
                        color={index < starRating ? '#508A7B' : 'gray'}
                        onPress={() => {
                            setStarRating(index + 1);
                        }}
                    />
                ))}
            </View>
        </View>
    );
};

export const CustomerFeedBackBox = () => {

    const [customerReview, setCustomerReview] = React.useState<string>('')

    return (
        <View style={RateProductStyle.CustomerFeedBackMainComp}>
            <TextInput
                multiline={true}
                numberOfLines={7}
                placeholder='Would you like to write anything about this product? '
                placeholderTextColor={'#5A5A5A'}
                style={RateProductStyle.TextAreaComp}
                onChange={(text) => {
                    let tempReview = text.nativeEvent.text;
                    if (tempReview.length <= 300) {
                        setCustomerReview(tempReview)
                    }
                    else {
                        CustomSnackBar('Maximum Characters Exided', 'red')
                    }
                }}
                value={customerReview}
            />
            <Text style={RateProductStyle.TextAreaLable}>
                300 characters
            </Text>
        </View>
    )
}

export const PreviewImgComp = ({ selectedImage, setSelectedImage, refRBSheet }: {
    selectedImage: string[];
    setSelectedImage: React.Dispatch<React.SetStateAction<string[]>>;
    refRBSheet: any
}) => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: 'white',
            padding: SizeConfig.width * 3,
            borderRadius: SizeConfig.width * 3,
            elevation: 1,
            flexDirection: 'row'
        }}>
            <View>
                <Pressable
                    hitSlop={30}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        zIndex: 2,
                    }}
                    onPress={() => {
                        setSelectedImage((prev: string[]) => {
                            prev.splice(0, 1)
                            console.log('hello')
                            return [...prev]
                        })
                    }}
                >
                    <Icon
                        type='AntDesign'
                        name='closecircle'
                        size={SizeConfig.width * 5}

                    />
                </Pressable>

                <Image
                    source={{ uri: selectedImage[0] }}
                    style={{
                        width: SizeConfig.width * 30,
                        height: SizeConfig.width * 30,
                        backgroundColor: 'gray',
                        borderRadius: SizeConfig.width * 3
                    }}
                />
            </View>

            {
                selectedImage[1] ?


                    <View>
                        <Pressable
                            hitSlop={30}
                            style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                zIndex: 2,
                            }}
                            onPress={() => {
                                setSelectedImage((prev: string[]) => {
                                    prev.splice(1, 1)
                                    console.log('hello')
                                    return [...prev]
                                })
                            }}
                        >
                            <Icon
                                type='AntDesign'
                                name='closecircle'
                                size={SizeConfig.width * 5}

                            />
                        </Pressable>

                        <Image
                            source={{ uri: selectedImage[1] }}
                            style={{
                                width: SizeConfig.width * 30,
                                height: SizeConfig.width * 30,
                                backgroundColor: 'gray',
                                borderRadius: SizeConfig.width * 3
                            }}
                        />
                    </View>

                    :
                    <Pressable
                        onPress={() => {
                            if (refRBSheet?.current) {
                                refRBSheet?.current?.open()
                            }
                        }}
                    >
                        <Image
                            source={require('../../../../assets/images/RateProduct/Imageadd.png')}
                            style={{
                                width: SizeConfig.width * 20,
                                height: SizeConfig.width * 20,
                                resizeMode: 'contain'
                            }}
                        />
                    </Pressable>
            }

        </View>
    )
}


export const MediaSelectors = ({ selectedImage, setSelectedImage }: {
    selectedImage: string[];
    setSelectedImage: (uri: any) => void;
}) => {


    // Options for image picker and camera
    const options: ImageLibraryOptions = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
    };

    const openImagePicker = () => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.error('Image picker error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const imageUri = response.assets[0].uri;
                setSelectedImage((prev: string[]) => {
                    return [
                        ...prev,
                        imageUri
                    ]
                });
            }
        });
    };

    const openCamera = () => {
        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.errorCode) {
                console.error('Camera error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const imageUri = response.assets[0].uri;
                // setSelectedImage(imageUri);
                setSelectedImage((prev: string[]) => {
                    return [
                        ...prev,
                        imageUri
                    ]
                });
            }
        });
    };

    return (
        <View
            style={{
                flexDirection: 'row',
                // gap: SizeConfig.width * 5,
                justifyContent: 'space-evenly',
            }}
        >
            <Svg
                height={SizeConfig.width * 25}
                width={SizeConfig.width * 25}
                onPress={() => {
                    openImagePicker()
                }}>
                {/* Dashed Rectangle */}
                <Rect
                    height={SizeConfig.width * 22}
                    width={SizeConfig.width * 22}
                    stroke="#CCD2E3"
                    strokeWidth="3"
                    strokeDasharray="10,15"
                    fill="none"
                    rx={10}
                    x={SizeConfig.width * 1}
                    y={SizeConfig.width * 1}
                />

                {/* Image */}
                <SvgImage
                    href={require('../../../../assets/images/RateProduct/galary.png')} // Use `href` instead of `source`
                    x={SizeConfig.width * 5.5} // Center horizontally
                    y={SizeConfig.width * 6} // Center vertically
                    width={SizeConfig.width * 13}
                    height={SizeConfig.width * 13}
                />
            </Svg>

            <Svg
                height={SizeConfig.width * 25}
                width={SizeConfig.width * 25}

                onPress={() => {
                    openCamera()
                }}>
                {/* Dashed Rectangle */}
                <Rect
                    height={SizeConfig.width * 22}
                    width={SizeConfig.width * 22}
                    stroke="#CCD2E3"
                    strokeWidth="3"
                    strokeDasharray="10,15"
                    fill="none"
                    rx={10}
                    x={SizeConfig.width * 1}
                    y={SizeConfig.width * 1}

                />

                {/* Image */}
                <SvgImage
                    href={require('../../../../assets/images/RateProduct/camera.png')} // Use `href` instead of `source`
                    x={SizeConfig.width * 5.5} // Center horizontally
                    y={SizeConfig.width * 5.5} // Center vertically
                    width={SizeConfig.width * 13}
                    height={SizeConfig.width * 13}
                />
            </Svg>
        </View>
    )
}



interface BottomSheetMediaSelectorProps {
    selectedImage: string[]; // Array of image URIs
    setSelectedImage: React.Dispatch<React.SetStateAction<string[]>>;
    refRBSheet: React.MutableRefObject<BottomSheetMethods | null>
}

export const BottomSheetMediaSelector: React.FC<BottomSheetMediaSelectorProps> = ({
    selectedImage,
    setSelectedImage,
    refRBSheet,
}) => {

    // Options for image picker and camera
    const options: ImageLibraryOptions = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
    };

    const openImagePicker = () => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.error('Image picker error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const imageUri = response.assets[0].uri;
                // setSelectedImage(imageUri);
                setSelectedImage((prev) => {
                    console.log(typeof prev)
                    return [
                        ...prev,
                        imageUri + ''
                    ]
                });


            }
        });
    };

    const openCamera = () => {
        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.errorCode) {
                console.error('Camera error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const imageUri = response.assets[0].uri;
                // setSelectedImage(imageUri);
                setSelectedImage((prev: string[]) => {
                    return [
                        ...prev,
                        imageUri + ''
                    ]
                });
            }
        });
    };

    return (
        <View
            style={[RateProductStyle.LayoutStyle,
            {
                gap: SizeConfig.height * 5
            }
            ]}
        >
            <Text
                style={{
                    color: 'black',
                    fontSize: SizeConfig.width * 5,
                    fontFamily: 'RedHatDisplay-Bold',
                    textAlign: 'left'
                }}
            >
                Capture Images With
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    // gap: SizeConfig.width * 5,
                    justifyContent: 'space-evenly',
                }}
            >



                <View style={{ gap: SizeConfig.width * 3 }}>


                    <Pressable
                        style={{
                            backgroundColor: 'black',
                            width: SizeConfig.width * 20,
                            height: SizeConfig.width * 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SizeConfig.width * 5,
                            zIndex: 10
                        }}

                        hitSlop={30}
                        onPress={() => {
                            refRBSheet?.current?.close()
                            openCamera()
                            console.log("camera")
                        }}
                    >
                        <Icon
                            type="Fontisto"
                            name="camera"
                            size={SizeConfig.width * 7}
                            color={'white'}
                         

                        />
                    </Pressable>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: SizeConfig.width * 4,
                            fontFamily: 'RedHatDisplay-SemiBold',
                            textAlign: 'center'
                        }}
                    >
                        Camera
                    </Text>
                </View>

                <View style={{ gap: SizeConfig.width * 3 }}>
                    <Pressable
                        style={{
                            backgroundColor: 'black',
                            width: SizeConfig.width * 20,
                            height: SizeConfig.width * 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SizeConfig.width * 5
                        }}
                        hitSlop={30}
                        onPress={() => {
                            refRBSheet?.current?.close()
                            openImagePicker()
                        }}
                    >
                        <Icon
                            type="Entypo"
                            name="images"
                            size={SizeConfig.width * 7}
                            color={'white'}
                            
                        />

                    </Pressable>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: SizeConfig.width * 4,
                            fontFamily: 'RedHatDisplay-SemiBold',
                            textAlign: 'center'
                        }}
                    >
                        Gallery
                    </Text>
                </View>
            </View>
        </View>
    )
}