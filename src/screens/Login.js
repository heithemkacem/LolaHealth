import React, { useState } from "react";
import { Button, View, ActivityIndicator, Text } from "react-native";
import MainContainer from "../componentsFolder/containers/MainContainer";
import Logo from "../componentsFolder/imageComponents/Logo";
import StyledTextInput from "../componentsFolder/input/StyledTextInput";
import { Formik } from "formik";
import { LoginSchema } from "../util/validationSchemas";
import PressableText from "../componentsFolder/texts/PressableText";
import RegularButton from "../componentsFolder/buttons/RegularButton";
import ColumnContainer from "../componentsFolder/containers/ColumnContainer";
import { colors } from "../styles/colors";
import { ScreenHeight } from "../util/shared";
import Model from "../componentsFolder/model/Model";
const Login = () => {
  const { black, white } = colors;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <MainContainer>
      <View style={{ height: ScreenHeight * 0.88 }}>
        <Logo src={require("../assets/icon.png")} />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
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
            <>
              <StyledTextInput
                label={"Adresse email professionelle"}
                icon={"email"}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                errors={touched.email && errors.email}
              />
              <StyledTextInput
                label={"Mot de passe"}
                icon={"email"}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                isPassword={true}
                onChangeText={handleChange("password")}
                value={values.password}
                onFocus={() => han}
                onBlur={handleBlur("password")}
                errors={touched.password && errors.password}
              />
              <PressableText onPress={() => setModalVisible(true)}>
                Mot de passe oublié ?
              </PressableText>
              {!isSubmitting && (
                <RegularButton
                  style={{ marginTop: 20 }}
                  onPress={handleSubmit}
                  title="Se connecter"
                  icon="arrow-right"
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
            </>
          )}
        </Formik>
      </View>
      <View style={{ bottom: 10 }}>
        <ColumnContainer>
          <PressableText>Pas encore membre ? </PressableText>
          <PressableText style={{ color: black, marginTop: 5 }}>
            Découvrez comment le devenir
          </PressableText>
        </ColumnContainer>
      </View>
      <Model modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </MainContainer>
  );
};

export default Login;
