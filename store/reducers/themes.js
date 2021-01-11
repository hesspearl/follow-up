import { CHANGE_THEME } from "../actions/theme"
import { defaultTheme } from '../../styles/themes'; 


    


export default theme =(state={theme:defaultTheme } , action)=>{

    switch(action.type){

        case CHANGE_THEME:

        return{
            ...state,
            theme:action.value
        }
    }

    return state
}