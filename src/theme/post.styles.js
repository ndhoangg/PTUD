import styled from 'styled-components';
import { ScrollView, StyleSheet, View, Image, Text, TextInput } from 'react-native';
import { Searchbar } from "react-native-paper";

export const Line = styled(View)`
    width: 100%;
    height: 1px;
    margin: 10px 0;
    background-color: #8e8e93;
`
export const ItemHeader = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-height: 42px;
`
export const ItemHeader__AvatarImage = styled(Image)`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 10px;
`
export const ItemHeader__Name = styled(Text)`
    font-weight: 600;
`
export const ItemBody = styled(View)`
    display: flex;
    flex-direction: column;
`
export const ItemBody__ImageWrapper = styled(View)`
    display: flex;
    flex-direction: row;
    max-height: 250px;
    margin: 10px 0;
`
export const ItemBody__ImageWrapper__1 = styled(View)`
    flex: 3;
    margin-right: 10px;
`
export const ItemBody__ImageWrapper__2 = styled(View)`
    flex: 2;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const ItemBody__ImageWrapper__Image = styled(Image)`
    width: 100%;
`
export const ItemBody__ImageWrapper__Image__2 = styled(Image)`
    width: 100%;
    height: 70px;
`
export const ItemBody__Title = styled(Text)`
    margin: 0 10px;
    color: #8e8e93;
`

export const ItemFooter = styled(View)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #8e8e93;
`
export const ItemFooter__Wrapper = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 24px;
    margin: 0 10px;
    color: #8e8e93;
`
export const ItemFooter__Text = styled(Text)`
    font-size: 16px;
    font-weight: 500;
    margin-left: 5px;
    color: #8e8e93;
`