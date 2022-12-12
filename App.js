import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import Favourites from "./components/favourites/Favourites";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { store } from "./store";
import { Provider } from "react-redux";


const Stack = createStackNavigator();

const Right = ({ navigation }) => {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcon
        name="star"
        size={42}
        onPress={() => navigation.navigate("Favourites")}
        color="gold"
        style={{ marginRight: 10 }}
      />
    </TouchableOpacity>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Marvel App"
            options={({ navigation }) => ({
              title: "Marvel App",
              headerRight: () => {
                return <Right navigation={navigation} />;
              },
            })}
            component={Home}
          />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Favourites" component={Favourites} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
