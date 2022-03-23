import { Alert } from "react-native";
const url = `https://traderclass.vn/api`;

export const api_get = async (path, token = "") => {
    let url_main = `${url}${path}`;
    return new Promise((resolve, reject) => {
        fetch(url_main, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token != "" ? `Bearer ${token}` : ""
            }
        }).then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch((error) => {
                Alert.alert('Error:', error);
            });
    });
}