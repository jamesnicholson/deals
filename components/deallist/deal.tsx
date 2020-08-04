import React, {useContext, useEffect} from 'react';
import { Image, StyleSheet } from 'react-native';
import {  Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import IDeal from "../../api/interfaces"

interface IProps{
    deal:IDeal
}

const DealCard : React.FC<IProps> = props => {
    console.log(props.deal.title)
    return <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: props.deal.image225}} />
                    <Body>
                    <Text>{props.deal.title}</Text>
                    <Text note>GeekyAnts</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: props.deal.image225}} style={styles.img}/>
            </CardItem>
        </Card>
}
const styles = StyleSheet.create({
    img: {
        height: 200, 
        width: '100%', 
        flex: 1
    }
  });
export default DealCard
