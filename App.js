import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RecentExpenses from "./screen/RecentExpenses";
import AllExpense from "./screen/AllExpenses";
import ManageExpense from "./screen/ManageExpense";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarInactiveTintColor: GlobalStyles.colors.primary50,
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
        component={AllExpense}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
          }}
        >
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
