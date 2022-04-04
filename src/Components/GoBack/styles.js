import { StyleSheet, Platform } from "react-native";

const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    backButton: {
        alignItems: "center",
        justifyContent: "center"
    },

})