import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { colors, theme } from '../../configs/colors'
import { getFontFamily, normalize, shadow } from '../../styles/utilityStyle'

export default function ProductInfo ({ onBidNow, onQandA, productDetails }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: normalize(15),
        paddingHorizontal: normalize(8)
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginBottom: normalize(15)
        }}
      >
        <View style={{ width: '75%' }}>
          <Text
            style={{
              color: theme.fontColor,
              fontFamily: getFontFamily(),
              fontSize: normalize(15),
              fontWeight: '500'
            }}
          >
            {productDetails.title}
          </Text>
        </View>
        <View style={{ width: '25%' }}>
          <CustomButton
            customStyle={{ height: normalize(50) }}
            title={`${productDetails.basePrice} Tk`}
            bordered
            width={'100%'}
            textColor={theme.primaryColor}
            borderRadius={normalize(15)}
          />
        </View>
      </View>
      <View
        style={{
          width: '95%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginVertical: normalize(10)
        }}
      >
        <CustomButton
          title={'Bid Now'}
          filled
          width={'48%'}
          borderRadius={normalize(14)}
          onPress={onBidNow}
          customStyle={[shadow, { height: normalize(40) }]}
        />
        <CustomButton
          title={'Q&A'}
          width={'48%'}
          borderRadius={normalize(14)}
          bordered
          onPress={onQandA}
          customStyle={[shadow, { height: normalize(40) }]}
        />
      </View>
      <View
        style={{ alignSelf: 'center', width: '95%', marginTop: normalize(10) }}
      >
        <Text
          style={{
            textAlign: 'justify',
            fontFamily: getFontFamily(),
            fontSize: normalize(13),
            color: theme.fontColor,
            opacity: 0.7
          }}
        >
          {productDetails.productDetails}
        </Text>
      </View>
    </ScrollView>
  )
}
