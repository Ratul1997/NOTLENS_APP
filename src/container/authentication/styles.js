import {StyleSheet} from 'react-native';
import {colors, theme} from '../../configs/colors';
import {getFontFamily} from '../../styles/utilityStyle';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: colors.cyan,
  },
  titleContainer: {
    // backgroundColor: 'green',
    paddingHorizontal: '6%',
    height: '20%',
    justifyContent:'center'
  },
  topBar: {
    // flex:1,
    // flexDirection: 'row',
    // alignItems: 'flex-end',
  },
  title: {
    fontSize: 32,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: getFontFamily(),
  },
  subTitle: {
    color: colors.white,
  },
  inputContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: '9%',
  },
  inputContent: {
    paddingHorizontal: 0,
  },
  textInput: {
    color: 'black',
    height: 40,
    fontSize: 17,
    borderWidth: 0.5,
    borderColor: colors.lightBlack,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: colors.whiteSmoke,
    paddingHorizontal: 10,
  },
  level: {
    fontSize: 14,
    fontWeight: '500',
    color: '#04293A',
    fontFamily: getFontFamily(),
    paddingLeft: 10,
  },
  dorpdown: {
    height: 50,
    borderWidth: 3,
    borderColor: colors.white,
    borderRadius: 4,
    color: theme.fontColor,
  },
  suggestion: {
    textAlign: 'center',
    fontSize: 15,
  },
});

export default styles;
