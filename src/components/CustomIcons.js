import React from 'react';
import {View, Text} from 'react-native';
import EntypoI from 'react-native-vector-icons/Entypo';
import EvilIconsI from 'react-native-vector-icons/EvilIcons';
import FeatherI from 'react-native-vector-icons/Feather';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import FontAwesome5I from 'react-native-vector-icons/FontAwesome5';
import FoundationI from 'react-native-vector-icons/Foundation';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonsI from 'react-native-vector-icons/Octicons';
import ZocialI from 'react-native-vector-icons/Zocial';
import SimpleLineIconsI from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignI from 'react-native-vector-icons/AntDesign';

export const MaterialCommunityIcons = props => (
  <MaterialCommunityIconsI {...props} />
);
const SimpleLineIcons = props => <SimpleLineIconsI {...props} />;
const MaterialIcons = props => <MaterialIconsI {...props} />;
const FontAwesome5 = props => <FontAwesome5I {...props} />;
const FontAwesome = props => <FontAwesomeI {...props} />;
const Foundation = props => <FoundationI {...props} />;
const EvilIcons = props => <EvilIconsI {...props} />;
const Ionicons = props => <IoniconsI {...props} />;
const Octicons = props => <OcticonsI {...props} />;
const Feather = props => <FeatherI {...props} />;
const Entypo = props => <EntypoI {...props} />;
const Zocial = props => <ZocialI {...props} />;
const AntDesign = props => <AntDesignI {...props} />;
export default {
  MaterialCommunityIcons,
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  Foundation,
  EvilIcons,
  Ionicons,
  Octicons,
  Feather,
  Entypo,
  Zocial,
  AntDesign,
};
