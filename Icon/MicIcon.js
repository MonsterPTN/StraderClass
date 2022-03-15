import React from "react";
import Circle from "react-native-svg";
import Svg, { Path,Rect } from 'react-native-svg'

export default function UserIcon({ color }) {
    return (
<Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect x="9.5" y="3" width="6" height="11" rx="3" stroke="white" stroke-linejoin="round"/>
<Path d="M6 11C6 12.7239 6.68482 14.3772 7.90381 15.5962C9.12279 16.8152 10.7761 17.5 12.5 17.5C14.2239 17.5 15.8772 16.8152 17.0962 15.5962C18.3152 14.3772 19 12.7239 19 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M12.5 21V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>


    )
}

