import React from "react";
import { Modal, Pressable, View } from "react-native";
import RegularText from "../texts/RegularText";
import BigText from "../texts/BigText";
import { colors } from "../../styles/colors";
import { BlurView } from "expo-blur";
import { styles } from "../../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RegularButton from "../buttons/RegularButton";
import ImageComponent from "../imageComponents/ImageComponent";
const MailRecivedModel = ({ modalVisible, setModalVisible }) => {
  const { white, black, grayformodel, darkgray } = colors;

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
        <View style={styles.mailCenteredView}>
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

          <View>
            <ImageComponent
              src={require("./../../assets/icon.png")}
              height={151}
              width={176}
              style={styles.imageStyle}
            />
            <View style={styles.mailModalView}>
              <BigText style={styles.bigText} text="Email envoyé" />
              <RegularText
                style={styles.regularText}
                text="Les informations de récupération de mot de passe vous on été envoyé sur votre email Laure.hvk@exemple.fr"
              />
              <View style={styles.p15}>
                <RegularButton title="Retourner à la page de connexion" />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </BlurView>
  );
};

export default MailRecivedModel;
