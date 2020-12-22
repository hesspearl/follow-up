export const POST_FROM_PAGE_01 = "POST_FROM_PAGE_01";
export const POST_FROM_PAGE_02 = "POST_FROM_PAGE_02";
export const EDIT = "EDIT";
export const CLEAN = "CLEAN";

export const inputsPage1 = (productName, application, spend, important) => {
 return{type : POST_FROM_PAGE_01,
    value : { productName, application, spend, important }}};
;

export const inputsPage2 = (date, observation, necessary) => {

return { type : POST_FROM_PAGE_02,
    value : { date,  observation, necessary}}}

    
export const edit = (value) => {
    
    return { type : EDIT,
        value:value}}

        export const clean = () => {
    
            return { type : CLEAN}}