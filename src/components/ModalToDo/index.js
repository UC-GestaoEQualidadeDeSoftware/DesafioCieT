import React from "react";
import { View, TouchableOpacity, StyleSheet, Modal, Text } from "react-native";

import IconFA from "react-native-vector-icons/FontAwesome";

IconFA.loadFont();

export default function ModalToDo({
  children,
  content,
  open,
  close,
  titulo,
  zindex,
}) {
  return (
    <>
      <Modal
        onRequestClose={() => close}
        visible={open}
        transparent
        animationType="slide"
      >
        <View
          style={{
            justifyContent: "center",
            // alignItems: "center",
            alignSelf: "center",
            flex: 1,
            zIndex: zindex ? zindex : 25,
            maxHeight: "100%",
            minHeight: "10%",
            marginTop: 70,
            width: "70%",
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.closeModal}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>{titulo}</Text>
              <TouchableOpacity onPress={close}>
                <IconFA name="times" size={20} color="#FF6D6D" />
              </TouchableOpacity>
            </View>
            <View style={styles.conteudo}>
              {content}
              {children}
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: "column",
  },
  closeModal: {
    alignItems: "flex-end",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  conteudo: {
    borderTopWidth: 1,
    borderTopColor: "#f3f3f3",
    maxHeight: "90%",
    padding: 15,
  },
});
