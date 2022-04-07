import {StyleSheet} from 'react-native';
import { Colors } from '../../Until/Colors'

export const styles = StyleSheet.create({
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFiledRoot: {marginTop: 20},
  cell: {
    width: 60,
    height: 60,
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: Colors.eighth,
    margin: 10,
    borderRadius: 60/2,
    color: Colors.fourth,
  },
  focusCell: {
    backgroundColor: Colors.second,
  },
});
