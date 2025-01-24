import { Animated, Image, ImageBackgroundProps, Pressable, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import * as React from 'react'
import { Icon } from "react-native-basic-elements";
import { componentStyles } from "../styles";
import { SizeConfig } from "../../../component/SizeConfig";
import { PropsOfIcon } from "react-native-basic-elements/lib/Components/Icon";
import { RatingStars } from "../../../component/RatingStars";


export const HeadderSection = ({ showDescription, toggleDescription, content, containerStyle }: {
    showDescription: boolean,
    toggleDescription: () => void,
    content: string,
    containerStyle?: ViewStyle
}) => (
    <Pressable
        onPress={toggleDescription}
        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        style={[componentStyles.header, containerStyle]}
    >
        <Text style={componentStyles.headerText}>{content}</Text>
        <View
            style={[componentStyles.iconWrapper]}
        >
            <Icon
                type="FontAwesome"
                name={showDescription ? 'chevron-up' : 'chevron-down'}
                size={15}
            />
        </View>
    </Pressable>
)

export const ReviewContentComp = ({
    data, index
}: {
    data: {
        img: ImageBackgroundProps;
        name: string;
        timing: string;
        reviewContent: string;
    },
    index: string
}) => (
    <View key={index} style={componentStyles.reviewContentComp}>
        <View style={componentStyles.reviewContentHeadderProfileComp}>
            <View style={componentStyles.reviewContentHeadderProfileSubComp}>
                <Image
                    source={data.img}
                    style={componentStyles.profileImg}
                />
                <View style={{ gap: SizeConfig.width * 2 }} >
                    <Text style={componentStyles.profileName}>
                        {data.name}
                    </Text>
                    {
                        <View style={componentStyles.starsComp}>
                            {
                                <RatingStars
                                    numberOfStars={5}
                                    starSize={SizeConfig.width * 4}
                                    starColor={"#508A7B"}
                                />
                            }
                        </View>
                    }
                </View>
            </View>
            <Text style={componentStyles.reviewTiming}>
                {data.timing}
            </Text>
        </View>
        <Text style={componentStyles.reviewContent}>
            {data.reviewContent}
        </Text>
    </View>
)

export const ReviewGraphGroth = ({ data, index }: {
    data: {
        stars: string;
        ratio: number;
        percentage: string;
    },
    index: string
}) => (
    <View key={index} style={componentStyles.grapSubComp}>
        <Text style={componentStyles.grapTotalStars}>{data.stars}</Text>
        <Icon
            name="star"
            type="FontAwesome"
            size={SizeConfig.width * 4}
            color={"#508A7B"}
        />
        <View style={componentStyles.grapGrothBarComp}>
            <View style={[componentStyles.grapGrothBar, { width: SizeConfig.width * data.ratio }]} />
        </View>
        <Text>
            {
                data.percentage
            }
        </Text>
    </View>
)

export const SimilarproductCards = ({ item }: {
    item: {
        id: string;
        img: ImageBackgroundProps;
        label: string;
        price: string;
    }
}) => (
    <View style={componentStyles.cardContainer}>
        <Image
            source={item.img}
            style={componentStyles.image}
        />
        <View>
            <Text style={componentStyles.labelText}>{item.label}</Text>
            <Text style={componentStyles.priceText}>${item.price}</Text>
        </View>
    </View>
)

export const ReadMoreOrLessBtn = ({ setShowMoreDescription, content, controlStatus }: {
    setShowMoreDescription: (controlStatus: boolean) => void;
    content: string;
    controlStatus: boolean;
}) => (
    <Text style={componentStyles.readMoreText} onPress={() => setShowMoreDescription(controlStatus)} >{content}</Text>
)

export const toggleDescription = ({ showDescription, animation, setShowDescription }: {
    showDescription: boolean;
    animation: any;
    setShowDescription: (showDescription: boolean) => void;
}) => {
    const toValue = showDescription ? 0 : 1;

    Animated.timing(animation, {
        toValue,
        duration: 500,
        useNativeDriver: false,
    }).start(() => {
        setShowDescription(!showDescription);
    });
};


export const toggleSimilarProduct = ({ showSimilarProduct, SimilarProductAnimation, setShowSimilarProduct }: {
    showSimilarProduct: boolean;
    SimilarProductAnimation: any;
    setShowSimilarProduct: (showSimilarProduct: boolean) => void;
}) => {
    const toValue = showSimilarProduct ? 0 : 1;

    Animated.timing(SimilarProductAnimation, {
        toValue,
        duration: 1000,
        useNativeDriver: false,
    }).start(() => {
        setShowSimilarProduct(!showSimilarProduct);
    });
};


export const toggleAnimation = ({ showAnimation, ReviewAnimation, setShowAnimation }: {
    showAnimation: boolean;
    ReviewAnimation: any;
    setShowAnimation: (showAnimation: boolean) => void;
}) => {
    const toValue = showAnimation ? 0 : 1;

    Animated.timing(ReviewAnimation, {
        toValue,
        duration: 1000,
        useNativeDriver: false,
    }).start(() => {
        setShowAnimation(!showAnimation);
    });
};