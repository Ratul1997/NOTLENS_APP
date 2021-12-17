import {Dimensions, Platform, PixelRatio} from 'react-native';
export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,

  elevation: 8,
};

export const getFontFamily = () => {
  return 'Helvetica Neue';
};

export const getHeightWidthOfScreen = () => {
  return [Dimensions.get('window').height, Dimensions.get('window').width];
};
const [SCREEN_HEIGHT, SCREEN_WIDTH] = getHeightWidthOfScreen();
// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export const normalize = size => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
