import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value)=>{
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@favourites', jsonValue)
      } catch (e) {
        console.log(e)
      }
}

export const  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favourites')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log(e)
    }
  }

  export const deleteData = async ( id ) => {
    try {
      const data = await getData()
      const newData = data.filter(e =>  e.id !== id )
      await storeData(newData)
    } catch (error) {
      console.log(error)
    }
  }

  export const storeThemeMode = async (value) => {
    try {
      await AsyncStorage.setItem('@theme', value)
    } catch (e) {
      console.log(e)
    }
  }

  export const getThemeMode = async () => {
    try {
      const value = await AsyncStorage.getItem('@theme')
      if(value !== null) {
        return value
      }else return true
    } catch(e) {
      console.log(e)
    }
  }