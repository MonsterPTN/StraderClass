import {StyleSheet} from 'react-native';

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
    backgroundColor: '#273B4A',
    margin: 10,
    borderRadius: 60/2,
    color: '#FFFFFF',
  },
  focusCell: {
    backgroundColor: '#FF8600',
  },
});
