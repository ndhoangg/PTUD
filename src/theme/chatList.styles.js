import styled from 'styled-components';
import { ScrollView, StyleSheet, View, Image, Text, TextInput } from 'react-native';
import { Searchbar } from "react-native-paper";

const Line = styled(View)`
    width: 100%;
    height: 1px;
    background-color: #8e8e93;
`
const ChatList__Header = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px 10px 20px;
`
const Header__Title = styled(Text)`
    font-size: 28px;
    font-weight: 300;
    font-style: italic;
    color: #f55763;
`
const ChatList__Body = styled(ScrollView)`
    display: flex;
    flex-direction: column;
`
const ChatList__Item = styled(View)`
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Item__Avartar = styled(Image)`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
`
const Item__Info = styled(View)`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
`
const Item__Wrapper = styled(View)`
    display: flex;
    flex-direction: column;
`
const Item__Title = styled(Text)`
    font-size: 16px;
    font-style: italic;
    margin-bottom: 4px;
`
const Item__Description = styled(Text)`
    font-style: italic;
`
const Item__Time = styled(Text)`
    font-style: italic;
    color: #343b4b;
`

export {
    ChatList__Header,
    Header__Title,
    ChatList__Body,
    ChatList__Item,
    Item__Avartar,
    Item__Info,
    Item__Title,
    Item__Description,
    Item__Time,
    Item__Wrapper,
    Line
}