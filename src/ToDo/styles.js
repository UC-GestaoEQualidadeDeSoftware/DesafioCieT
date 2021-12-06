import styled, { css } from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.KeyboardAvoidingView`
  /* flex: 1; */
  align-items: center;
  background-color: #f5f5f5;
  margin-bottom: 130px;
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 0px 50px;
  margin-top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #ddd;
  border-right-width: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: 0px 20px;
  background-color: #fff;
  font-size: 16px;
  color: #444;
  height: 50px;
  border-radius: 10px;
  width: 100%;
`;

export const SearchButton = styled.TouchableOpacity`
  border-width: 1px;
  border-left-width: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-color: #ddd;
  padding: 0px 10px;
  background-color: #fff;
  height: 50px;
  justify-content: center;
  border-radius: 10px;
`;

export const List = styled.FlatList`
  /* flex: 1; */
  /* background-color: purple; */
  padding: 0px 30px;
  margin-top: 20px;
  /* margin-bottom: 100px; */
  width: 100%;
  /* height: 100%; */
`;

export const Box = styled.View`
  border: 1px solid #eee;
  background-color: #fff;
  height: 70px;
  border-radius: 10px;
  align-items: center;
  padding: 5px 10px;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const Filtros = styled.ScrollView`
  border: 1px solid #eee;
  background-color: #fff;
  height: 40px;
  width: 85%;
  border-radius: 5px;
  padding: 5px 20px 5px 0px;
  /* margin-right: 10px; */
  margin-top: 5px;
  /* align-items: center; */
  /* margin-bottom: 5px; */
  /* justify-content: space-between; */
`;

export const Texto = styled.Text`
  font-size: 20px;
`;

export const DefaultText = styled.Text`
  margin-left: 5px;
  font-size: 13px;
`;

export const Checkbox = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  margin-right: 10px;
  border-radius: 5px;
`;

export const DefaultButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const CheckboxCheck = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  margin-right: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const DeleteButton = styled(RectButton)`
  width: 81px;
  height: 70px;
  align-items: center;
  justify-content: center;
  background-color: #ff6b6b;
  margin-bottom: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #eee;
`;

export const EditButton = styled(RectButton)`
  width: 81px;
  height: 70px;
  align-items: center;
  justify-content: center;
  background-color: #98bae7;
  margin-bottom: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #eee;
`;

export const FinishButton = styled(RectButton)`
  width: 81px;
  height: 70px;
  align-items: center;
  justify-content: center;
  background-color: #f9975d;
  margin-bottom: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #eee;
`;
