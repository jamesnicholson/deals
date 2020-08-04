import React, {useEffect, useContext} from 'react';
import { useQuery} from '@apollo/client';
import { Container, Button, Content, ActionSheet, Text } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons'
import {GET_COUNTRIES} from "../../api/queries"
import {ICountries, ICountry, ICountryActionSheet} from "../../api/interfaces"
import {Store} from '../../store'

const Countries = () => {
  const ActionSheetCountryList: ICountryActionSheet[] = [];
  const { state, dispatch } = useContext(Store)
  const { loading, data } = useQuery<ICountries>(
      GET_COUNTRIES
    );
  const setCountry = (country: ICountry) => {
    dispatch({
        type:"UPDATE_COUNTRY",
        payload:{
          country
        }
    })
  }
  const pressHandler = () => {
    if(ActionSheetCountryList !== []){
       updateCountryList()
    }
    ActionSheet.show({
        options: ActionSheetCountryList,
        title: "Select a Region"
      },
      buttonIndex => {
        if(buttonIndex){
            const id = ActionSheetCountryList[buttonIndex].id;
            if(typeof data?.countries !== undefined){ 
              const selectedCountry: ICountry =  data?.countries.find(country => country.id == id) ?? state.country
              setCountry(selectedCountry)
            }
        }
    })
  }
  const updateCountryList = () => { 
    if(typeof data?.countries !== undefined){
      {data && data.countries.map((country, index) => {
          const countryActionSheet: ICountryActionSheet =  {text: country.name, id:country.id};
          ActionSheetCountryList[index] = countryActionSheet
        }
      )}
    }
  }
  useEffect(()=>{
    updateCountryList()
  },[data])

  return(<Icon 
            name="earth" 
            style={{ fontSize: 30, color: "#000" }} 
            onPress={() => pressHandler()} />)
}
export default Countries