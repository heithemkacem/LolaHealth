import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { ScreenHeight } from "./../util/shared";
const { white, grayformodel, darkgray, black } = colors;
export const styles = StyleSheet.create({
  //Forget Password Model Styles
  modalView: {
    flex: 1,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: white,
    height: ScreenHeight * 0.28,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 1,
  },
  centeredView: {
    flex: 1,
    width: "100%",
    height: ScreenHeight * 1,
  },
  blurEffect: {
    width: "100%",
    height: ScreenHeight * 0.72,
    zIndex: 0,
  },

  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: grayformodel,
    position: "absolute",
    right: 20,
    top: 15,
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

  //Mail Recived Model Styles
  mailCenteredView: {
    flex: 1,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: white,
    height: ScreenHeight * 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bigText: {
    padding: 15,
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: black,
  },
  bigTextCenter: {
    padding: 15,
    textAlign: "center",
    fontWeight: 700,
    fontSize: 22,
    color: black,
  },
  regularText: {
    color: darkgray,
    fontWeight: 500,
    textAlign: "center",
    fontSize: 15,
  },
  mt20: {
    marginTop: 20,
  },
  imageStyle: {
    top: "-14%",
  },
  mailModalView: {
    padding: 15,
    top: "-22%",
  },
});
