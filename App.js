import * as React from "react";
import { TouchableOpacity, DrawerLayoutAndroid, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import Favourites from "./components/favourites/Favourites";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { store } from "./store";
import { Provider } from "react-redux";
import MenuContent from "./components/home/MenuContent";
import {
  Switch,
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
  useTheme,
  Surface,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const Stack = createStackNavigator();

const Right = ({ changeMode, isSwitchOn }) => {
  const theme = useTheme();
  return (
    <Surface
      elevation={4}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        borderRadius: 15,
        height: 30,
      }}
    >
      <MaterialCommunityIcon
        name="moon-waning-crescent"
        size={20}
        style={{ marginLeft: 5 }}
        color={theme.colors.text}
      />
      <Switch value={isSwitchOn} onValueChange={() => changeMode()} />
      <MaterialCommunityIcon
        name="white-balance-sunny"
        size={20}
        style={{ marginRight: 5 }}
        color={theme.colors.text}
      />
    </Surface>
  );
};

const navigationView = () => <MenuContent />;

const Left = ({ drawer }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity>
      <MaterialCommunityIcon
        name="menu"
        size={36}
        onPress={() => drawer.current?.openDrawer()}
        style={{ color: theme.colors.text }}
      />
    </TouchableOpacity>
  );
};

export default function App() {
  
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const theme = useTheme();

  const drawer = React.useRef(null);

  return (
    <PaperProvider theme={isSwitchOn ? DefaultTheme : DarkTheme}>
      <NavigationContainer
        theme={isSwitchOn ? NavigationDefaultTheme : NavigationDarkTheme}
      >
        <Provider store={store}>
          <StatusBar
          hidden={true}
          />
          <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={250}
            drawerPosition="left"
            renderNavigationView={navigationView}
            drawerBackgroundColor={
              isSwitchOn
                ? DefaultTheme.colors.background
                : DarkTheme.colors.background
            }
          >
            <Stack.Navigator>
              <Stack.Screen
                name="Marvel App"
                options={() => ({
                  title: "Marvel App",
                  headerRight: () => {
                    return (
                      <Right
                        changeMode={onToggleSwitch}
                        isSwitchOn={isSwitchOn}
                      />
                    );
                  },
                  headerLeft: () => {
                    return <Left drawer={drawer} />;
                  },
                })}
                component={Home}
              />
              <Stack.Screen name="Detail" component={Detail} />
              <Stack.Screen name="Favourites" component={Favourites} />
              <Stack.Screen name="About" component={About} />
              <Stack.Screen name="Contact" component={Contact} />
            </Stack.Navigator>
          </DrawerLayoutAndroid>
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}
