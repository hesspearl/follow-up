import moment from "moment";


const INPUTS_VALUES = "INPUTS_VALUES";
const SPENDS='SPENDS'
const CHOICE = "CHOICE";
const DROP = "DROP";
const OBSERVATION= "OBSERVATION";
const DATE = "DATE";
const SHOW="SHOW";
const SWIPE = "SWIPE";
const CLEAN="CLEAN"

export const init={
    inputValues: {
        productName: "",
        application: "other",
        spend:{
          value:0,
          code:''
        },
        important: {
          value: "high",
          color: "green",
          init:0
        },
        date: moment().format("DD/MM/YYYY"),
        observation: "",
        necessary: {
          value: "yes",
          color: "green",
          init:0
      }
    },
      inputValidation: {
        productName: false,
        application: true,
        spend: false,
        important: {
          value: true,
          color: true,
         
        },
      },
      formIsValid: false,
      show:false,
      swipe:false
    }



export const inputReducer = (state, action) => {
    switch (action.type) {
      case INPUTS_VALUES:
        const updateValues = {
          ...state.inputValues,
          [action.input]: action.value,
        };
        const updateValidity = {
          ...state.inputValidation,
          [action.input]: action.isValid,
        };
  
        let updateFormIsValid = true;
        for (const key in updateValidity)
          updateFormIsValid = updateFormIsValid && updateValidity[key];

         
        return {
            ...state,
          formIsValid: updateFormIsValid,
          inputValues: updateValues,
          inputValidation: 
            updateValidity,
        };
  
        case SPENDS:

        const price= action.value
         
      
  
          const updateSpends = {
            ...state.inputValues,
          spend: {
              value:price ,
              code: action.code,
            },
          };

          const updateValidation={
            ...state.inputValidation,
            spend:action.isValid
          }
          
         
        let updateSpendIsValid=true
        for (const key in updateValidation)
        updateSpendIsValid= updateSpendIsValid&& updateValidation[key]
       
        
        
          return {
            ...state,
            inputValues: updateSpends,
            formIsValid: updateSpendIsValid,
            inputValidation: updateValidation,
          };
      case DROP:
        const updateDrop = {
          ...state.inputValues,
          application: action.value,
        };
        return {
          ...state,
          inputValues: updateDrop,
        };
        case OBSERVATION:
        const updateInput = {
          ...state.inputValues,
          observation: action.value,
        };
        return {
          ...state,
          inputValues: updateInput,
        };
      case CHOICE:
         
      
        const updateChoice = {
          ...state.inputValues,
         [action.name]: {
            value: action.value,
            color: action.color,
          },
        };
        return {
          ...state,
          inputValues: updateChoice,
        };
        case DATE:
            console.log(action.value)
            const updateDate = {
              ...state.inputValues,
              date: action.value,
            };
            return {
                ...state,
              inputValues: updateDate,
            };

            case SHOW:

            return {
                ...state,
                show:action.value
            }

            case SWIPE:
                return {
                    ...state,
                    swipe:action.value
                }
                case CLEAN:
                  return{
                    inputValues: {
                      productName: "",
                      application:{

                        value: "others",
                        avatar: "https://trello-attachments.s3.amazonaws.com/5db8df629e82fa748b5ecf01/5f12220cda1b8281626dd2e5/f82234345b15940f97eebef361f10dc1/others.PNG",
                      },
                      spend:{
                        value:0,
                        code:''
                      },
                      important: {
                        value: "high",
                        color: "green",
                        init:0
                      },
                      date: moment().format("DD/MM/YYYY"),
                      observation: "",
                      necessary: {
                        value: "yes",
                        color: "green",
                        init:0
                    }
                  },
                    inputValidation: {
                      productName: false,
                      application: true,
                      spend: false,
                      important: {
                        value: true,
                        color: true,
                      },
                    },
                    formIsValid: false,
                    show:false,
                    swipe:false

                  }
    }
    return state;
  };


  export const types={
     INPUTS_VALUES : "INPUTS_VALUES",
   CHOICE: "CHOICE",
     DROP : "DROP",
     SHOW : "SHOW",
     SWIPE : "SWIPE",
     DATE: "DATE",
     OBSERVATION: "OBSERVATION",
     SPENDS:'SPENDS',
     CLEAN:"CLEAN"
  }