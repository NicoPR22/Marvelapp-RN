import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems:"center",
    width: "100%",
    height:'100%'
  },
  name: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: "95%",
    height: 400,
  },
  description: {
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 15,
    borderColor: "black",
    borderBottomWidth: 1,
    textAlign: "justify",
  },
  card:{
    width:'95%',
    marginVertical: 10
  }
});

export default function Information({ image, name, description, id }) {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Card mode="outlined"  style={styles.card}>
      <Card.Cover source={{uri: image}} />
      <Card.Title
        title={name}
        subtitle={`Id: ${id}`} 
      />
      <Card.Content>
        <Title>Desrciption</Title>
        <Paragraph>{description? description : 'N/A'}</Paragraph>
      </Card.Content>
    </Card>

    </View>
    </ScrollView>
  );
} 