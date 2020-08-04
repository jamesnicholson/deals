import React from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import Countries from '../countries';

interface IProps{
    countryName:String
}
const AppHeader : React.FC<IProps> = props => {
    
    return (<Header>
                <Left>
                    <Countries />
                </Left>
                    <Body>
                        <Title>Deals</Title>
                        <Subtitle>{props.countryName}</Subtitle>
                    </Body>
                <Right />
            </Header>);
  }

  export default AppHeader