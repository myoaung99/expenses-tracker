import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import RecentExpenses from "./screen/RecentExpenses";
import AllExpense from "./screen/AllExpenses";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerTitleAlign: "center",
          }}
        >
          <Tab.Screen
            name="RecentExpenses"
            component={RecentExpenses}
            options={{
              title: "Recent Expenses",
              tabBarLabel: "Recent",
              tabBarIcon: ({ color, size }) => {
                return (
                  <MaterialCommunityIcons
                    name="timer-sand"
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="AllExpenses"
            options={{
              title: "All Expenses",
              tabBarLabel: "All Expenses",
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="calendar" size={size} color={color} />;
              },
            }}
            component={AllExpense}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
