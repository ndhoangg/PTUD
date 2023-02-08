import React, { Component } from "react";

import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Body__Item,
  Header__Button,
  Header__Description,
  Header__Description__Item,
  Header__Image,
  Header__Title,
  ProfileHeader,
  ProfileBody,
  Wrapper,
} from "../theme/profile.styles";
import {
  ItemHeader,
  ItemHeader__AvatarImage,
  ItemHeader__Name,
  ItemBody,
  ItemBody__ImageWrapper,
  ItemBody__ImageWrapper__1,
  ItemBody__ImageWrapper__2,
  ItemBody__ImageWrapper__Image,
  ItemBody__ImageWrapper__Image__2,
  ItemBody__Title,
  Line,
  ItemFooter,
  ItemFooter__Wrapper,
  ItemFooter__Text
} from "../theme/post.styles"
import Icon from 'react-native-vector-icons/AntDesign';

export default function Profile () {
  return (
    <ScrollView>
      <ProfileHeader>
        <Wrapper>
          <Header__Image
            source={require("../assets/avatar1.jpg")}
          ></Header__Image>
          <Header__Title>Triệu Quang Mạnh</Header__Title>
        </Wrapper>
        <Header__Description>
          <Header__Description__Item>128 bài viết</Header__Description__Item>
          <Header__Description__Item>
            3188 người theo dõi
          </Header__Description__Item>
          <Header__Description__Item>128 ảnh</Header__Description__Item>
        </Header__Description>
        <Header__Button title="Chỉnh sửa thông tin cá nhân"></Header__Button>
      </ProfileHeader>
      <ProfileBody>
        <Body__Item>
          <ItemHeader>
            <ItemHeader__AvatarImage
              source={require("../assets/avatar1.jpg")}
            />
            <ItemHeader__Name>Tên người dùng</ItemHeader__Name>
          </ItemHeader>

          <ItemBody>
            <Text>
              {
                "Nội dung post: Chúng ta sống trong cuộc đời này thì đều cần sống có trách nhiệm. Nó được hiểu là hoàn thành những  nghĩa vụ"
              }
            </Text>
            <ItemBody__ImageWrapper>
              <ItemBody__ImageWrapper__1>
                <ItemBody__ImageWrapper__Image
                  source={require("../assets/avatar1.jpg")}
                ></ItemBody__ImageWrapper__Image>
              </ItemBody__ImageWrapper__1>
              <ItemBody__ImageWrapper__2>
                <ItemBody__ImageWrapper__Image__2
                  source={require("../assets/avatar1.jpg")}
                ></ItemBody__ImageWrapper__Image__2>
                <ItemBody__ImageWrapper__Image__2
                  source={require("../assets/avatar1.jpg")}
                ></ItemBody__ImageWrapper__Image__2>
                <ItemBody__ImageWrapper__Image__2
                  source={require("../assets/avatar1.jpg")}
                ></ItemBody__ImageWrapper__Image__2>
              </ItemBody__ImageWrapper__2>
            </ItemBody__ImageWrapper>
            <ItemBody__Title>1,3k lượt thích</ItemBody__Title>
          </ItemBody>
          <Line></Line>
          <ItemFooter>
            <Wrapper>
              <ItemFooter__Wrapper>
                <Icon name="like2" size={24} color="#8e8e93"></Icon>
                <ItemFooter__Text>Thích</ItemFooter__Text>
              </ItemFooter__Wrapper>
              <ItemFooter__Wrapper>
                <Icon name="message1" size={24} color="#8e8e93"></Icon>
                <ItemFooter__Text>Bình luận</ItemFooter__Text>
              </ItemFooter__Wrapper>
              <ItemFooter__Wrapper>
                <Icon name="retweet" size={24} color="#8e8e93"></Icon>
                <ItemFooter__Text>Chia sẻ</ItemFooter__Text>
              </ItemFooter__Wrapper>
            </Wrapper>
          </ItemFooter>
          <Line></Line>
        </Body__Item>
      </ProfileBody>
    </ScrollView>
  );
}
