import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";

export const styles = StyleSheet.create({
  viewMain: {
    flexDirection: 'row',
    marginBottom: 6,
    backgroundColor: '#000000',
    justifyContent: 'center',
    padding: 5
  },
  view1: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text3: {
    color: Colors.fourth,
    fontSize: 14,
    fontFamily: Fonts.font_700,
    fontWeight: 'normal',
    paddingBottom: 4
  },

})