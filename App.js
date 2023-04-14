import { StatusBar } from "expo-status-bar";
import Root from "./src/navigators/Root";
export default function App() {
  return (
    <>
      <Root />
      <StatusBar style="auto" />
    </>
  );
}
