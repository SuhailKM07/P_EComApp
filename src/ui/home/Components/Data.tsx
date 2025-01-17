import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ImageProps, ImageSourcePropType } from "react-native";
import { BottomTabNavigationTypeChecking, NavigationTypeChecking } from "../../../routs/NavigationTypes";

export interface RecommendedProductDataType {
    RecommendedProductDataArray: RecommendedTypes[];
}
interface RecommendedTypes {
    id: string;
    img: ImageProps;
    lable: string;
    price: string;
}

export interface productDataType {
    navigation: NativeStackNavigationProp<BottomTabNavigationTypeChecking, 'Home'>;
    productData: productDataTypes[];
}
interface productDataTypes {
    id: string;
    img: ImageProps;
    lable: string;
    price: string;
}

export interface CarouselImagesType {
    CarouselImages: ImageSourcePropType[];
}

export interface subMenuDataType {
    subMenuData: subMenuType[]
}

export interface subMenuType {
    id: string,
    img: any;
    lable: string;
}
export const subMenuData = [
    { id: '1Mxz', img: require('../../../assets/images/Home/women.png'), lable: 'Women' },
    { id: '2Fgm', img: require('../../../assets/images/Home/men.png'), lable: 'Men' },
    { id: '3jfS', img: require('../../../assets/images/Home/accessories.png'), lable: 'Accessories' },
    { id: '4OksE', img: require('../../../assets/images/Home/beauty.png'), lable: 'Beauty' },
]
export const productData = [
    {
        id: '1',
        img: require('../../../assets/images/Home/dress3.png'),
        lable: 'Turtleneck Sweater',
        price: '39.99'
    },
    {
        id: '2',
        img: require('../../../assets/images/Home/dress2.png'),
        lable: 'Long Sleeve Dress',
        price: '45.00'
    },
    {
        id: '3',
        img: require('../../../assets/images/Home/dress3.png'),
        lable: 'Sportwear Set',
        price: '80.00'
    },
]

export const RecommendedProductDataArray = [
    {
        id: '1',
        img: require('../../../assets/images/Home/recommended2.png'),
        lable: 'Turtleneck Sweater',
        price: '39.99'
    },
    {
        id: '2',
        img: require('../../../assets/images/Home/recommended1.png'),
        lable: 'Long Sleeve Dress',
        price: '45.00'
    },
    {
        id: '3',
        img: require('../../../assets/images/Home/recommended1.png'),
        lable: 'Sportwear Set',
        price: '80.00'
    },
]



export const CarouselImages = [
    require('../../../assets/images/Home/slider1.png'),
    require('../../../assets/images/Home/slider1.png'),
    require('../../../assets/images/Home/slider1.png'),
];

export const ThirdSubBannerData = [
    {
        id: '1SJ',
        img: require('../../../assets/images/Home/topcoll31.png'),
        firstText: 'T-Shirts',
        SecondText: "The \n Office \n Life"
    },
    {
        id: '2SJ',
        img: require('../../../assets/images/Home/topcoll32.png'),
        firstText: 'Dresses',
        SecondText: "Elegant \n Design"
    },
    {
        id: '3SJ',
        img: require('../../../assets/images/Home/topcoll31.png'),
        firstText: 'T-Shirts',
        SecondText: "The \n Office \n Life"
    },
    {
        id: '4SJ',
        img: require('../../../assets/images/Home/topcoll32.png'),
        firstText: 'Dresses',
        SecondText: "Elegant \n Design"
    },
    {
        id: '5SJ',
        img: require('../../../assets/images/Home/topcoll31.png'),
        firstText: 'T-Shirts',
        SecondText: "The \n Office \n Life"
    },
    {
        id: '6SJ',
        img: require('../../../assets/images/Home/topcoll32.png'),
        firstText: 'Dresses',
        SecondText: "Elegant \n Design"
    },

]