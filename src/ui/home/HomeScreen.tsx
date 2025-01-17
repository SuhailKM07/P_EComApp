import { FlatList, ScrollView, StatusBar, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SizeConfig } from '../../component/SizeConfig'
import { componentStyles } from './Styles'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
    CategorySectionButtons,
    FeatureProdutsCards,
    HadderSection,
    HomeCollectionBanner,
    ImageCarousel,
    PromotionBanner,
    RecommendedSectionCards,
    TextHeaderComp,
    ThirdBannerSubCards
} from './Components/Healper'
import {
    CarouselImages,
    productData,
    RecommendedProductDataArray,
    subMenuData,
    ThirdSubBannerData
} from './Components/Data'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BottomTabNavigationTypeChecking } from '../../routs/NavigationTypes'

type HomeScreenType = NativeStackScreenProps<BottomTabNavigationTypeChecking, 'Home'>;

const HomeScreen: React.FC<HomeScreenType> = ({ navigation, route }) => {
    return (
        <SafeAreaView style={[componentStyles.superComp]}>
            <StatusBar
                translucent
                backgroundColor="rgba(255, 255, 255, 0)"
                barStyle={'dark-content'}
            />
            <GestureHandlerRootView >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                    stickyHeaderIndices={[0]}
                >
                    <HadderSection />
                    <CategorySectionButtons subMenuData={subMenuData} />
                    <ImageCarousel CarouselImages={CarouselImages} />
                    <FeatureProdutsCards navigation={navigation} productData={productData} />
                    <PromotionBanner />
                    <RecommendedSectionCards RecommendedProductDataArray={RecommendedProductDataArray} />
                    <View style={[componentStyles.paddingHorizontalStyle, componentStyles.topCollectionComp]}>
                        <TextHeaderComp
                            MainCompStyle={componentStyles.textComp}
                            textOneContent='Top Collection'
                        />
                        <View style={{ gap: SizeConfig.height * 2 }}>
                            <HomeCollectionBanner
                                firstContent={'I Sale Up to 40%'}
                                sectionContent={"FOR SLIM \n & BEAUTY"}
                                ImageUrl={require('../../assets/images/Home/topcoll1.png')}
                                sectionContentStyle={componentStyles.bannerOneTextTwo}
                            />
                            <HomeCollectionBanner
                                firstContent={'I Summer Collection 2021'}
                                sectionContent={" Most sexy \n & fabulous \n design"}
                                BannerCompStyle={{ paddingVertical: SizeConfig.height * 2 }}
                                ImageUrl={require('../../assets/images/Home/topcoll2.png')}
                                sectionContentStyle={componentStyles.bannerSecondCompTextTwo}
                            />
                            <View style={componentStyles.thirdBannerComp}>

                                <FlatList
                                    data={ThirdSubBannerData}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={item => item.id}
                                    horizontal
                                    contentContainerStyle={{ gap: SizeConfig.width * 5 }}
                                    renderItem={(({ item, index }) => {
                                        console.log(index)
                                        return (
                                            <ThirdBannerSubCards
                                                MainCompStyle={index % 2 == 0 ? componentStyles.thirdSubOneComp : componentStyles.ThirdBannerMainComp}
                                                PreFixImg={index % 2 == 0 ? item.img : undefined}
                                                PreFixImgStyle={index % 2 == 0 ? componentStyles.thirdSubImg : undefined}
                                                SurFixImg={!(index % 2 == 0) ? item.img : undefined}
                                                SurFixImgStyle={!(index % 2 == 0) ? componentStyles.thirdSubImg : undefined}
                                                TextCompStyle={index % 2 == 0 ? componentStyles.thirdSubComp : componentStyles.ThirdBannerSubComp}
                                                FirstTextStyle={componentStyles.thirdSubTextOne}
                                                FirstText={item.firstText}
                                                SecondTextStyle={componentStyles.thirdSubTextTwo}
                                                SecondText={item.SecondText}
                                                id={item.id}
                                            />
                                        )
                                    })}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </GestureHandlerRootView>
        </SafeAreaView>
    )
}

export default HomeScreen