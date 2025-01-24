import { ImageProps } from "react-native";

export interface productDataType {
    AddToCartProductData: AddToCartProductDataType[];
}
export interface AddToCartProductDataType {
    id: string;
    img: ImageProps;
    productName: string;
    price: string;
    size: string;
    color: string;
    count: number
    active: boolean
}

export const AddToCartProductData = [
    {
        id: '1',
        img: require('../../../../assets/images/Order/cart1.png'),
        productName: 'Sportwear Set',
        price: '80.00',
        size: 'L',
        color: 'Cream',
        count: 1,
        active: true
    },
    {
        id: '2',
        img: require('../../../../assets/images/Order/cart2.png'),
        productName: 'Turtleneck Sweater',
        price: '39.99',
        size: 'M',
        color: 'White',
        count: 1,
        active: true
    },
    {
        id: '3',
        img: require('../../../../assets/images/Order/cart3.png'),
        productName: 'Cotton T-shirt',
        price: '30.00',
        size: 'L',
        color: 'Black',
        count: 1,
        active: true
    },
]