import React, { Component } from "react";

import { View, Text, Button, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components";

export default class Login extends Component {
  render() {
    return (
      <>
        <StatusBar style="auto"></StatusBar>
        <ImageBackgrounds source={require("../assets/brackgound-login.jpeg")}>
          <Header>
            <TextTitle>Find new friends nearby</TextTitle>
            <LogoImage source={require('../assets/logo.png')}></LogoImage>
            <WrapperColumn primary>
              <LinearGradients colors={['#F78361', '#F54B64']}>
                <Button title="Đăng kí" color={'white'}></Button>
              </LinearGradients>
              <LinearGradients colors={['#F78361', '#F54B64']}>
                <Button title="Đăng nhập" color={'white'}></Button>
              </LinearGradients>
            </WrapperColumn>
            <WrapperRow>
              <Icon name="facebook" size={20}></Icon>
              <Icon name="instagram" size={20}></Icon>
              <Icon name="twitter" size={20}></Icon>
            </WrapperRow>
          </Header>
        </ImageBackgrounds>
      </>
    );
  }
}

const Header = styled(View)`
  padding: 30px;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const TextTitle = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const WrapperRow = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 30%;
`;
const WrapperColumn = styled(View)`
  display: flex;
  flex-direction: column;
`
const ImageBackgrounds = styled(ImageBackground)`
  flex: 1;
`;
const LogoImage = styled(Image)`
  width: 300px;
  height: 200px;
`
const LinearGradients = styled(LinearGradient)`
  border-radius: 30px;
  min-width: 200px;
  margin-bottom: 15px;
`