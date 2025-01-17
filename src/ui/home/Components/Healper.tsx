import * as React from 'react'
import { useState } from "react";
import { CarouselImagesType, productDataType, RecommendedProductDataType, subMenuDataType, subMenuType } from "./Data";
import { Animated, Image, ImageProps, Pressable, Text, TextStyle, View } from "react-native";
import { componentStyles } from "../Styles";
import { ViewStyle } from "react-native";
import { SizeConfig } from "../../../component/SizeConfig";
import { FlatList } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";

export const TextHeaderComp = ({ MainCompStyle, textOneContent }: {
    MainCompStyle: ViewStyle | ViewStyle[];
    textOneContent: string;
}) => (
    <View style={MainCompStyle}>
        <Text style={componentStyles.subText}>{textOneContent}</Text>
        <Text style={componentStyles.subShowAllText}>Show all</Text>
    </View>
)

export const HadderSection = () => {
    return (
        <View style={[componentStyles.headderComp, componentStyles.paddingHorizontalStyle]}>
            <Image
                source={require('../../../assets/images/Home/menu.png')}
                style={componentStyles.menuImgStyle}
            />
            <Text style={componentStyles.brandName}>
                GemStore
            </Text>
            <Image
                source={require('../../../assets/images/Home/notfication.png')}
                style={componentStyles.notificationIcon} 
            />
        </View>
    )
}

export const PromotionBanner = () => (
    <Image
        source={require('../../../assets/images/Home/midBanner.png')}
        style={{
            width: '100%',
            height: SizeConfig.height * 28,
            resizeMode: 'center',
        }}
    />
)

export const HomeCollectionBanner = ({ firstContent, sectionContent, BannerCompStyle, ImageUrl, sectionContentStyle }: {
    firstContent: string;
    sectionContent: string;
    BannerCompStyle?: ViewStyle;
    ImageUrl: ImageProps;
    sectionContentStyle?: TextStyle
}) => {
    return (
        <View style={[componentStyles.bannerOneComp, BannerCompStyle]}>
            <View style={componentStyles.bannerOneTextComp}>
                <Text style={componentStyles.bannerOneTextOne}>
                    {firstContent}
                </Text>
                <Text style={sectionContentStyle}>
                    {sectionContent}
                </Text>
            </View>
            <View style={componentStyles.bannerOneImgComp}>
                <View style={componentStyles.bannerOneDiskComp} />
                <Image
                    source={ImageUrl}
                    style={[componentStyles.bannerOneImg]}
                />
            </View>
        </View>
    )
}


export const FeatureProdutsCards = ({ productData, navigation }: productDataType) => {
    return (
        <View>
            <TextHeaderComp
                MainCompStyle={[componentStyles.paddingHorizontalStyle, componentStyles.textComp, { marginTop: SizeConfig.height * 3 }]}
                textOneContent='FeatureProducts'
            />
            <FlatList
                data={productData}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={componentStyles.containerStyle}
                renderItem={
                    (({ item }) => {

                        return (
                            <Pressable
                                style={componentStyles.renderItemComp}
                                onPress={() => {
                                    navigation.navigate('DetailsScreen')
                                }}
                            >
                                <Image
                                    source={item?.img}
                                    style={componentStyles.imgStyle}
                                />
                                <Text style={componentStyles.lableText}>
                                    {item?.lable}
                                </Text>
                                <Text style={componentStyles.priceText}>$ {item?.price}</Text>
                            </Pressable>
                        )
                    })
                }
            />
        </View >
    )
}

