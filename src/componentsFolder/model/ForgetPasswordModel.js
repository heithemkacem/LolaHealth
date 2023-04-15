import React, { useState } from "react";
import {
  Modal,
  Pressable,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import BigText from "../texts/BigText";
import { Formik } from "formik";
import { ForgetSchema } from "../../util/validationSchemas";
import StyledTextInput from "../input/StyledTextInput";
import RegularButton from "../buttons/RegularButton";
import { colors } from "../../styles/colors";
import { styles } from "../../styles/styles";
import MailRecivedModel from "./MailRecivedModel";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const ForgetPasswordModel = ({ modalVisible, setModalVisible }) => {
  const [mailRecivedModalVisible, setMailRecivedModalVisible] = useState(false);
  const { white, black, grayformodel } = colors;

  return (
    <>
      <Modal
        //make a blur background
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <BlurView intensity={90} tint="dark" style={styles.blurEffect} />
          <View style={styles.modalView}>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.closeButton}
            >
              <MaterialCommunityIcons
                name="close"
                size={19}
                color={black}
                style={styles.iconStyle}
              />
            </Pressable>
            <View style={styles.m20}>
              <BigText style={styles.p15} text="Mot de passe oublié ?" />
              <Formik
                initialValues={{ email: "" }}
                //validationSchema={ForgetSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setMailRecivedModalVisible(true);
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  isSubmitting,
                  errors,
                  touched,
                }) => (
                  <View style={styles.p15}>
                    <StyledTextInput
                      label={"Email"}
                      icon={"email"}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      //errors={touched.email && errors.email}
                    />

                    {!isSubmitting && (
                      <RegularButton
                        style={styles.mt15}
                        onPress={handleSubmit}
                        title="Envoyer un code"
                      ></RegularButton>
                    )}
                    {isSubmitting && (
                      <RegularButton disabled={true} style={styles.mt15}>
                        <ActivityIndicator
                          size="small"
                          color={white}
                        ></ActivityIndicator>
                      </RegularButton>
                    )}
                  </View>
                )}
              </Formik>
            </View>
            <View />
          </View>
        </View>
      </Modal>
      <MailRecivedModel
        modalVisible={mailRecivedModalVisible}
        setModalVisible={setMailRecivedModalVisible}
      />
    </>
  );
};

export default ForgetPasswordModel;
