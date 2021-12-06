import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Text,
  TextInput,
} from "react-native";

import IconFA from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

IconFA.loadFont();

export default function Editar({ item, setRefresh, refresh, todos, setEdit }) {
  const [descricao, setDescricao] = useState(item.tarefa);

  async function salvarEdicao(id) {
    const index = todos.findIndex((tarefa) => tarefa.id == id);
    const selecionado = todos[index];
    if (selecionado) {
      selecionado.tarefa = descricao;
      setRefresh(!refresh);
      setEdit(false);
    }

    await AsyncStorage.setItem("ToDoList", JSON.stringify(todos));
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor="#999"
        value={descricao}
        returnKeyLabel="Criar"
        returnKeyType="done"
        onChangeText={setDescricao}
        onSubmitEditing={() => {
          salvarEdicao(item.id);
        }}
        keyboardAppearance="dark"
      />
      <TouchableOpacity
        style={styles.editar}
        onPress={() => {
          salvarEdicao(item.id);
        }}
      >
        <Text style={styles.text}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  editar: {
    alignSelf: "flex-end",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B2EA70",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  text: {
    color: "#fff",
    fontWeight: "500",
  },
});
