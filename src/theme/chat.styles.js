import styled from 'styled-components';
import { ScrollView, StyleSheet, View, Image, Text, TextInput } from 'react-native';
import { Searchbar } from "react-native-paper";

const Line = styled(View)`
    width: 100%;
    height: 1px;
    background-color: black;
`
const Chat__Header = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 10px 10px;
`
const Header__Title = styled(Text)`
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
`
const Header__Avartar = styled(Image)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const Chat__Body = styled(ScrollView)`
    display: flex;
    flex-direction: column;
    flex: 1;
`
const Chat__Message__1 = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex: 1;
    margin-top: 10px;
    margin-right: 10px;
`
const Chat__Message__2 = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex: 1;
    margin-top: 10px;
    margin-left: 10px;
`
const Chat__Message__Title__1 = styled(Text)`
    padding: 10px;
    background-color: pink;
`
const Chat__Message__Title__2 = styled(Text)`
    padding: 10px;
    background-color: gray;
`
const Chat__Footer = styled(View)`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 10px;
    align-items: center;
`
const Chat__Input = styled(TextInput)`
    flex: 1;
    height: 40px;
    background-color: pink;
    border-radius: 8px;
    padding: 0 10px;
`
const Chat__Input__Wrapper = styled(View)`
    position: absolute;
    top: 8px;
    right: 10px;
`

export {
    Chat__Header,
    Chat__Body,
    Header__Title,
    Header__Avartar,
    Chat__Message__1,
    Chat__Message__2,
    Chat__Message__Title__1,
    Chat__Message__Title__2,
    Chat__Footer,
    Chat__Input,
    Chat__Input__Wrapper,
    Line
}