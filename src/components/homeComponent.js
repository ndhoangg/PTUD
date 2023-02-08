import React, { Component, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { Button, Searchbar, DefaultTheme } from "react-native-paper";
import { TabActions, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";

import {
  ScrollViewWrapper,
  PostItem,
  HeaderSearch,
  Wrapper,
  HeaderUpload,
  HeaderInput,
} from "../theme/home.styles";

import {
  ItemHeader,
  ItemBody,
  ItemFooter,
  ItemHeader__AvatarImage,
  ItemHeader__Name,
  ItemBody__Title,
  ItemBody__ImageWrapper,
  ItemBody__ImageWrapper__1,
  ItemBody__ImageWrapper__2,
  ItemBody__ImageWrapper__Image,
  ItemBody__ImageWrapper__Image__2,
  ItemFooter__Wrapper,
  ItemFooter__Text,
  Line,
} from "../theme/post.styles";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View>
        <HeaderSearch placeholder="Search" elevation={1}></HeaderSearch>
        <HeaderUpload>
          <HeaderInput placeholder="Bạn đang nghĩ gì?"></HeaderInput>
          <ItemHeader__AvatarImage source={require("../assets/avatar1.jpg")} />
        </HeaderUpload>
      </View>
      <ScrollViewWrapper>
        {
          <PostItem>
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
          </PostItem>
        }
        {
          <PostItem>
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
          </PostItem>
        }
      </ScrollViewWrapper>
    </ScrollView>
  );
}
