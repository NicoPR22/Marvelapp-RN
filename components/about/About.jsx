import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

const About = () => {
  return (
    <Card>
      <Card.Content>
        <Title>About Marvel App</Title>
        <Paragraph>
          This app is made by Nicolás Burgos and is part of Henry's bootcamp. It
          is made using React Native and Expo and gets the data from the Marvel
          API.
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default About;

const styles = StyleSheet.create({});
