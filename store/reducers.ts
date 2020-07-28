
import {Country} from '../api/interfaces'
import {ActionType} from '../store/types'
 type AppState = {
    country: Country  
}
export const appState = {
    country: {
      gloalId: "EBAY-AU",
      id: "15",
      name:" eBay Australia"
    }
  }
  
export const countryReducer = (state: AppState, action:any) => {
    switch(action.type){
        case ActionType.UPDATE_COUNTRY: 
        return [
                {
                country: {
                    gloalId: action.country.gloalId,
                    id: action.country.id,
                    name: action.country.name
                }
           }
        ]
        break;
        default:
            throw new Error();
        break;
    }
}
const reducers = (state:AppState, action: any) => ({
    country: countryReducer(state, action)

});

  export default reducers