import { StyleSheet } from "react-native";
import React from "react";
import { Surface, List } from "react-native-paper";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Contact = () => {
  return (
    <Surface>
      <List.Item
        title="Linked In"
        description="Nicolás Exequiel Burgos"
        left={(props) => <List.Icon {...props} icon="linkedin" />}
      />
      <List.Item
        title="GitHub"
        description="NicoPR22"
        left={(props) => <List.Icon {...props} icon="github" />}
      />
      <List.Item
        title="Email"
        description="nicolasexebugos@gmail.com"
        left={(props) => <List.Icon {...props} icon="email-outline" />}
      />
    </Surface>
  );
};

export default Contact;

const styles = StyleSheet.create({});
