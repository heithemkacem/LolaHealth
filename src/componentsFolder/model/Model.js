import React from "react";
import { Modal, Pressable, View } from "react-native";

import BigText from "../texts/BigText";
import { Formik } from "formik";
import { ForgetSchema } from "../../util/validationSchemas";
import StyledTextInput from "../input/StyledTextInput";
import RegularButton from "../buttons/RegularButton";
import { colors } from "../../styles/colors";
import { BlurView } from "expo-blur";
import { styles } from "../../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Model = ({ modalVisible, setModalVisible }) => {
  const { white, black, grayformodel } = colors;

  return (
    <BlurView>
      <Modal
        //make a blur background
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
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
              validationSchema={ForgetSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
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
                    errors={touched.email && errors.email}
                  />

                  {!isSubmitting && (
                    <RegularButton
                      style={styles.mt15}
                      onPress={handleSubmit}
                      title="Envoyer un code"
                    ></RegularButton>
                  )}
                  {isSubmitting && (
                    <Button disabled={true}>
                      <ActivityIndicator
                        size="small"
                        color={white}
                      ></ActivityIndicator>
                    </Button>
                  )}
                </View>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
    </BlurView>
  );
};

export default Model;
