import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {
  ChatList__Body,
  ChatList__Header,
  ChatList__Item,
  Header__Title,
  Item__Avartar,
  Item__Description,
  Item__Info,
  Item__Time,
  Item__Title,
  Item__Wrapper,
  Line,
} from "../theme/chatList.styles";

export default function ChatList() {
  return (
    <>
      <ChatList__Header>
        <Header__Title>Tin nhắn</Header__Title>
        <Icon name="plus" size={24}></Icon>
      </ChatList__Header>
      <ChatList__Body>
        <Line></Line>
        <ChatList__Item>
          <Item__Avartar
            source={require("../assets/avatar1.jpg")}
          ></Item__Avartar>
          <Item__Info>
            <Item__Wrapper>
              <Item__Title>Triệu Quang Mạnh</Item__Title>
              <Item__Description>Hôm nay có đi học không?</Item__Description>
            </Item__Wrapper>
            <Item__Time>06:58AM</Item__Time>
          </Item__Info>
        </ChatList__Item>
        <Line></Line>
        <ChatList__Item>
          <Item__Avartar
            source={require("../assets/avatar1.jpg")}
          ></Item__Avartar>
          <Item__Info>
            <Item__Wrapper>
              <Item__Title>Triệu Quang Mạnh</Item__Title>
              <Item__Description>Hôm nay có đi học không?</Item__Description>
            </Item__Wrapper>
            <Item__Time>06:58AM</Item__Time>
          </Item__Info>
        </ChatList__Item>
        <Line></Line>
        <ChatList__Item>
          <Item__Avartar
            source={require("../assets/avatar1.jpg")}
          ></Item__Avartar>
          <Item__Info>
            <Item__Wrapper>
              <Item__Title>Triệu Quang Mạnh</Item__Title>
              <Item__Description>Hôm nay có đi học không?</Item__Description>
            </Item__Wrapper>
            <Item__Time>06:58AM</Item__Time>
          </Item__Info>
        </ChatList__Item>
        <Line></Line>
      </ChatList__Body>
    </>
  );
}
