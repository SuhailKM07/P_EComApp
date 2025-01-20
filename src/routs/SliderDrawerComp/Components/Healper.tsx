import { Image, Pressable, Text, View } from "react-native";
import { SizeConfig } from "../../../component/SizeConfig";
import * as React from 'react'
import { ImageProps } from "react-native";
import { drawerCompStyle } from "./styles";


export const HeadderSection = () => (
    <View style={drawerCompStyle.ProfileMainComp}>
        <Image
            source={require('../../../assets/images/Home/drawerAvatar.jpg')}
            style={drawerCompStyle.profileImg}
        />
        <View style={{ gap: SizeConfig.width * 2 }}>
            <Text style={[drawerCompStyle.profileFirstText]}>Sunie Pham</Text>
            <Text style={[drawerCompStyle.profileSecondText]}>sunieux@gmail.com</Text>
        </View>
    </View>
)

export const DrawerLinksButtons = ({
    imgURI,
    content,
    index,
    mainBtnIndex,
    setMainBtnIndex,
    setDrawerOtherBtnIndex
}: {
    imgURI: ImageProps,
    content: string,
    index: number,
    mainBtnIndex: number,
    setMainBtnIndex: (params: number) => void,
    setDrawerOtherBtnIndex: (params: number) => void,
}) => (
    <>
        <Pressable style={[drawerCompStyle.MainNavBtn, { backgroundColor: mainBtnIndex == index ? '#F4F5F6' : 'white' }]}
            onPress={() => {
                setMainBtnIndex(index)
                setDrawerOtherBtnIndex(-1)
            }}

        >
            <Image
                source={imgURI}
                style={[drawerCompStyle.MainNavBtnImg, {
                    tintColor: mainBtnIndex == index ? 'black' : '#777E90'
                }]}
            />
            <Text style={[drawerCompStyle.MainNavBtnText, { color: mainBtnIndex == index ? 'black' : '#777E90' }]} >
                {content}
            </Text>
        </Pressable>


    </>
)

export const DrawerOtherSectionNavBtnComp = ({
    imgURI,
    content,
    index,
    setDrawerOtherBtnIndex,
    drawerOtherBtnIndex,
    setMainBtnIndex
}: {
    imgURI: ImageProps,
    content: string,
    index: number,
    drawerOtherBtnIndex: number,
    setDrawerOtherBtnIndex: (params: number) => void,
    setMainBtnIndex: (params: number) => void
}) => (
    <>
        <Pressable style={[drawerCompStyle.MainNavBtn, {
            backgroundColor: drawerOtherBtnIndex == index ? '#F4F5F6' : 'white'
        }]}
            onPress={() => {
                setDrawerOtherBtnIndex(index)
                setMainBtnIndex(-1)
            }}
        >
            <Image
                source={imgURI}
                style={[
                    drawerCompStyle.MainNavBtnImg,
                    {
                        tintColor: drawerOtherBtnIndex == index ? 'black' : '#777E90',
                        width: SizeConfig.width * 6,
                        height: SizeConfig.width * 6
                    }
                ]}
            />
            <Text style={[
                drawerCompStyle.MainNavBtnText,
                { color: drawerOtherBtnIndex == index ? 'black' : '#777E90' }
            ]} >
                {content}
            </Text>
        </Pressable>


    </>
)

export const ThemControlerBtns = () => {

    const [lightBtnIndex, setLightBtnIndex] = React.useState(true)
    const [darkBtnIndex, setDarkBtnIndex] = React.useState(false)

    return (
        <View style={drawerCompStyle.themBtnMainComp}>
            <Pressable style={[drawerCompStyle.themBtnLightBtn,
            {
                backgroundColor: lightBtnIndex ? 'white' : '#f4f4f4',
                elevation: lightBtnIndex ? 2 : 0
            }]}
                onPress={() => {
                    setLightBtnIndex(true)
                    setDarkBtnIndex(false)
                }}
            >
                <Image
                    source={require('../../../assets/images/Home/sun.png')}
                    style={[drawerCompStyle.themLightBtnImg, { tintColor: lightBtnIndex ? 'black' : '#777E90' }]}
                />
                <Text style={{ color: lightBtnIndex ? 'black' : '#777E90' }}>
                    Light
                </Text>
            </Pressable>

            <Pressable style={[
                drawerCompStyle.themBtnLightBtn,
                { backgroundColor: darkBtnIndex ? 'white' : '#f4f4f4', elevation: darkBtnIndex ? 2 : 0 }
            ]}
                onPress={() => {
                    setLightBtnIndex(false)
                    setDarkBtnIndex(true)
                }}
            >
                <Image
                    source={require('../../../assets/images/Home/moon.png')}
                    style={[drawerCompStyle.themLightBtnImg, {
                        tintColor: darkBtnIndex ? 'black' : '#777E90',
                    }]}
                />
                <Text style={{ color: darkBtnIndex ? 'black' : '#777E90' }}>
                    Dark
                </Text>
            </Pressable>

        </View>
    )
}