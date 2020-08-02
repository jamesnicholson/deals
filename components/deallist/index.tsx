import React, {useContext, useEffect} from 'react';
import { useQuery} from '@apollo/client';
import { Image } from 'react-native';
import {  Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {IDeals, IDealsByCountryVars } from "../../api/interfaces"
import {GET_DEALS_BY_COUNTRY} from "../../api/queries"
import {Store} from '../../store'
const DealList = () => {
    const { state, dispatch } = useContext(Store)

    const { loading, data } = useQuery<IDeals, IDealsByCountryVars>(
        GET_DEALS_BY_COUNTRY,
        { variables: { country: state.country.gloalId } }
      );

      useEffect(()=> {
            console.log(state.country.name)
            console.log(data)
      }, [data])



return  <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'Image URL'}} />
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>

}
export default DealList