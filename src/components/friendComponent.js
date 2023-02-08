import React, { Component } from "react";
import { View, Text, Button, ImageBackground, Image, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight } from "react-native";
import { StatusBar } from "expo-status-bar";
//import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
//import styled from "styled-components";
import { color, Header } from "@rneui/base";
import { SearchBar } from "@rneui/themed";

import {
  style,
  Page,
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
  ButtonFollow,
  CountFriends,
  FriendBody__Item,
  FriendBody,
  Item__Avartar,
  Item__Info,
  Item__Button,
  Item__Wrapper,
  Item__Info__Title,
  Friend__Title,
  FriendHeader,
  HeaderSearch
} from '../theme/friend.styles';
import styled from "styled-components";
import reactDom from "react-dom";
//import { Header } from "@react-navigation/stack";

const Friends = [
  {
    id: '1',
    userName: 'Tran Viet Cuong',
    userImg: require('../assets/friends/friend-1.jpeg'),
    isFollow: 'Follow',
    countFriends:
      '3 mutal friends',
  },
  {
    id: '2',
    userName: 'Mai Ngoc Manh',
    userImg: require('../assets/friends/friend-2.jpeg'),
    isFollow: 'Follow',
    countFriends:
      '3 mutal friends',
  },
  {
    id: '3',
    userName: 'Trieu Quang Manh',
    userImg: require('../assets/friends/friend-3.jpeg'),
    isFollow: 'Follow',
    countFriends:
      '3 mutal friends',
  },
  {
    id: '4',
    userName: 'Cao Van Quan',
    userImg: require('../assets/friends/friend-4.jpeg'),
    isFollow: 'Follow',
    countFriends:
      '3 mutal friends',
  },
  {
    id: '5',
    userName: 'Nguyen Duc Hoang',
    userImg: require('../assets/friends/friend-5.jpeg'),
    isFollow: 'Follow',
    countFriends:
      '3 mutal friends',
  },
];


export default class Friend extends Component {

  render() {

    return (
      <>
        <FriendHeader>
          <HeaderSearch placeholder="Search" elevation={1} ></HeaderSearch>
        </FriendHeader>
        <FriendBody>
          <Friend__Title>Đề xuất</Friend__Title>
        {
            <FriendBody__Item>
              <Item__Wrapper>
                <Item__Avartar source={require('../assets/avatar1.jpg')}></Item__Avartar>
                <Item__Info>
                  <Item__Info__Title>
                    Triệu Quang Mạnh
                  </Item__Info__Title>
                  <Text>
                    3 bạn chung
                  </Text>
                </Item__Info>
              </Item__Wrapper>
              <Item__Button title="Follow"></Item__Button>
            </FriendBody__Item>
          }
          {
            <FriendBody__Item>
              <Item__Wrapper>
                <Item__Avartar source={require('../assets/avatar1.jpg')}></Item__Avartar>
                <Item__Info>
                  <Item__Info__Title>
                    Triệu Quang Mạnh
                  </Item__Info__Title>
                  <Text>
                    3 mutal friends
                  </Text>
                </Item__Info>
              </Item__Wrapper>
              <Item__Button title="Follow"></Item__Button>
            </FriendBody__Item>
          }
          {
            <FriendBody__Item>
              <Item__Wrapper>
                <Item__Avartar source={require('../assets/avatar1.jpg')}></Item__Avartar>
                <Item__Info>
                  <Item__Info__Title>
                    Triệu Quang Mạnh
                  </Item__Info__Title>
                  <Text>
                    3 mutal friends
                  </Text>
                </Item__Info>
              </Item__Wrapper>
              <Item__Button title="Follow"></Item__Button>
            </FriendBody__Item>
          }
        </FriendBody>
      </>
    );
  }
}


