import React, {useContext, useEffect} from 'react';
import { Image } from 'react-native';
import {  Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import IDeal, {IDeals, IDealsByCountryVars } from "../../api/interfaces"

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
                <Image source={{uri: props.deal.image225}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
        </Card>
}
export default DealCard