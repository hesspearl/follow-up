import {MODAL_VALIDATION, RETURN_VALIDATION} from "../actions/modalState"

 const initState={
    openModals:{
      
        productName: false,
        observation: false,
        spend: false,
        date: false,
        Application: false,
    }
    
    }
  
    export default  modalReducer = (state= initState, action) => {
      switch (action.type) {
        case MODAL_VALIDATION:
  
          return{
            
            ...state,
              [action.input]: action.value 
          } 

          case RETURN_VALIDATION:

          return{
            openModals:{
      
              productName: false,
              observation: false,
              spend: false,
              date: false,
              Application: false,
          }
          
          }
        }
  
        return state
      }