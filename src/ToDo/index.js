import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  List,
  Form,
  Input,
  SearchButton,
  Box,
  Texto,
  Checkbox,
  CheckboxCheck,
  DeleteButton,
  Filtros,
  DefaultButton,
  DefaultText,
  EditButton,
  FinishButton,
} from "./styles";
import { SafeAreaView, View, Text, Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlus,
  faListUl,
  faTimes,
  faSortAlphaUp,
  faSortAlphaDown,
  faCheck,
  faTrash,
  faTasks,
  faCheckCircle,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalToDo from "../components/ModalToDo";
import Editar from "./Editar";
import uuid from "react-native-uuid";
import Toast from "react-native-toast-message";

export default function ToDo({}) {
  const [descricao, setDescricao] = useState("");
  const [todos, setTodos] = useState([]);
  const [config, setConfig] = useState(false);
  const [check, setCheck] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState({});
  const [buscar, setBuscar] = useState(false);

  const [filtroApenasFinalizados, setFiltroApenasFinalizados] = useState(false);

  useEffect(() => {
    async function load() {
      await AsyncStorage.getItem("config").then((res) => {
        if (res != null || res != undefined) {
          setConfig(JSON.parse(res));
        } else {
          setConfig(false);
        }
      });
      await AsyncStorage.getItem("ToDoList").then((res) => {
        if (res != null || res != undefined) {
          setTodos(JSON.parse(res));
        } else {
          setTodos([]);
        }
      });
    }
    load();
  }, [buscar]);

  async function criarTarefa() {
    if (descricao === "") {
      Toast.show({
        type: "error",
        text1: "Erro!",
        text2: "Digite uma tarefa antes de tentar cria-la",
      });
    } else {
      todos.push({
        tarefa: descricao,
        id: uuid.v4(),
        check: false,
        finished: false,
      });

      setDescricao("");
      setRefresh(!refresh);

      await AsyncStorage.setItem("ToDoList", JSON.stringify(todos));
    }
  }

  function handleDeletarTarefa(id) {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja excluir a tarefa?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            deletarTarefa(id);
          },
        },
      ],
      { cancelable: false }
    );
  }

  function handleFinalizarTarefa(id) {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja finalizar a tarefa?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            marcarFinished(id);
          },
        },
      ],
      { cancelable: false }
    );
  }

  async function deletarTarefa(id) {
    const index = todos.findIndex((tarefa) => tarefa.id == id);

    todos.splice(index, 1);
    setRefresh(!refresh);

    Toast.show({
      type: "success",
      text1: "Sucesso!",
      text2: "Tarefa deletada com sucesso",
    });

    await AsyncStorage.setItem("ToDoList", JSON.stringify(todos));
  }

  async function marcarCheck(id) {
    const index = todos.findIndex((tarefa) => tarefa.id == id);
    const selecionado = todos[index];
    if (selecionado) {
      selecionado.check = !selecionado.check;
    }

    await AsyncStorage.setItem("ToDoList", JSON.stringify(todos));
  }

  async function marcarFinished(id) {
    const index = todos.findIndex((tarefa) => tarefa.id == id);
    const selecionado = todos[index];
    if (selecionado) {
      selecionado.finished = !selecionado.finished;
    }
    setRefresh(!refresh);
    await AsyncStorage.setItem("ToDoList", JSON.stringify(todos));
  }

  async function marcarFinishedAll() {
    todos.forEach(async (item) => {
      if (item.check) {
        item.finished = true;
        setRefresh(!refresh);
        await AsyncStorage.setItem("ToDoList", JSON.stringify(todos));
        Toast.show({
          type: "success",
          text1: "Sucesso!",
          text2: "Tarefas selecionadas finalizadas com sucesso",
        });
      }
    });
  }

  function handleFinalizarTodas() {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja finalizar TODAS as tarefas selecionadas?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            marcarFinishedAll();
          },
        },
      ],
      { cancelable: false }
    );
  }

  async function apenasFinalizados() {
    let finalizados = [];

    todos.forEach(async (item) => {
      if (filtroApenasFinalizados === false && item.finished) {
        finalizados.push(item);
        setTodos(finalizados);
        setFiltroApenasFinalizados(true);
      } else if (filtroApenasFinalizados && item.finished) {
        setBuscar(!buscar);
        setFiltroApenasFinalizados(false);
        setRefresh(!refresh);
      } else {
        Toast.show({
          type: "error",
          text1: "Erro!",
          text2: "Não existe nenhum item finalizado",
        });
      }
    });
  }

  async function ordenar() {
    const ordenados = todos.sort(function (a, b) {
      if (a.tarefa.toLowerCase() < b.tarefa.toLowerCase()) return -1;
      if (a.tarefa.toLowerCase() > b.tarefa.toLowerCase()) return 1;
      return 0;
    });
    setTodos(ordenados);

    await AsyncStorage.setItem("config", JSON.stringify(true));
    await AsyncStorage.setItem("ToDoList", JSON.stringify(todos));
    setRefresh(!refresh);
    setBuscar(true);
  }

  async function ordenarContrario() {
    const ordenados = todos.sort(function (b, a) {
      if (a.tarefa.toLowerCase() < b.tarefa.toLowerCase()) return -1;
      if (a.tarefa.toLowerCase() > b.tarefa.toLowerCase()) return 1;
      return 0;
    });
    console.log(`ordenados`, ordenados);

    await AsyncStorage.setItem("config", JSON.stringify(false));
    await AsyncStorage.setItem("ToDoList", JSON.stringify(todos));
    setRefresh(!refresh);
    setBuscar(false);
  }

  async function marcarCheckAll() {
    todos.forEach(async (item) => {
      if (item) {
        item.check = true;
        setRefresh(!refresh);
        Toast.show({
          type: "success",
          text1: "Sucesso!",
          text2: "TODAS as tarefas selecionadas com sucesso",
        });
        await AsyncStorage.setItem("ToDoList", JSON.stringify(todos));
      } else {
        Toast.show({
          type: "error",
          text1: "Erro!",
          text2: "Não existe nenhum item",
        });
      }
    });
  }

  const renderItem = useCallback(
    ({ item, index }) => {
      const rightSwipe = () => {
        return (
          <View style={{ flexDirection: "row" }} key={item.id}>
            <DeleteButton
              onPress={() => {
                handleDeletarTarefa(item.id);
              }}
            >
              <FontAwesomeIcon icon={faTrash} size={15} color="#fff" />
            </DeleteButton>
            <EditButton
              enabled={item.finished ? false : true}
              onPress={() => {
                setEdit(true);
                setItem(item);
              }}
            >
              <FontAwesomeIcon icon={faPen} size={15} color="#fff" />
            </EditButton>
            <FinishButton
              enabled={item.finished ? false : true}
              onPress={() => {
                handleFinalizarTarefa(item.id);
              }}
            >
              <FontAwesomeIcon icon={faCheckCircle} size={15} color="#fff" />
            </FinishButton>
          </View>
        );
      };

      return (
        <Swipeable key={item.id} renderRightActions={rightSwipe}>
          <Box style={item.finished ? { backgroundColor: "#f9975d" } : {}}>
            {item.check ? (
              <CheckboxCheck
                disabled={item.finished}
                onPress={() => {
                  marcarCheck(item.id);
                  setCheck(!check);
                }}
              >
                <FontAwesomeIcon icon={faCheck} size={20} color="#B2EA70" />
              </CheckboxCheck>
            ) : (
              <Checkbox
                disabled={item.finished}
                onPress={() => {
                  marcarCheck(item.id);
                  setCheck(!check);
                }}
              />
            )}

            <Texto>
              {item.tarefa != undefined
                ? item.tarefa.length > 30
                  ? item.tarefa.substr(0, 30) + "..."
                  : item.tarefa
                : ""}
            </Texto>
          </Box>
        </Swipeable>
      );
    },
    [check, todos, refresh]
  );

  return (
    <Container>
      <Form>
        <Input
          placeholder="Digite a nova tarefa..."
          placeholderTextColor="#999"
          value={descricao}
          returnKeyLabel="Criar"
          returnKeyType="done"
          onChangeText={setDescricao}
          onSubmitEditing={() => {
            criarTarefa();
          }}
          keyboardAppearance="dark"
        />
        <SearchButton
          onPress={() => {
            criarTarefa();
          }}
        >
          <FontAwesomeIcon icon={faPlus} size={20} color="#444" />
        </SearchButton>
      </Form>
      <Filtros horizontal showsHorizontalScrollIndicator={false}>
        <DefaultButton
          onPress={() => {
            marcarCheckAll();
          }}
        >
          <FontAwesomeIcon icon={faTasks} size={17} color="#444" />
          <DefaultText>Selecionar todos</DefaultText>
        </DefaultButton>
        <DefaultButton
          onPress={() => {
            handleFinalizarTodas();
          }}
        >
          <FontAwesomeIcon icon={faCheckCircle} size={17} color="#444" />
          <DefaultText>Finalizar selecionados</DefaultText>
        </DefaultButton>
        <DefaultButton
          onPress={() => {
            apenasFinalizados();
          }}
        >
          {filtroApenasFinalizados ? (
            <>
              <FontAwesomeIcon icon={faTimes} size={17} color="#444" />
              <DefaultText>Remover filtro</DefaultText>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faListUl} size={17} color="#444" />
              <DefaultText>Apenas finalizados</DefaultText>
            </>
          )}
        </DefaultButton>
        {config ? (
          <DefaultButton
            style={{ marginRight: 10 }}
            onPress={() => {
              ordenarContrario();
            }}
          >
            <FontAwesomeIcon icon={faSortAlphaDown} size={17} color="#444" />
            <DefaultText>Ordenar</DefaultText>
          </DefaultButton>
        ) : (
          <DefaultButton
            style={{ marginRight: 10 }}
            onPress={() => {
              ordenar();
            }}
          >
            <FontAwesomeIcon icon={faSortAlphaUp} size={17} color="#444" />
            <DefaultText>Ordenar</DefaultText>
          </DefaultButton>
        )}
      </Filtros>
      <List
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <ModalToDo
        open={edit}
        close={() => {
          setEdit(false);
        }}
        titulo={"Editar tarefa"}
        content={
          <Editar
            setEdit={setEdit}
            setRefresh={setRefresh}
            refresh={refresh}
            item={item}
            todos={todos}
          />
        }
      />
    </Container>
  );
}
