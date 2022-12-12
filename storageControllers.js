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