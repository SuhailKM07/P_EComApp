import { StatusBar, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SizeConfig } from '../../../component/SizeConfig'
import { OrderScreenStyle } from './Styles'
import { AddToCartProductCard, BillingSection } from './Components/Helper'
import { AddToCartProductData } from './Components/Data'
import BtnCust from '../../../component/BtnCust'
import { NavHeaderComp } from '../../../component/NavHeaderComp'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationTypeChecking } from '../../../routs/NavigationTypes'
import CustomSnackBar from '../../../component/CustomSnackBar'

type YourCartTypeProps = NativeStackScreenProps<NavigationTypeChecking, 'YourCart'>;


const YourCart: React.FC<YourCartTypeProps> = ({ navigation, route }) => {

  const [totalAddToCartProduct, setTotalAddToCartProduct] = React.useState(AddToCartProductData)
  const [totalBillingPrice, setTotalBillingPrice] = React.useState(149);

  useEffect(() => {
    const sumWithInitial = totalAddToCartProduct.reduce(
      (accumulator, currentValue) => {
        return currentValue.active ? accumulator + (+currentValue.price * currentValue.count) : accumulator
      },
      0,
    );
    setTotalBillingPrice(sumWithInitial)

  }, [totalAddToCartProduct])

  return (
    <SafeAreaView style={OrderScreenStyle.SafeAreaStyle}>

      <StatusBar
        translucent
        backgroundColor="white"
        barStyle={'dark-content'}
      />

      <View style={[{ flex: 1 }, OrderScreenStyle.LayoutStyle]}>
        <NavHeaderComp
          Content='Your Cart'
          navigation={navigation}
        />

        <AddToCartProductCard
          totalAddToCartProduct={totalAddToCartProduct}
          setTotalAddToCartProduct={setTotalAddToCartProduct}
        />
      </View>
      <View style={[OrderScreenStyle.BillSectionComp, { paddingHorizontal: SizeConfig.width * 6 }]}>

        <BillingSection
          lable='Product Price'
          value={('$' + totalBillingPrice).slice(0, 7)}
          mainContentStyle={OrderScreenStyle.BillingSectionLable}
          lableTextStyle={OrderScreenStyle.BillingSectionLableText}
          valueCompStyle={OrderScreenStyle.BillingSectionValueComp}
        />

        <BillingSection
          lable='Shipping'
          value={'Freeship'}
          mainContentStyle={OrderScreenStyle.BillingSectionLable}
          lableTextStyle={OrderScreenStyle.BillingSectionLableText}
          valueCompStyle={OrderScreenStyle.BillingSectionValueComp}
        />

        <BillingSection
          lable='Subtotal'
          value={('$' + totalBillingPrice).slice(0, 7)}
          mainContentStyle={OrderScreenStyle.SubTotalComp}
          lableTextStyle={OrderScreenStyle.SubTotalCompLable}
          valueCompStyle={OrderScreenStyle.SubTotalCompValue}
        />

        <View>
          <BtnCust
            buttonContent='Proceed to checkout'
            buttonStyle={OrderScreenStyle.CartBtnComp}
            buttonTextStyle={OrderScreenStyle.CartBtnTextStyle}
            onPushFun={() => {
              if (totalBillingPrice > 0) {
                navigation.navigate("OrderInfo", { data: totalAddToCartProduct, totalPrice: totalBillingPrice })
              }
              else {
                CustomSnackBar('Select Minimum One Item', 'red')
              }
            }}

          />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default YourCart