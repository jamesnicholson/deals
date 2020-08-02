import React, {useContext, useEffect} from 'react';
import { useQuery} from '@apollo/client';
import DealCard from '../deallist/deal';
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


      const List = () => { 
   
      }

return  <Content>
       {
            typeof data?.deals !== undefined ?
                data && data.deals.map((deal, index) => {
                    console.log
                    return <DealCard deal={deal} />
                })
            : null
       }
        </Content>

}
export default DealList