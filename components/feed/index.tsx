import React, {useEffect, useContext} from 'react';
import { useQuery} from '@apollo/client';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {GET_COUNTRIES} from "../../api/queries"
import {Countries} from "../../api/interfaces"
import {Store} from '../../store'

const Feed = () => {

  const { loading, data } = useQuery<Countries>(
    GET_COUNTRIES
  );

  const { state, dispatch } = useContext(Store)
  const name = state ? "Loading" :  state.payload.country.name;
  const gloalId = state ? "Loading" :  state.payload.country.gloalId;
  
  function setCountry(){
    dispatch({
        type:"SET_COUNTRY",
        payload:{
          country: {
            gloalId: "EBAY-DE",
            id: "77",
            name: "eBay Germany"
          }
        }
    })
  }
  useEffect(() => {
    console.log(state.country.name)
  },[state])


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{state.country.name}</Text>
              <Text style={styles.sectionDescription}>{state.country.gloalId}</Text>
              
                <Button
                  onPress={()=> setCountry()}
                  title="Change Country"
                  color="#841584"
                  />
           
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Feed;
