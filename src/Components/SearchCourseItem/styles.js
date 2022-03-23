import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  viewItem: {
    flexDirection: 'row',
    marginBottom: 6,
    backgroundColor: Colors.fifth,
    justifyContent: 'space-between',
    height: 90,
    borderRadius: 10,
},
image: {
  height: 90,
  width: 120,
  borderRadius: 10
},
textItem: {
  justifyContent: 'center',
  marginHorizontal: 24,
  width: scale(150)
},
text3: {
  color: Colors.fourth,
  fontSize: 14,
  fontFamily: Fonts.font_700,
  fontWeight: 'normal',
  paddingBottom: 4,
},
text5: {
  color: Colors.fourth,
  fontSize: 12,
  fontFamily: Fonts.font_700,
  fontWeight: 'bold',
  paddingTop: 4
},

})