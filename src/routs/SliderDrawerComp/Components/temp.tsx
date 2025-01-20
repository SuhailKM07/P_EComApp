import React, { memo } from 'react';
import { Image, Pressable, Text } from 'react-native';
import { ImageProps } from 'react-native';
import { drawerCompStyle } from './styles';

type DrawerLinksButtonsProps = {
    imgURI: ImageProps;
    content: string;
    index: number;
    mainBtnIndex: number;
    setMainBtnIndex: (params: number) => void;
    setDrawerOtherBtnIndex: (params: number) => void;
};

const DrawerLinksButtons = memo(({
    imgURI,
    content,
    index,
    mainBtnIndex,
    setMainBtnIndex,
    setDrawerOtherBtnIndex,
}: DrawerLinksButtonsProps) => {
    const isSelected = mainBtnIndex === index;

    return (
        <Pressable
            style={[
                drawerCompStyle.MainNavBtn,
                { backgroundColor: isSelected ? '#F4F5F6' : 'white' },
            ]}
            onPress={() => {
                setMainBtnIndex(index);
                setDrawerOtherBtnIndex(-1);
            }}
        >
            <Image
                source={imgURI}
                style={[
                    drawerCompStyle.MainNavBtnImg,
                    { tintColor: isSelected ? 'black' : '#777E90' },
                ]}
            />
            <Text
                style={[
                    drawerCompStyle.MainNavBtnText,
                    { color: isSelected ? 'black' : '#777E90' },
                ]}
            >
                {content}
            </Text>
        </Pressable>
    );
}, (prevProps, nextProps) => {
    return (
        prevProps.imgURI === nextProps.imgURI &&
        prevProps.content === nextProps.content &&
        prevProps.index === nextProps.index &&
        prevProps.mainBtnIndex === nextProps.mainBtnIndex
    );
});

export default DrawerLinksButtons;
