import React, {Component, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, theme} from './configs/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomIcons from './components/CustomIcons';
import {normalize} from './styles/utilityStyle';
import Home from './container/Home/Home';
import ProductUpload from './container/ProductUpload';
import ImageListViewer from './components/imageViewer/ImageListViewer';
import ProductDetails from './container/ProductDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const defaultScreen = () => {
  return <Text>Hi</Text>;
};

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: normalize(-20),
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <View
        style={{
          width: normalize(50),
          height: normalize(50),
          borderRadius: normalize(25),
          backgroundColor: theme.primaryColor,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
const TabNav = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            // position: 'absolute',
            // bottom: 10,
            // margin: 20,
            // borderRadius: 50,
            backgroundColor: colors.white,

            justifyContent: 'center',
          },
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SafeAreaView
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomIcons.AntDesign
                  name="home"
                  size={normalize(20)}
                  color={focused ? theme.primaryColor : colors.black}
                />
              </SafeAreaView>
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={defaultScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SafeAreaView
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomIcons.Feather
                  name="user"
                  size={normalize(20)}
                  color={focused ? theme.primaryColor : colors.black}
                />
              </SafeAreaView>
            );
          },
        }}
      />

      <Tab.Screen
        name="Camera"
        component={ProductUpload}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SafeAreaView
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomIcons.Feather
                  name="camera"
                  size={normalize(20)}
                  color={colors.white}
                />
              </SafeAreaView>
            );
          },
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={defaultScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SafeAreaView
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomIcons.Ionicons
                  name="notifications-outline"
                  size={normalize(20)}
                  color={focused ? theme.primaryColor : colors.black}
                />
              </SafeAreaView>
            );
          },
        }}
      />

      <Tab.Screen
        name="Chat"
        component={defaultScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SafeAreaView
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomIcons.Ionicons
                  name="chatbubble-outline"
                  size={normalize(20)}
                  color={focused ? theme.primaryColor : colors.black}
                />
              </SafeAreaView>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeNav"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeNav" component={TabNav} />
      <Stack.Screen name="ImageList" component={ImageListViewer} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
