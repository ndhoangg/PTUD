import styled from 'styled-components';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from "react-native-paper";

export const FriendHeader = styled(View)`
  display: flex;
`
export const HeaderSearch = styled(Searchbar)`
  height: 32px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 30px;
  margin: 30px 10px 0;
  font-size: 12px;
`
export const FriendBody = styled(View)`
  display: flex;
  flex-direction: column;
  margin: 20px 10px 10px;
`
export const Friend__Title = styled(Text)`
  font-size: 28px;
  font-style: italic;
  font-weight: 300;
  color: #f55763;
  margin-bottom: 10px;
`
export const FriendBody__Item = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`
export const Item__Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Item__Avartar = styled(Image)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 5px;
`
export const Item__Info = styled(View)`
  display: flex;
`
export const Item__Info__Title = styled(Text)`
  font-size: 16px;
  font-weight: 600;

`
export const Item__Button = styled(Button)`
  height: 42px;
  background-color: #f55763;
  padding: 10px;
`
