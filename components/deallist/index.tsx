import React, {useContext, useMemo} from 'react';
import { useQuery} from '@apollo/client';
import DealCard from '../deallist/deal';
import {  Content} from 'native-base';
import {  View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import IDeal,{ IDeals, IDealsByCountryVars } from "../../api/interfaces"
import {GET_DEALS_BY_COUNTRY} from "../../api/queries"
import {Store} from '../../store'
interface IProps {

};
let fadingIndex = 0;
const DealList: React.FC<IProps> = () => {
    const { state, dispatch } = useContext(Store)
    const { loading, data } = useQuery<IDeals, IDealsByCountryVars>(
        GET_DEALS_BY_COUNTRY,
        { variables: { country: state.country.gloalId } }
        );

      return useMemo(() => {
          return (
              <FlatList<IDeal>
                data={data?.deals}
                renderItem={({ item }) => <DealCard deal={item} />}
                keyExtractor={item => item.itemId}
              />
          );
   
      }, [data?.deals]);
  }

export default DealList

/**
 * 
 *   
 * 
 * 
 * 
 * 
 * 
 * 
x
    return  <Content>
            {
                typeof data?.deals !== undefined ?
                    data && data.deals.map((deal, index) => {
                        return <DealCard key={index} deal={deal} />
                    })
                : null
                
            }
            </Content>

*/