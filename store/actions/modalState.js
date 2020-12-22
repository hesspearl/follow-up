export const MODAL_VALIDATION='MODAL_VALIDATION'
export const RETURN_VALIDATION='RETURN_VALIDATION'

export const changeValidation =(type, value)=>{
    return{type:MODAL_VALIDATION, input:type,value}
 }

 export const returnValidation =()=>{
    return{type:RETURN_VALIDATION}
 }