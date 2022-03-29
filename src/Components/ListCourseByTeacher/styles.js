import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";

export const styles = StyleSheet.create({

textTitle: {
    color: Colors.second,
    fontSize: 16,
    fontFamily: Fonts.font_700,
    fontWeight: 'normal',
    marginLeft: 15,
    marginBottom: 16
  },
  linearGradient2: {
    height: 86,
    justifyContent: 'flex-end',
    width: 120,
    alignItems: 'center',
  },
  text3: {
    textAlign: 'center',
    color: Colors.fourth,
    fontSize: 14,
    fontFamily: Fonts.font_700,
    fontWeight: 'bold',
    paddingBottom: 4,
    
    
  },
  item: {
    justifyContent: 'center',
    margin: 6,
    height: 180,
    width: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  text5: {
    textAlign: 'center',
    color: Colors.fourth,
    fontSize: 8,
    fontFamily: Fonts.font_700,
    fontWeight: 'normal',
    paddingTop: 4
  },
  list: {
    marginTop: 15
},
firstItem: {
    marginRight: 15/2
},
lastItem: {
    marginLeft: 15/2
},
centerItem:{
    marginHorizontal: 15/2
}
})