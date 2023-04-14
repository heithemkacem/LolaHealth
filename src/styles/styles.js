import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { ScreenHeight } from "./../util/shared";
const { white, grayformodel } = colors;
export const styles = StyleSheet.create({
  //Model Styles
  centeredView: {
    flex: 1,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: white,
    height: ScreenHeight * 0.28,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: grayformodel,
    position: "absolute",
    right: 20,
    top: 10,
  },
  iconStyle: {
    display: "flex",
    alignSelf: "center",
    marginTop: 10,
  },
  m20: {
    margin: 20,
  },
  p15: {
    padding: 15,
  },
  mt15: {
    marginTop: 15,
  },
});
