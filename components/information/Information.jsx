import { Text, View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 50
  },
  name: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  image: {
    width: "100%",
    height: 200,
  },
  description: {
    //flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 15,
    borderColor: "black",
    borderBottomWidth: 1,
    textAlign:"justify"
  }
});

export default function Information({ image, name, description }) {
    return (
      <View style={{padding: 5}}>
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description? description : 'N/A'}</Text>
      </View>
    )
  }