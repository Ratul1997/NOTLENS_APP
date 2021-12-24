import React from 'react'
import { View, Text } from 'react-native'

import LottieView from 'lottie-react-native'
export default function Lottie () {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <LottieView
        source={require('../../assets/Lottie/loader2.json')}
        autoPlay
        loop
        style={{
          width: 100,
          height: 100
        }}
      />
    </View>
  )
}
