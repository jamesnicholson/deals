import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Container, Content,Text } from "native-base";

import {Store} from '../../store'
import Countries from '../countries'
import DealList from '../deallist'
const Feed = () => {

  const { state, dispatch } = useContext(Store)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Content padder>
          <Text style={styles.sectionTitle}>Country</Text>
          <Text style={styles.sectionTitle}>{state.country.name}</Text>
          <Text style={styles.sectionDescription}>{state.country.gloalId}</Text>
          <Countries />
          <DealList />
        </Content>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: "#fff",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "#000",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "#000",
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: "#000",
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Feed;
