import styled from 'styled-components';
import { ScrollView, StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';
import { Searchbar } from "react-native-paper";

export const Line = styled(View)`
    width: 100%;
    height: 1px;
    margin: 10px 0;
    background-color: #8e8e93;
`
export const Wrapper = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`
export const ProfileHeader = styled(View)`
    display: flex;
    flex-direction: column;
    margin: 30px 10px 10px;
`
export const Header__Image = styled(Image)`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`
export const Header__Title = styled(Text)`
    height: 32px;
    margin: 10px 10px 0;
    font-size: 22px;
    font-weight: 400;
    font-style: italic;
`
export const Header__Description = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
`
export const Header__Description__Item = styled(Text)`
`
export const Header__Button = styled.Button`
    color: black;
`
export const ProfileBody = styled(ScrollView)`
    display: flex;
    flex-direction: column;
`
export const Body__Item = styled(View)`
    margin: 10px;
`