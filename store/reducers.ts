
import {Country} from '../api/interfaces'
import {ActionType} from '../store/types'
type countryState = {
    country: Country
}
export const countryReducer = (state: countryState, action:any) => {
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
        default:
            throw new Error();
    }
}
const mainReducer = (state:countryState, action: any) => ({
    country: countryReducer(state, action)

});

  export default mainReducer