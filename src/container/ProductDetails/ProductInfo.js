import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import CustomButton from '../../components/CustomButton'
import {colors, theme} from '../../configs/colors'
import {getFontFamily, normalize, shadow} from '../../styles/utilityStyle'

export default function ProductInfo () {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: normalize(15),
        paddingHorizontal: normalize(8),
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginBottom: normalize(15),
        }}>
        <View style={{width: '75%'}}>
          <Text
            style={{
              color: theme.fontColor,
              fontFamily: getFontFamily(),
              fontSize: normalize(15),
              fontWeight: '500',
            }}>
            Apple Watch Serioes 1.36 Apple Watch Serioes 1.36 Apple Watch
            Serioes 1.36
          </Text>
        </View>
        <View style={{width: '25%'}}>
          <CustomButton
            customStyle={{height: normalize(50)}}
            title={'300 Tk'}
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
          marginVertical: normalize(10),
        }}>
        <CustomButton
          title={'Bid Now'}
          filled
          width={'48%'}
          borderRadius={normalize(14)}
          customStyle={[shadow, {height: normalize(40)}]}
        />
        <CustomButton
          title={'Bid Now'}
          width={'48%'}
          borderRadius={normalize(14)}
          bordered
          customStyle={[shadow, {height: normalize(40)}]}
        />
      </View>
      <View
        style={{alignSelf: 'center', width: '95%', marginTop: normalize(10)}}>
        <Text
          style={{
            textAlign: 'justify',
            fontFamily: getFontFamily(),
            fontSize: normalize(13),
            color: theme.fontColor,
            opacity: 0.7,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula
          tempus nulla, eu interdum metus accumsan vel. Vivamus sit amet
          consectetur sapien. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Aliquam ac consequat erat,
          vel sollicitudin turpis. Vivamus eu justo diam. Curabitur volutpat
          velit non dolor imperdiet, sed efficitur lacus viverra. Morbi mollis
          pretium odio quis pulvinar. In fermentum, dolor et tempor porta, nulla
          arcu congue nisi, vel convallis diam quam et justo. Pellentesque sed
          mi viverra, eleifend mi ut, semper sem. Nam a vulputate nisl. Fusce et
          mauris eget quam dictum consectetur. Duis ornare, ligula pretium porta
          iaculis, nunc nisl posuere libero, nec pulvinar diam mauris tincidunt
          eros. Suspendisse pretium nulla non magna auctor, eget cursus nisi
          pulvinar. Fusce vel suscipit felis. Sed tristique tellus non leo
          bibendum, nec fringilla orci ultrices. Suspendisse blandit nisi in
          rutrum accumsan. Mauris convallis turpis ut sem suscipit lobortis.
          Donec vitae ultricies ipsum, a lacinia tellus. Donec in mi gravida
          nisi feugiat commodo sed eget elit. Sed a suscipit felis, sit amet
          rhoncus enim. Suspendisse potenti. Integer diam odio, feugiat sed
          nulla ac, eleifend commodo diam. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Donec
          vulputate feugiat laoreet. Etiam vitae finibus turpis, vel mattis
          magna. Duis quam elit, elementum vitae sem eu, tincidunt elementum
          nisl. Cras pellentesque a ipsum et condimentum. Pellentesque vehicula
          purus erat, vel mattis eros convallis at. Suspendisse potenti. Sed
          consequat velit vel diam molestie consectetur. Fusce eu accumsan
          tortor. Sed sem arcu, finibus vel ex sit amet, hendrerit vulputate
          libero. Aenean scelerisque nisi a est commodo varius. Pellentesque
          vitae ante tempus, faucibus dui vel, consectetur eros. Ut quis
          interdum turpis. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Maecenas eget ligula ut
          felis dictum finibus. Suspendisse fringilla, orci eget lacinia
          sodales, purus arcu consectetur nunc, eget malesuada nisl nisi eget
          ante. In volutpat sagittis tortor vitae euismod. Integer dignissim ut
          ex et congue. Vivamus eget tristique nibh, nec sagittis quam. Sed
          viverra justo ipsum, eleifend pretium erat consectetur sed. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Morbi non turpis vehicula,
          efficitur nibh vel, auctor justo. Nullam ut mi sed felis aliquam
          mollis id nec justo. Fusce in nunc non lectus porttitor pellentesque.
          In nec quam ac turpis tempor elementum. Sed eget augue cursus, ornare
          odio at, sollicitudin eros. Aliquam auctor leo ligula, vitae auctor
          enim consequat at. Duis sit amet tristique leo. Praesent euismod
          sollicitudin tincidunt. Nunc ac sem elit. Aliquam consectetur dui et
          imperdiet mattis. Nullam ut volutpat turpis. Fusce et cursus dui, in
          efficitur massa. Fusce nibh orci, tincidunt sit amet lorem vel,
          condimentum ultrices tellus. Integer lectus ligula, bibendum quis
          gravida convallis, efficitur eget nisi. Nullam mattis congue tellus,
          nec laoreet sapien mollis tincidunt. Ut eget suscipit odio, quis
          fringilla mauris. Curabitur eleifend ante neque, at semper urna
          ullamcorper ac. Vestibulum lacus tellus, dictum nec consectetur et,
          rutrum at metus. Vestibulum porta eu dolor nec lacinia.
        </Text>
      </View>
    </ScrollView>
  )
}
