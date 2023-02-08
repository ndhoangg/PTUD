import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Chat__Header,
  Header__Title,
  Header__Avartar,
  Chat__Body,
  Chat__Message__1,
  Chat__Message__2,
  Line,
  Chat__Message__Title__1,
  Chat__Message__Title__2,
  Chat__Footer,
  Chat__Input,
  Chat__Input__Wrapper,
} from "../theme/chat.styles";

export default function Chat() {
  return (
    <>
      <Chat__Header>
        <View></View>
        <Header__Title>Triệu Quang Mạnh</Header__Title>
        <Header__Avartar
          source={require("../assets/avatar1.jpg")}
        ></Header__Avartar>
      </Chat__Header>
      <Line></Line>
      <Chat__Body>
        <Chat__Message__1>
          <Chat__Message__Title__1>
            Hôm nay có đi học không?
          </Chat__Message__Title__1>
        </Chat__Message__1>
        <Chat__Message__2>
          <Chat__Message__Title__2>Có chứ</Chat__Message__Title__2>
        </Chat__Message__2>
      </Chat__Body>
      <Chat__Footer>
        <Chat__Input placeholder="Nhập tin nhắn"></Chat__Input>
        <Chat__Input__Wrapper><Icon name="rocket1" size={24}></Icon></Chat__Input__Wrapper>
      </Chat__Footer>
    </>
  );
}
