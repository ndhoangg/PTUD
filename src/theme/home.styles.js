import styled from 'styled-components';
import { ScrollView, StyleSheet, View, Image, Text, TextInput } from 'react-native';
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
    justify-content: space-between;
`
export const HeaderUpload = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 10px 0;
`
export const HeaderInput = styled.TextInput`
    height: 32px;
    margin: 10px;
    font-size: 16px;
    font-style: italic;
`
export const HeaderSearch = styled(Searchbar)`
    height: 32px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 30px;
    margin: 30px 10px 0;
    font-size: 12px;
`
export const ScrollViewWrapper = styled(ScrollView)`
`
export const PostItem = styled(View)`
    margin: 10px;
`