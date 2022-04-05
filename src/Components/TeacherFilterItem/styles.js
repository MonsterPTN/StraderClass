import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";

export const styles = StyleSheet.create({
  viewTeacher: {
    flexDirection: 'row',
    marginBottom: 6,
    backgroundColor: Colors.fifth,
    justifyContent: 'space-between'
  },
  viewItem1: {
    flexDirection: 'row',
    height: 108
  },
  viewItem2: {
    height: 108,
    width: 76,
    borderRadius: 5
  },
  image: {
    height: "100%",
    width: "100%"
  },
  textTeacher: {
    fontSize: 20,
    fontWeight: 'normal',
    color: Colors.fourth
  },
  textTitleTeacher: {
    fontSize: 12,
    fontWeight: 'normal',
    color: Colors.sixth
  },
  view1: {
    justifyContent: 'center',
    marginLeft: 24
  }
})