export const RecommendedSectionCards = ({ RecommendedProductDataArray }: RecommendedProductDataType) => {
    return (
        <View style={{ gap: SizeConfig.height * 2 }}>
            <TextHeaderComp
                MainCompStyle={[componentStyles.paddingHorizontalStyle, componentStyles.textComp]}
                textOneContent='Recommended'
            />
            <FlatList
                data={RecommendedProductDataArray}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[componentStyles.paddingHorizontalStyle, { gap: SizeConfig.width * 3 }]}
                renderItem={
                    (({ item }) => {

                        return (
                            <View style={componentStyles.renderItemMainComp}>
                                <Image
                                    source={item?.img}
                                    style={componentStyles.renderItemImgStyle}
                                />
                                <View>
                                    <Text style={[componentStyles.lableText, { fontSize: SizeConfig.fontSize * 3 }]}>
                                        {item?.lable}
                                    </Text>
                                    <Text style={[componentStyles.priceText, { fontSize: SizeConfig.fontSize * 4, }]}>$ {item?.price}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            />
        </View >
    )
}




export const ImageCarousel = ({ CarouselImages }: CarouselImagesType) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    return (
        <View style={componentStyles.container}>
            <Carousel
                windowSize={3}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                    failOffsetY: [-5, 5],
                }}
                loop={true}
                width={SizeConfig.width * 100}
                height={SizeConfig.height * 23}
                autoPlay
                scrollAnimationDuration={300}
                autoPlayInterval={3000}
                data={CarouselImages}
                style={{ overflow: 'hidden' }}
                onProgressChange={(_, absoluteProgress) =>
                    setCurrentIndex(Math.round(absoluteProgress))
                }
                renderItem={({ item }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Animated.Image
                            source={item}
                            style={componentStyles.image}
                            resizeMode="center"
                        />
                    </View>
                )}
            />
            {/* Pagination Dots */}
            <View style={componentStyles.paginationContainer}>
                {CarouselImages.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            componentStyles.paginationDot,
                            currentIndex === index && componentStyles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    )
}


export const CategorySectionButtons = ({ subMenuData }: subMenuDataType): React.JSX.Element => {
    const [subMenuIndex, setSubMenuIndex] = useState<number>(0);
    return (
        <View >
            {
                <FlatList
                    data={subMenuData}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[componentStyles.subMenuStyle, componentStyles.paddingHorizontalStyle]}
                    renderItem={(({ item, index }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Pressable
                                    style={[
                                        componentStyles.pressableContainer,
                                        {
                                            borderWidth: subMenuIndex === index ? 1 : 0,
                                            borderColor: '#3A2C27',
                                        },
                                    ]}
                                    onPress={() => setSubMenuIndex(index)}
                                >
                                    <Animated.View style={[componentStyles.animatedView, { backgroundColor: subMenuIndex === index ? '#3A2C27' : '#F3F3F3' }]}>
                                        <Image
                                            source={item.img}
                                            style={[
                                                componentStyles.imageStyle,
                                                {
                                                    tintColor: subMenuIndex === index ? 'white' : '#9D9D9D',
                                                },
                                            ]}
                                        />
                                    </Animated.View>
                                </Pressable>
                                <Text style={[componentStyles.menuLable, { color: subMenuIndex === index ? '#3A2C27' : '#9D9D9D' }]}>
                                    {item.lable}
                                </Text>
                            </View>
                        )
                    })}
                />

            }
        </View >
    )
}


export const ThirdBannerSubCards = ({
    MainCompStyle,
    SurFixImg,
    SurFixImgStyle,
    PreFixImg,
    PreFixImgStyle,
    TextCompStyle,
    FirstTextStyle,
    SecondTextStyle,
    FirstText,
    SecondText,
    id
}: {
    MainCompStyle: ViewStyle;
    SurFixImg?: ImageProps | undefined
    SurFixImgStyle?: ImageProps | undefined
    PreFixImg?: ImageProps | undefined
    PreFixImgStyle?: ImageProps | undefined
    TextCompStyle: ViewStyle
    FirstTextStyle: TextStyle
    SecondTextStyle: TextStyle
    FirstText: string
    SecondText: string
    id: string
}) => {
    return (
        <View key={id} style={MainCompStyle}>
            <Image
                source={PreFixImg}
                style={PreFixImgStyle}
            />
            <View style={TextCompStyle}>
                <Text style={FirstTextStyle}>
                    {FirstText}
                </Text>
                <Text style={SecondTextStyle}>
                    {SecondText}
                </Text>
            </View>
            <Image
                source={SurFixImg}
                style={SurFixImgStyle}
            />
        </View>
    )
}
