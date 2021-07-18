import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = '@User_Key';
export const storeUser = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(USER_KEY, jsonValue);
    } catch (e) {
        // saving error
    }
}

export const getUser = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(USER_KEY)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

export const removeUser = async () => {
    try {
        await AsyncStorage.removeItem(USER_KEY);
    } catch (e) {
        // remove error
    }
    console.log('User removed.')
}
