import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import LeftIcon from "../../Icons/BackIcon";
import { Colors } from "../../Until/Colors";
import { styles } from "./styles";

export default function Header2({ navigation, title }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <LeftIcon color={Colors.eighth} />
            </TouchableOpacity>
        </View>
    )
}