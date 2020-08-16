import React, {useContext, useMemo, useEffect, useState} from 'react';
import { useQuery} from '@apollo/client';
import DealCard from '../deallist/deal';
import {  Content} from 'native-base';
import {  View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import IDeal,{ IDeals, IDealsVars } from "../../api/interfaces"
import {GET_DEALS} from "../../api/queries"
import {Store, initialState} from '../../store'
interface IProps {
};
const DealList: React.FC<IProps> = () => {
    const { state, dispatch } = useContext(Store)
    const { loading, data, fetchMore } = useQuery<IDeals, IDealsVars>(
        GET_DEALS,
          { variables: { 
              country: state.country.gloalId,
              limit: 10,
              offset: 0
            } 
          }
        );

      return useMemo(() => {
          return (
              <FlatList<IDeal>
                data={ data?.deals}
                renderItem={({ item }) => <DealCard deal={item} />}
                keyExtractor={item => item.itemId}
                onEndReached={()=>{
                  console.log( data?.deals.length)
                  fetchMore({
                    query: GET_DEALS,
                    variables: {
                      country: state.country.gloalId,
                      offset: data?.deals.length,
                      limit: 10
                    },
                    updateQuery: (prev: IDeals, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      console.log(fetchMoreResult)
                      return Object.assign({}, prev, {
                        deals: [...prev?.deals, ...fetchMoreResult.deals]
                      })
                    } 
                  })
                }}
              />
          );
      }, [data?.deals]);
  }
export default DealList