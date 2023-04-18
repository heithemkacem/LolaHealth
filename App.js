import { StatusBar } from "expo-status-bar";
import Root from "./src/navigators/Root";
import { View } from "react-native";
import { colors } from "./src/styles/colors";
export default function App() {
  return (
    <>
      <Root />
      <StatusBar style="auto" />
    </>
  );
}
